import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Globe } from "lucide-react";
import { siteContent } from "@/lib/siteContent";

export function HeroSection() {
  const { headline, subtext, primaryCta, secondaryCta, trustIndicator, imageUrl, imageAlt } = siteContent.hero;

  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-b from-background to-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-3 space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              {headline}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
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
                className="border-primary text-primary hover:bg-primary hover:text-white font-semibold text-base"
              >
                <Link href={secondaryCta.href}>
                  <Phone className="mr-2 h-5 w-5" />
                  {secondaryCta.label}
                </Link>
              </Button>
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Globe className="h-5 w-5 text-success" />
              <span className="font-medium">{trustIndicator}</span>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:col-span-2">
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
