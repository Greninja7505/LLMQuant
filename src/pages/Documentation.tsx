import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Rocket,
  Terminal,
  FileCode,
  Server,
  HelpCircle,
  ChevronRight,
} from "lucide-react";

const sections = [
  {
    icon: Rocket,
    title: "Quick Start",
    description: "Get up and running in 5 minutes",
    href: "#quickstart",
    badge: "Start Here",
  },
  {
    icon: Terminal,
    title: "Installation",
    description: "Detailed installation guides for all platforms",
    href: "#installation",
  },
  {
    icon: FileCode,
    title: "API Reference",
    description: "Complete API documentation",
    href: "#api",
  },
  {
    icon: Server,
    title: "Deployment",
    description: "Production deployment guides",
    href: "#deployment",
  },
  {
    icon: BookOpen,
    title: "Tutorials",
    description: "Step-by-step tutorials and examples",
    href: "#tutorials",
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Common questions and answers",
    href: "#faq",
  },
];

const codeExamples = {
  ollama: `# Install Ollama (macOS/Linux)
curl -fsSL https://ollama.com/install.sh | sh

# Download and run a model
ollama run llama3

# Start chatting!
>>> Hello, how can you help me today?`,

  python: `from ollama import Client

client = Client(host='http://localhost:11434')

response = client.chat(
    model='llama3',
    messages=[{
        'role': 'user',
        'content': 'Hello!'
    }]
)

print(response['message']['content'])`,

  llamacpp: `# Build llama.cpp
git clone https://github.com/ggerganov/llama.cpp
cd llama.cpp && make

# Run a model
./main -m models/llama-3-8b-Q4_K_M.gguf \\
    -p "Hello, how are you?" \\
    -n 256`,
};

const Documentation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Documentation</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Everything you need to download, configure, and run LLMs locally.
              From quick start to advanced deployment.
            </p>
          </div>

          {/* Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {sections.map((section) => (
              <a
                key={section.title}
                href={section.href}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
              >
                <div className="flex items-start justify-between">
                  <section.icon className="h-8 w-8 text-primary mb-4" />
                  {section.badge && (
                    <Badge variant="secondary">{section.badge}</Badge>
                  )}
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {section.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {section.description}
                </p>
              </a>
            ))}
          </div>

          {/* Quick Start Section */}
          <section id="quickstart" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6">Quick Start Guide</h2>
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="prose prose-invert max-w-none">
                <h3 className="text-lg font-semibold mb-4">
                  Get running in 3 steps
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Install Ollama</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Ollama is the easiest way to run LLMs locally.
                      </p>
                      <pre className="p-4 rounded-lg bg-secondary/50 text-sm overflow-x-auto">
                        <code>curl -fsSL https://ollama.com/install.sh | sh</code>
                      </pre>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Download a Model</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Browse our catalog and download your preferred model.
                      </p>
                      <pre className="p-4 rounded-lg bg-secondary/50 text-sm overflow-x-auto">
                        <code>ollama pull llama3</code>
                      </pre>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Start Chatting</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Run the model and start interacting.
                      </p>
                      <pre className="p-4 rounded-lg bg-secondary/50 text-sm overflow-x-auto">
                        <code>ollama run llama3</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Code Examples */}
          <section id="installation" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6">Code Examples</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-primary" />
                  Ollama CLI
                </h3>
                <pre className="p-4 rounded-lg bg-secondary/50 text-xs overflow-x-auto">
                  <code>{codeExamples.ollama}</code>
                </pre>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <FileCode className="h-5 w-5 text-primary" />
                  Python
                </h3>
                <pre className="p-4 rounded-lg bg-secondary/50 text-xs overflow-x-auto">
                  <code>{codeExamples.python}</code>
                </pre>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Server className="h-5 w-5 text-primary" />
                  llama.cpp
                </h3>
                <pre className="p-4 rounded-lg bg-secondary/50 text-xs overflow-x-auto">
                  <code>{codeExamples.llamacpp}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* More Docs Coming */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border text-center">
            <h3 className="text-xl font-semibold mb-2">
              More documentation coming soon
            </h3>
            <p className="text-muted-foreground mb-6">
              We're actively expanding our documentation. Join our Discord for
              updates and community support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link to="/models">
                  Browse Models
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Discord
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;
