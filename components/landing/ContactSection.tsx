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
    <section id="contact" className="py-20 ">
      <div className="container mx-auto px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}

          <div className="flex flex-col gap-6 max-w-2xl items-center text-center mx-auto">
            <p className="text-sm uppercase tracking-[0.25em] text-primary/70">
              Contact
            </p>
            <h2 className="text-5xl md:text-6xl font-semibold text-primary leading-[1.1]">
              Let&apos;s Connect
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to bring your vision to life? Get in touch with us today.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 mt-14">
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
                <Card className="p-6 hover:shadow-md transition-all duration-300 border-2 hover:border-primary">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary  transition-colors">
                      <item.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">
                        {item.label}
                      </p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-linear-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <IconCalendar className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">
              Schedule a Free Consultation
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Book a 30-minute call to discuss your project and explore how we
              can help you achieve your goals.
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
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
