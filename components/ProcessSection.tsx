import { siteContent } from "@/lib/siteContent";

export function ProcessSection() {
  const { headline, subtext, steps } = siteContent.process;

  return (
    <section className="py-16 lg:py-24 bg-white">
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

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-accent to-transparent -translate-x-1/2 z-0" />
              )}
              
              <div className="relative z-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
