"use client";
import { useState } from 'react';
import JobDetailsModal from './jobDetailModel';

export default function JobCard({ job }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getScoreColor = (score) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <>
      <div
        className="p-4 bg-white shadow-md rounded-lg cursor-pointer hover:shadow-lg transition"
        onClick={() => setIsModalOpen(true)}
      >
        <h3 className="text-lg font-semibold">{job.title}</h3>
        <p className="text-gray-600">{job.company} - {job.location}</p>
        <p className="text-gray-500">{job.salary}</p>
        <div className="mt-2">
          <span className="text-sm font-medium">Match Score:</span>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
            <div
              className={`${getScoreColor(job.matchScore)} h-2.5 rounded-full`}
              style={{ width: `${job.matchScore}%` }}
            ></div>
          </div>
          <span className="text-sm">{job.matchScore}%</span>
        </div>
      </div>
      {isModalOpen && (
        <JobDetailsModal job={job} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}