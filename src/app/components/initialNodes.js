export const initialNodes = [
    {
      id: '1',
      data: { 
        label: 'Project Setup',
        showDescription: false,
        description: "Set up the project repository, configure version control (GitHub), and establish the project structure. Initialize Node.js and package management with npm or yarn."
      },
      position: { x: 25, y: 0 },
      style: { background: '#e0f7fa', border: '1px solid #0097a7' },
    },
    {
      id: '2',
      data: { 
        label: 'Frontend',
        showDescription: false,
        description: "Choose a frontend framework (React, Vue.js, Angular) and set up the project structure, create the necessary components, and install the required dependencies."
      },
      position: { x: 100, y: 100 },
      style: { background: '#ffe0b2', border: '1px solid #ff9800' },
    },
    {
      id: '3',
      data: { 
        label: 'Backend',
        showDescription: false,
        description: "Choose a backend framework (Express.js, Koa.js, Nest.js) and set up the project structure, create the necessary routes, controllers, and services. Install the required dependencies and set up the database."
      },
      position: { x: 400, y: 100 },
      style: { background: '#c8e6c9', border: '1px solid #388e3c' },
    },
    {
      id: '4',
      data: { 
        label: 'Database',
        showDescription: false,
        description: "Choose a database (MongoDB, MySQL, PostgreSQL) and set up the project structure, create the necessary tables, relationships, and models. Install the required dependencies and configure the database connection."
      },
      position: { x: 250, y: 200 },
      style: { background: '#ffccbc', border: '1px solid #f44336' },
    },
    {
      id: '5',
      data: { 
        label: 'Integration',
        showDescription: false,
        description: 'Integrate the frontend and backend components, set up routing, authentication, and authorization, and deploy the application.'
      },
      position: { x: 100, y: 300 },
      style: { background: '#ffe0b2', border: '1px solid #ff9800' },
    },
    {
      id: '6',
      data: { 
        label: 'Testing and Debugging (Frontend)',
        showDescription: false,
        description: 'Write unit tests, integration tests, and end-to-end tests for the frontend components using frameworks like Jest, Mocha, and Cypress. Debug and fix any issues encountered during testing.'
      },
      position: { x: 100, y: 400 },
      style: { background: '#ffe0b2', border: '1px solid #ff9800' },
    },
    {
      id: '7',
      data: { 
        label: 'API Development',
        showDescription: false,
        description: 'Develop APIs for communication between frontend and backend services, ensuring proper RESTful standards and implementing error handling.'
      },
      position: { x: 400, y: 300 },
      style: { background: '#c8e6c9', border: '1px solid #388e3c' },
    },
    {
      id: '8',
      data: { 
        label: 'Backend Testing',
        showDescription: false,
        description: 'Write tests for backend components using frameworks like Mocha, Jest, or Supertest. Ensure API endpoints are working as expected.'
      },
      position: { x: 400, y: 400 },
      style: { background: '#c8e6c9', border: '1px solid #388e3c' },
    },
    {
      id: '9',
      data: { 
        label: 'Database Optimization',
        showDescription: false,
        description: 'Optimize database queries, set up indexes, and perform database tuning to ensure efficiency and performance.'
      },
      position: { x: 250, y: 300 },
      style: { background: '#ffccbc', border: '1px solid #f44336' },
    },
    {
      id: '10',
      data: { 
        label: 'Data Migration',
        showDescription: false,
        description: 'Set up migration scripts for handling changes in database schema and data transformation between versions.'
      },
      position: { x: 250, y: 400 },
      style: { background: '#ffccbc', border: '1px solid #f44336', padding: '10px' },
    },
    {
      id: '11',
      data: { 
        label: 'Deployment',
        showDescription: false,
        description: 'Deploy the application using platforms like AWS, Heroku, or Vercel. Set up CI/CD pipelines to automate builds and deployments.'
      },
      position: { x: 600, y: 100 },
      style: { background: '#e0f7fa', border: '1px solid #0097a7' },
    },
    {
      id: '12',
      data: { 
        label: 'Monitoring & Logging',
        showDescription: false,
        description: 'Implement monitoring tools (e.g., New Relic, Datadog) and set up logging for error tracking and performance monitoring.'
      },
      position: { x: 600, y: 200 },
      style: { background: '#e0f7fa', border: '1px solid #0097a7' },
    },
    {
      id: '13',
      data: { 
        label: 'Maintenance & Updates',
        showDescription: false,
        description: 'Plan for regular maintenance and updates, monitor system health, and fix bugs or implement new features as needed.'
      },
      position: { x: 600, y: 300 },
      style: { background: '#e0f7fa', border: '1px solid #0097a7' },
    },
];