import { Check, X } from "lucide-react";

const comparisonData = [
  {
    feature: "Data Privacy",
    api: { value: false, text: "Sent to external servers" },
    llmquant: { value: true, text: "100% local" },
  },
  {
    feature: "Cost Model",
    api: { value: false, text: "Per-token pricing" },
    llmquant: { value: true, text: "One-time download" },
  },
  {
    feature: "Setup Time",
    api: { value: true, text: "Instant" },
    llmquant: { value: true, text: "5-10 minutes" },
  },
  {
    feature: "Customization",
    api: { value: false, text: "Limited" },
    llmquant: { value: true, text: "Full control" },
  },
  {
    feature: "Internet Required",
    api: { value: false, text: "Always" },
    llmquant: { value: true, text: "Only for download" },
  },
  {
    feature: "Rate Limits",
    api: { value: false, text: "Yes, varies by plan" },
    llmquant: { value: true, text: "Unlimited" },
  },
];

export function ComparisonSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            LLMQuant vs Traditional AI APIs
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how local deployment compares to cloud-based AI services
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-border overflow-hidden bg-card">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-4 sm:p-6 bg-secondary/50 border-b border-border">
              <div className="text-sm font-medium text-muted-foreground">
                Feature
              </div>
              <div className="text-sm font-medium text-center text-muted-foreground">
                API Providers
              </div>
              <div className="text-sm font-medium text-center">
                <span className="gradient-text font-semibold">LLMQuant</span>
              </div>
            </div>

            {/* Rows */}
            {comparisonData.map((row, index) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 gap-4 p-4 sm:p-6 ${
                  index < comparisonData.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="text-sm font-medium">{row.feature}</div>
                <div className="flex flex-col items-center gap-1">
                  {row.api.value ? (
                    <Check className="h-5 w-5 text-success" />
                  ) : (
                    <X className="h-5 w-5 text-destructive" />
                  )}
                  <span className="text-xs text-muted-foreground text-center">
                    {row.api.text}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Check className="h-5 w-5 text-success" />
                  <span className="text-xs text-muted-foreground text-center">
                    {row.llmquant.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
