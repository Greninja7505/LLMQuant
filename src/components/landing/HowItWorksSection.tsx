import { Search, Sliders, Download } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Search,
    title: "Choose Your Model",
    description:
      "Browse our catalog of popular models: Llama, Mistral, Phi, and more.",
    visual: (
      <div className="bg-secondary/50 rounded-lg p-4 border border-border">
        <div className="space-y-2">
          {["Llama 3 8B", "Mistral 7B", "Phi-3 Mini"].map((model) => (
            <div
              key={model}
              className="flex items-center justify-between p-2 rounded bg-background/50"
            >
              <span className="text-sm font-medium">{model}</span>
              <span className="text-xs text-muted-foreground">Popular</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: "2",
    icon: Sliders,
    title: "Select Quantization Level",
    description:
      "Pick the right balance between quality and size for your hardware.",
    visual: (
      <div className="bg-secondary/50 rounded-lg p-4 border border-border">
        <div className="flex gap-2">
          {[
            { label: "Q4", size: "4.5GB" },
            { label: "Q5", size: "5.5GB" },
            { label: "Q8", size: "8GB" },
          ].map((opt) => (
            <div
              key={opt.label}
              className="flex-1 p-3 rounded bg-background/50 text-center"
            >
              <div className="text-sm font-semibold text-primary">{opt.label}</div>
              <div className="text-xs text-muted-foreground">{opt.size}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: "3",
    icon: Download,
    title: "Download & Deploy",
    description:
      "Run with Ollama, llama.cpp, or your preferred tool. Complete setup guides included.",
    visual: (
      <div className="bg-secondary/50 rounded-lg p-4 border border-border font-mono text-xs">
        <div className="text-muted-foreground">$ ollama run llama3</div>
        <div className="text-success mt-1">✓ Model ready</div>
        <div className="text-primary mt-1">{">>> Hello!"}</div>
      </div>
    ),
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get Started in 3 Steps
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From download to deployment in minutes
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-border via-primary/30 to-border" style={{ width: "calc(100% - 3rem)", left: "calc(100% + 1.5rem)" }} />
              )}

              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full gradient-bg text-lg font-bold">
                    {step.number}
                  </div>
                  <step.icon className="h-6 w-6 text-muted-foreground" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                {/* Visual */}
                <div>{step.visual}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
