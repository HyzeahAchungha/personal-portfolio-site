"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import { Gi3dStairs } from "react-icons/gi";

import { HiMiniFunnel } from "react-icons/hi2";

import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiFigma,
  SiNodedotjs,
  SiTypescript,
  SiWordpress,
  SiExpress,
} from "react-icons/si";
import Section from "./section";
import SectionHeading from "./section-heading";
import AnimatedBackground from "./animated-background";

const tools = [
  {
    name: "JavaScript",
    icon: <SiJavascript className="h-8 w-8" />,
    description:
      "Core programming language for building interactive web applications.",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "React JS",
    icon: <SiReact className="h-8 w-8" />,
    description:
      "Modern frontend library for creating fast, dynamic user interfaces.",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "React Native",
    icon: <SiReact className="h-8 w-8" />,
    description:
      "Framework for building high-performance mobile apps for Android and iOS.",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Next Js",
    icon: <SiNextdotjs className="h-8 w-8" />,
    description:
      "Full-stack React framework for server-side rendering and scalable apps.",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="h-8 w-8" />,
    description:
      "Typed JavaScript that ensures cleaner, safer, and scalable code.",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Node Js",
    icon: <SiNodedotjs className="h-8 w-8" />,
    description:
      "Backend JavaScript runtime for building fast, scalable server applications.",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Express",
    icon: <SiExpress className="h-8 w-8" />,
    description:
      "Lightweight backend framework for building REST APIs and server logic.",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "WordPress",
    icon: <SiWordpress className="h-8 w-8" />,
    description:
      "Website development and CMS customization for blogs and businesses.",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Ai Automation",
    icon: <Bot className="h-8 w-8" />,
    description:
      "Building AI-powered experiences, automation, and smart digital solutions.",
    color: "from-purple-500 to-pink-500",
  },
  
];

export default function Tools() {
  return (
    <Section
      id="tools"
      className="relative overflow-hidden bg-gradient-to-br from-muted/20 via-background to-primary/5"
    >
      <AnimatedBackground variant="tools" />

      <SectionHeading
        title="Tools & Platforms"
        subtitle="Technologies I leverage to build interactive, high-performance mobile applications that engage users."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative"
          >
            <div className="relative overflow-hidden bg-background/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border hover:border-primary/20 transition-all duration-300">
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
              />

              {/* Icon container */}
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${tool.color} text-white shadow-lg mb-6`}
              >
                {tool.icon}
              </motion.div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {tool.description}
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary/20 rounded-full group-hover:bg-primary/40 transition-colors" />
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-primary/30 rounded-full group-hover:bg-primary/60 transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional skills section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 text-center"
      >
        <div className="inline-flex flex-wrap gap-3 justify-center">
          {[
            "Full-Stack Web Development",
            "Mobile App Development",
            "UI/UX Prototyping (Figma)",
            "STEM Education & Training",
            "Sales Funnel & WordPress Development",
          ].map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
              className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
