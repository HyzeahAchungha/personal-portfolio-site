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
    title: "The Golden Scepter",
    description: "Community initiative focused on Teen leadership development",
    details:
      "As the founder of The Golden Scepter, I've created a comprehensive personal development program for Teenagers aged 13-19. The initiative combines theoretical learning with practical skill development projects, equipping participants with the skills, confidence, and network they need to become effective change-makers in their communities. ",
    more: "More about the Golden Scepter:",
    extraDetails:
      "One of the most pressing challenges in my community is the escalating mental health crisis among teenagers. According to the World Health Organization, one in seven adolescents aged 10–19 experiences a mental health condition, yet these remain largely unrecognized and untreated, especially in low- and middle-income countries. In sub-Saharan Africa, where adolescents constitute about 23% of the population, the burden is particularly heavy due to limited access to mental health services and the stigma surrounding mental health issues. This is more pressing in my community, where teenagers are greatly affected by the aftermath of a socio-political crisis that has been persistent for close to 10 years now.",
    fight:
      "To fight this, I've leveraged my skills as a communications professional to create and disseminate relatable, stigma-free content on mental health through social media platforms like TikTok and YouTube. Through my initiative, The Golden Scepter, I share stories, educational content, and coping strategies tailored for teenagers, aimed at fostering awareness and building wholeness among teenagers in my community.",
    image: "/golde-scepter-bg-purple.JPG",
    gridImage: "/pre-prof.jpg",
    impact: "100+ young leaders",
    category: "Leadership",
    overlayColor: "from-amber-500/60 to-orange-500/60",
    stats: [
      {
        icon: <Calendar className="h-5 w-5" />,
        label: "Founded",
        value: "2022",
      },
      {
        icon: <Users className="h-5 w-5" />,
        label: "Impacted",
        value: "200+",
      },
      {
        icon: <MapPin className="h-5 w-5" />,
        label: "Communities",
        value: "15+",
      },
      {
        icon: <Award className="h-5 w-5" />,
        label: "Projects",
        value: "5+ completed",
      },
    ],
    animatedShapes: "quaternary",
  },
  {
    title: "STEM Reach Project",
    description:
      "Bringing STEM education to underserved communities across West Africa",
    details:
      "Through Data Girl Technologies, the STEM Reach Project aims to bridge the educational gap by providing hands-on STEM learning experiences to students in underserved communities. Through workshops, mentorship, and resource distribution, we've trained 200 women in rural areas, inspiring the next generation of female tech talents.",
    image: "/Stem Reach.jpg",
    gridImage: "/STEMReachImg.jpg",
    impact: "200+ students reached",
    category: "Education",
    overlayColor: "from-purple-500/60 to-primary/60",
    stats: [
      {
        icon: <Calendar className="h-5 w-5" />,
        label: "Started",
        value: "2024",
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
      {
        icon: <Award className="h-5 w-5" />,
        label: "Recognition",
        value: "Ban Ki-moon Award",
      },
    ],
    animatedShapes: "primary",
  },
  {
    title: "WiSTEM Conference",
    description:
      "Annual gathering of women leaders and innovators in STEM fields",
    details:
      "As PR Lead for the WiSTEM Conference, I coordinate media relations, content strategy, and stakeholder communications for this premier event that brings together over 500 women in STEM annually. The conference features keynote speeches, workshops, and networking opportunities designed to empower women in traditionally male-dominated fields.",
    image: "/WiSTEM Pink.svg",
    gridImage: "/conference.jpg",
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
    title: "Mentorship Matters Africa",
    description: "Connecting young professionals with established leaders",
    details:
      "Mentorship Matters Africa is a platform that pairs emerging talents with experienced professionals across various industries. The program includes monthly mentoring sessions, skill-building workshops, and career development resources. Since its inception, we've facilitated over 50 successful mentoring relationships.",
    image: "/MMA.jpg",
    gridImage: "/wistem-group.jpg",
    impact: "200+ mentoring pairs",
    category: "Development",
    overlayColor: "from-blue-500/60 to-teal-500/60",
    stats: [
      {
        icon: <Calendar className="h-5 w-5" />,
        label: "Started",
        value: "2025 ",
      },
      {
        icon: <Users className="h-5 w-5" />,
        label: "Mentorship",
        value: "3-month cycle",
      },
      {
        icon: <Award className="h-5 w-5" />,
        label: "Success rate",
        value: "87%",
      },
      {
        icon: <MapPin className="h-5 w-5" />,
        label: "Reach",
        value: "Pan-African",
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
