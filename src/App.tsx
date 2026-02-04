import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HabitKickstart from "./pages/HabitKickstart";
import HabitKickstartThankYou from "./pages/HabitKickstartThankYou";
import SixWeeks from "./pages/SixWeeks";
import SixWeeksThankYou from "./pages/SixWeeksThankYou";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Load form embed script once at app level to prevent React DOM conflicts
const useFormEmbedScript = () => {
  useEffect(() => {
    const scriptId = 'pulse-form-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
    // Don't remove on cleanup - script should persist
  }, []);
};

const AppContent = () => {
  useFormEmbedScript();
  
  return (
    <>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Routes */}
          <Route path="/habitkickstart" element={<HabitKickstart />} />
          <Route path="/habitkickstart-thankyou" element={<HabitKickstartThankYou />} />
          <Route path="/sixweeks" element={<SixWeeks />} />
          <Route path="/sixweeks-thankyou" element={<SixWeeksThankYou />} />
          
          {/* Legacy redirects */}
          <Route path="/" element={<Navigate to="/habitkickstart" replace />} />
          <Route path="/thank-you" element={<Navigate to="/habitkickstart-thankyou" replace />} />
          <Route path="/six-week-habit-stack" element={<Navigate to="/sixweeks" replace />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
