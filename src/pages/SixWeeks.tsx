import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Loader2 } from "lucide-react";
import henryTransformation from "@/assets/henry-stack-transformation.png";
import cianTransformation from "@/assets/cian-stack-transformation.jpg";
import tomTransformation from "@/assets/tom-stack-transformation.jpg";
import eisaTransformation from "@/assets/eisa-stack-transformation.jpg";
import immyTransformation from "@/assets/immy-transformation.png";
import callumTransformation from "@/assets/callum-transformation.jpg";
import hollieTransformation from "@/assets/hollie-transformation.jpg";
import jonTransformation from "@/assets/jon-stack-transformation.jpg";
import lawsonTransformation from "@/assets/lawson-stack-transformation.jpg";
import sarahTransformation from "@/assets/sarah-stack-transformation.png";
import jagTransformation from "@/assets/jag-stack-transformation.jpg";
import edTransformation from "@/assets/ed-stack-transformation.jpg";
import appScreenshot from "@/assets/app-screenshot.png";
import appScreenshot2 from "@/assets/app-screenshot-2.png";
import zachHeadshot from "@/assets/zach-headshot.png";

const PAYMENT_URL = "https://link.fastpaydirect.com/payment-link/69845a993533382a86c60462";

const SixWeeks = () => {
  const [iframeLoading, setIframeLoading] = useState(true);

  const transformations = [
    { name: "Hollie", result: "-23lbs", image: hollieTransformation, story: "Had never stepped foot in a gym before" },
    { name: "Callum", result: "+10kg Muscle", image: callumTransformation, story: "Couldn't get over 65kg for years, but now sits at 80kg" },
    { name: "Lawson", result: "-18lbs", image: lawsonTransformation, story: "Gained the energy to power through long days on his feet" },
    { name: "Immy", result: "-20lbs", image: immyTransformation, story: "Hectic schedule running her own company" },
    { name: "Cian", result: "-26lbs", image: cianTransformation, story: "Stopped training daily and followed a regimented plan" },
    { name: "Ed", result: "-52lbs", image: edTransformation, story: "Lost weight 52lbs and transformed his confidence" },
    { name: "Sarah", result: "Total Transformation", image: sarahTransformation, story: "From complete beginner to fitness lover" },
    { name: "Henry", result: "-19lbs", image: henryTransformation, story: "Still gets to enjoy a few drinks at the weekend" },
    { name: "Jon", result: "-43lbs", image: jonTransformation, story: "Lost 43lbs to regain his confidence" },
    { name: "Jag", result: "+15lbs Muscle", image: jagTransformation, story: "Gained 15lbs of muscle whilst running his own business" },
    { name: "Tom", result: "-24lbs", image: tomTransformation, story: "Feels great in his work shirts again" },
    { name: "Eisa", result: "-93lbs", image: eisaTransformation, story: "Changed his life and found a new passion in the gym" },
  ];

  const appFeatures = [
    {
      number: "01",
      title: "Structured Training Plan",
      description: "No more guessing what to do in the gym. Every session, you know exactly what exercises to do, how many sets, how many reps, and when to increase the weight. Learn progressive overload so you're actually getting stronger and building muscle — not just going through the motions.",
    },
    {
      number: "02",
      title: "Flexible Nutrition Framework",
      description: "Lose fat consistently without extreme restrictions. Learn when and how to fit in meals out and takeaways without derailing everything. No cutting out carbs. No bland chicken and broccoli. Just a sustainable approach that actually works long-term.",
    },
    {
      number: "03",
      title: "Weekly 60-Minute Group Coaching Calls",
      description: "Live coaching every week. Adjustments when you plateau. Accountability when life gets messy. In-depth breakdowns of the topics that leave you uncertain. This isn't a pre-recorded course you'll never finish. It's real coaching.",
    },
    {
      number: "04",
      title: "WhatsApp Support Throughout",
      description: "Questions answered when you need them. Support when life's chaotic and you're tempted to give up. I'm in your corner making sure you don't fall off.",
    },
  ];

  const faqItems = [
    {
      q: "What if I can't make the weekly calls?",
      a: "No problem. Every call is recorded. You'll get access to the replay and can ask questions via WhatsApp.",
    },
    {
      q: "I've never followed a structured plan before. Will this work for me?",
      a: "Yes. That's exactly who this is for. I'll walk you through everything step-by-step. You just need to show up and execute.",
    },
    {
      q: "What if I'm still inconsistent and keep falling off plans?",
      a: "This is designed to fix that. The system is built around 2-3 sessions per week (not 6), flexible eating (not restriction), and a 'Floor' for when life gets messy. It's designed for real life, not Instagram.",
    },
    {
      q: "What if I don't lose 5lbs in 6 weeks?",
      a: "Then I work with you for free until you do. Simple as that.",
    },
    {
      q: "Do I need a gym membership?",
      a: "Yes. You'll need access to a gym with weights for the training plan.",
    },
  ];

  const duplicatedTransformations = [...transformations, ...transformations];

  const scrollToCheckout = () => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });

  return <>
    <Helmet>
      <title>The 6-Week Accelerator | Zach Thomas Coaching</title>
      <meta name="description" content="6 weeks to drop 5-10lbs of fat and build unstoppable consistency — so you can finally feel like yourself again." />
      <meta property="og:title" content="The 6-Week Accelerator" />
      <meta property="og:description" content="6 weeks to drop 5-10lbs of fat and build unstoppable consistency — so you can finally feel like yourself again." />
      <meta property="og:image" content="https://habit-kickstart.lovable.app/og-sixweeks.png" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="The 6-Week Accelerator" />
      <meta name="twitter:description" content="6 weeks to drop 5-10lbs of fat and build unstoppable consistency — so you can finally feel like yourself again." />
      <meta name="twitter:image" content="https://habit-kickstart.lovable.app/og-sixweeks.png" />
    </Helmet>

    <main className="min-h-screen">

      {/* HERO */}
      <section className="pt-14 md:pt-24 px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-[26px] md:text-5xl lg:text-6xl font-black text-foreground mb-4 md:mb-6 leading-[1.15] md:leading-[1.1] tracking-tight">
            6 weeks to drop 5-10lbs of fat and build unstoppable consistency — so you can finally feel like yourself again, without training every day or giving up the foods you love.
          </h1>
          <p className="text-foreground/60 text-base md:text-xl text-center max-w-3xl mx-auto mb-2 px-2">
            The 6-Week Accelerator is for people who are done guessing, done winging it, and done starting over every Monday. See real results with a plan designed to work around your real life.
          </p>
        </div>
      </section>

      {/* CAROUSEL */}
      <section className="overflow-hidden mt-10 md:mt-16 py-2 md:py-4">
        <div className="flex animate-marquee hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
          {duplicatedTransformations.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-[200px] md:w-[240px] mx-2 md:mx-3">
              <div className="glass-card overflow-hidden">
                <div className="aspect-square overflow-hidden bg-foreground/5">
                  {item.image
                    ? <img src={item.image} alt={`${item.name}'s transformation`} className="w-full h-full object-cover" />
                    : <div className="w-full h-full flex items-center justify-center text-foreground/30 text-xs">[Photo]</div>
                  }
                </div>
                <div className="p-3 md:p-4 text-center h-[100px] md:h-[110px] flex flex-col justify-center overflow-hidden">
                  <p className="text-primary font-black text-base md:text-lg line-clamp-2">{item.name}: {item.result}</p>
                  <p className="text-foreground/60 text-xs md:text-sm mt-1 line-clamp-2">"{item.story}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-4 md:py-6 px-4">
        <div className="max-w-xl mx-auto text-center space-y-3">
          <button
            onClick={scrollToCheckout}
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full btn-shadow transition-all duration-300 hover:scale-105 w-full md:w-auto"
          >
            Join The Accelerator Today <ArrowRight className="h-5 w-5" />
          </button>
          <p className="pt-2 text-[10px] font-semibold text-slate-500 text-center">🔒 SECURE CHECKOUT VIA FASTPAY</p>
        </div>
      </section>

      {/* OPENING SECTION */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 md:p-12 space-y-5">
            <h2 className="text-2xl md:text-4xl font-extrabold text-foreground leading-tight text-center">
              You already know you should<br />"eat better and move more".
            </h2>
            <div className="space-y-4 text-foreground/70 text-base md:text-lg leading-relaxed">
              <p>The problem has never been a lack of knowledge.</p>
              <p>The problem is you can't stay consistent.</p>
              <p>You start strong, full of motivation. The gym goes well, you're eating clean.</p>
              <p>But then life strikes again. Work stress, kids causing chaos, mum's birthday...</p>
              <p>So you miss a couple of sessions, have a bad meal, and by the end of the week you've fallen off again.</p>
              <p className="text-foreground font-semibold italic">"I'll start again Monday", "May as well write this weekend off" — Sound familiar?</p>
              <p>The reality is this is a super common cycle. You don't just need to be more disciplined. You need to stop following plans designed for 25-year-olds with no job, no kids, and no life outside the gym.</p>
              <p>Train 6 days a week. Cut out carbs. Eat bland food. Give up everything you enjoy.</p>
              <p>Of course you can't stick to that. Most people can't. But that doesn't mean you can't get results.</p>
              <p>What you need is a system that actually anticipates life getting messy.</p>
              <p className="text-foreground font-semibold">And that's exactly what The Accelerator is.</p>
              <p>Just 2-3 structured gym sessions per week (not 6). Flexible eating that fits your life (not bland food). A plan for when things go wrong (because they always do).</p>
              <p>And me in your corner every single day. Navigating the family dinners, late work nights, and unexpected social plans with you.</p>
              <p className="text-foreground font-semibold">This is how you finally stop the Monday restart cycle and actually get somewhere.</p>
            </div>
            <p className="text-foreground font-bold text-base md:text-lg text-right">— Zach Thomas</p>
          </div>
        </div>
      </section>

      {/* MID CTA */}
      <section className="py-6 md:py-8 px-4">
        <div className="text-center">
          <button
            onClick={scrollToCheckout}
            className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary bg-transparent hover:bg-primary/10 font-bold text-sm md:text-base px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            YES, I'M READY — JOIN THE ACCELERATOR →
          </button>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
            {/* Phone Mockup */}
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative w-80 h-[480px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-72 bg-[#C4622D]/20 rounded-full blur-3xl"></div>
                </div>
                <div className="absolute left-[-8px] top-4 w-52 h-[440px] bg-black rounded-[2.5rem] border-[3px] border-foreground/30 p-1.5 shadow-2xl -rotate-[10deg] origin-center">
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full z-10"></div>
                  <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden">
                    <img src={appScreenshot2} alt="The Accelerator App Workout View" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                <div className="absolute right-[-8px] top-4 w-52 h-[440px] bg-black rounded-[2.5rem] border-[3px] border-foreground/30 p-1.5 shadow-2xl z-10">
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full z-10"></div>
                  <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden">
                    <img src={appScreenshot} alt="The Accelerator App" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
              </div>
            </div>
            {/* Features */}
            <div className="space-y-6 text-center lg:text-left order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                What you get<br />
                <span className="text-primary">inside The Accelerator</span>
              </h2>
              <div className="space-y-6">
                {appFeatures.map(feature => (
                  <div key={feature.number} className="flex gap-4 justify-center lg:justify-start">
                    <span className="text-primary font-black text-xl flex-shrink-0">{feature.number}</span>
                    <div className="text-left">
                      <h3 className="text-foreground font-bold text-lg uppercase">{feature.title}</h3>
                      <p className="text-foreground/60">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY I BUILT THIS */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="flex-shrink-0">
                <img src={zachHeadshot} alt="Zach Thomas" className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover" />
              </div>
              <div className="space-y-4 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Why I Built This System</h2>
                <div className="space-y-3 text-foreground/70 text-base md:text-lg leading-relaxed">
                  <p>I've been coaching for 10 years. I've worked with hundreds of people just like you — over-30s with jobs, kids, and lives outside the gym.</p>
                  <p>And here's what I've learned: most plans are built for people who don't exist.</p>
                  <p>They assume you have unlimited time. They assume you can train every day. They assume you can live on chicken and broccoli.</p>
                  <p>But that's not real life.</p>
                  <p>So I built The Accelerator for the people who've been stuck in the Monday restart cycle for years. The ones who know what to do but can't stick to it. The ones who need a system that works when life gets messy.</p>
                  <p className="text-foreground font-semibold">That's what this is.</p>
                </div>
                <p className="text-foreground font-bold text-right">— Zach Thomas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES THIS DIFFERENT */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 md:p-12 space-y-5">
            <h2 className="text-2xl md:text-4xl font-extrabold text-foreground leading-tight text-center">
              What Makes This Different
            </h2>
            <div className="space-y-4 text-foreground/70 text-base md:text-lg leading-relaxed">
              <p>Most programs give you a plan and disappear.</p>
              <p>You get a PDF. Maybe some videos. And when you hit a plateau or life gets chaotic, you're on your own.</p>
              <p className="text-foreground font-semibold">The Accelerator is different.</p>
              <p>You get me in your corner every single day. Live coaching calls every week. WhatsApp support when you need it. Adjustments when you plateau. Accountability when you're tempted to quit.</p>
              <p>This isn't a course you buy and never finish. It's real coaching.</p>
              <p>And it's built for real life — not Instagram. 2-3 sessions per week (not 6). Flexible eating (not restriction). A plan for when things go wrong (because they always do).</p>
              <p className="text-foreground font-semibold">You're not doing this alone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* IMMY TESTIMONIAL */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 md:p-12 space-y-6 border-l-4 border-primary">
            <p className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
              "After 3 years unable to lose a single pound, I finally broke the cycle"
            </p>
            <div className="space-y-4 text-foreground/70 text-base md:text-lg leading-relaxed">
              <p>Immy had tried everything.</p>
              <p>She'd been stuck in the same pattern for 3 years. Start strong Monday. Fall off by Friday. Repeat.</p>
              <p>She knew her biggest problem was life getting in the way. Work stress. Family commitments. Never enough time.</p>
              <p>And she thought the only way to get results was extreme dieting, lots of running, and 6-day gym splits. But every time she tried, she'd last a week. Maybe two. Then fall off and blame herself.</p>
              <p className="text-foreground italic font-semibold">"I just don't have the discipline."</p>
              <p>Then we changed her approach.</p>
              <p>2-3 gym sessions per week. A "Floor" for bad weeks. Habits that fit around her actual life. No extreme restrictions. No living in the gym. Just a system that worked even when life got messy.</p>
              <p className="text-foreground font-bold">The result?</p>
              <p>After 3 years unable to lose a single pound, Immy lost over 20lbs in 2025. She got her energy back. Started playing hockey again. Felt like herself. And she didn't have to wait for life to calm down. She just got stupidly consistent with the most important habits.</p>
              <p>All whilst living her normal busy life.</p>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <img src={immyTransformation} alt="Immy's transformation" className="w-14 h-14 rounded-full object-cover object-top flex-shrink-0" />
              <p className="text-foreground font-bold italic">"I finally feel like myself again. I didn't think this was possible." — Immy</p>
            </div>
          </div>
        </div>
      </section>

      {/* MID CTA */}
      <section className="py-6 md:py-8 px-4">
        <div className="text-center">
          <button
            onClick={scrollToCheckout}
            className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary bg-transparent hover:bg-primary/10 font-bold text-sm md:text-base px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            YES, I'M READY — JOIN THE ACCELERATOR →
          </button>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-8 md:py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8 md:p-12 text-center space-y-4 border-2 border-[#C4622D] rounded-3xl">
            <h3 className="text-foreground font-bold text-2xl md:text-3xl">The 5LB Guarantee</h3>
            <p className="text-foreground/70 text-base md:text-lg">
              If you don't lose at least 5lbs in 6 weeks, I work with you for free until you do.
            </p>
            <p className="text-foreground font-semibold">That's how confident I am that this works.</p>
          </div>
        </div>
      </section>

      {/* WHERE DO YOU WANT TO BE */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 md:p-12 space-y-5">
            <h2 className="text-2xl md:text-4xl font-extrabold text-foreground leading-tight text-center">
              Where Do You Want To Be<br />6 Weeks From Now?
            </h2>
            <div className="space-y-3 text-foreground/70 text-base md:text-lg leading-relaxed">
              <p>Another Monday morning telling yourself "this time will be different"?</p>
              <p>Still wearing the same baggy clothes that make you feel self-conscious?</p>
              <p>Still avoiding photos because you hate how you look?</p>
              <p className="text-foreground font-semibold pt-2">Or do you want something different?</p>
              <p>You want to look in the mirror and actually see the difference.</p>
              <p>You want to feel confident in your clothes again.</p>
              <p>You want the kind of energy that fills you with positivity instead of draining you by 4pm.</p>
              <p>You want to feel like the old you — the one you remember.</p>
              <p className="text-foreground font-semibold pt-2">That's what the next 6 weeks are for.</p>
              <p>Not just staying consistent. Actually transforming.</p>
              <p>If you're ready to stop spinning your wheels and start getting real results, join here:</p>
            </div>
            <div className="text-center pt-2">
              <button
                onClick={scrollToCheckout}
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full btn-shadow transition-all duration-300 hover:scale-105 w-full md:w-auto"
              >
                JOIN THE 6-WEEK ACCELERATOR <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTMENT */}
      <section className="py-8 md:py-12 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">The Investment</h2>
          <div className="glass-card p-8 md:p-10 space-y-4 text-left">
            <p className="text-center text-foreground/70 text-base md:text-lg">
              <span className="font-black text-foreground text-2xl">£149 for 6 weeks.</span>
              <br />That's less than £25 per week for:
            </p>
            <ul className="space-y-3 pt-2">
              {[
                "A complete training plan with built-in progression",
                "A flexible nutrition framework that fits your life",
                "6 live weekly coaching calls",
                "Unlimited WhatsApp support",
                "A guarantee that you'll get results",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/70 text-base md:text-lg">
                  <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-center text-foreground font-semibold pt-2">You won't find better value anywhere else. I guarantee it.</p>
          </div>
          <div className="space-y-2">
            <p className="text-foreground/50 text-lg">Retail Price: <span className="line-through">£199</span></p>
            <p className="font-black text-4xl md:text-6xl uppercase">
              <span className="text-foreground">Your Price: </span>
              <span className="text-[#C4622D]">£149</span>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">Common Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="glass-card p-6 md:p-8 space-y-2">
                <h3 className="text-foreground font-bold text-base md:text-lg">{item.q}</h3>
                <p className="text-foreground/70 text-sm md:text-base leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA + CHECKOUT */}
      <section className="py-8 md:py-16 px-4 pb-20 md:pb-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-4 mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-foreground leading-tight">
              You've been stuck in the same cycle<br />for too long.
            </h2>
            <p className="text-foreground/70 text-base md:text-lg leading-relaxed">Starting. Falling off. Starting again Monday.</p>
            <p className="text-foreground/70 text-base md:text-lg leading-relaxed">This is your chance to break that cycle.</p>
            <p className="text-foreground font-semibold text-base md:text-lg">
              6 weeks. Structured training. Flexible nutrition. Live coaching. Real support.
            </p>
          </div>

          {/* Embedded Checkout */}
          <div id="checkout" className="mt-10 scroll-mt-8">
            <div className="relative w-full overflow-hidden md:mb-5 max-h-[1250px] md:max-h-none" style={{ minHeight: '880px', background: '#000000' }}>
              {iframeLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  <p className="text-[11px] font-semibold text-foreground/40 uppercase tracking-wider">
                    🔒 Loading Secure Checkout…
                  </p>
                </div>
              )}
              <iframe
                src={PAYMENT_URL}
                title="Secure Checkout"
                className="w-full h-[1250px] md:h-[880px]"
                scrolling="no"
                style={{ border: 'none', background: 'transparent', colorScheme: 'light' }}
                onLoad={() => setIframeLoading(false)}
              />
            </div>
            <p className="pt-3 text-[10px] font-semibold text-slate-500 text-center">
              🔒 SECURE SSL ENCRYPTED CHECKOUT
            </p>
          </div>

          <p className="text-foreground/40 text-sm text-center pt-4">© 2026 Zach Thomas Coaching</p>
        </div>
      </section>

    </main>
  </>;
};

export default SixWeeks;
