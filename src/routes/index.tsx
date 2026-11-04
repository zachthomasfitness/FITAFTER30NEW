import { createFileRoute } from "@tanstack/react-router";
import {
  BatteryCharging,
  Check,
  Dumbbell,
  MessageCircle,
  Pizza,
  Play,
  ShieldCheck,
  X,
} from "lucide-react";

import { CtaButton } from "@/components/landing/CtaButton";
import { LoopDiagram } from "@/components/landing/LoopDiagram";
import { SocialProof } from "@/components/landing/SocialProof";
import {
  Section,
  Eyebrow,
  SectionTitle,
  Rule,
  Curve,
  Card,
  Pill,
  Mark,
} from "@/components/landing/Section";
import { pillars, stack, forYou, notForYou, transformations } from "@/components/landing/data";

const pillarIcons = [Dumbbell, Pizza, BatteryCharging, MessageCircle];

const title = "Fit After 30 Blueprint";
const description =
  "For over 30's who feel exhausted, overworked and out of shape. Lose up to 10kg in 6 weeks, regain your energy and feel like the man again. Without giving up occasional takeaways or date nights.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Fit After 30 Blueprint",
          description,
          offers: { "@type": "Offer", price: "299", priceCurrency: "GBP" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative isolate overflow-hidden pt-10 sm:pt-14">
        <video
          aria-hidden
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="pointer-events-none absolute inset-x-0 top-0 -z-30 h-[640px] w-full object-cover sm:h-[600px]"
        >
          <source src="/video/hero-intro.mp4" type="video/mp4" />
        </video>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-[648px] sm:h-[608px]"
          style={{
            background:
              "linear-gradient(to bottom, color-mix(in srgb, var(--background) 50%, transparent) 0%, var(--background) 63%, var(--background) 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] opacity-30 blur-3xl"
          style={{
            background: "radial-gradient(ellipse 55% 50% at 50% 0%, var(--brand), transparent 70%)",
          }}
        />
        <div className="fade-up mx-auto w-full max-w-2xl px-5 text-center">
          <SocialProof className="mb-8 sm:mb-10" />
          <h1 className="font-editorial text-5xl leading-[1.05] font-bold text-foreground sm:text-6xl">
            Fit After 30
            <br />
            <span className="relative inline-block px-2">
              <span className="absolute inset-0 -z-10 rounded-md bg-brand" />
              <em className="italic text-brand-foreground">Blueprint</em>
            </span>
          </h1>
          <p className="font-alt mx-auto mt-6 max-w-lg text-base leading-relaxed tracking-tight text-foreground sm:text-xl">
            Lose up to 10kg in 6 weeks, regain your energy and feel like{" "}
            <em className="font-editorial font-bold text-brand italic">the man</em> again. Without
            giving up occasional takeaways or date nights.
          </p>

          {/* VSL placeholder */}
          <div className="mt-8 aspect-video w-full overflow-hidden rounded-3xl bg-surface ring-1 ring-white/10">
            <div className="flex h-full w-full flex-col items-center justify-center gap-3">
              <div className="flex size-16 items-center justify-center rounded-full bg-brand/90 sm:size-20">
                <Play
                  className="size-7 fill-brand-foreground text-brand-foreground sm:size-8"
                  aria-hidden
                />
              </div>
              <p className="text-sm text-muted-foreground">Video coming soon</p>
            </div>
          </div>

          <CtaButton label="Start Your 6 Weeks" className="mt-10" align="center" />

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {["6 Week Programme", "Money-Back Guarantee", "Weekly 1:1 Check-Ins"].map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Check className="size-4 shrink-0 text-brand" aria-hidden />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Transformations — continuously auto-scrolling; gradient marks the dark-to-light seam */}
        <div className="fade-up group mt-10 overflow-hidden bg-[linear-gradient(to_bottom,var(--background)_50%,#f5f0e8_50%)] py-10 sm:mt-12 sm:py-12">
          <div className="marquee flex w-max gap-4 px-5 group-hover:[animation-play-state:paused]">
            {[...transformations, ...transformations].map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="relative aspect-square w-[56vw] shrink-0 overflow-hidden rounded-2xl bg-surface ring-1 ring-white/5 sm:w-[240px]"
              >
                <img
                  src={t.src}
                  alt={t.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent px-3 pt-8 pb-3">
                  <p className="text-sm font-semibold text-[#f5f0e8]">{t.name}</p>
                  <p className="text-xs font-semibold whitespace-nowrap text-[#f5f0e8]">
                    {t.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM — light */}
      <div className="theme-light bg-background text-foreground">
        <Section className="pt-14 pb-14 sm:pt-20 sm:pb-16">
          <Eyebrow>The Problem</Eyebrow>
          <SectionTitle>
            Fitness took a <Mark>backseat</Mark>
          </SectionTitle>
          <div className="mt-6 space-y-4 text-base leading-[1.65] text-muted-foreground sm:text-[1.0625rem]">
            <p>
              When you enter your 30's, life gets more serious. Work stress, bills and pressure get
              bigger, and your health and fitness takes a back seat.
            </p>
            <p>
              As a result, you let things slip. Year after year, the weight piles on. By the time
              you finish work you're exhausted, you fall asleep for 20 minutes on the sofa, and by
              the time you wake up you're not going to the gym. You're going to the chippy.
            </p>
          </div>

          <Card className="theme-dark mt-8 rounded-[1.75rem] bg-surface px-3 py-5 text-foreground sm:px-6">
            <p className="text-center text-[0.7rem] font-semibold tracking-[0.28em] text-muted-foreground uppercase">
              The exhaustion loop
            </p>
            <div className="mt-3">
              <LoopDiagram />
            </div>
          </Card>

          <p className="mx-auto mt-8 max-w-xl text-center text-base leading-relaxed text-foreground sm:text-lg">
            This is the exact exhaustion loop the men I work with go through. But just like every
            bad decision fuelled the next, better decisions build positive momentum - and that
            momentum will fuel the man you're going to become.
          </p>
        </Section>
        <Curve to="ink" />
      </div>

      {/* PILLARS — dark */}
      <div className="theme-dark bg-background text-foreground">
        <Section>
          <Eyebrow>The Method</Eyebrow>
          <SectionTitle>
            Fit After 30 Makes It <Mark>Simple</Mark>
          </SectionTitle>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {pillars.map((p, i) => {
              const Icon = pillarIcons[i];
              const withPhoto = p.title === "The Efficiency Method";
              return (
                <Card
                  key={p.title}
                  className={`relative min-h-[220px] p-5 hover:-translate-y-1 sm:p-6 ${
                    withPhoto ? "isolate overflow-hidden" : ""
                  }`}
                >
                  {withPhoto ? (
                    <>
                      <img
                        src="/images/efficiency-method-bg.jpg"
                        alt=""
                        aria-hidden
                        loading="lazy"
                        className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover object-[75%_60%]"
                      />
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-background/95 via-background/75 to-background/30"
                      />
                    </>
                  ) : null}
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-2xl bg-brand">
                      <Icon className="size-4 text-brand-foreground" aria-hidden />
                    </span>
                    <span className="text-[0.65rem] font-semibold tracking-[0.24em] text-muted-foreground uppercase">
                      {p.label}
                    </span>
                  </div>
                  <h3 className="font-editorial mt-3 text-lg font-medium tracking-[-0.01em] text-foreground sm:text-xl">
                    {p.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-[1.55] text-muted-foreground ${
                      withPhoto ? "text-balance" : ""
                    }`}
                  >
                    {p.body}
                  </p>
                </Card>
              );
            })}
          </div>
        </Section>
        <Curve to="cream" flip />
      </div>

      {/* GUARANTEE — light */}
      <div className="theme-light bg-background text-foreground">
        <Section>
          <div className="rounded-[1.75rem] border-2 border-brand-strong/40 bg-surface p-5 text-center sm:p-6">
            <span className="mx-auto flex size-9 items-center justify-center rounded-2xl bg-brand">
              <ShieldCheck className="size-4 text-brand-foreground" aria-hidden />
            </span>
            <h3 className="font-editorial mt-3 text-lg font-medium tracking-[-0.01em] text-foreground sm:text-xl">
              The Guarantee
            </h3>
            <div className="mx-auto mt-2 max-w-lg space-y-3 text-sm leading-[1.55] text-muted-foreground">
              <p>
                You're right to be skeptical, you've probably been burned before by 'fitness
                influencers' who spout nonsense for views. So here's the deal.
              </p>
              <p className="font-editorial text-base leading-relaxed text-foreground italic">
                If you sign up and aren't happy with your results after 6 weeks, I'll send every
                penny back.
              </p>
              <p>
                I'm in the business of changing lives. If I can't at least get you on that
                trajectory, I don't want your money.
              </p>
              <p>
                And I'm confident enough in what I do that this decision should be a no-brainer.
              </p>
            </div>
            <CtaButton label="Start Your 6 Weeks" className="mt-5" align="center" />
          </div>
        </Section>
        <Curve to="ink" />
      </div>

      {/* VALUE STACK — dark */}
      <div className="theme-dark bg-background text-foreground">
        <Section>
          <Eyebrow>The Value Stack</Eyebrow>
          <SectionTitle>
            What you get inside the <Mark>Blueprint</Mark>
          </SectionTitle>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-border bg-surface">
            <p className="border-b border-border py-3 text-center text-[0.7rem] font-semibold tracking-[0.28em] text-muted-foreground uppercase">
              Everything included
            </p>
            <ul className="p-6 sm:p-7">
              {stack.map((item, i) => (
                <li key={item.text}>
                  {i > 0 ? <Rule /> : null}
                  <div className="flex items-start gap-3.5 py-3.5">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand">
                      <Check className="size-3.5 text-brand-foreground" aria-hidden />
                    </span>
                    <span className="leading-relaxed text-foreground">
                      {item.bonus ? (
                        <>
                          <span className="mr-2 rounded-full bg-brand px-2 py-0.5 align-middle text-[0.65rem] font-bold tracking-[0.14em] text-brand-foreground uppercase">
                            Bonus
                          </span>
                          {item.text.replace("Bonus: ", "")}
                        </>
                      ) : (
                        item.text
                      )}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t border-border bg-background px-6 py-8 text-center">
              <p className="font-editorial text-4xl leading-none tracking-[-0.02em] text-foreground sm:text-5xl">
                <span className="mr-4 align-middle text-2xl text-muted-foreground/70 line-through sm:text-3xl">
                  £399
                </span>
                <span className="text-brand">£299</span>
              </p>
              <p className="mt-3 text-[0.7rem] font-semibold tracking-[0.28em] text-muted-foreground uppercase">
                For the full 6 weeks
              </p>
              <p className="mx-auto mt-5 max-w-md leading-[1.75] text-muted-foreground">
                Most online coaches charge £200-£300 a month for less than half of this. £299 is the
                founding price. When the first group's results are in, it goes to £399.
              </p>
              <CtaButton label="Start Your 6 Weeks" className="mt-8" align="center" />
            </div>
          </div>
        </Section>
        <Curve to="cream" flip />
      </div>

      {/* WHO THIS IS FOR — light */}
      <div className="theme-light bg-background text-foreground">
        <Section>
          <SectionTitle>
            Is this <Mark>for you?</Mark>
          </SectionTitle>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            <Card>
              <Pill className="bg-brand text-brand-foreground border-transparent">
                <Check className="size-3.5" aria-hidden /> Yes, if you
              </Pill>
              <ul className="mt-6 space-y-4">
                {forYou.map((line) => (
                  <li key={line} className="flex gap-3 leading-relaxed text-foreground">
                    <Check className="mt-1 size-[1.05rem] shrink-0 text-brand-strong" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <Pill className="bg-background">
                <X className="size-3.5" aria-hidden /> Not, if you
              </Pill>
              <ul className="mt-6 space-y-4">
                {notForYou.map((line) => (
                  <li key={line} className="flex gap-3 leading-relaxed text-muted-foreground">
                    <X className="mt-1 size-[1.05rem] shrink-0 text-muted-foreground" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Section>
        <Curve to="ink" />
      </div>

      {/* FINAL CTA — dark bookend, matching the hero */}
      <div className="theme-dark relative isolate overflow-hidden bg-background text-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[480px] opacity-25 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse 55% 50% at 50% 100%, var(--brand), transparent 70%)",
          }}
        />
        <Section className="text-center">
          <SectionTitle>Your Move</SectionTitle>
          <div className="mx-auto mt-8 max-w-lg space-y-6 text-[1.0625rem] leading-[1.75] text-muted-foreground sm:text-lg">
            <p>
              You've spent months, maybe years, trying to make this work. Yet you're less fit and
              less confident than ever. The fad diets don't work. Figuring it out as you go doesn't
              work.
            </p>
            <p className="font-editorial text-xl leading-relaxed text-foreground italic sm:text-2xl">
              This is the fast track. The what to do, when to do it, and the accountability to make
              sure you do do it.
            </p>
            <p>
              £299 is the founding price. Once the first group's results are in, it goes to £399.
            </p>
          </div>
          <CtaButton
            label="Start Your 6 Weeks"
            className="mt-10"
            align="center"
            note="Work with me for 6 weeks, and if you're not happy with your progress, I'll give you every penny back."
          />
        </Section>

        <footer className="border-t border-border px-6 py-10 text-center text-[0.7rem] font-semibold tracking-[0.28em] text-muted-foreground uppercase">
          6 Week Coaching Programme
        </footer>
      </div>
    </main>
  );
}
