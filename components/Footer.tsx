import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { siteContent } from "@/lib/siteContent";

export function Footer() {
  const { tagline, phone, whatsapp, copyright, disclaimer } = siteContent.footer;

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Left Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">
              {siteContent.metadata.title}
            </h3>
            <p className="text-white/80 leading-relaxed">
              {tagline}
            </p>
          </div>

          {/* Right Column - Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <Link 
                href={phone.href}
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors group"
              >
                <Phone className="h-5 w-5 group-hover:text-accent transition-colors" />
                <span>{phone.label}</span>
              </Link>
              <Link 
                href={whatsapp.href}
                target="_blank"
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors group"
              >
                <MessageCircle className="h-5 w-5 group-hover:text-accent transition-colors" />
                <span>{whatsapp.label}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/20 space-y-4">
          <p className="text-sm text-white/60 leading-relaxed">
            {disclaimer}
          </p>
          <p className="text-sm text-white/60">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
