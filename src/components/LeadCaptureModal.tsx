import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadCaptureModal = ({ isOpen, onClose }: LeadCaptureModalProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("submit-lead", {
        body: { firstName, lastName, email, phone },
      });

      if (error) {
        console.error("Supabase function error:", error);
        throw error;
      }

      // Check if the response indicates an error from the edge function
      if (data?.error) {
        console.error("=== CRM ERROR DETAILS ===");
        console.error("Error:", data.error);
        console.error("Details:", JSON.stringify(data.details, null, 2));
        console.error("Status Code:", data.statusCode);
        console.error("Pulse Message:", data.pulseMessage);
        
        // Show EXACT error from Pulse CRM to user
        const pulseError = data.pulseMessage || data.details?.message || data.details?.error || "Unknown error";
        toast({
          title: `${data.error}`,
          description: `Pulse says: "${pulseError}"`,
          variant: "destructive",
        });
        return;
      }

      // Only redirect on success (200/201)
      if (data?.success) {
        navigate("/thank-you");
      }
    } catch (error) {
      console.error("=== FRONTEND ERROR ===");
      console.error("Error:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      toast({
        title: "Connection Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal - Glassmorphism */}
      <div className="relative w-full max-w-md bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#ffde59] mb-2">
            Join the Kickstart
          </h2>
          <p className="text-white/70 text-sm md:text-base">
            Enter your details below to get started
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="firstName" className="block text-white/80 text-sm font-medium mb-1.5">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                placeholder="John"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#ffde59]/50 focus:ring-1 focus:ring-[#ffde59]/50 transition"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-white/80 text-sm font-medium mb-1.5">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                placeholder="Smith"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#ffde59]/50 focus:ring-1 focus:ring-[#ffde59]/50 transition"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@email.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#ffde59]/50 focus:ring-1 focus:ring-[#ffde59]/50 transition"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-white/80 text-sm font-medium mb-1.5">
              Mobile Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="+44 7XXX XXXXXX"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#ffde59]/50 focus:ring-1 focus:ring-[#ffde59]/50 transition"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#ffde59] hover:bg-[#ffde59]/90 text-black font-black py-4 px-6 rounded-xl transition uppercase text-base md:text-lg btn-shadow disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </>
            ) : (
              "Get Started Now →"
            )}
          </button>
        </form>

        <p className="text-center text-white/40 text-xs mt-4">
          Your information is secure and will never be shared.
        </p>
      </div>
    </div>
  );
};

export default LeadCaptureModal;
