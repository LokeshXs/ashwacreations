"use client"

import { IconPrompt, IconRocket } from "@tabler/icons-react";

export default function ServicesSection() {
    return (
        <section id="services" className="py-12 sm:py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
                <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 max-w-2xl items-center text-center mx-auto">
                    <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-primary/70">
                        Services
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary leading-[1.1]">
                        Build fast. Scale clean.
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-muted-foreground px-4">
                        Two focused tracks to ship a validated MVP or engineer a full-scale
                        product with confidence.
                    </p>
                </div>

                <div className="mt-10 sm:mt-12 md:mt-14 grid gap-4 sm:gap-6 md:grid-cols-2">
                    <article className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
                        <div className="absolute right-4 top-4 sm:right-6 sm:top-6 transition-opacity duration-300 bg-primary p-1.5 sm:p-2 rounded-full">
                            <IconRocket className="text-secondary w-6 h-6 sm:w-8 sm:h-8"/>
                        </div>
                        <p className="text-xs uppercase tracking-[0.3em] text-primary/60">
                            01
                        </p>
                        <h3 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-semibold text-primary">
                            MVP Development
                        </h3>
                        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">
                            Launch-ready products built for validation, early traction, and
                            rapid iteration.
                        </p>
                        <div className="mt-6 sm:mt-8 h-px w-16 bg-primary/30 transition-all duration-300 group-hover:w-24" />
                    </article>

                    <article className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
                         <div className="absolute right-4 top-4 sm:right-6 sm:top-6 transition-opacity duration-300 bg-primary p-1.5 sm:p-2 rounded-full">
                            <IconPrompt className="text-secondary w-6 h-6 sm:w-8 sm:h-8"/>
                        </div>
                        <p className="text-xs uppercase tracking-[0.3em] text-primary/60">
                            02
                        </p>
                        <h3 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-semibold text-primary">
                            Product Engineering
                        </h3>
                        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">
                            Full-cycle development for scalable web and mobile platforms.
                        </p>
                        <div className="mt-6 sm:mt-8 h-px w-16 bg-primary/30 transition-all duration-300 group-hover:w-24" />
                    </article>
                </div>
            </div>
        </section>
    );
}

