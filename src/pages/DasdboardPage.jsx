import React, { useEffect, useState } from "react";
import axios from "axios";

const DashboardPage = ({ user }) => {
  const [tutors, setTutors] = useState([]);

  // Fetch available tutors
  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const token = localStorage.getItem("token");

const response = await axios.get("http://localhost:5000/tutors", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setTutors(response.data); // Set tutors directly from the backend response
      } catch (error) {
        console.error("Error fetching tutors:", error);
      }
    };

    fetchTutors();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4 flex justify-between">
        <h1>Welcome, {user.name}</h1>
      </header>
      <main className="p-8">
        <h2 className="text-xl font-bold mb-4">Available Tutors</h2>
        {tutors.length > 0 ? (
          <ul>
            {tutors.map((tutor) => (
              <li key={tutor.id} className="bg-white p-4 shadow-md rounded-md mb-4">
                <h3 className="font-bold">{tutor.name}</h3>
                <p>Email: {tutor.email}</p>
                <p>
                  Courses Tutoring:{" "}
                  {tutor.courses && tutor.courses.length > 0
                    ? tutor.courses.join(", ")
                    : "No courses listed"}
                </p>
                <p>
                  Availability:{" "}
                  <span
                    className={`inline-block w-3 h-3 rounded-full ${
                      tutor.is_available ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tutors available at the moment.</p>
        )}
      </main>
    </div>
  );
};

export default DashboardPage;
