"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import Image from "next/image";
import Section from "./section";
import AnimatedBackground from "./animated-background";
import PDFViewer from "./pdf-viewer";
import MagneticButton from "./MagneticButton";
import CountingNumber from "./CountingNumbers";


export default function Hero() {
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  return (
    <Section
      id="home"
      className="pt-20 md:pt-32 pb-16 md:pb-24 relative overflow-hidden"
    >
      <AnimatedBackground variant="hero" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium"
          >
            <Sparkles className="h-4 w-4" />
            Full-Stack Web & Mobile Developer
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary [#06392f]  to-[#ADD8E6] bg-clip-text text-transparent">
                Hyzeal
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-lg text-foreground/70 leading-relaxed max-w-lg"
            >
             Full Stack Web and Mobile Developer driven by a love for crafting seamless digital experiences,
              combining creativity and technical expertise to deliver scalable web and mobile solutions.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <MagneticButton
              variant="cv"
              onClick={() => setIsPdfOpen(true)}
              className="w-fit"
            />
            <MagneticButton
              variant="connect"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView()
              }
              className="w-fit"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex items-center gap-4 text-sm text-foreground/60"
          >
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-primary/20 rounded-full border-2 border-background"></div>
              <div className="w-8 h-8 bg-pink-400/20 rounded-full border-2 border-background"></div>
              <div className="w-8 h-8 bg-blue-400/20 rounded-full border-2 border-background"></div>
            </div>
            <span>
              Trusted by{" "}
              <CountingNumber end={100} startOnView={false} suffix="+" />{" "}
              community members
            </span>
          </motion.div>
        </motion.div>

        {/* Right side - Masonry Grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            {/* RIGHT SIE- IMAGE */}
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.03, zIndex: 10 }}
                className=" rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="">
                  <Image
                    src="/hero.jpeg"
                    alt="hyzeal' portrait"
                    width={800}
                    height={600}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 66vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-transparent to-pink-500/30 mix-blend-overlay" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="flex flex-col items-center gap-2 text-foreground/50"
        >
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.div>

      {/* PDF Viewer */}
      <PDFViewer
        pdfUrl="/document/hyzeal.pdf"
        isOpen={isPdfOpen}
        onClose={() => setIsPdfOpen(false)}
      />
    </Section>
  );
}
