"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Play, Pause, RotateCcw, Shuffle } from "lucide-react";
import { cn } from "@/lib/utils";

interface SortingVisualizerProps {
  algorithm: "bubble" | "quick" | "merge";
}

export default function SortingVisualizer({ algorithm }: SortingVisualizerProps) {
  const [array, setArray] = useState<number[]>([]);
  const [sorting, setSorting] = useState(false);
  const [comparing, setComparing] = useState<number[]>([]);
  const [sorted, setSorted] = useState<number[]>([]);
  const [speed, setSpeed] = useState(50);

  // Generate random array
  const generateArray = useCallback(() => {
    const newArray = Array.from({ length: 30 }, () =>
      Math.floor(Math.random() * 100) + 5
    );
    setArray(newArray);
    setComparing([]);
    setSorted([]);
    setSorting(false);
  }, []);

  useEffect(() => {
    generateArray();
  }, [generateArray]);

  // Sleep function for visualization
  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  // Bubble Sort Algorithm
  const bubbleSort = async () => {
    setSorting(true);
    const arr = [...array];
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        setComparing([j, j + 1]);
        await sleep(speed);

        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
        }
      }
      setSorted((prev) => [...prev, n - 1 - i]);
    }
    setSorted(Array.from({ length: n }, (_, i) => i));
    setComparing([]);
    setSorting(false);
  };

  // Quick Sort Algorithm
  const quickSort = async () => {
    setSorting(true);
    const arr = [...array];

    async function partition(low: number, high: number): Promise<number> {
      const pivot = arr[high];
      let i = low - 1;

      for (let j = low; j < high; j++) {
        setComparing([j, high]);
        await sleep(speed);

        if (arr[j] < pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
          setArray([...arr]);
        }
      }
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      setArray([...arr]);
      return i + 1;
    }

    async function quickSortHelper(low: number, high: number) {
      if (low < high) {
        const pi = await partition(low, high);
        setSorted((prev) => [...prev, pi]);
        await quickSortHelper(low, pi - 1);
        await quickSortHelper(pi + 1, high);
      }
    }

    await quickSortHelper(0, arr.length - 1);
    setSorted(Array.from({ length: arr.length }, (_, i) => i));
    setComparing([]);
    setSorting(false);
  };

  // Merge Sort Algorithm
  const mergeSort = async () => {
    setSorting(true);
    const arr = [...array];

    async function merge(left: number, mid: number, right: number) {
      const leftArr = arr.slice(left, mid + 1);
      const rightArr = arr.slice(mid + 1, right + 1);

      let i = 0,
        j = 0,
        k = left;

      while (i < leftArr.length && j < rightArr.length) {
        setComparing([k, mid + 1 + j]);
        await sleep(speed);

        if (leftArr[i] <= rightArr[j]) {
          arr[k] = leftArr[i];
          i++;
        } else {
          arr[k] = rightArr[j];
          j++;
        }
        setArray([...arr]);
        k++;
      }

      while (i < leftArr.length) {
        arr[k] = leftArr[i];
        setArray([...arr]);
        i++;
        k++;
      }

      while (j < rightArr.length) {
        arr[k] = rightArr[j];
        setArray([...arr]);
        j++;
        k++;
      }
    }

    async function mergeSortHelper(left: number, right: number) {
      if (left < right) {
        const mid = Math.floor((left + right) / 2);
        await mergeSortHelper(left, mid);
        await mergeSortHelper(mid + 1, right);
        await merge(left, mid, right);
      }
    }

    await mergeSortHelper(0, arr.length - 1);
    setSorted(Array.from({ length: arr.length }, (_, i) => i));
    setComparing([]);
    setSorting(false);
  };

  const handleSort = () => {
    if (algorithm === "bubble") bubbleSort();
    else if (algorithm === "quick") quickSort();
    else if (algorithm === "merge") mergeSort();
  };

  return (
    <div className="space-y-6">
      {/* Visualization Area */}
      <div className="h-64 flex items-end justify-center gap-1 bg-muted/30 rounded-lg p-4">
        {array.map((value, index) => (
          <motion.div
            key={index}
            className={cn(
              "flex-1 rounded-t transition-colors",
              sorted.includes(index)
                ? "bg-green-500"
                : comparing.includes(index)
                ? "bg-accent"
                : "bg-foreground/80"
            )}
            style={{ height: `${value}%` }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.3, delay: index * 0.01 }}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={handleSort}
            disabled={sorting}
            className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors inline-flex items-center gap-2"
          >
            {sorting ? (
              <>
                <Pause size={16} />
                Sorting...
              </>
            ) : (
              <>
                <Play size={16} />
                Sort
              </>
            )}
          </button>
          <button
            onClick={generateArray}
            disabled={sorting}
            className="px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-border disabled:opacity-50 disabled:cursor-not-allowed transition-colors inline-flex items-center gap-2"
          >
            <Shuffle size={16} />
            Shuffle
          </button>
        </div>

        {/* Speed Control */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-secondary">Speed:</span>
          <input
            type="range"
            min="10"
            max="200"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            disabled={sorting}
            className="w-32"
          />
        </div>
      </div>
    </div>
  );
}
