import Image from "next/image";
import { siteContent } from "@/lib/siteContent";

export function AboutMeSection() {
  const { headline, subtext, content, imageUrl, imageAlt } = siteContent.aboutMe;

  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
              {headline}
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              {subtext}
            </p>

            <p className="text-base text-foreground/80 leading-relaxed">
              {content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
