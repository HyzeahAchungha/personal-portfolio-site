"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MessageSquare, Linkedin, Send, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Section from "./section"
import SectionHeading from "./section-heading"
import AnimatedBackground from "./animated-background"

const contactMethods = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    value: "hyzeala28@gmail.com",
    href: "mailto:hyzeala28@gmail.com",
    description: "Drop me a line anytime",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Phone",
    value: "+237 *** 471 601",
    href: "tel:+237678471601",
    description: "Call for urgent matters",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "WhatsApp",
    value: "Quick Message",
    href: "https://wa.me/678471601",
    description: "Instant messaging",
    color: "from-green-400 to-green-600",
  },
  {
    icon: <Linkedin className="h-6 w-6" />,
    title: "LinkedIn",
    value: "Professional Network",
    href: "https://www.linkedin.com/in/hyzeah-achungha-2b6253239/",
    description: "Let's connect professionally",
    color: "from-blue-600 to-blue-900",
  },
]

export default function Contact() {
  return (
    <Section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-muted/20"
    >
      <AnimatedBackground variant="contact" />

      <SectionHeading
        title="Let's Create Something Amazing Together"
        subtitle="Ready to collaborate? Reach out for partnerships, speaking engagements, or just to say hello"
      />

      <div className="max-w-4xl mx-auto">
        {/* Contact methods grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative overflow-hidden bg-background/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              <div className="relative flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className={`p-3 rounded-xl bg-gradient-to-br ${method.color} text-white shadow-lg`}
                >
                  {method.icon}
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-primary font-medium mb-1">{method.value}</p>
                  <p className="text-sm text-foreground/70">{method.description}</p>
                </div>

                <Send className="h-5 w-5 text-foreground/30 group-hover:text-primary transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Location and availability */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center space-y-6"
        >
          <div className="flex items-center justify-center gap-2 text-foreground/70">
            <MapPin className="h-5 w-5" />
            <span>Based in Cameroon • Available for global collaborations</span>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Whether you&apos;re looking to amplify your message, develop strategic communications, or create impactful
              community programs, I&apos;m here to help bring your vision to life.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => (window.location.href = "mailto:hyzeala28@gmail.com?subject=Let's Collaborate")}
              >
                <Send className="h-5 w-5 mr-2" />
                Start a Conversation
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Response time indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Usually responds within 24 hours
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
