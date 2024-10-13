
# HackrMap - Understand flow, Hack better

## Table of Contents 
<ol>
<li to="#Inspiration"> Inspirations </li>
<li> Description</li>
<li> How we built <em> HackrMap </em>
<li> Challenges we ran into </li>
<li> Accomplishments that we're proud of</li>
<li> What we have learned so far </li>
<li> What's next for HackrMap </li>
<li> Install and Run </li>
<li> Usage instruction </li>

</ol>

## Inspiration
Hacking is fun, but daunting at the same time to many. We truly believe that people should not be scared of creating things and be more confident to "hack" for the better. For this reason, we bring out <strong> HackrMap </strong>, a solution for a Happy Hacking experience.

## Description
<strong> Hackrmap </strong> is an <strong> AI-driven web application </strong> designed to help hackers of all skill levels hit the ground running at the start of any hackathon. By inputting key details like team size, hackathon duration, skill levels, tracks, and idea details, Hackrmap  crafts a personalized, step-by-step roadmap to bring your project to life. Whether you're a seasoned hacker or just starting out, Hackrmap ensures you stay on track with tailored guidance and resources, so everyone can contribute and succeed.


We also reflect on current roadmap tools and applications, and we all think that none of them (or some we might not know?) just suggests a very general approach, or give the big picture, which is not very satisfactory and confusing to some extent. Therefore, we decided to implement OpenAI Text Completion in our app together with React Flow to streamline a whole process of hacking, or creating a technical application varied in tech stacks, tracks, and ideas! We give suggestions based on your prompts with detailed tech stacks and give useful resources for reference.

### Welcome page


### Learn more page

Take a look and get a tour of our project.


### Input form

Here, we ask question to input data for out GPT model.

### Dashboard

You can see the graph/ roadmap generated here.


### Manage Project

Your project will be saved here on submitting the input form with your roadmaps. You can delete it later.



### 
### What Tech Stacks are used? 

For this project, We use <strong>MERN Stack</strong>, in combination with <strong>CRUD</strong> operations to perform operations on data, and especially <strong>React Flow </strong> and <strong>OpenAI API</strong> to make the app better at data generation and data streamlining, thus bringing the best experience for developers - the hackers!

- <img src="https://img.icons8.com/color/48/000000/mongodb.png" width="20"/> <strong> MongoDB</strong> for database 
- <img src="https://img.icons8.com/fluency/48/000000/node-js.png" width="20"/> <strong> Express.js (Node.js)</strong> for Backend 
- <img src="https://img.icons8.com/plasticine/100/000000/react.png" width="20"/> <strong> React.js </strong> for Frontend
- <strong> TailwindCSS </strong> for styling
- <strong> OpenAI API </strong> for data generation and AI-driven functions
- <strong> React Flow </strong> for graphical visualizations

### Input Data
The program offers a user-friendly form to streamline the creation of your project roadmap, featuring the following components:
- **Team Size:** Set a maximum of eight participants to promote effective collaboration.
- **Skill Level:** Specify each participant's skill level to delegate tasks based on individual strengths.
- **Hackathon Length:** Indicate the duration of the hackathon to develop a realistic project plan within the event's timeframe.
- **Tracks:** Choose the type of project you want to pursue, along with a brief description of each selected track.
- **Sponsor Challenges:** Optionally incorporate APIs and features from the hackathon's sponsors to enhance your project.
- **Preferred Tools:** Identify your preferred tools and technologies, including programming languages and APIs, to customize the roadmap to your team's strengths.
- **Other Specifications:** Include any additional details relevant to the project, such as a predefined idea or specific requirements.

## Challenges we ran into 
- Learn new tech stacks for the first time, and work on parts that we are not experienced with, so it was challenging to learn new tech stacks while working on a whole new idea. 
WE MADE IT!
- Integrate backend and frontend since it is not pure MERN stack as we tried with new dependencies and API to steer the app towards our goals.

## Accomplishments that we're proud of

Working on the app Full-stack in 36 hours was a blast! Here are what we are very proud of.

### Generate a fullstack web application
Our team is consisted of people of different backgrounds and experience with coding and hacking. However, we made it through by learning endlessly, trying a lot to arrive at the final product within just a short amount of time.

### Roadmap generation
Once the program processes all user-provided data, it generates a detailed roadmap that outlines the essential steps to bring your project to life. The program intelligently assigns tasks to each team member based on their skill levels, ensuring that everyone plays to their strengths. Additionally, it recommends relevant technologies, skills, and resources tailored to each task, equipping participants with the necessary documentation to familiarize themselves with any specific tools they may not know.

## What we have learned so far 
During the last 1 and a half day, we did a lot and learn a lot! 
- How to develop a fullstack app using MERN stack and OpenAI API, along with some useful UI libraries.
- Use OpenAI API, how to visualize AI-generated data with graph, new tech stacks to each of us.
- Work in a team in a pressing environment.

## What's next for HackrMap 
- We hope to refine user experience with organized and personalized graph output.
- We are working on developing a feature that allows users to interact better with the outcome graph: it should not stop at look at the graph, but they can add more nodes along with their content, and we will use sorting algorithm and AI application to sort the new nodes into the existing graph.
- We want to refine the model so that it can generate the outcome faster, despite growing amount of input data.
- And more to be thought of in the future.

## Install and Run 

First, clone the repository to your local machine:

```bash
git clone <repository-url>
```
Run frontend:

```bash
cd backend
npm node server.js
```

Run backend:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage instruction


<strong> Happy coding ^^ </strong>


