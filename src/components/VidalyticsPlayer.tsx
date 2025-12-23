import { useEffect, useRef } from "react";

const VidalyticsPlayer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create and inject the Vidalytics script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      (function (v, i, d, a, l, y, t, c, s) {
        y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}var vl='Loader',vli=v[y][vl],vsl=v[c][vl + 'Script'],vlf=v[c][vl + 'Loaded'],ve='Embed';
        if (!vsl){vsl=function(u,cb){
          if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;
          if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState=="complete"){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}
          i.getElementsByTagName("head")[0].appendChild(s);
        };}
        vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){var vec=v[d][ve];t=new vec();t.run(a);});});
      })(window, document, 'Vidalytics', 'vidalytics_embed_N0Qisu7BeIIcJtXT', 'https://fast.vidalytics.com/embeds/22WzvFw2/N0Qisu7BeIIcJtXT/');
    `;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <div
        id="vidalytics_embed_N0Qisu7BeIIcJtXT"
        style={{
          width: "100%",
          position: "relative",
          paddingTop: "56.25%",
        }}
      />
    </div>
  );
};

export default VidalyticsPlayer;
