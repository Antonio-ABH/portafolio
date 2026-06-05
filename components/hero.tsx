'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Terminal from "./terminal/Terminal";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-[85vh] px-6">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 opacity-40" />

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full items-center">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          {/* Badge shadcn */}
          <Badge className="px-3 py-1 text-sm text-emerald-600 font-bold tracking-wide">
            ⚡ Available For New Roles
          </Badge>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            José Antonio
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-300 to-blue-500">
              FullStack Engineer
            </span>
          </h1>

          {/* Description */}
          <p className="text-white/60 text-lg max-w-md">
            I build modern and secure web applications with React, Next.js, NestJS and AI systems.
          </p>

          {/* CTA Buttons (shadcn) */}
          <div className="flex gap-4">
            <Button
              className="px-6 py-3 rounded-xl bg-white text-black">
              View Projects
            </Button>

            <Button className="glass">
              Ask AI
            </Button>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">NestJS</Badge>
            <Badge variant="secondary">AI</Badge>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative">

          {/* TERMINAL CARD */}
          <div className="glass rounded-2xl p-6 glow border border-white/10 shadow-2xl h-[300px]">
            <div className="flex items-center justify-between border-b border-white/10">
                {/* window dots */}
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <p className="tracking-wide text-white/80 text-sm">
                  TERMINAL
                </p>
            </div>
            
            {/* terminal text */}
            <Terminal/>
          </div>
        </div>
      </div>
    </section>
  );
}