import { IconCheck, IconRocket, IconPrompt } from '@tabler/icons-react';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function PricingSection() {
    const plans = [
        {
            name: 'MVP Development',
            description: 'Launch-ready products built for validation and rapid iteration',
            icon: IconRocket,
            number: '01',
            price: '$8,000',
            priceNote: 'Starting from',
            popular: true,
            features: [
                'Web or Mobile MVP',
                'Robust Backend Development',
                'User authentication',
                'Interactive UI Implementation',
                'Weekly Progress Updates',
                'Fast Delivery Timeline (4–8 weeks)',
                'Unlimited Revisions',
                'Deployment to Production',
                '15 Days Free Post-Launch Support'
            ]
        },
        {
            name: 'Product Engineering',
            description: 'Full-cycle development for scalable web and mobile platforms',
            icon: IconPrompt,
            number: '02',
            price: '$25,000',
            priceNote: 'Starting from',
            popular: false,
            features: [
                'Application + Admin Dashboard',
                'Growth-Ready Backend Architecture',
                'User Experience & Flow Optimization',
                'Comprehensive Testing',
                'Unlimited Revisions',
                'Deployment & Cloud Setup',
                'CI/CD Automation',
                'Analytics & Tracking Setup',
                '1 Month Free Post-Launch Support',
              
            ]
        }
    ];

    return (
        <section id="pricing" className="py-20">
            <div className="container mx-auto px-12">
                {/* Section Header */}
                <div className="flex flex-col gap-6 max-w-2xl items-center text-center mx-auto mb-14">
                    <p className="text-sm uppercase tracking-[0.25em] text-primary/70">
                        Pricing
                    </p>
                    <h2 className="text-5xl md:text-6xl font-semibold text-primary leading-[1.1]">
                        Choose Your Path
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Flexible solutions tailored to your project needs. Let's build something amazing together.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    {plans.map((plan, index) => (
                        <article
                            key={index}
                            className={`group relative overflow-hidden rounded-2xl border bg-white p-8 transition-all duration-300 ${
                                plan.popular 
                                    ? 'border-primary shadow-lg' 
                                    : 'border-neutral-200 hover:border-neutral-300'
                            }`}
                        >
                            {/* Icon */}
                            <div className="absolute right-6 top-6 transition-opacity duration-300 bg-primary p-2 rounded-full">
                                <plan.icon className="text-secondary w-8 h-8" stroke={1.5} />
                            </div>

                            {/* Number Label */}
                            <p className="text-xs uppercase tracking-[0.3em] text-primary/60">
                                {plan.number}
                            </p>

                            {/* Plan Details */}
                            <h3 className="mt-4 text-2xl font-semibold text-primary">
                                {plan.name}
                            </h3>
                            <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
                                {plan.description}
                            </p>

                            {/* Price */}
                            <div className="mt-6">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                                  
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="mt-8 h-px w-16 bg-primary/30 transition-all duration-300 group-hover:w-24" />

                            {/* Features */}
                            <div className="mt-8 space-y-3">
                                <p className="text-xs uppercase tracking-[0.3em] text-primary/70 mb-4">
                                    What's Included
                                </p>
                                <ul className="space-y-3">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                                <IconCheck size={14} className="text-primary" stroke={2.5} />
                                            </div>
                                            <span className="text-muted-foreground leading-relaxed">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA Button */}
                            <div className="mt-8">
                                <Button 
                                    className="w-full cursor-pointer" 
                                    size="lg"
                                    variant={plan.popular ? 'default' : 'outline'}
                                >
                                    Book a Slot
                                </Button>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Bottom Note */}
                <div className="text-center mt-12">
                    <p className="text-muted-foreground">
                        Need a custom solution?{' '}
                        <Link href="#contact" className="text-primary  hover:text-primary/90 font-semibold underline transition-colors">
                            Let's talk
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}