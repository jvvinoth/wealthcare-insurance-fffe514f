export const siteContent = {
  metadata: {
    title: "WealthCare Insurance",
    description: "Expert advisory services for individuals and businesses worldwide. Get personalized coverage solutions that grow with you.",
  },
  
  header: {
    logoAlt: "WealthCare Insurance",
    logoUrl: "https://pub-b10352cd30db47758f1614c0d15bce2c.r2.dev/media/60147120491/2026-05/adcfef67-8407-454c-955b-07c59a054432.png",
    navigation: [
      { label: "Services", href: "#services" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    phone: {
      label: "+91 790 400 3326",
      href: "tel:+917904003326",
    },
    cta: {
      label: "Get Started",
      href: "https://wa.me/917904003326",
    },
  },
  
  hero: {
    headline: "Insurance Portfolio Management That Puts Your Needs First",
    subtext: "Expert advisory services for individuals and businesses worldwide. Get personalized coverage solutions that grow with you.",
    primaryCta: {
      label: "Get Your Free Portfolio Review",
      href: "https://wa.me/917904003326",
    },
    secondaryCta: {
      label: "Call Us Now",
      href: "tel:+917904003326",
    },
    trustIndicator: "Serving clients worldwide",
    backgroundImageUrl: "https://pub-b10352cd30db47758f1614c0d15bce2c.r2.dev/media/60147120491/2026-05/8ca4500b-cb62-487e-9dd9-61dcd9e2fe4b.png",
    imageAlt: "Professional insurance advisor",
  },
  
  aboutMe: {
    headline: "About Me",
    subtext: "With years of experience in insurance advisory, I'm dedicated to helping individuals and businesses find the right coverage for their unique needs.",
    content: "I believe insurance isn't just about policies—it's about peace of mind. My approach is personal, transparent, and focused on building long-term relationships with my clients. Whether you're looking to optimize your personal portfolio or protect your business assets, I'm here to guide you every step of the way.",
    imageUrl: "https://pub-b10352cd30db47758f1614c0d15bce2c.r2.dev/media/60147120491/2026-05/8ca4500b-cb62-487e-9dd9-61dcd9e2fe4b.png",
    imageAlt: "Professional insurance advisor",
  },
  
  services: {
    headline: "Comprehensive Insurance Solutions Tailored to You",
    subtext: "Whether you're an individual seeking personal coverage or a business protecting your assets, we provide expert guidance every step of the way.",
    cards: [
      {
        icon: "shield",
        title: "Personal Insurance Portfolio",
        description: "Tailored coverage analysis and optimization for you and your family. We review your current policies and identify gaps to ensure complete protection.",
        link: {
          label: "Learn more",
          href: "#contact",
        },
      },
      {
        icon: "building",
        title: "Business Insurance Advisory",
        description: "Comprehensive corporate risk assessment and solutions for businesses of all sizes. Protect your assets, employees, and operations with expert guidance.",
        link: {
          label: "Learn more",
          href: "#contact",
        },
      },
      {
        icon: "chart",
        title: "Portfolio Management",
        description: "Ongoing policy evaluation, rebalancing, and claims support. Your insurance needs change—we make sure your coverage keeps pace with your life.",
        link: {
          label: "Learn more",
          href: "#contact",
        },
      },
    ],
  },
  
  whyChoose: {
    headline: "Why Choose WealthCare",
    subtext: "We go beyond selling policies—we build lasting relationships founded on trust, expertise, and personalized service.",
    benefits: [
      {
        icon: "check",
        title: "Independent & Unbiased",
        description: "We work for you, not the insurance companies. Our recommendations are based solely on your needs.",
      },
      {
        icon: "check",
        title: "Global Expertise",
        description: "Experience serving clients across multiple countries and jurisdictions with diverse insurance needs.",
      },
      {
        icon: "check",
        title: "Comprehensive Review",
        description: "In-depth analysis of your current coverage to identify gaps, overlaps, and cost-saving opportunities.",
      },
      {
        icon: "check",
        title: "Ongoing Support",
        description: "We're with you for the long haul—policy reviews, claims assistance, and updates as your life changes.",
      },
    ],
  },
  
  process: {
    headline: "How We Work With You",
    subtext: "Our proven 4-step process ensures you get the right coverage at the right price.",
    steps: [
      {
        number: "01",
        title: "Discovery Call",
        description: "We learn about your situation, goals, and current insurance coverage in a no-obligation consultation.",
      },
      {
        number: "02",
        title: "Needs Analysis",
        description: "Our team conducts a thorough review of your insurance portfolio and identifies areas for improvement.",
      },
      {
        number: "03",
        title: "Customized Solutions",
        description: "We present tailored recommendations with clear comparisons and transparent pricing.",
      },
      {
        number: "04",
        title: "Implementation & Support",
        description: "We handle the paperwork and provide ongoing support for claims, renewals, and life changes.",
      },
    ],
  },
  
  testimonials: {
    headline: "What Our Clients Say",
    subtext: "Real stories from people who trust us with their insurance needs.",
    items: [
      {
        quote: "WealthCare helped me discover I was paying for duplicate coverage and saved me over $2,000 annually while improving my protection.",
        author: "Sarah L.",
        role: "Small Business Owner",
      },
      {
        quote: "As an expat, navigating insurance across countries was overwhelming. The team made it simple and ensured I had comprehensive coverage.",
        author: "Michael T.",
        role: "International Consultant",
      },
      {
        quote: "When I had a major claim, they handled everything. I didn't have to fight with the insurance company—they did it for me.",
        author: "Jennifer K.",
        role: "Family Insurance Client",
      },
    ],
  },
  
  cta: {
    headline: "Ready to Optimize Your Insurance Portfolio?",
    subtext: "Get a free, no-obligation consultation and discover how much you could save while improving your coverage.",
    button: {
      label: "Schedule Your Free Consultation",
      href: "https://wa.me/917904003326",
    },
    phone: {
      label: "Or call us at +91 790 400 3326",
      href: "tel:+917904003326",
    },
  },
  
  footer: {
    tagline: "Your trusted partner in insurance portfolio management.",
    phone: {
      label: "+91 790 400 3326",
      href: "tel:+917904003326",
    },
    whatsapp: {
      label: "WhatsApp",
      href: "https://wa.me/917904003326",
    },
    copyright: "© 2024 WealthCare Insurance. All rights reserved.",
    disclaimer: "WealthCare Insurance provides advisory services and portfolio management. Insurance products are underwritten by respective insurance carriers.",
  },
} as const;
