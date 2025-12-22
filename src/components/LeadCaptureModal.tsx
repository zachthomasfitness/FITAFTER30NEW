import { useEffect } from "react";
import { X } from "lucide-react";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadCaptureModal = ({ isOpen, onClose }: LeadCaptureModalProps) => {
  // Load the form embed script when modal opens
  useEffect(() => {
    if (isOpen) {
      // Check if script is already loaded
      const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://link.msgsndr.com/js/form_embed.js';
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [isOpen]);

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
          className="absolute top-4 right-4 z-10 text-white/60 hover:text-white transition"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#ffde59] mb-2">
            Join the Kickstart
          </h2>
          <p className="text-white/70 text-sm md:text-base">
            Enter your details below to secure your spot
          </p>
        </div>

        {/* Embedded Pulse Form */}
        <div className="pulse-form-container">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/7DTFHh8ZmEmWrmVpsktd"
            style={{
              width: '100%',
              height: '400px',
              border: 'none',
              borderRadius: '16px'
            }}
            id="inline-7DTFHh8ZmEmWrmVpsktd"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Challenge Opt-in"
            data-height="undefined"
            data-layout-iframe-id="inline-7DTFHh8ZmEmWrmVpsktd"
            data-form-id="7DTFHh8ZmEmWrmVpsktd"
            title="Challenge Opt-in"
          />
        </div>

        <p className="text-center text-white/40 text-xs mt-4">
          Your information is secure and will never be shared.
        </p>
      </div>

      {/* Custom styles for the embedded form container */}
      <style>{`
        .pulse-form-container {
          background: transparent;
          border-radius: 16px;
          overflow: hidden;
        }
        .pulse-form-container iframe {
          background: transparent !important;
        }
      `}</style>
    </div>
  );
};

export default LeadCaptureModal;
