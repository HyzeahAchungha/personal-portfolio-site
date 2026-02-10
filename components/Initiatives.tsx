"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Calendar,
  Users,
  MapPin,
  Award,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Section from "./section";
import SectionHeading from "./section-heading";
import AnimatedShapes from "./animated-shapes";
import SlidePanel from "./slide-panel";

const initiatives = [
  {
    title: "Data Girl Technologies",
description: "Tutoring and mentorship in full-stack web development",
details:
  "As a full-stack web development tutor at Data Girl Technologies, I train learners in building web applications from start to finish. My work focuses on guiding students through practical, hands-on learning, helping them understand both frontend and backend concepts while building real projects.",
more: "More about my role at Data Girl Technologies:",
extraDetails:
  "Many learners, especially women transitioning into tech, face challenges such as limited access to structured learning, mentorship, and real-world practice opportunities. These gaps often make it difficult to gain confidence and clarity when learning full-stack development.",
fight:
  "To address this, I teach web development using a project-based approach, covering core technologies across the stack and encouraging problem-solving, collaboration, and continuous learning. My goal is to help learners build solid foundations, gain confidence in their skills, and become capable of developing and maintaining real-world web applications.",
    image: "/data.jpeg",
    gridImage: "/mamfe1.jpeg",
    impact: "4000+ Students",
    category: "Leadership",
    overlayColor: "from-amber-500/60 to-orange-500/60",
    stats: [
      {
        icon: <Calendar className="h-5 w-5" />,
        label: "Founded",
        value: "2019",
      },
      {
        icon: <Users className="h-5 w-5" />,
        label: "Impacted",
        value: "4000+",
      },
      {
        icon: <MapPin className="h-5 w-5" />,
        label: "Cohorts",
        value: "9",
      },
      {
        icon: <Award className="h-5 w-5" />,
        label: "Projects",
        value: "15+ completed",
      },
    ],
    animatedShapes: "quaternary",
  },
  {
    title: "STEM Reach Project",
    description:
      "Bringing STEM education to underserved communities across West Africa",
    details:
    " Through Data Girl Technologies, as a tutor with STEM Reach, I deliver basic computer and STEM education to learners across four different rural areas. My work focuses on introducing students—many of whom are using a computer for the first time—to essential digital skills in a simple, practical, and engaging way.",
    image: "/Stem Reach.jpg",
    gridImage: "/tiko1.jpeg",
    impact: "200+ students reached",
    category: "Education",
    overlayColor: "from-purple-500/60 to-primary/60",
    stats: [
      {
        icon: <Calendar className="h-5 w-5" />,
        label: "Started",
        value: "2024-2025",
      },
      {
        icon: <Users className="h-5 w-5" />,
        label: "Students",
        value: "200+",
      },
      {
        icon: <MapPin className="h-5 w-5" />,
        label: "Locations",
        value: "4 Rural communities",
      },
     
    ],
    animatedShapes: "primary",
  },
  {
    title: "WiSTEM Conference",
    description:
      "Annual gathering of women leaders and innovators in STEM fields",
    details:
      "During the WiSTEM Conference, I spearheaded the AI Speed Build session, where 15 teams of five participants had two hours to design and build solutions using AI.The session was highly practical and fast-paced—similar to vibe coding—with teams collaborating, experimenting, and shipping ideas in real time. The focus was on hands-on problem-solving and learning by doing rather than theory, which created a high-energy and engaging experience for participants",
    image: "/WiSTEM Pink.svg",
    gridImage: "/wistem.jpg",
    impact: "500+ women empowered",
    category: "Empowerment",
    overlayColor: "from-pink-500/60 to-purple-500/60",
    stats: [
      {
        icon: <Calendar className="h-5 w-5" />,
        label: "Annual",
        value: "Since 2025",
      },
      {
        icon: <Users className="h-5 w-5" />,
        label: "Attendees",
        value: "500+",
      },
      {
        icon: <MapPin className="h-5 w-5" />,
        label: "Venue",
        value: "Buea, Cameroon",
      },
      {
        icon: <Award className="h-5 w-5" />,
        label: "Speakers",
        value: "10+ experts",
      },
    ],
    animatedShapes: "secondary",
  },
  {
    title: "Empower Her",
    ddescription: "Empowering rural women to build and grow sustainable businesses",
details:
  "Empower Her is a women-focused empowerment project designed to equip 50 women from rural communities with the knowledge, skills, and resources needed to start and grow successful businesses. The initiative provides practical entrepreneurship training, hands-on mentorship, and access to essential tools that support economic independence and long-term growth.",
    image: "/empower.jpg",
    gridImage: "/mamfe1.jpeg",
    impact: "50+ Businesses",
    category: "Development",
    overlayColor: "from-blue-500/60 to-teal-500/60",
    stats: [
      {
        icon: <Calendar className="h-5 w-5" />,
        label: "Started",
        value: "2024 ",
      },
      {
        icon: <Users className="h-5 w-5" />,
        label: "Businesses",
        value: "3-month cycle",
      },
      {
        icon: <Award className="h-5 w-5" />,
        label: "Success rate",
        value: "99%",
      },
      {
        icon: <MapPin className="h-5 w-5" />,
        label: "Reach",
        value: "Rural Communities",
      },
    ],
    animatedShapes: "tertiary",
  },
 
];

export default function Initiatives() {
  const [selectedInitiative, setSelectedInitiative] = useState<number | null>(
    null
  );

  const openInitiative = (index: number) => {
    setSelectedInitiative(index);
  };

  const closeInitiative = () => {
    setSelectedInitiative(null);
  };

  return (
    <Section id="initiatives">
      <SectionHeading
        title="Initiatives & Impact"
        subtitle="Projects and programs making a difference in communities across Africa"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {initiatives.map((initiative, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="group h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-background to-muted/20">
              <div className="relative overflow-hidden">
                <div className="aspect-[16/10] relative">
                  <Image
                    src={initiative.image || "/placeholder.svg"}
                    alt={initiative.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-white text-sm font-medium rounded-full">
                    {initiative.category}
                  </div>

                  {/* Impact badge */}
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-white/90 text-primary text-sm font-medium rounded-full">
                    {initiative.impact}
                  </div>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {initiative.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {initiative.description}
                </CardDescription>
              </CardHeader>

              <CardFooter className="pt-0">
                <Button
                  variant="ghost"
                  className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-medium group/btn"
                  onClick={() => openInitiative(index)}
                >
                  Learn More
                  <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Slide-in Panel */}
      {selectedInitiative !== null && (
        <SlidePanel
          isOpen={selectedInitiative !== null}
          onClose={closeInitiative}
        >
          <div className="relative">
            {/* Animated shapes in background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <AnimatedShapes
                variant={
                  selectedInitiative !== null
                    ? (initiatives[selectedInitiative].animatedShapes as
                        | "primary"
                        | "secondary"
                        | "tertiary"
                        | "quaternary")
                    : "primary"
                }
              />
            </div>

            <div className="relative z-10">
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">
                  {initiatives[selectedInitiative].title}
                </h2>
                <p className="text-foreground/70 text-lg">
                  {initiatives[selectedInitiative].description}
                </p>
              </div>

              {/* Grid Image with Overlay */}
              <div className="relative rounded-2xl overflow-hidden mb-8">
                <div className="aspect-[16/9]">
                  <Image
                    src={
                      initiatives[selectedInitiative].gridImage ||
                      "/placeholder.svg"
                    }
                    alt={initiatives[selectedInitiative].title}
                    width={800}
                    height={50}
                    className="object-cover w-full"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${initiatives[selectedInitiative].overlayColor}`}
                    style={{ mixBlendMode: "multiply" }}
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {initiatives[selectedInitiative].stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
                    className="bg-primary/5 rounded-xl p-4 text-center"
                  >
                    <div className="text-primary mb-2 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-sm text-foreground/70">
                      {stat.label}
                    </div>
                    <div className="font-semibold">{stat.value}</div>
                  </motion.div>
                ))}
              </div>

              {/* Details */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">About this Initiative</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  {initiatives[selectedInitiative].details}
                </p>
                <p className="italic font-normal">
                  {initiatives[selectedInitiative].more}
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  {initiatives[selectedInitiative].extraDetails}
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  {initiatives[selectedInitiative].fight}
                </p>
              </div>
            </div>
          </div>
        </SlidePanel>
      )}
    </Section>
  );
}
