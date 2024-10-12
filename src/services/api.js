
export const submitForm = async (formData) => {
    const apiUrl = 'http://localhost:5000/api/submit-form'; // Update with your Node.js backend URL
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Error submitting form data');
      }
  
      return await response.json(); // The response from the Node.js backend
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  };