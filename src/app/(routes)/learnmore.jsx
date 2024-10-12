import React from 'react';

const learnmore = () => {
    return (
        <div style={styles.container}>
            {/* Header */}
            <header style={styles.header}>
                <h1 style={styles.title}>Learn More</h1>
            </header>

            {/* Main Content */}
            <main style={styles.content}>
                <h2 style={styles.heading}>About Our Hackathon Project</h2>
                <p style={styles.paragraph}>
                    Welcome to our project! We participated in this hackathon to create something innovative and helpful.
                    On this page, you'll find more details about how our project works, the technology behind it, and what we
                    aim to achieve. We're excited to share what we’ve built and hope you find it inspiring!
                </p>
                <p style={styles.paragraph}>
                    Our project leverages various tools and technologies, including <a href="#" style={styles.link}>GitHub API</a> and <a href="#" style={styles.link}>OpenAI API</a>,
                    to generate personalized roadmaps for hackathon projects. Feel free to explore the code and learn more 
                    about how we’ve structured the app.
                </p>
                <p style={styles.paragraph}>
                    Interested in the technical details? Check out our GitHub repository for more insights into our codebase and
                    implementation strategy.
                </p>
            </main>

            {/* Footer */}
            <footer style={styles.footer}>
                <p>© 2024 Hackathon Project - Team Name</p>
            </footer>
        </div>
    );
};

// Inline CSS styles for JSX
const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
        backgroundColor: '#f4f4f4',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        backgroundColor: '#333',
        color: 'white',
        padding: '15px 0',
        textAlign: 'center',
    },
    title: {
        margin: 0,
        fontSize: '2.5em',
    },
    content: {
        padding: '20px',
        maxWidth: '800px',
        margin: '40px auto',
        backgroundColor: 'white',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        flex: 1,
    },
    heading: {
        color: '#333',
        fontSize: '2em',
        marginBottom: '20px',
    },
    paragraph: {
        lineHeight: 1.6,
        fontSize: '1.2em',
        color: '#666',
        marginBottom: '20px',
    },
    link: {
        color: '#007BFF',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
    footer: {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#333',
        color: 'white',
    },
};

export default learnmore;
