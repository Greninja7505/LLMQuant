import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Download, Filter } from "lucide-react";
import { models, modelFamilies, allFormats, allUseCases } from "@/data/models";

const Models = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFamily, setSelectedFamily] = useState<string>("all");
  const [selectedFormat, setSelectedFormat] = useState<string>("all");
  const [selectedUseCase, setSelectedUseCase] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("popularity");

  const filteredModels = useMemo(() => {
    let result = [...models];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (m) =>
          m.name.toLowerCase().includes(query) ||
          m.family.toLowerCase().includes(query) ||
          m.description.toLowerCase().includes(query)
      );
    }

    // Family filter
    if (selectedFamily !== "all") {
      result = result.filter((m) => m.family === selectedFamily);
    }

    // Format filter
    if (selectedFormat !== "all") {
      result = result.filter((m) => m.formats.includes(selectedFormat));
    }

    // Use case filter
    if (selectedUseCase !== "all") {
      result = result.filter((m) => m.useCases.includes(selectedUseCase));
    }

    // Sorting
    switch (sortBy) {
      case "popularity":
        result.sort((a, b) => b.downloads - a.downloads);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "newest":
        result.sort(
          (a, b) =>
            new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
        );
        break;
      case "size":
        result.sort((a, b) => {
          const sizeA = parseFloat(a.sizes[0].size);
          const sizeB = parseFloat(b.sizes[0].size);
          return sizeA - sizeB;
        });
        break;
    }

    return result;
  }, [searchQuery, selectedFamily, selectedFormat, selectedUseCase, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Model Catalog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Browse our collection of pre-quantized open-source language models.
              All models are optimized for efficient local deployment.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search models..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filter Selects */}
            <div className="flex flex-wrap gap-3">
              <Select value={selectedFamily} onValueChange={setSelectedFamily}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Family" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Families</SelectItem>
                  {modelFamilies.map((family) => (
                    <SelectItem key={family} value={family}>
                      {family}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                <SelectTrigger className="w-[130px]">
                  <SelectValue placeholder="Format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Formats</SelectItem>
                  {allFormats.map((format) => (
                    <SelectItem key={format} value={format}>
                      {format}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedUseCase} onValueChange={setSelectedUseCase}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Use Case" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Use Cases</SelectItem>
                  {allUseCases.map((useCase) => (
                    <SelectItem key={useCase} value={useCase}>
                      {useCase}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Most Popular</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="size">Smallest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
            <Filter className="h-4 w-4" />
            <span>{filteredModels.length} models found</span>
          </div>

          {/* Models Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredModels.map((model) => (
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
                    <span className="text-sm">
                      {(model.downloads / 1000).toFixed(1)}k
                    </span>
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
                  {model.useCases.slice(0, 2).map((useCase) => (
                    <Badge key={useCase} variant="outline" className="text-xs">
                      {useCase}
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

          {/* Empty State */}
          {filteredModels.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">
                No models found matching your criteria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedFamily("all");
                  setSelectedFormat("all");
                  setSelectedUseCase("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Models;
