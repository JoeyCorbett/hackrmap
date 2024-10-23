import React, { useEffect, useState } from "react";
import NavBar from "../components/navbar";
import { useLocation } from "react-router-dom"; // For receiving roadmap data
import Map from "../components/map";
import { initialEdges } from '../components/edges';

const Dashboard = () => {
  const location = useLocation();
  const { roadmap } = location.state || {};
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    if (roadmap) {
        console.log('AI-generated roadmap:', roadmap);

        setNodes(roadmap);
        console.log("nodes being passed to Map:", roadmap)
    }
}, [roadmap]);  // Only run this effect when the roadmap changes

  return (
    <div className="flex flex-row h-screen">
      <NavBar />
      <div className="map-container">
        <Map nodes={nodes} edges={initialEdges}/>
      </div>
    </div>
  );
};

export default Dashboard;