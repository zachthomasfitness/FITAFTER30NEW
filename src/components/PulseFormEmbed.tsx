import { useEffect, useRef } from "react";

interface PulseFormEmbedProps {
  id: string;
}

/**
 * Pulse CRM Form Embed Component
 * Uses direct DOM manipulation to prevent React from conflicting with the 
 * external form script that modifies the iframe.
 */
const PulseFormEmbed = ({ id }: PulseFormEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any existing content first
    containerRef.current.innerHTML = '';
    
    // Create iframe via DOM to avoid React's virtual DOM conflicts
    const iframe = document.createElement('iframe');
    iframe.src = 'https://api.leadconnectorhq.com/widget/form/7DTFHh8ZmEmWrmVpsktd';
    iframe.id = id;
    iframe.style.cssText = 'width: 100%; height: 462px; border: none; border-radius: 25px;';
    iframe.setAttribute('data-layout', "{'id':'INLINE'}");
    iframe.setAttribute('data-trigger-type', 'alwaysShow');
    iframe.setAttribute('data-trigger-value', '');
    iframe.setAttribute('data-activation-type', 'alwaysActivated');
    iframe.setAttribute('data-activation-value', '');
    iframe.setAttribute('data-deactivation-type', 'neverDeactivate');
    iframe.setAttribute('data-deactivation-value', '');
    iframe.setAttribute('data-form-name', 'Challenge Opt-in');
    iframe.setAttribute('data-height', '462');
    iframe.setAttribute('data-layout-iframe-id', id);
    iframe.setAttribute('data-form-id', '7DTFHh8ZmEmWrmVpsktd');
    iframe.title = 'Challenge Opt-in';
    iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
    
    containerRef.current.appendChild(iframe);
    
    // Cleanup: remove iframe on unmount to prevent memory leaks
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [id]);

  return <div ref={containerRef} className="form-embed-wrapper w-full" />;
};

export default PulseFormEmbed;
