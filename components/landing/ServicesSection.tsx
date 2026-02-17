"use client"

import { IconPrompt, IconRocket } from "@tabler/icons-react";

export default function ServicesSection() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col gap-6 max-w-2xl items-center text-center mx-auto">
                    <p className="text-sm uppercase tracking-[0.25em] text-primary/70">
                        Services
                    </p>
                    <h2 className="text-5xl md:text-6xl font-semibold text-primary leading-[1.1]">
                        Build fast. Scale clean.
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Two focused tracks to ship a validated MVP or engineer a full-scale
                        product with confidence.
                    </p>
                </div>

                <div className="mt-14 grid gap-6 md:grid-cols-2">
                    <article className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8">
                        <div className="absolute right-6 top-6 transition-opacity duration-300  bg-primary p-2 rounded-full ">
                            <IconRocket className=" text-secondary w-8 h-8"/>
                        </div>
                        <p className="text-xs uppercase tracking-[0.3em] text-primary/60">
                            01
                        </p>
                        <h3 className="mt-4 text-2xl font-semibold text-primary">
                            MVP Development
                        </h3>
                        <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
                            Launch-ready products built for validation, early traction, and
                            rapid iteration.
                        </p>
                        <div className="mt-8 h-px w-16 bg-primary/30 transition-all duration-300 group-hover:w-24" />
                    </article>

                    <article className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8">
                         <div className="absolute right-6 top-6 transition-opacity duration-300  bg-primary p-2 rounded-full ">
                            <IconPrompt className=" text-secondary w-8 h-8"/>
                        </div>
                        <p className="text-xs uppercase tracking-[0.3em] text-primary/60">
                            02
                        </p>
                        <h3 className="mt-4 text-2xl font-semibold text-primary">
                            Product Engineering
                        </h3>
                        <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
                            Full-cycle development for scalable web and mobile platforms.
                        </p>
                        <div className="mt-8 h-px w-16 bg-primary/30 transition-all duration-300 group-hover:w-24" />
                    </article>
                </div>
            </div>
        </section>
    );
}

