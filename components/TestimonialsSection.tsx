import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { siteContent } from "@/lib/siteContent";

export function TestimonialsSection() {
  const { headline, subtext, items } = siteContent.testimonials;

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
            {headline}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            {subtext}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((testimonial, index) => (
            <Card key={index} className="bg-white border-2 hover:border-accent transition-colors">
              <CardContent className="pt-6 space-y-4">
                <Quote className="h-8 w-8 text-accent/30" />
                <p className="text-foreground/90 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="pt-4 border-t">
                  <p className="font-semibold text-primary">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
