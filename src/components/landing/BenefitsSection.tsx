import { Shield, Zap, PiggyBank } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Complete Privacy",
    description:
      "Your data never leaves your infrastructure. Perfect for healthcare, finance, and sensitive applications.",
  },
  {
    icon: Zap,
    title: "Ready to Deploy",
    description:
      "Pre-quantized models optimized for CPU and GPU. Download and run in minutes, not hours.",
  },
  {
    icon: PiggyBank,
    title: "Cut API Costs",
    description:
      "One-time setup instead of per-token charges. Run unlimited queries without ongoing fees.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why LLMQuant?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to run AI models privately and efficiently
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6 relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <benefit.icon className="h-7 w-7" />
                </div>
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
