import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Globe } from "lucide-react";
import { siteContent } from "@/lib/siteContent";

export function HeroSection() {
  const { headline, subtext, primaryCta, secondaryCta, trustIndicator, backgroundImageUrl, imageAlt } = siteContent.hero;

  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/80" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {headline}
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed">
              {subtext}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white font-semibold text-base"
              >
                <Link href={primaryCta.href} target="_blank">
                  {primaryCta.label}
                </Link>
              </Button>
              
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary font-semibold text-base"
              >
                <Link href={secondaryCta.href}>
                  <Phone className="mr-2 h-5 w-5" />
                  {secondaryCta.label}
                </Link>
              </Button>
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center space-x-2 text-white/90">
              <Globe className="h-5 w-5 text-accent" />
              <span className="font-medium">{trustIndicator}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
