"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaLinkedin, } from "react-icons/fa";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ArrowRight } from "lucide-react";
export function Vision() {
  return (
    <section className="relative bg-[#113C96] text-white py-3">
      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#2ECC71]/20 blur-3xl" />
      <Container>
        <div className="relative mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mt-8 text-2xl font-bold leading-tight tracking-tight lg:text-6xl">
              Building a generation of educated,
              empowered, and purpose-driven young people.
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/80 lg:text-xl">
              We believe that when one student is empowered,
              generations can be transformed. Through education,
              mentorship, leadership, faith, and service,
              we are committed to helping young people discover
              purpose and positively influence society.
            </p>
            {/* BUTTONS */}
            <div className="mt-10">
              <button className="rounded-xl bg-[#1AE1A6] px-6 py-2 text-lg font-medium text-white transition-colors duration-300 hover:bg-[#1AE1A6]/80">
                Partner With Us
              </button>
            </div>
          </motion.div>

          {/* SOCIAL ICONS — bottom left */}
          <div className="mt-10 pt-6 border-t border-white/15 flex items-center gap-4">
          <div className="flex items-center gap-3">

          </div>
            <a href=""
            className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/20 text-white/70 hover:bg-white/10 transition-colors duration-200">
              <FaInstagram size={15} />
            </a>
            <a href=""
            className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/20 text-white/70 hover:bg-white/10 transition-colors duration-200">
              <FaTwitter size={15} />
            </a>
            <a href=""
            className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/20 text-white/70 hover:bg-white/10 transition-colors duration-200">
              <FaLinkedin size={15} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}