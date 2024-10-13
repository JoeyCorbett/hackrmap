import React, { useEffect } from "react";
import NavBar from "../components/navbar";
import { useLocation } from "react-router-dom"; // For receiving roadmap data
import Map from "../components/map";

const Dashboard = () => {
  const location = useLocation();
  const { roadmap } = location.state || {};

  useEffect(() => {
    if (roadmap) {
        console.log('AI-generated roadmap:', roadmap);
    }
}, [roadmap]);  // Only run this effect when the roadmap changes

  return (
    <div className="flex flex-row h-screen">
      {/* The NavBar will stay fixed, and the rest of the dashboard content will flex around it */}
      <NavBar />
      
      {/* Dashboard content - ensure it's styled to take up remaining screen space */}
      <div className="map-container">
        {/* Placeholder for the Map and other dashboard components */}
        <Map />
      </div>
    </div>
  );
};

export default Dashboard;