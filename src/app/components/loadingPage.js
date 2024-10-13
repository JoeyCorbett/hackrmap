import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:3001/submit-form'; // Constant for API URL

const LoadingPage = () => {
    const [loading, setLoading] = useState(true); // Track loading status
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true;

        const fetchRoadmap = async () => {
            try {
                // Retrieve form data from localStorage
                const formData = JSON.parse(localStorage.getItem('formData'));

                console.log('**DEBUG** Form Data:', formData);

                if (!formData) {
                    setErrorMessage('No form data found. Redirecting to the form page...');
                    navigate('/form');
                    return;
                }

                // Make an API request to generate the roadmap
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData), // Send the saved form data
                });

                if (!response.ok) {
                    throw new Error('Error generating roadmap');
                }

                const result = await response.json();

                if (result.roadmap) {
                    // Pass the roadmap data and navigate to the dashboard
                    localStorage.removeItem('formData');
                    navigate('/dashboard', { state: { roadmap: result.roadmap } });
                } else {
                    throw new Error('No roadmap data returned from server');
                }
            } catch (error) {
                console.error('Error:', error);
                setErrorMessage('There was an error generating your roadmap. Redirecting to the form in 3 seconds...');
                setTimeout(() => {
                    navigate('/form');
                }, 3000); // Wait 3 seconds to display the error message before redirecting
            } finally {
                if (isMounted) setLoading(false); 
            }
        };

        // Trigger roadmap generation after mounting the component
        fetchRoadmap();
        
        return () => {
            isMounted = false; // Cleanup when the component unmounts
        };
    }, [navigate]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            {loading ? (
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
                    <p className="mt-4 text-2xl">Generating your roadmap, please wait...</p>
                </div>
            ) : (
                errorMessage ? (
                    <p className="text-red-500 text-lg">{errorMessage}</p>
                ) : (
                    <p className="text-lg">Redirecting to your dashboard...</p>
                )
            )}
        </div>
    );
};

export default LoadingPage;
