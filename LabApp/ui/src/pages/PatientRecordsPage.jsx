import { useEffect, useState } from "react";

const PatientRecordsPage = () => {
  const [records, setRecords] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/transactions/patient", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setRecords(data);
      } catch (error) {
        console.error("Error fetching records:", error);
      }
    };
    fetchRecords();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">My Records</h2>
      <ul>
        {records.map((record) => (
          <li key={record._id} className="border p-4 mb-2">
            <p><strong>Visit Date:</strong> {new Date(record.visitDate).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientRecordsPage;
