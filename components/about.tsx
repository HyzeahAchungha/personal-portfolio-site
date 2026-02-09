"use client";

import { motion } from "framer-motion";
import { Award,  Users, Zap, Star,Terminal} from "lucide-react";
import Section from "./section";
import SectionHeading from "./section-heading";
import FloatingPathsBg from "./floating-paths-bg";

const achievements = [
  {
    icon: <Terminal className="h-8 w-8" />,
    title: " Cameroon International Tech Summit Hackathon (2024)",
    description:
      "Participated in the prestigious Cameroon International Tech Summit Hackathon, where our team placed in the Top 5 at the regional level and advanced to compete at the national level among over 70 teams. ",
    color: "from-[#00a650]   to-[#06392f]  ",
  },

  {
    icon: <Award className="h-8 w-8" />,
    title: "Lead Educator  STEM Reach Project (2024–2025)",
    description:
      "Led training programs across four underserved communities in the Southwest region of Cameroon, equipping and empowering over 200 young women with practical technology skills.",
    color: "from-yellow-400 to-orange-500",
  },

  {
    icon: <Users className="h-8 w-8" />,
    title: "Organizing Team Member  WiSTEM Conference(2024-2025)",
    description:
      "Contributed to the planning, coordination, and successful execution of the Women in STEM Conference supporting women across Africa.",
    color: "from-pink-400 to-red-500",
  },

  {
    icon: <Zap className="h-8 w-8" />,
    title: "Tech Mentor at DataGirl Technologies",
    description:
      "Mentoring and training women in tech, helping over 200 students build skills in programming and digital tools",
    color: "from-green-400 to-[#06392f]",
  },
];

const stats = [
  { number: "200+", label: "Students Impacted" },
  { number: "3", label: "Major Initiatives" },
  { number: "3", label: "Mentoring Relationships" },
  { number: "200+", label: "Conference Attendees" },
];
export default function About() {
    return (
      <Section
        id="about"
        className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background"
        
      >
        {/* Floating Paths Background */}
        <FloatingPathsBg />
  
        {/* Content */}
        <div className="relative z-10">
          <SectionHeading
            title="About Me"
            subtitle="I’m a Full Stack Web and Mobile Developer passionate about crafting seamless digital experiences. I blend creativity with technical expertise to build scalable web and mobile solutions. Beyond coding, I empower women in tech through mentorship and community initiatives."
          />
  
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center relative"
              >
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl" />
                <div className="relative bg-background/60 dark:bg-background/40 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-foreground/70">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Story */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-6 text-lg leading-relaxed">
                <div className="relative">
                  <div className="absolute inset-0 bg-background/40 dark:bg-background/20 backdrop-blur-sm rounded-2xl" />
                  <p className="relative p-6 text-foreground/80">
                    As a versatile Full Stack Web and Mobile Developer, I blend technical expertise with creative problem-solving to deliver seamless digital experiences across web and mobile platforms. My expertise spans coding, UI/UX design, and mentoring women in tech through community initiatives.
                  </p>
                </div>
  
                <div className="relative">
                  <div className="absolute inset-0 bg-background/40 dark:bg-background/20 backdrop-blur-sm rounded-2xl" />
                  <p className="relative p-6 text-foreground/80">
                  I&apos;m passionate about using tech and mentorship to create meaningful impact, especially in STEM education and  women&apos;s  empowerment. Through my initiatives, I’ve supported hundreds of learners across Africa, fostering growth in underserved communities.   </p>
                </div>
  
                <div className="relative">
                  <div className="absolute inset-0 bg-background/40 dark:bg-background/20 backdrop-blur-sm rounded-2xl" />
                  <p className="relative p-6 text-foreground/80">
                    With experience in full stack development and tech mentorship, I approach every project holistically, creating solutions that are both
                     user-friendly and impactful for a wide range of audiences  </p>
                </div>
              </div>
  
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl" />
                <div className="relative flex items-center gap-4 p-6 bg-background/60 dark:bg-background/40 backdrop-blur-sm rounded-2xl border border-primary/20">
                  <Star className="h-8 w-8 text-primary" />
                  <div>
                    <div className="font-semibold text-lg">Mission</div>
                    <div className="text-foreground/70">
                     Empowering communities through technology, mentorship, and leadership development.
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
  
            {/* Right side - Achievements */}
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative overflow-hidden"
                >
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  
                  <div className="relative bg-background/60 dark:bg-background/40 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} text-white shadow-lg`}>
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {achievement.title}
                        </h3>
                        <p className="text-foreground/70  leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    )
  }
