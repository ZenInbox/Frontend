import React, { useState, useEffect } from "react";
import { useAuth } from "../Context/AuthContext";
import axios from "axios";
import { io } from "socket.io-client";

export default function MyActivity() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const socket = io(import.meta.env.VITE_BACKEND_URL);  

  const fetchActivities = async () => {
    setLoading(true);
    try {
      const senderEmail = currentUser?.email;
      if (!senderEmail) return;

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/email/email-logs`,
        { senderEmail }
      );
      setActivities(response.data);
    } catch (error) {
      console.error("Error fetching email activities:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentUser?.email) {
      fetchActivities();
    }

    socket.on("status-update", (updatedStatus) => {
      console.log("Status updated: ", updatedStatus);
      fetchActivities(); 
    });

    return () => {
      socket.off("status-update");
    };
  }, [currentUser]);

  const getStatusClass = (status) => {
    switch (status) {
      case "delivered":
        return "bg-green-500 text-white";
      case "opened":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="p-6 bg-hoverColor min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center text-primary">
        My Email Activity
      </h1>

      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : activities.length === 0 ? (
        <div className="text-center text-gray-500">No activity found.</div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <p
                className={`relative w-1/3 left-36 px-3 text-center py-1 mb-3 rounded-full text-sm font-bold shadow-md ${getStatusClass(
                  activity.status
                )}`}
              >
                {activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
              </p>

              <h2 className="text-xl font-semibold text-hoverButtonColor mb-2">
                {activity.emailId?.subject || "No Subject"}
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Sent to: {activity.recipient}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Sent on: {new Date(activity.timestamp).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
