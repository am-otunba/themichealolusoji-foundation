import { ReactNode } from "react";

interface ProgramCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function ProgramCard({
  icon,
  title,
  description,
}: ProgramCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-black/5 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#113C96]/5 blur-3xl transition-all duration-300 group-hover:bg-[#113C96]/10" />

      {/* Icon */}
      <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#113C96]/10 text-[#113C96]">
        {icon}
      </div>

      {/* Content */}
      <div className="relative space-y-4">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h3>

        <p className="leading-relaxed text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}