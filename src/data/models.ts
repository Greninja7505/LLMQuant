export interface Model {
  id: string;
  name: string;
  family: string;
  description: string;
  shortDescription: string;
  formats: string[];
  sizes: { label: string; size: string }[];
  downloads: number;
  useCases: string[];
  compatibility: string[];
  featured: boolean;
  dateAdded: string;
}

export const models: Model[] = [
  {
    id: "llama-3-8b-instruct",
    name: "Llama 3 8B Instruct",
    family: "Llama",
    description: "Meta's latest instruction-tuned model, optimized for dialogue and helpful responses. Excellent balance of capability and efficiency.",
    shortDescription: "Fast, capable instruction-following model from Meta",
    formats: ["GGUF", "GPTQ"],
    sizes: [
      { label: "Q4_K_M", size: "4.5GB" },
      { label: "Q5_K_M", size: "5.5GB" },
      { label: "Q8_0", size: "8GB" },
    ],
    downloads: 45200,
    useCases: ["Chat", "Code", "General"],
    compatibility: ["Ollama", "llama.cpp", "LM Studio"],
    featured: true,
    dateAdded: "2024-04-18",
  },
  {
    id: "mistral-7b-v03",
    name: "Mistral 7B v0.3",
    family: "Mistral",
    description: "Mistral AI's flagship 7B model with improved instruction following and extended context length. Great for production use.",
    shortDescription: "Efficient European AI with extended context",
    formats: ["GGUF", "GPTQ"],
    sizes: [
      { label: "Q4_K_M", size: "4.1GB" },
      { label: "Q5_K_M", size: "4.8GB" },
      { label: "Q8_0", size: "7.2GB" },
    ],
    downloads: 38500,
    useCases: ["Chat", "Writing", "Analysis"],
    compatibility: ["Ollama", "llama.cpp", "vLLM"],
    featured: true,
    dateAdded: "2024-05-22",
  },
  {
    id: "phi-3-mini",
    name: "Phi-3 Mini 3.8B",
    family: "Phi",
    description: "Microsoft's compact yet powerful model. Surprisingly capable for its size, perfect for resource-constrained environments.",
    shortDescription: "Compact powerhouse from Microsoft Research",
    formats: ["GGUF"],
    sizes: [
      { label: "Q4_K_M", size: "2.3GB" },
      { label: "Q5_K_M", size: "2.7GB" },
      { label: "Q8_0", size: "3.8GB" },
    ],
    downloads: 28900,
    useCases: ["Chat", "Code", "Mobile"],
    compatibility: ["Ollama", "llama.cpp", "LM Studio"],
    featured: true,
    dateAdded: "2024-04-23",
  },
  {
    id: "codellama-13b",
    name: "CodeLlama 13B Instruct",
    family: "Llama",
    description: "Specialized code generation model trained on extensive programming data. Supports multiple languages and code explanation.",
    shortDescription: "Code-focused model for developers",
    formats: ["GGUF", "GPTQ"],
    sizes: [
      { label: "Q4_K_M", size: "7.3GB" },
      { label: "Q5_K_M", size: "8.8GB" },
      { label: "Q8_0", size: "13GB" },
    ],
    downloads: 22100,
    useCases: ["Code", "Documentation", "Review"],
    compatibility: ["Ollama", "llama.cpp", "vLLM"],
    featured: true,
    dateAdded: "2024-01-15",
  },
  {
    id: "gemma-2-9b",
    name: "Gemma 2 9B",
    family: "Gemma",
    description: "Google's open model with excellent reasoning capabilities. Strong performance across a variety of benchmarks.",
    shortDescription: "Google's capable open-weight model",
    formats: ["GGUF"],
    sizes: [
      { label: "Q4_K_M", size: "5.4GB" },
      { label: "Q5_K_M", size: "6.5GB" },
      { label: "Q8_0", size: "9.5GB" },
    ],
    downloads: 19800,
    useCases: ["Chat", "Reasoning", "General"],
    compatibility: ["Ollama", "llama.cpp", "vLLM"],
    featured: false,
    dateAdded: "2024-06-27",
  },
  {
    id: "qwen2-7b",
    name: "Qwen2 7B Instruct",
    family: "Qwen",
    description: "Alibaba's multilingual model with strong Chinese and English capabilities. Excellent for international applications.",
    shortDescription: "Multilingual model with strong Asian language support",
    formats: ["GGUF", "GPTQ"],
    sizes: [
      { label: "Q4_K_M", size: "4.2GB" },
      { label: "Q5_K_M", size: "5.0GB" },
      { label: "Q8_0", size: "7.5GB" },
    ],
    downloads: 15600,
    useCases: ["Chat", "Translation", "Multilingual"],
    compatibility: ["Ollama", "llama.cpp", "vLLM"],
    featured: false,
    dateAdded: "2024-06-06",
  },
  {
    id: "deepseek-coder-6.7b",
    name: "DeepSeek Coder 6.7B",
    family: "DeepSeek",
    description: "Specialized coding model with excellent code completion and generation capabilities across 80+ programming languages.",
    shortDescription: "High-performance code generation model",
    formats: ["GGUF"],
    sizes: [
      { label: "Q4_K_M", size: "3.9GB" },
      { label: "Q5_K_M", size: "4.6GB" },
      { label: "Q8_0", size: "6.7GB" },
    ],
    downloads: 12300,
    useCases: ["Code", "Completion", "Debugging"],
    compatibility: ["Ollama", "llama.cpp", "LM Studio"],
    featured: false,
    dateAdded: "2024-02-05",
  },
  {
    id: "solar-10.7b",
    name: "Solar 10.7B Instruct",
    family: "Solar",
    description: "Upstage's high-performance model with depth-upscaling technique. Strong reasoning and instruction following.",
    shortDescription: "Korean AI lab's flagship instruction model",
    formats: ["GGUF", "GPTQ"],
    sizes: [
      { label: "Q4_K_M", size: "6.1GB" },
      { label: "Q5_K_M", size: "7.4GB" },
      { label: "Q8_0", size: "10.7GB" },
    ],
    downloads: 9800,
    useCases: ["Chat", "Reasoning", "Writing"],
    compatibility: ["Ollama", "llama.cpp", "vLLM"],
    featured: false,
    dateAdded: "2024-01-08",
  },
];

export const modelFamilies = [...new Set(models.map((m) => m.family))];
export const allFormats = [...new Set(models.flatMap((m) => m.formats))];
export const allUseCases = [...new Set(models.flatMap((m) => m.useCases))];
