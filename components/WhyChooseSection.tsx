import { CheckCircle2 } from "lucide-react";
import { siteContent } from "@/lib/siteContent";

export function WhyChooseSection() {
  const { headline, subtext, benefits } = siteContent.whyChoose;

  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-to-b from-white to-background">
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

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-success" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-primary">
                  {benefit.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
