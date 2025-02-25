"use client"; 

import { useState, useEffect } from 'react';
import axios from 'axios';
import JobList from '../components/jobList';

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('/job.json'); // Fetch data from public folder
        setJobs(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p>Loading jobs...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">AI-Powered Job Match Dashboard</h1>
      <JobList jobs={jobs} />
    </div>
  );
}