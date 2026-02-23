import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Gagandeep Goyal",
    role: "CTO - GDInvest",
    initials: "GG",
    content:
      "Working with Lokesh was an excellent experience from start to finish. He understood our vision clearly and transformed our ideas into a modern, professional, and highly functional website for GDInvest. His design sense, attention to detail, and ability to create a clean and user-friendly interface truly impressed us. The final website exceeded our expectations and perfectly represents our brand. We are extremely satisfied with his work and would highly recommend Lokesh to anyone looking for a reliable and skilled web developer.",
  },
  {
    name: "Aleksandrs",
    role: "Founder - Webta",
    initials: "AR",
    content:
      "Lokesh has developed a website for my online agency and exceeded all expectations. He demonstrated remarkable professionalism, technical proficiency, and exemplary communication skills.",
  },
  {
    name: "Shubham",
    role: "Founder - Shubham Industries",
    initials: "SV",
    content:
      "AshwaCreations handled the entire process efficiently from design and development to deployment while ensuring the website was fast, responsive, and easy for our customers to navigate. They also optimized the website for search engines, which significantly improved our visibility on Google and helped strengthen our online presence. The final website has helped us present our products more effectively and improved how customers discover us online. We are extremely satisfied with their work.",
  },
  {
    name: "Akash Garg",
    role: "Founder - Anupaat Nivesh",
    initials: "AG",
    content:
      "Thanks to Lokesh, our investment consultancy now has a sleek and professional website that perfectly captures our services. He exceeded our expectations with their expertise and attention to detail.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="flex-1 bg-primary flex items-center">
        <div className="px-4 sm:px-6 md:px-10 lg:px-14 py-12 sm:py-16 md:py-20 lg:py-0">
          <h2 className="text-xs sm:text-sm md:text-md text-secondary uppercase tracking-wider">
            Testimonials
          </h2>
          <p className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-secondary leading-tight">
            Loved by Founders
          </p>
          <p className="mt-4 sm:mt-5 md:mt-6 text-muted max-w-lg text-sm sm:text-base lg:text-lg leading-relaxed">
            Don't just take our word for it. Here's what our clients say about
            working with us.
          </p>
        </div>
      </div>

      <div className="flex-1 p-4 sm:p-6 md:p-10 lg:p-14 flex justify-center items-center relative">
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:grid-rows-3 gap-3 sm:gap-4">
          {/* First testimonial - spans 2 rows */}
          <Card className="col-span-1 xl:row-span-2 border-0 shadow-sm">
            <CardContent className="flex flex-col justify-between h-full pt-4 sm:pt-6">
              <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
                "{testimonials[0].content}"
              </p>
              <div className="mt-4 sm:mt-6 flex items-center gap-3">
                <Avatar size="lg">
                  <AvatarFallback>{testimonials[0].initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-foreground text-sm sm:text-base">
                    {testimonials[0].name}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {testimonials[0].role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Second testimonial - spans 1 row, positioned top right */}
          <Card className="col-span-1 xl:row-span-1 border-0 shadow-sm">
            <CardContent className="flex flex-col justify-between h-full pt-4 sm:pt-6">
              <p className="text-foreground/80 leading-relaxed text-sm">
                "{testimonials[1].content}"
              </p>
              <div className="mt-3 sm:mt-4 flex items-center gap-3">
                <Avatar size="lg">
                  <AvatarFallback>{testimonials[1].initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-foreground text-sm sm:text-base">
                    {testimonials[1].name}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {testimonials[1].role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Third testimonial - spans 1.5 rows */}
          <Card className="col-span-1 xl:row-span-2 xl:col-start-2 xl:row-start-2 border-0 shadow-sm">
            <CardContent className="flex flex-col justify-between h-full pt-4 sm:pt-6">
              <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
                "{testimonials[2].content}"
              </p>
              <div className="mt-4 sm:mt-6 flex items-center gap-3">
                <Avatar size="lg">
                  <AvatarFallback>{testimonials[2].initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-foreground text-sm sm:text-base">
                    {testimonials[2].name}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {testimonials[2].role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fourth testimonial - spans 1 row, bottom left */}
          <Card className="col-span-1 xl:row-span-1 xl:col-start-1 xl:row-start-3 border-0 shadow-sm">
            <CardContent className="flex flex-col justify-between h-full pt-4 sm:pt-6">
              <p className="text-foreground/80 leading-relaxed text-sm">
                "{testimonials[3].content}"
              </p>
              <div className="mt-3 sm:mt-4 flex items-center gap-3">
                <Avatar size="lg">
                  <AvatarFallback>{testimonials[3].initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-foreground text-sm sm:text-base">
                    {testimonials[3].name}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {testimonials[3].role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="absolute top-0 left-0 w-full h-px bg-neutral-200" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-neutral-200" />
        </div>
      </div>
    </section>
  );
}
