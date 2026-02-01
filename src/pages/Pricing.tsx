import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, MessageSquare } from "lucide-react";

const tiers = [
  {
    name: "Free",
    description: "For individuals getting started",
    price: "$0",
    period: "forever",
    features: [
      "Access to all public models",
      "Community support",
      "Basic documentation",
      "Personal use only",
    ],
    cta: "Get Started",
    href: "/signup",
    highlighted: false,
  },
  {
    name: "Pro",
    description: "For developers and small teams",
    price: "$29",
    period: "/month",
    features: [
      "Everything in Free",
      "Priority downloads",
      "Advanced documentation",
      "Email support",
      "Commercial use license",
      "Early access to new models",
    ],
    cta: "Start Free Trial",
    href: "/signup?plan=pro",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    description: "For organizations at scale",
    price: "Custom",
    period: "",
    features: [
      "Everything in Pro",
      "Custom model fine-tuning",
      "Dedicated support",
      "SLA guarantee",
      "On-premise deployment",
      "Custom integrations",
      "Volume licensing",
    ],
    cta: "Contact Sales",
    href: "/contact",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "What quantization formats do you support?",
    answer:
      "We support GGUF (for llama.cpp and Ollama) and GPTQ formats. GGUF is recommended for most use cases due to its broad compatibility and efficient performance.",
  },
  {
    question: "Can I use the models commercially?",
    answer:
      "Free tier is for personal use only. Pro and Enterprise plans include commercial use licenses. Note that you must also comply with each model's original license terms.",
  },
  {
    question: "What hardware do I need?",
    answer:
      "Requirements vary by model size. Q4 quantized 7B models typically need 8GB RAM minimum. Larger models or higher quantization levels require more memory. GPU acceleration is optional but recommended.",
  },
  {
    question: "How do I get support?",
    answer:
      "Free users have access to community support via Discord. Pro users get email support with 24-48 hour response times. Enterprise customers receive dedicated support with custom SLAs.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer a 14-day money-back guarantee for Pro subscriptions. If you're not satisfied, contact us within 14 days of purchase for a full refund.",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start free and scale as you grow. All plans include access to our
              complete model catalog.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative p-8 rounded-2xl border ${
                  tier.highlighted
                    ? "bg-card border-primary shadow-lg shadow-primary/10"
                    : "bg-card border-border"
                }`}
              >
                {tier.badge && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-bg">
                    {tier.badge}
                  </Badge>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {tier.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground">{tier.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    tier.highlighted ? "gradient-bg hover:opacity-90" : ""
                  }`}
                  variant={tier.highlighted ? "default" : "outline"}
                  asChild
                >
                  <Link to={tier.href}>{tier.cta}</Link>
                </Button>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border"
                >
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Have more questions? We're here to help.
              </p>
              <Button variant="outline" asChild>
                <Link to="/contact">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
