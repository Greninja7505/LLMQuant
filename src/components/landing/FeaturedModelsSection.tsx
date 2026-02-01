import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download } from "lucide-react";
import { models } from "@/data/models";

export function FeaturedModelsSection() {
  const featuredModels = models.filter((m) => m.featured).slice(0, 4);

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">Featured Models</h2>
            <p className="text-muted-foreground text-lg">
              Popular, pre-optimized models ready for local deployment
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/models">
              View All Models
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredModels.map((model) => (
            <div
              key={model.id}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {model.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{model.family}</p>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Download className="h-4 w-4" />
                  <span className="text-sm">{(model.downloads / 1000).toFixed(1)}k</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {model.shortDescription}
              </p>

              {/* Formats */}
              <div className="flex flex-wrap gap-2 mb-4">
                {model.formats.map((format) => (
                  <Badge key={format} variant="secondary" className="text-xs">
                    {format}
                  </Badge>
                ))}
              </div>

              {/* Sizes */}
              <div className="flex items-center gap-2 mb-6 text-sm">
                <span className="text-muted-foreground">Sizes:</span>
                {model.sizes.map((size, i) => (
                  <span key={size.label}>
                    <span className="text-foreground">{size.size}</span>
                    {i < model.sizes.length - 1 && (
                      <span className="text-muted-foreground mx-1">|</span>
                    )}
                  </span>
                ))}
              </div>

              {/* Action */}
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to={`/models/${model.id}`}>View Details</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
