import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconBrandWhatsapp,
  IconCalendar,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: IconPhone,
      label: "Phone",
      value: "+91 94994 24869",
      href: "tel:+919499424869",
    },
    {
      icon: IconBrandWhatsapp,
      label: "WhatsApp",
      value: "+91 94994 24869",
      href: "https://wa.me/919499424869",
    },
    {
      icon: IconMail,
      label: "Email",
      value: "hello@ashwacreations.com",
      href: "mailto:hello@ashwacreations.com",
    },
    {
      icon: IconMapPin,
      label: "Location",
      value: "Remotely Worldwide",
      href: "",
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="max-w-4xl mx-auto">
          {/* Header */}

          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 max-w-2xl items-center text-center mx-auto">
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-primary/70">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary leading-[1.1]">
              Let&apos;s Connect
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground px-4">
              Ready to bring your vision to life? Get in touch with us today.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12 mt-8 sm:mt-10 md:mt-14">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group"
              >
                <Card className="p-4 sm:p-5 md:p-6 hover:shadow-md transition-all duration-300 border-2 hover:border-primary">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 rounded-lg bg-primary transition-colors">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs sm:text-sm text-muted-foreground mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm sm:text-base font-medium group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-linear-to-br from-primary/5 to-primary/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 border border-primary/20">
            <IconCalendar className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
              Schedule a Free Consultation
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-5 md:mb-6 max-w-md mx-auto px-4">
              Book a 30-minute call to discuss your project and explore how we
              can help you achieve your goals.
            </p>
            <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8" asChild>
              <Link
                href="https://calendly.com/your-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Free Call
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
