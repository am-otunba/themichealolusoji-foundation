"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";

export function Hero() {
  return (
    <Section className="relative overflow-hidden pt-10 ">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#113C96]/10 blur-3xl" />

      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-[#2ECC71]/10 blur-3xl" />

        <div className="grid items-center gap-16 lg:grid-cols-2 mx-auto
        w-full
        max-w-7xl
        px-4
        sm:px-6
        lg:px-8">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >

            <div className="space-y-6">
              <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight text-gray-900 lg:text-7xl">
                Education should not end because money did.
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-gray-600">
                The Michael Olusoji Foundation supports brilliant and deserving
                students through scholarships, mentorship, conferences, and
                developmental initiatives that help them pursue education,
                purpose, and impact.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              
              <button className="rounded-xl bg-[#1AE1A6] px-6 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#1AE1A6]/80">
                Donate Now
              </button>
              
              <button className="rounded-xl bg-[#113C96] px-6 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#113C96]/80">
                View Our Impact
              </button>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 border-t border-gray-200 pt-8">
              <div>
                <h3 className="text-3xl font-bold text-[#113C96]">120+</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Students Supported
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#113C96]">15+</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Partner Schools
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#113C96]">100%</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Purpose-Driven
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-2xl">
              <img
                src="./IMG_4563.JPEG"
                alt="Students"
                className="h-[600px] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
    </Section>
  );
}