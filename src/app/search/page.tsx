"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import VantaFog from "@/components/VantaFog";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { AuroraText } from "@/components/magicui/aurora-text";

interface ResearchResult {
  summary: string;
  findings: string[];
  competitors?: string[];
  trends?: string[];
  recommendations?: string[];
}

export default function ResearcherPage() {
  const [topic, setTopic] = useState("");
  const [researchType, setResearchType] = useState("market_analysis");
  const [depth, setDepth] = useState("comprehensive");
  const [includeCompetitors, setIncludeCompetitors] = useState(true);
  const [includeTrends, setIncludeTrends] = useState(true);

  const [loading, setLoading] = useState(false);
  const [taskId, setTaskId] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");
  const [result, setResult] = useState<ResearchResult | null>(null);
  const [error, setError] = useState("");
  const pollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError("");
    setResult(null);
    setStatus("");

    try {
      const response = await axios.post(
        "https://ai-market-researcher-977121587860.europe-west1.run.app/api/v1/research/analyze",
        {
          topic,
          research_type: researchType,
          depth,
          include_competitors: includeCompetitors,
          include_trends: includeTrends,
          custom_instructions: "",
        }
      );

      console.log(response.data.status);
      

      setTaskId(response.data.task_id);
      setStatus(response.data.status);

      // Start polling
      pollIntervalRef.current = setInterval(() => {
        pollStatus(response.data.task_id);
      }, 3000);
    } catch (err) {
      console.error(err);
      setError("Failed to start research. Please try again.");
      setLoading(false);
    }
  };

  const pollStatus = async (taskId: string) => {
    try {
      const res = await axios.get(
        `https://ai-market-researcher-977121587860.europe-west1.run.app/api/v1/research/status/${taskId}`
      );

      console.log(res.data.status);
      
      setStatus(res.data.status);

      if (res.data.status === "completed") {
        clearInterval(pollIntervalRef.current!);
        fetchResults(taskId);
      }
    } catch (err) {
      console.error(err);
      setError("Error polling research status.");
      clearInterval(pollIntervalRef.current!);
      setLoading(false);
    }
  };

  const fetchResults = async (taskId: string) => {
    try {
      const res = await axios.get(
        `https://ai-market-researcher-977121587860.europe-west1.run.app/api/v1/research/results/${taskId}`
      );

      setResult(res.data);
    } catch (err) {
      console.error(err);
      setError("Error fetching research results.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
    };
  }, []);

  return (
    <div>
      <VantaFog />
      <div className="max-w-5xl mx-auto p-6 mt-10 space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
          AI <AuroraText>Market Research</AuroraText>
        </h1>
        <p className="text-gray-600">
          Get in-depth, decision-ready research reports on any topic — powered by AI.
        </p>

        {/* Input Fields */}
        <div className="grid grid-cols-1 gap-4 mt-8">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="p-4 border rounded-md"
            placeholder="Topic (e.g., Marie Gold Biscuit market analysis)"
          />
          <select
            value={researchType}
            onChange={(e) => setResearchType(e.target.value)}
            className="p-4 border rounded-md"
          >
            <option value="market_analysis">Market Analysis</option>
            <option value="competitor_analysis">Competitor Analysis</option>
            <option value="literature_review">Literature Review</option>
          </select>
          <select
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
            className="p-4 border rounded-md"
          >
            <option value="overview">Overview</option>
            <option value="comprehensive">Comprehensive</option>
          </select>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeCompetitors}
              onChange={(e) => setIncludeCompetitors(e.target.checked)}
            />
            Include Competitors
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeTrends}
              onChange={(e) => setIncludeTrends(e.target.checked)}
            />
            Include Trends
          </label>
        </div>

        {/* Generate Button */}
        <RainbowButton
          variant="outline"
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? "Researching..." : "Start Research"}
        </RainbowButton>

        {status && (
          <p className="text-gray-600">
            Status: {status === "pending" ? "Processing..." : status}
          </p>
        )}
        {error && <p className="text-red-500 font-medium">{error}</p>}

        {/* Display Results */}
        {result && (
          <div className="mt-10 space-y-6">
            <h2 className="text-2xl font-semibold">📊 Research Report</h2>
            <div className="border p-4 rounded-md shadow-sm bg-white space-y-4">
              <p><strong>Summary:</strong> {result.summary}</p>
              {result.findings && (
                <div>
                  <strong>Findings:</strong>
                  <ul className="list-disc list-inside">
                    {result.findings.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}
              {result.competitors && (
                <div>
                  <strong>Competitors:</strong>
                  <ul className="list-disc list-inside">
                    {result.competitors.map((c, idx) => (
                      <li key={idx}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}
              {result.trends && (
                <div>
                  <strong>Trends:</strong>
                  <ul className="list-disc list-inside">
                    {result.trends.map((t, idx) => (
                      <li key={idx}>{t}</li>
                    ))}
                  </ul>
                </div>
              )}
              {result.recommendations && (
                <div>
                  <strong>Recommendations:</strong>
                  <ul className="list-disc list-inside">
                    {result.recommendations.map((r, idx) => (
                      <li key={idx}>{r}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
