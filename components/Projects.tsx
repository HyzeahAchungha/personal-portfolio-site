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
    title: "BigWigPlug",
    description: "Premium wigs crafted to enhance confidence, beauty, and self-expression.",
    details:
      "The Golden Scepter Wigs is a beauty brand dedicated to providing high-quality, stylish wigs for women who value elegance and confidence. Our collections are carefully selected to suit different personalities, lifestyles, and occasions — from everyday wear to special moments. We believe every woman deserves to feel powerful, beautiful, and comfortable in her look. ",
    more: "More about the BigWigPlug:",
    extraDetails:
      "Finding reliable, high-quality wigs can be challenging, especially for women seeking durability, natural appearance, and affordability in one place. Many customers struggle with wigs that lack proper fit, shed easily, or fail to match their personal style. At BigWigPlug, we focus on quality control, customer satisfaction, and styles that celebrate individuality, ensuring our customers feel confident and satisfied with every purchase.",
    fight:
      "To address these challenges, The BigWigPlug offers carefully curated wig collections, clear product descriptions, and customer-focused support. Through our online store and social platforms, we educate customers on wig care, styling tips, and proper maintenance, helping them get the best value and longevity from their wigs while confidently expressing their unique beauty.",
    image: "/first.jpeg",
    gridImage: "/first.jpeg",
    projectUrl: "https://wig-store-8dg6.onrender.com", 
    githubUrl: "https://github.com/HyzeahAchungha/Wig-Store-.git", 
     overlayColor: "from-pink-500/60 to-purple-500/60",
    stats: [
      {
        icon: <Calendar className="h-5 w-5" />,
        label: "Founded",
        value: "2022",
      },
      {
        icon: <Users className="h-5 w-5" />,
        label: "Customers",
        value: "200+",
      },
    
    ],
    animatedShapes: "quaternary",
  },
  {
    title: "Nini Nayah Cakes",
    description:
      "Deliciously crafted cakes for every celebration",
    details:
      "Nini Nayah Cakes is a homegrown cake brand dedicated to creating beautiful, tasty, and affordable cakes for birthdays, weddings, anniversaries, and special moments. Every cake is freshly baked with quality ingredients and customized to match each client’s taste, theme, and occasion—because every celebration deserves something special.",
   image: "/cake.jpeg",
    gridImage: "/cake.jpeg",
    projectUrl: "https://cake-business-1.onrender.com", 
    githubUrl: "https://github.com/HyzeahAchungha/Cake-Business.git", 
    overlayColor: "from-purple-500/60 to-primary/60",
    stats: [
      {
        icon: <Calendar className="h-5 w-5" />,
        label: "Started",
        value: "2025",
      },
      {
        icon: <Users className="h-5 w-5" />,
        label: "Clients",
        value: "200+",
      },
      {
        icon: <MapPin className="h-5 w-5" />,
        label: "Locations",
        value: "Bamenda",
      },
      
    ],
    animatedShapes: "primary",
  },
  {
    title: "Afrobeadie Collection",
    description:
      "Exquisite handcrafted beaded bags that celebrate African artistry and elevate your style.",
    details:
      "At Afrobeadie, we design and create unique beaded bags that combine traditional craftsmanship with modern fashion. Each piece is carefully handcrafted to ensure quality, durability, and a distinctive look that stands out. Our collection caters to women and men who appreciate artistry, culture, and elegance in their accessories.",
     image: "/afro.jpeg",
    gridImage: "/afro.jpeg",
    projectUrl: "https://afrobeadie-1.onrender.com", 
    githubUrl: "https://github.com/HyzeahAchungha/AfroBeadie.git", 
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
    title: "Old Personal Portfolio",
   image: "/old.jpeg",
    gridImage: "/old.jpeg",
    projectUrl: "https://achunghahyzeal.vercel.app", 
    githubUrl: "https://github.com/HyzeahAchungha/Wig-Store-.git", 
    overlayColor: "from-blue-500/60 to-teal-500/60",
    stats: [
      {
        icon: <Calendar className="h-5 w-5" />,
        label: "completed",
        value: "2022 ",
      },
     
      {
        icon: <Award className="h-5 w-5" />,
        label: "Success rate",
        value: "87%",
      },
     
    ],
    animatedShapes: "tertiary",
  },
 
];

export default function Projects() {
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
    <Section id="projects">
      <SectionHeading
        title="projects"
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
                {/* <Button
                  variant="ghost"
                  className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-medium group/btn"
                  onClick={() => openInitiative(index)}
                >
                  Learn More
                  <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                </Button> */}
                <CardFooter className="pt-0 flex gap-3">
  <Button
    variant="ghost"
    className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-medium group/btn"
    onClick={() => openInitiative(index)}
  >
    Learn More
    <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
  </Button>
  
  {/* ADD THESE */}
  {initiative.projectUrl && (
    <Button
      variant="outline"
      size="sm"
      onClick={() => window.open(initiative.projectUrl, '_blank')}
    >
      Visit Site
    </Button>
  )}
  
  {initiative.githubUrl && (
    <Button
      variant="outline"
      size="sm"
      onClick={() => window.open(initiative.githubUrl, '_blank')}
    >
      View Code
    </Button>
  )}
</CardFooter>
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
