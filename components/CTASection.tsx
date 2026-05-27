import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { siteContent } from "@/lib/siteContent";

export function CTASection() {
  const { headline, subtext, button, phone } = siteContent.cta;

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-primary to-primary/90">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {headline}
          </h2>
          
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            {subtext}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              asChild 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold text-base shadow-xl hover:shadow-2xl transition-all"
            >
              <Link href={button.href} target="_blank">
                {button.label}
              </Link>
            </Button>
          </div>

          <div className="pt-4">
            <Link 
              href={phone.href}
              className="inline-flex items-center space-x-2 text-white/90 hover:text-white font-medium transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>{phone.label}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
