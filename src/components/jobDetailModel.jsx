export default function JobDetailsModal({ job, onClose }) {
    const userSkills = ["React", "JavaScript", "Next.js"]; 
    const missingSkills = job.requiredSkills.filter(
      (skill) => !userSkills.includes(skill)
    );
  
    const handleApply = () => {
      if (missingSkills.length > 0) {
        alert(`Consider learning: ${missingSkills.join(", ")} for this role.`);
      } else {
        alert("Application submitted successfully!");
      }
    };
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg max-w-lg w-full">
          <h2 className="text-xl font-bold">{job.title}</h2>
          <p className="text-gray-600">{job.company} - {job.location}</p>
          <p className="text-gray-500">{job.salary}</p>
          <h3 className="mt-4 font-semibold">Required Skills:</h3>
          <ul className="list-disc pl-5">
            {job.requiredSkills.map((skill) => (
              <li key={skill} className={userSkills.includes(skill) ? "text-green-600" : "text-red-600"}>
                {skill}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Close
            </button>
            <button
              onClick={handleApply}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    );
  }