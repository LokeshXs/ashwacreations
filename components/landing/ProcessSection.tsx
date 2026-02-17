import { IconBulb, IconPalette, IconCode, IconRocket } from "@tabler/icons-react";

export default function ProcessSection() {
  return (
    <section className="flex">
      <div className="flex-1 bg-primary  flex items-center ">
        <div className="px-14">
          <h2 className="text-md text-secondary uppercase tracking-wider">
            Our Process
          </h2>
          <p className="mt-12 text-6xl font-semibold text-secondary leading-tight">
            Move at Startup Speed
          </p>
          <p className="mt-6 text-muted max-w-lg text-lg leading-relaxed">
            Our 4-step process is built for momentum. We keep it lean, focused,
            and validation-ready so you can launch without delays.
          </p>
        </div>
      </div>

      <div className="flex-1">
        <div className="py-8 relative px-14">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <IconBulb className="w-6 h-6 text-primary" stroke={1.5} />
            </div>
            <h2 className="text-sm text-primary font-medium uppercase tracking-wider">
              Step 1
            </h2>
          </div>
          <p className="mt-2 text-2xl font-semibold text-primary">
            Discovery & Strategy
          </p>
          <p className="mt-3 text-muted-foreground max-w-lg leading-relaxed">
            We dive deep to understand your vision, target audience, and market.
            This phase sets the foundation for a product that truly resonates.
          </p>
          <div className="absolute top-0 left-0 w-full h-px bg-neutral-200" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-neutral-200" />
        </div>

        <div className="py-8 relative px-14 flex flex-col items-end">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <IconPalette className="w-6 h-6 text-primary" stroke={1.5} />
            </div>
            <h2 className="text-sm text-primary font-medium uppercase tracking-wider">
              Step 2
            </h2>
          </div>
          <p className="mt-2 text-2xl font-semibold text-primary text-right">
            Design & Prototype
          </p>
          <p className="mt-3 text-muted-foreground max-w-lg leading-relaxed text-right">
            We create intuitive, pixel-perfect designs and interactive prototypes.
            Test and validate before writing a single line of code.
          </p>
          <div className="absolute bottom-0 left-0 w-full h-px bg-neutral-200" />
        </div>

        <div className="py-8 relative px-14 flex flex-col items-start">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <IconCode className="w-6 h-6 text-primary" stroke={1.5} />
            </div>
            <h2 className="text-sm text-primary font-medium uppercase tracking-wider">
              Step 3
            </h2>
          </div>
          <p className="mt-2 text-2xl font-semibold text-primary">
            Development & Build
          </p>
          <p className="mt-3 text-muted-foreground max-w-lg leading-relaxed">
            Clean, scalable code built with modern frameworks. We ship fast with
            regular updates, keeping you in the loop every step of the way.
          </p>
          <div className="absolute bottom-0 left-0 w-full h-px bg-neutral-200" />
        </div>

        <div className="py-8 relative px-14 flex flex-col items-end">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <IconRocket className="w-6 h-6 text-primary" stroke={1.5} />
            </div>
            <h2 className="text-sm text-primary font-medium uppercase tracking-wider">
              Step 4
            </h2>
          </div>
          <p className="mt-2 text-2xl font-semibold text-primary text-right">
            Launch & Support
          </p>
          <p className="mt-3 text-muted-foreground max-w-lg leading-relaxed text-right">
            We deploy with confidence and stand by you post-launch. Support,
            monitoring, and iterations to ensure your product thrives.
          </p>
          <div className="absolute bottom-0 left-0 w-full h-px bg-neutral-200" />
        </div>
      </div>
    </section>
  );
}
