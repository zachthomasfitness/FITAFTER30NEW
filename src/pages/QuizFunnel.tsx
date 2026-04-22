import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Loader2 } from "lucide-react";

const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/FmSt47hINB4PxwmdJ5Ik/webhook-trigger/06fbd633-b937-4ddc-b9c7-4913a3841d9d";
const BOOKING_LINK = "[INSERT BOOKING LINK]";

const questions = [
  {
    question: "When you look in the mirror, what's the first thing you notice?",
    answers: [
      "My belly — it's the first thing I see",
      "My face — double chin, puffy cheeks, not how I used to look",
      "I've lost muscle — my arms are skinny but I still look soft",
      "I just look and feel fat if I'm honest",
    ],
  },
  {
    question: "How long have you been unhappy with what you see?",
    answers: [
      "A few months — it's crept up on me recently",
      "A year or two — it's been gradual",
      "Longer than I care to admit",
      "It comes and goes — I'll get in shape then slip back again",
    ],
  },
  {
    question:
      "Have you ever been in decent shape before — even if it feels like a long time ago?",
    answers: [
      "Yeah — I was in good shape in my late teens and twenties but it feels like a lifetime ago",
      "I've had periods where I was happy with how I looked but it never lasted",
      "Honestly no — I've always struggled with it",
      "I was in good shape not that long ago — just can't get back there",
    ],
  },
  {
    question:
      "When you've tried to get back in shape before, what does the plan usually look like?",
    answers: [
      "Gym every day, eating as clean as possible — full overhaul",
      "Three or four times a week and a few subtle changes to my diet",
      "I never really have a plan — I just wing it and see what happens",
      "I skip the gym mostly — I'll go for runs or do cardio instead",
    ],
  },
  {
    question: "When you start this plan, how long before it falls apart?",
    answers: [
      "A few days — I can't even get going properly",
      "A week or two — I'm flying then something gets in the way",
      "A month or so — I make decent progress then lose momentum",
      "It varies — sometimes longer, sometimes shorter but it always does eventually",
    ],
  },
  {
    question: "What usually gets in the way when you're on a good run?",
    answers: [
      "Work gets mental and the gym gets dropped first",
      "I get ill or pick up a niggle and never get back into it",
      "Life gets in the way — kids, family, just general chaos",
      "I burn out — I go too hard too soon and run out of steam",
    ],
  },
  {
    question: "If you have a bad day or two, what happens next?",
    answers: [
      "I write the week off and start again Monday",
      "I push through and get back on it the next day",
      "I tell myself I'll reset next month or after the holidays",
      "One bad day turns into a bad week without me even realising",
    ],
  },
  {
    question: "On a typical weekday afternoon, how are you feeling?",
    answers: [
      "Shattered — I'm running on empty by three or four o'clock",
      "Up and down — some days are fine, others I'm hanging",
      "Wired but exhausted — caffeine's keeping me going",
      "Fine energy wise — it's everything else that's the problem",
    ],
  },
  {
    question: "Imagine you've nailed this — what does life look like?",
    answers: [
      "Shirts fit properly, stomach's flat, I actually like what I see in the mirror",
      "I've got energy again — no more crashing by four o'clock",
      "I feel confident again — at work, socially, just in myself generally",
      "All of the above honestly",
    ],
  },
  {
    question:
      "When it comes to actually making this stick, what do you think's been missing?",
    answers: [
      "A realistic plan that fits around my actual life",
      "Someone to keep me accountable — I know what to do, I just don't do it",
      "More discipline — I just need to commit and stop making excuses",
      "Probably a bit of everything — but I don't really know where to start",
    ],
  },
];

const TOTAL_QUESTIONS = questions.length;

type Step = "intro" | "quiz" | "capture" | "results";

const QuizFunnel = () => {
  const [step, setStep] = useState<Step>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const progress = ((currentQuestion) / TOTAL_QUESTIONS) * 100;

  const handleAnswer = (index: number) => {
    setSelected(index);
    const newAnswers = [...answers, index];
    setAnswers(newAnswers);

    setTimeout(() => {
      setSelected(null);
      if (currentQuestion + 1 < TOTAL_QUESTIONS) {
        setCurrentQuestion((q) => q + 1);
      } else {
        setStep("capture");
      }
    }, 350);
  };

  const handleCapture = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError("Please fill in both fields.");
      return;
    }
    setError("");
    setSubmitting(true);

    const payload = {
      name: name.trim(),
      email: email.trim(),
      quiz_answers: answers.map((answerIndex, questionIndex) => ({
        question: questions[questionIndex].question,
        answer: questions[questionIndex].answers[answerIndex],
      })),
      source: "belly-fat-quiz",
      submitted_at: new Date().toISOString(),
    };

    try {
      await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(payload),
      });
    } catch {
      // Silent fail — still show results
    }

    setSubmitting(false);
    setStep("results");
  };

  return (
    <>
      <Helmet>
        <title>Belly Fat Quiz — Find Out Why You Can't Shift It</title>
        <meta
          name="description"
          content="Take the 2 minute quiz to find out why you can't shift belly fat — no matter how many times you've tried."
        />
      </Helmet>

      <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col">
        {/* Header */}
        <div className="px-5 pt-6 pb-4 flex items-center justify-between max-w-lg mx-auto w-full">
          <span className="text-sm font-medium tracking-wide text-white/50 uppercase">
            Body Fat Quiz
          </span>
          {step === "quiz" && (
            <span className="text-sm font-medium text-white/50">
              {currentQuestion + 1} / {TOTAL_QUESTIONS}
            </span>
          )}
        </div>

        {/* Progress bar — only during quiz */}
        {step === "quiz" && (
          <div className="px-5 max-w-lg mx-auto w-full">
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#f97316] rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center px-5 py-8 max-w-lg mx-auto w-full">
          {step === "intro" && (
            <IntroStep onStart={() => setStep("quiz")} />
          )}

          {step === "quiz" && (
            <QuizStep
              question={questions[currentQuestion]}
              questionNumber={currentQuestion + 1}
              selected={selected}
              onAnswer={handleAnswer}
            />
          )}

          {step === "capture" && (
            <CaptureStep
              name={name}
              email={email}
              error={error}
              submitting={submitting}
              onNameChange={setName}
              onEmailChange={setEmail}
              onSubmit={handleCapture}
            />
          )}

          {step === "results" && <ResultsStep />}
        </div>
      </div>
    </>
  );
};

/* ─── Intro Step ────────────────────────────────────────────────────────── */

const IntroStep = ({ onStart }: { onStart: () => void }) => (
  <div className="flex flex-col gap-8">
    <div className="flex flex-col gap-5">
      <div className="inline-block bg-[#f97316]/20 text-[#f97316] text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full w-fit">
        2 minute quiz
      </div>
      <h1 className="text-3xl font-bold leading-tight tracking-tight">
        Find out why you can't shift the belly fat — no matter how hard you try.
      </h1>
      <p className="text-white/60 text-[15px] leading-relaxed">
        10 quick questions. No fluff. Just an honest look at what's actually been getting in your way.
      </p>
    </div>

    <button
      onClick={onStart}
      className="w-full bg-[#f97316] text-white font-bold text-[16px] py-4 rounded-xl flex items-center justify-center active:scale-[0.98] transition-all duration-150"
    >
      Take the quiz →
    </button>

    <p className="text-white/30 text-xs text-center">
      Takes less than 2 minutes
    </p>
  </div>
);

/* ─── Quiz Step ─────────────────────────────────────────────────────────── */

interface QuizStepProps {
  question: { question: string; answers: string[] };
  questionNumber: number;
  selected: number | null;
  onAnswer: (index: number) => void;
}

const QuizStep = ({ question, selected, onAnswer }: QuizStepProps) => (
  <div className="flex flex-col gap-6">
    <h2 className="text-2xl font-bold leading-snug tracking-tight">
      {question.question}
    </h2>
    <div className="flex flex-col gap-3">
      {question.answers.map((answer, i) => {
        const isSelected = selected === i;
        return (
          <button
            key={i}
            onClick={() => onAnswer(i)}
            disabled={selected !== null}
            className={`
              w-full text-left px-5 py-4 rounded-xl border text-[15px] font-medium leading-snug
              transition-all duration-200 active:scale-[0.98]
              ${
                isSelected
                  ? "bg-[#f97316] border-[#f97316] text-white"
                  : "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20"
              }
            `}
          >
            {answer}
          </button>
        );
      })}
    </div>
  </div>
);

/* ─── Lead Capture Step ──────────────────────────────────────────────────── */

interface CaptureStepProps {
  name: string;
  email: string;
  error: string;
  submitting: boolean;
  onNameChange: (v: string) => void;
  onEmailChange: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const CaptureStep = ({
  name,
  email,
  error,
  submitting,
  onNameChange,
  onEmailChange,
  onSubmit,
}: CaptureStepProps) => (
  <div className="flex flex-col gap-7">
    <div className="flex flex-col gap-3">
      <div className="inline-block bg-[#f97316]/20 text-[#f97316] text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full w-fit">
        Almost there
      </div>
      <h2 className="text-2xl font-bold leading-snug tracking-tight">
        Where should we send your results?
      </h2>
      <p className="text-white/60 text-[15px] leading-relaxed">
        Enter your details below to see exactly why you're struggling — and what
        to do about it.
      </p>
    </div>

    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Your first name"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-[15px] placeholder:text-white/30 focus:outline-none focus:border-[#f97316] transition-colors"
      />
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-[15px] placeholder:text-white/30 focus:outline-none focus:border-[#f97316] transition-colors"
      />

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#f97316] text-white font-bold text-[16px] py-4 rounded-xl mt-1 flex items-center justify-center gap-2 active:scale-[0.98] transition-all duration-150 disabled:opacity-70"
      >
        {submitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            One sec...
          </>
        ) : (
          "See my results →"
        )}
      </button>

      <p className="text-white/30 text-xs text-center leading-relaxed">
        No spam. No nonsense. We'll only send you stuff that's actually useful.
      </p>
    </form>
  </div>
);

/* ─── Results Step ───────────────────────────────────────────────────────── */

const ResultsStep = () => (
  <div className="flex flex-col gap-8">
    <div className="flex flex-col gap-4">
      <div className="inline-block bg-[#f97316]/20 text-[#f97316] text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full w-fit">
        Your results
      </div>
      <h2 className="text-2xl font-bold leading-snug tracking-tight">
        Here's what your answers tell us
      </h2>
    </div>

    {/* Placeholder result content */}
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
      <p className="text-white/70 text-[15px] leading-relaxed">
        [Results copy placeholder — Zach will fill this in.]
      </p>
      <p className="text-white/70 text-[15px] leading-relaxed">
        [Additional context and explanation placeholder.]
      </p>
      <p className="text-white/70 text-[15px] leading-relaxed">
        [Call to action setup copy placeholder.]
      </p>
    </div>

    <a
      href={BOOKING_LINK}
      className="w-full bg-[#f97316] text-white font-bold text-[16px] py-4 rounded-xl flex items-center justify-center active:scale-[0.98] transition-all duration-150"
    >
      Book your free call →
    </a>

    <p className="text-white/30 text-xs text-center leading-relaxed">
      Spots are limited. Book before they're gone.
    </p>
  </div>
);

export default QuizFunnel;
