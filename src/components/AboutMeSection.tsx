import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import zachHeadshot from "@/assets/zach-headshot.png";

const AboutMeSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <Avatar className="w-40 h-40 md:w-52 md:h-52 mx-auto mb-8 border-4 border-primary/20">
          <AvatarImage src={zachHeadshot} alt="Zach Thomas" />
          <AvatarFallback className="text-3xl font-bold bg-primary/10 text-primary">ZT</AvatarFallback>
        </Avatar>

        <h2 className="text-2xl md:text-3xl font-extrabold text-heading mb-6">
          Why I Built This
        </h2>

        <div className="text-muted-foreground text-sm md:text-base leading-relaxed space-y-4 text-left">
          <p>
            I'm Zach Thomas. I've been coaching for over 10 years, and I've been having the same conversation every day for years:
          </p>
          <p className="italic text-heading/80 font-medium">
            "I know what to do. I just can't stick to it."
          </p>
          <p>
            Here's what I realised: the problem isn't you. It's the extreme plans and over-complication of what you actually need to do.
          </p>
          <p>
            Most fitness programs are designed for 25-year-olds with no job, no kids, and nothing else going on. But they don't work for real life, and every day people.
          </p>
          <p>
            So I built a system that does. One that fits around your job, your family, and your actual life. That's what the Habit Kickstart teaches.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
