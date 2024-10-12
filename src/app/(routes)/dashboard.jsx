// src/dashboard.js
import React, { useState } from "react";
import NavBar from "../components/navbar";
import { generateRoadmap } from "../../services/openAiService"; // Correct import
import Map from "../components/map";


const Dashboard = () => {
  const [roadmap, setRoadmap] = useState(""); // For the generated roadmap from OpenAI
  const [loading, setLoading] = useState(false); // Loading state

  // Handle the roadmap generation using OpenAI
  const handleGenerateRoadmap = async () => {
    setLoading(true);
    try {
      const prompt = `Generate a roadmap based on the provided project details.`; // Modify the prompt as needed
      const generatedRoadmap = await generateRoadmap(prompt); // Call your OpenAI function

      // Update roadmap text and add new nodes to the flow
      setRoadmap(generatedRoadmap);
    } catch (error) {
      setRoadmap("Error generating roadmap");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
    
        <h1 className="p-6 pb-2 text-white text-4xl font-bold bg-gray-900">Generate Your Project Roadmap</h1>
        
    
    <div className="flex h-screen bg-gray-900 p-5">
        
      {/* Sidebar */}
      <NavBar />

      <Map />
    </div>
    </div>
  );
};

export default Dashboard;
