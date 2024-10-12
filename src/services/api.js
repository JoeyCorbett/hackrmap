export const submitForm = async (formData) => {
  const apiUrl = 'http://localhost:3001/submit-form';

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

      return await response.json();
  } catch (error) {
      console.error('API Error:', error);
      throw error;
  }
};