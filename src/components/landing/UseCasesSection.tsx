import { Building2, Code2, GraduationCap } from "lucide-react";

const useCases = [
  {
    icon: Building2,
    title: "Healthcare & Finance",
    description:
      "HIPAA and compliance-ready. Patient data and financial information stay on-premise.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
  },
  {
    icon: Code2,
    title: "Development Teams",
    description:
      "Code completion, documentation, and review without sending your codebase to third parties.",
    gradient: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: GraduationCap,
    title: "Research & Education",
    description:
      "Experiment freely without API rate limits or costs. Perfect for students and researchers.",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
  },
];

export function UseCasesSection() {
  return (
    <section className="py-24 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Built For</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by teams who prioritize data security and cost efficiency
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className={`relative p-8 rounded-2xl bg-gradient-to-br ${useCase.gradient} border border-border/50 hover:border-border transition-colors`}
            >
              {/* Icon */}
              <div className={`mb-6 ${useCase.iconColor}`}>
                <useCase.icon className="h-10 w-10" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
