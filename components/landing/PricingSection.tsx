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
            price: '$2500',
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
                '15 Days Free Post-Launch Support ⭐'
            ]
        },
        {
            name: 'Product Engineering',
            description: 'Full-cycle development for scalable web and mobile platforms',
            icon: IconPrompt,
            number: '02',
            price: '$5500',
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
                '1 Month Free Post-Launch Support ⭐',
              
            ]
        }
    ];

    return (
        <section id="pricing" className="py-12 sm:py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
                {/* Section Header */}
                <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 max-w-2xl items-center text-center mx-auto mb-10 sm:mb-12 md:mb-14">
                    <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-primary/70">
                        Pricing
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary leading-[1.1]">
                        Choose Your Path
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-muted-foreground px-4">
                        Flexible solutions tailored to your project needs. Let's build something amazing together.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                    {plans.map((plan, index) => (
                        <article
                            key={index}
                            className={`group relative overflow-hidden rounded-xl sm:rounded-2xl border bg-white p-5 sm:p-6 md:p-7 lg:p-8 transition-all duration-300 ${
                                plan.popular 
                                    ? 'border-primary shadow-lg' 
                                    : 'border-neutral-200 hover:border-neutral-300'
                            }`}
                        >
                            {/* Icon */}
                            <div className="absolute right-4 top-4 sm:right-5 sm:top-5 md:right-6 md:top-6 transition-opacity duration-300 bg-primary p-1.5 sm:p-2 rounded-full">
                                <plan.icon className="text-secondary w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" stroke={1.5} />
                            </div>

                            {/* Number Label */}
                            <p className="text-xs uppercase tracking-[0.3em] text-primary/60">
                                {plan.number}
                            </p>

                            {/* Plan Details */}
                            <h3 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-semibold text-primary">
                                {plan.name}
                            </h3>
                            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">
                                {plan.description}
                            </p>

                            {/* Price */}
                            <div className="mt-5 sm:mt-6">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl sm:text-4xl font-bold text-primary">{plan.price}</span>
                                  
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="mt-6 sm:mt-7 md:mt-8 h-px w-12 sm:w-14 md:w-16 bg-primary/30 transition-all duration-300 group-hover:w-20 sm:group-hover:w-22 md:group-hover:w-24" />

                            {/* Features */}
                            <div className="mt-6 sm:mt-7 md:mt-8 space-y-3">
                                <p className="text-xs uppercase tracking-[0.3em] text-primary/70 mb-3 sm:mb-4">
                                    What's Included
                                </p>
                                <ul className="space-y-2 sm:space-y-3">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 sm:gap-3">
                                            <div className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                                <IconCheck size={12} className="text-primary sm:w-3.5 sm:h-3.5" stroke={2.5} />
                                            </div>
                                            <span className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA Button */}
                            <div className="mt-6 sm:mt-7 md:mt-8">
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
                <div className="text-center mt-8 sm:mt-10 md:mt-12">
                    <p className="text-sm sm:text-base text-muted-foreground px-4">
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