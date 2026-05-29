"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  BookOpen,
  Presentation,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProgramCard } from "@/components/shared/program-card";

const programs = [
  {
    icon: <GraduationCap className="h-4 w-4" />,
    title: "Scholarships",
    description:
      "Providing financial support to brilliant students and university aspirants facing educational and financial barriers.",
  },

  {
    icon: <Users className="h-4 w-4" />,
    title: "Mentorship",
    description:
      "Connecting students with guidance, encouragement, and support that helps them grow academically and personally.",
  },

  {
    icon: <Presentation className="h-4 w-4" />,
    title: "Student Conferences",
    description:
      "Organizing impactful conferences focused on leadership, education, personal growth, and purposeful living.",
  },

  {
    icon: <BookOpen className="h-4 w-4" />,
    title: "Development Programs",
    description:
      "Equipping students with opportunities, exposure, and developmental experiences that prepare them for impact.",
  },
];

export function Programs() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] my-3">
      {/* Background Blur */}
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#113C96]/5 blur-3xl" />

      <Container>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 lg:text-5xl">
            Supporting students beyond financial assistance.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            We believe true empowerment goes beyond funding education. Through
            mentorship, conferences, and developmental initiatives, we help
            students grow academically, personally, and purposefully.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-2 mb-3">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <ProgramCard {...program} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}