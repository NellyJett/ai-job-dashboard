
import JobList from '../components/jobList';
import jobsData from '../data/job.json'; //mock data

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">AI-Powered Job Match Dashboard</h1>
      <JobList jobs={jobsData} />
    </div>
  );
}