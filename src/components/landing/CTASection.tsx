import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,hsla(263,70%,58%,0.2),transparent)]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Deploy Private AI?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Join thousands of companies running AI securely on their own infrastructure
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gradient-bg hover:opacity-90 text-base px-8 h-12 w-full sm:w-auto" asChild>
              <Link to="/models">
                Browse Models
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 h-12 w-full sm:w-auto" asChild>
              <Link to="/contact">
                <MessageSquare className="mr-2 h-4 w-4" />
                Talk to Sales
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
