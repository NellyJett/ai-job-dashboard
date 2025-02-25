Overview
This is a mini-project built as part of a Frontend Developer interview assignment. The "AI-Powered Job Match Dashboard" displays job recommendations with AI-generated match scores, allowing users to view job details and apply for jobs. It demonstrates skills in Next.js, React, Tailwind CSS, API handling, responsive design, and UI/UX principles.

**Features**:
Job List: Displays a list of job recommendations with title, company, location, salary, and match score.
Match Score Visualization: Shows job fit as a progress bar with color coding (Green: 80%+, Yellow: 50-79%, Red: <50%).
Job Details Modal: Clicking a job opens a modal with detailed info and required skills.
Apply Now: Simulates job application with alerts for missing skills and upskilling suggestions.
Responsive Design: Adapts seamlessly to mobile, tablet, and desktop screens.

**Interaction**:
   - Click a job card to view details in a modal.
   - Click "Apply Now" to simulate an application, with alerts for missing skills.

**Data Source**: 
Job listings are fetched dynamically from `/jobs.json` in the `public/` folder using Axios, simulating an API call.

**Tech Stack**:
Frontend Framework: Next.js (React)
Styling: Tailwind CSS
State Management: React useState
Data: Mock job data from a local JSON file

**requirements**:
Before running the project, ensure you have:

Node.js (v16 or later) installed
npm (comes with Node.js) 