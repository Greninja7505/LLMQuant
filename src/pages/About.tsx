import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Zap,
  Users,
  Lock,
  Globe,
  ArrowRight,
  Mail,
  MapPin,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "We believe your data should stay yours. That's why we build tools for local AI deployment.",
  },
  {
    icon: Zap,
    title: "Accessibility",
    description:
      "Advanced AI shouldn't require a PhD. We make powerful models accessible to everyone.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We're part of the open-source community and contribute back whenever we can.",
  },
  {
    icon: Lock,
    title: "Security",
    description:
      "Every model is verified and scanned. We take supply chain security seriously.",
  },
];

const team = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
  },
  {
    name: "Sarah Williams",
    role: "CTO",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
  },
  {
    name: "Michael Park",
    role: "Head of ML",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
  },
  {
    name: "Emma Davis",
    role: "Head of Product",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
  },
];

const certifications = [
  "SOC 2 Type II",
  "GDPR Compliant",
  "ISO 27001",
  "HIPAA Ready",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Hero Section */}
          <div className="max-w-3xl mb-20">
            <Badge className="mb-4">About Us</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Making AI Accessible,{" "}
              <span className="gradient-text">Private, and Local</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              LLMQuant was founded with a simple mission: to make powerful AI
              models accessible to everyone while keeping data private. We
              believe the future of AI is decentralized and privacy-preserving.
            </p>
          </div>

          {/* Story Section */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We started LLMQuant in 2024 after experiencing firsthand the
                    challenges of deploying AI models locally. Cloud APIs were
                    expensive, raised privacy concerns, and left organizations
                    dependent on third-party services.
                  </p>
                  <p>
                    We saw the explosion of open-source models but noticed a gap:
                    these models weren't always easy to deploy. Quantization was
                    complex, documentation was scattered, and the learning curve
                    was steep.
                  </p>
                  <p>
                    So we built LLMQuant to bridge that gap. We take the best
                    open-source models, optimize them for local deployment, and
                    provide clear documentation and support. No ML expertise
                    required.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border flex items-center justify-center">
                  <Globe className="h-24 w-24 text-primary/50" />
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-6 rounded-xl bg-card border border-border"
                >
                  <value.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="mb-4 mx-auto w-24 h-24 rounded-full bg-secondary overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Trust & Certifications */}
          <section className="mb-20">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Security & Compliance
                  </h2>
                  <p className="text-muted-foreground">
                    Enterprise-ready with industry-standard certifications
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {certifications.map((cert) => (
                    <Badge key={cert} variant="secondary" className="text-sm">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a
                      href="mailto:hello@llmquant.com"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      hello@llmquant.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">
                      San Francisco, CA
                    </span>
                  </div>
                </div>
                <Button className="mt-6 gradient-bg" asChild>
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border">
                <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
                <p className="text-muted-foreground mb-6">
                  We're always looking for talented people who share our passion
                  for privacy-first AI. Check out our open positions.
                </p>
                <Button variant="outline" asChild>
                  <a
                    href="https://careers.llmquant.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Careers
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
