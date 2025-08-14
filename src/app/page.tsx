"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import VantaFog from "@/components/VantaFog";
import { AuroraText } from "@/components/magicui/aurora-text";
import Link from "next/link";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import researchIllustration from "../../public/images/Researcher_Empowers-HCZ_dOug.jpg";
import { CardContent, CardHeader } from "@/components/ui/card";
import { MagicCard } from "@/components/magicui/magic-card";
import profile from "../../public/images/profile.jpg";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
    {
        name: "Rohan Mehta",
        username: "@rohan_consulting",
        body: "Researcher cut our market analysis time by 80%. The structured reports were client-ready without any extra editing.",
    },
    {
        name: "Ananya Iyer",
        username: "@ananya_academic",
        body: "As part of an academic team, we used Researcher to synthesize literature from multiple sources. It saved us weeks of manual reading and summarizing.",
    },
    {
        name: "James Carter",
        username: "@james_exec",
        body: "The briefing reports are gold. I can walk into meetings fully prepared with accurate, up-to-date insights.",
    },
    {
        name: "Priya Sharma",
        username: "@priya_pm",
        body: "Competitive intelligence is now effortless. Researcher identifies trends and gaps we would have easily missed.",
    },
    {
        name: "Daniel Kim",
        username: "@daniel_content",
        body: "I create in-depth articles for tech blogs, and Researcher makes the process smoother by providing citations, charts, and well-organized points.",
    },
    {
        name: "Aisha Khan",
        username: "@aisha_student",
        body: "For my thesis, Researcher was like having a personal research assistant. The clarity and depth in the reports were unmatched.",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    name,
    username,
    body,
}: {
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image
                    className="rounded-full"
                    width="32"
                    height="32"
                    alt=""
                    src={profile}
                />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">
                        {username}
                    </p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

const steps = [
    {
        title: "Step 1: Define Your Research Goal",
        description:
            "Start by specifying your topic, questions, and desired depth — whether it’s market analysis, academic review, or competitive intelligence.",
    },
    {
        title: "Step 2: Gather and Review Sources",
        description:
            "Researcher searches across diverse web sources, proprietary databases, and knowledge repositories to collect relevant information.",
    },
    {
        title: "Step 3: Extract Key Insights",
        description:
            "The AI identifies trends, key findings, themes, and supporting evidence from your collected sources.",
    },
    {
        title: "Step 4: Summarize and Synthesize",
        description:
            "Complex information is distilled into concise summaries, merging insights from multiple datasets into a coherent narrative.",
    },
    {
        title: "Step 5: Structure Your Report",
        description:
            "Get a professionally formatted, sectioned report with inline citations, recommended charts, and tables.",
    },
    {
        title: "Step 6: Collaborate and Refine",
        description:
            "Work with your team to annotate, edit, and finalize the report — with Researcher adapting style and depth for your audience.",
    },
];

export default function Home() {
    const { theme } = useTheme();
    return (
        <main className="mx-auto">
            <VantaFog />
            <section className="mt-20 px-4 md:px-36 flex flex-col justify-center items-center text-center">
                <div className="group mb-5 relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
                    <span
                        className={cn(
                            "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
                        )}
                        style={{
                            WebkitMask:
                                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "destination-out",
                            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            maskComposite: "subtract",
                            WebkitClipPath: "padding-box",
                        }}
                    />
                    📚
                    <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
                    <AnimatedGradientText className="text-sm font-medium">
                        AI-Powered Research & Reporting Assistant
                    </AnimatedGradientText>
                    <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </div>

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-primary mb-6">
                    Research <AuroraText>Smarter & Faster</AuroraText>{" "}
                    with AI-Generated Decision-Ready Reports
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
                    Instantly search, analyze, and summarize diverse sources
                    into a structured, professional report — complete with key
                    findings, citations, and visual recommendations, tailored to
                    your needs.
                </p>

                <div>
                    <Link href="/search">
                        <ShimmerButton className="shadow-2xl">
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                Start My Research
                            </span>
                        </ShimmerButton>
                    </Link>
                </div>
            </section>

            <section className="pt-20 lg:pt-32 pb-10 px-4 md:px-36 mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    How It Works
                    {/* <AuroraText>How It Works</AuroraText> */}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    {steps.map((step, index) => (
                        <MagicCard
                            key={index}
                            gradientColor={
                                theme === "dark" ? "#262626" : "#D9D9D955"
                            }
                            className="rounded-xl px-5 py-4 bg-background shadow-md border border-border min-h-[180px] h-full"
                        >
                            <CardHeader className="p-0">
                                <h3 className="text-lg font-semibold text-primary">
                                    {step.title}
                                </h3>
                            </CardHeader>
                            <CardContent className="p-0 mt-2">
                                <p className="text-muted-foreground text-sm leading-snug">
                                    {step.description}
                                </p>
                            </CardContent>
                        </MagicCard>
                    ))}
                </div>
            </section>

           <section className="flex mt-10 flex-col md:flex-row items-center justify-between px-4 md:px-36 py-12">
  {/* Text Section */}
  <div className="md:w-1/2 text-center md:text-left space-y-4 order-2 md:order-1">
    <h2 className="text-3xl md:text-5xl font-bold text-primary">
      Conduct In-Depth Research & Generate Reports — Powered by AI.
    </h2>
    <p className="text-lg text-muted-foreground">
      Researcher helps you search, analyze, and synthesize information from diverse sources into 
      professional, decision-ready reports — complete with key findings, visual suggestions, and citations.
    </p>
    <Link href="/search">
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Start My Research
        </span>
      </ShimmerButton>
    </Link>
  </div>

  {/* Image Section */}
  <div className="md:w-1/2 mt-10 md:mt-0 order-1 md:order-2 flex justify-center">
    <Image
      src={researchIllustration} // Replace with your research/report generation illustration path
      alt="AI-Powered Research & Reporting"
      className="w-full max-w-md h-96 object-contain"
      width={10}
      height={10}
      unoptimized
    />
  </div>
</section>


            <section className="mx-4 mt-20 md:mx-36">
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {firstRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:20s]">
                        {secondRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                </div>
            </section>

           <section className="px-4 md:px-36 mt-20">
  <Accordion
    type="single"
    collapsible
    className="w-full"
    defaultValue="item-1"
  >
    <h1 className="text-4xl font-bold">FAQ&apos;S</h1>

    <AccordionItem value="item-1">
      <AccordionTrigger>
        1. What is Researcher?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Researcher is an AI-powered platform that helps individuals and teams
          perform thorough research and automatically produce structured,
          decision-ready reports on any subject. It combines real-time web
          search, data analysis, and intelligent summarization to save you
          hours of work.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger>
        2. How does it work?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Simply provide your topic or research question. Researcher searches
          across diverse sources — including web content, academic papers, and
          proprietary datasets — then extracts key findings, synthesizes
          literature, and organizes it into a professional report with
          citations and optional visuals.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger>
        3. Who can use it?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Researcher is perfect for consultants, executives, academic teams,
          product managers, content creators, and students — basically anyone
          who needs accurate, well-structured insights quickly.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-4">
      <AccordionTrigger>
        4. Does it use real-time data?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Yes. Researcher integrates real-time web results, industry databases,
          and other trusted sources, ensuring your reports are built on the
          most current and relevant information available.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-5">
      <AccordionTrigger>
        5. Can it summarize and synthesize complex topics?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Absolutely. Researcher doesn’t just summarize — it identifies key
          themes, compares findings across datasets, and synthesizes them into
          a cohesive, easy-to-understand narrative.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-6">
      <AccordionTrigger>
        6. Does it support visual elements in reports?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Yes. The platform can suggest charts, tables, and infographics to
          help present data and insights more effectively in your reports.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-7">
      <AccordionTrigger>
        7. Can multiple people collaborate on a report?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Yes. Researcher supports collaborative research, allowing teams to
          annotate, edit, and refine reports together in real time.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-8">
      <AccordionTrigger>
        8. Is it only for academic research?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Not at all. Researcher adapts to academic, business, or casual
          contexts. Whether you need a literature review, market analysis, or
          competitive intelligence, it formats the report accordingly.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-9">
      <AccordionTrigger>
        9. Is there a free version?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Core research and summarization features are free to use. Advanced
          capabilities — like custom formatting, deep-dive datasets, and team
          collaboration — may require a paid subscription.
        </p>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</section>

        </main>
    );
}
