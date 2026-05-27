import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Shield, Building2, TrendingUp, ArrowRight } from "lucide-react";
import { siteContent } from "@/lib/siteContent";

const iconMap = {
  shield: Shield,
  building: Building2,
  chart: TrendingUp,
};

export function ServicesGrid() {
  const { headline, subtext, cards } = siteContent.services;

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
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

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];
            
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent"
              >
                <CardHeader>
                  <div className="mb-4">
                    <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon className="h-7 w-7 text-accent" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-semibold text-primary">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed text-foreground/80">
                    {card.description}
                  </CardDescription>
                  <Link 
                    href={card.link.href}
                    className="inline-flex items-center text-accent hover:text-accent/80 font-semibold transition-colors group/link"
                  >
                    {card.link.label}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
