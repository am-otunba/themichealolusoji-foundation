"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function FounderStory() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] border border-black/5 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200&auto=format&fit=crop"
                alt="Founder story"
                className="h-[620px] w-full object-cover"
              />
            </div>
          </motion.div>

          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <div className="space-y-6">
              <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-gray-900 lg:text-5xl">
                A mission inspired by personal experience and purpose.
              </h2>

              <div className="space-y-5 text-lg leading-relaxed text-gray-600">
                <p>
                  The Michael Olusoji Foundation was born from a deeply personal
                  journey. Having personally benefited from scholarships,
                  mentorship, and financial support during university,
                  Michael Olusoji understands the difference access and support
                  can make in a student’s life.
                </p>

                <p>
                  What began as a personal commitment to help students stay in
                  school has now grown into a faith-driven initiative supporting
                  brilliant young people facing financial and social barriers to
                  higher education.
                </p>

                <p>
                  Through scholarships, conferences, mentorship, and student
                  development initiatives, the Foundation exists to help young
                  people pursue education, discover purpose, and positively
                  influence society.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}