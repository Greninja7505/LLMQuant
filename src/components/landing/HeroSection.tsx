import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Shield, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsla(263,70%,58%,0.25),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_50%,hsla(217,91%,60%,0.15),transparent)]" />
      
      {/* Floating Shapes */}
      <div className="absolute top-1/4 left-[10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-[10%] w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsla(0,0%,100%,0.02)_1px,transparent_1px),linear-gradient(90deg,hsla(0,0%,100%,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/80 border border-border mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">100% Open Source</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Run AI Models Locally.{" "}
            <span className="gradient-text">Keep Your Data Private.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Download pre-optimized open-source LLMs ready for your hardware. 
            No ML expertise required.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" className="gradient-bg hover:opacity-90 text-base px-8 h-12 w-full sm:w-auto" asChild>
              <Link to="/models">
                Browse Models
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 h-12 w-full sm:w-auto" asChild>
              <Link to="/docs">
                View Documentation
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="flex items-center gap-2">
              <Download className="h-4 w-4 text-primary" />
              <span>50,000+ Downloads</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-success" />
              <span>Enterprise Trusted</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent" />
              <span>100% Open Source</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
