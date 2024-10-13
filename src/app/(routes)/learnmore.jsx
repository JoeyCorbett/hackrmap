import React from 'react';
import { Github, Rocket } from 'lucide-react';
import NavBar from "../components/navbar";

const LearnMore = () => {
    return (
        <div className="flex flex-col h-screen bg-gray-900 text-white font-sans">
            {/* Header and Navbar */}
            <NavBar />

            {/* Main Content */}
            <main className="flex-grow p-7 max-w-4xl mx-auto bg-[rgb(30,39,59)] shadow-2xl rounded-3xl mt-8 overflow-auto">
                <h1 className='text-5xl text-[#dbdde2] mb-8 font-bold bg-[rgb(30,39,59)]'>Learn More</h1>
                <h2 className="text-4xl text-[#a3b2d9] mb-3 font-bold">Project Roadmap Generator</h2>
                <p className="text-xl mb-3">
                    Our platform is designed specifically for hackathon participants looking to streamline their project development process. By entering key information such as:
                </p>
                <ul className="list-disc list-inside mb-3 text-base">
                    <li><strong>Team Size:</strong> Specify how many members are in your team.</li>
                    <li><strong>Individual Skill Levels:</strong> Provide insights into the expertise of each team member.</li>
                    <li><strong>Hackathon Length:</strong> Indicate the duration of the event.</li>
                    <li><strong>Tracks:</strong> Select the focus area or themes of the hackathon.</li>
                </ul>

                <p className="text-xl mb-8">
                    We leverage an advanced AI model to analyze this data and generate a comprehensive project roadmap tailored to your needs.
                </p>

                <h4 className="text-3xl text-[#a3b2d9] mb-3 font-bold">What’s Included in Your Roadmap?</h4>
                <ul className="list-disc list-inside mb-3 text-base">
                    <li><strong>Project Ideas:</strong> Discover innovative project concepts that align with your team's strengths.</li>
                    <li><strong>Step-by-Step Guidance:</strong> Get a detailed plan outlining the steps necessary to complete your project successfully.</li>
                    <li><strong>Learning Resources:</strong> Access curated resources to help you acquire the skills needed for each step.</li>
                    <li><strong>Assigned Roles:</strong> Receive role assignments based on individual skill levels, ensuring that every team member contributes effectively.</li>
                </ul>

                <p className="text-xl mb-8">
                    With our tool, you can focus on what truly matters—building a remarkable project that stands out during the hackathon!
                </p>

                <div className="flex justify-center mt-10">
                    <a href="https://github.com/JoeyCorbett/hackrmap" target = "_blank" className="flex items-center bg-[#4b8748] text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-[#3a6b38] transition duration-300">
                        <Github className="mr-2" /> View on GitHub
                    </a>
                </div>
            </main>
        </div>
    );
};

export default LearnMore;