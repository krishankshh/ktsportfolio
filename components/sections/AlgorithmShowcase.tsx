"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SortingVisualizer from "../algorithms/SortingVisualizer";
import { cn } from "@/lib/utils";

const algorithms = [
  {
    id: "bubble" as const,
    name: "Bubble Sort",
    complexity: "O(n²)",
    description: "Simple comparison-based algorithm that repeatedly steps through the list.",
  },
  {
    id: "quick" as const,
    name: "Quick Sort",
    complexity: "O(n log n)",
    description: "Efficient divide-and-conquer algorithm using pivot partitioning.",
  },
  {
    id: "merge" as const,
    name: "Merge Sort",
    complexity: "O(n log n)",
    description: "Stable divide-and-conquer algorithm that divides and merges subarrays.",
  },
];

export default function AlgorithmShowcase() {
  const [activeAlgorithm, setActiveAlgorithm] = useState<"bubble" | "quick" | "merge">(
    "bubble"
  );

  return (
    <section id="algorithms" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Algorithm Visualization</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Interactive demonstrations of sorting algorithms. Watch how different algorithms
            approach the same problem with varying efficiency.
          </p>
        </motion.div>

        {/* Algorithm Tabs */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {algorithms.map((algo) => (
            <button
              key={algo.id}
              onClick={() => setActiveAlgorithm(algo.id)}
              className={cn(
                "px-6 py-3 rounded-lg border transition-all",
                activeAlgorithm === algo.id
                  ? "bg-foreground text-background border-foreground"
                  : "bg-background text-foreground border-border hover:border-foreground/50"
              )}
            >
              <div className="font-semibold">{algo.name}</div>
              <div className="text-xs mt-1 opacity-70">{algo.complexity}</div>
            </button>
          ))}
        </div>

        {/* Algorithm Info */}
        <motion.div
          key={activeAlgorithm}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-background/50 rounded-lg border border-border"
        >
          <p className="text-sm text-secondary">
            {algorithms.find((a) => a.id === activeAlgorithm)?.description}
          </p>
        </motion.div>

        {/* Visualizer */}
        <motion.div
          key={activeAlgorithm}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-background rounded-xl border border-border p-6 shadow-lg"
        >
          <SortingVisualizer algorithm={activeAlgorithm} />
        </motion.div>

        {/* Code Snippet */}
        <motion.div
          className="mt-8 p-6 bg-primary/5 rounded-lg border border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-secondary uppercase tracking-wider">
              Implementation
            </h3>
            <span className="text-xs text-secondary font-mono">TypeScript</span>
          </div>
          <pre className="text-xs md:text-sm overflow-x-auto">
            <code className="text-secondary font-mono leading-relaxed">
              {getAlgorithmCode(activeAlgorithm)}
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}

function getAlgorithmCode(algorithm: "bubble" | "quick" | "merge"): string {
  const codes = {
    bubble: `function bubbleSort(arr: number[]): number[] {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}`,
    quick: `function quickSort(arr: number[], low = 0, high = arr.length - 1): number[] {
  if (low < high) {
    const pivot = partition(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
  }
  return arr;
}

function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}`,
    merge: `function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}`,
  };

  return codes[algorithm];
}
