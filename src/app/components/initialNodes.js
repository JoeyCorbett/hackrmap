export const initialNodes = [
  {
      id: '1',
      data: { 
          label: 'Project Setup',
          description: [
              "Set up the project repository", 
              "Configure version control (GitHub)", 
              "Establish the project structure", 
              "Initialize Node.js", 
              "Package management with npm or yarn"
          ],
          resources: ["https://docs.github.com/en/repositories", "https://nodejs.org/en/docs/", "https://docs.npmjs.com/"]
      },
      position: { x: 25, y: 0 },
      style: { background: '#e0f7fa', border: '1px solid #0097a7' },
  },
  {
      id: '2',
      data: { 
          label: 'Frontend',
          description: [
              "Choose a frontend framework (React, Vue.js, Angular)", 
              "Set up the project structure", 
              "Create the necessary components", 
              "Install the required dependencies"
          ],
          resources: ["https://reactjs.org/docs/getting-started.html", "https://vuejs.org/guide/introduction.html", "https://angular.io/start"]
      },
      position: { x: 100, y: 100 },
      style: { background: '#ffe0b2', border: '1px solid #ff9800' },
  },
  {
      id: '3',
      data: { 
          label: 'Backend',
          description: [
              "Choose a backend framework (Express.js, Koa.js, Nest.js)", 
              "Set up the project structure", 
              "Create the necessary routes, controllers, and services", 
              "Install the required dependencies", 
              "Set up the database"
          ],
          resources: ["https://expressjs.com/en/starter/installing.html", "https://koajs.com/#installation", "https://docs.nestjs.com/"]
      },
      position: { x: 400, y: 100 },
      style: { background: '#c8e6c9', border: '1px solid #388e3c' },
  },
  {
      id: '4',
      data: { 
          label: 'Database',
          description: [
              "Choose a database (MongoDB, MySQL, PostgreSQL)", 
              "Set up the project structure", 
              "Create the necessary tables, relationships, and models", 
              "Install the required dependencies", 
              "Configure the database connection"
          ],
          resources: ["https://www.mongodb.com/docs/", "https://dev.mysql.com/doc/", "https://www.postgresql.org/docs/"]
      },
      position: { x: 250, y: 200 },
      style: { background: '#ffccbc', border: '1px solid #f44336' },
  },
  {
      id: '5',
      data: { 
          label: 'Integration',
          description: [
              "Integrate the frontend and backend components", 
              "Set up routing, authentication, and authorization", 
              "Deploy the application"
          ],
          resources: ["https://reactrouter.com/", "https://jwt.io/introduction", "https://vercel.com/docs"]
      },
      position: { x: 100, y: 300 },
      style: { background: '#ffe0b2', border: '1px solid #ff9800' },
  },
  {
      id: '6',
      data: { 
          label: 'Testing and Debugging (Frontend)',
          description: [
              "Write unit tests", 
              "Integration tests", 
              "End-to-end tests for the frontend components using frameworks like Jest, Mocha, and Cypress", 
              "Debug and fix any issues encountered during testing"
          ],
          resources: ["https://jestjs.io/docs/getting-started", "https://www.cypress.io/", "https://mochajs.org/"]
      },
      position: { x: 100, y: 400 },
      style: { background: '#ffe0b2', border: '1px solid #ff9800' },
  },
  {
      id: '7',
      data: { 
          label: 'API Development',
          description: [
              "Develop APIs for communication between frontend and backend services", 
              "Ensure proper RESTful standards", 
              "Implement error handling"
          ],
          resources: ["https://restfulapi.net/", "https://expressjs.com/en/guide/routing.html", "https://www.npmjs.com/package/express-async-handler"]
      },
      position: { x: 400, y: 300 },
      style: { background: '#c8e6c9', border: '1px solid #388e3c' },
  },
  {
      id: '8',
      data: { 
          label: 'Backend Testing',
          description: [
              "Write tests for backend components using frameworks like Mocha, Jest, or Supertest", 
              "Ensure API endpoints are working as expected"
          ],
          resources: ["https://jestjs.io/", "https://mochajs.org/", "https://github.com/visionmedia/supertest"]
      },
      position: { x: 400, y: 400 },
      style: { background: '#c8e6c9', border: '1px solid #388e3c' },
  },
  {
      id: '9',
      data: { 
          label: 'Database Optimization',
          description: [
              "Optimize database queries", 
              "Set up indexes", 
              "Perform database tuning to ensure efficiency and performance"
          ],
          resources: ["https://www.mongodb.com/docs/manual/indexes/", "https://www.mysqltutorial.org/mysql-index/", "https://www.postgresql.org/docs/current/indexes.html"]
      },
      position: { x: 250, y: 300 },
      style: { background: '#ffccbc', border: '1px solid #f44336' },
  },
  {
      id: '10',
      data: { 
          label: 'Data Migration',
          description: [
              "Set up migration scripts for handling changes in database schema", 
              "Data transformation between versions"
          ],
          resources: ["https://sequelize.org/docs/v6/other-topics/migrations/", "https://knexjs.org/#Migrations"]
      },
      position: { x: 250, y: 400 },
      style: { background: '#ffccbc', border: '1px solid #f44336', padding: '10px' },
  },
  {
      id: '11',
      data: { 
          label: 'Deployment',
          description: [
              "Deploy the application using platforms like AWS, Heroku, or Vercel", 
              "Set up CI/CD pipelines to automate builds and deployments"
          ],
          resources: ["https://vercel.com/docs", "https://aws.amazon.com/getting-started/", "https://devcenter.heroku.com/articles/git"]
      },
      position: { x: 600, y: 100 },
      style: { background: '#e0f7fa', border: '1px solid #0097a7' },
  },
  {
      id: '12',
      data: { 
          label: 'Monitoring & Logging',
          description: [
              "Implement monitoring tools (e.g., New Relic, Datadog)", 
              "Set up logging for error tracking and performance monitoring"
          ],
          resources: ["https://newrelic.com/", "https://www.datadoghq.com/", "https://logrocket.com/"]
      },
      position: { x: 600, y: 200 },
      style: { background: '#e0f7fa', border: '1px solid #0097a7' },
  },
  {
      id: '13',
      data: { 
          label: 'Maintenance & Updates',
          description: [
              "Plan for regular maintenance and updates", 
              "Monitor system health", 
              "Fix bugs or implement new features as needed"
          ],
          resources: ["https://sre.google/sre-book/postmortem/", "https://aws.amazon.com/premiumsupport/"]
      },
      position: { x: 600, y: 300 },
      style: { background: '#e0f7fa', border: '1px solid #0097a7' },
  },
];
