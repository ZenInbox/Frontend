import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import axios from "axios";

export default function SentEmails() {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const { currentUser } = useAuth();

  const fetchSentEmails = async () => {
    try {
      const userEmail = currentUser.email;
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/email/sent`,
        { senderEmail: userEmail }
      );
      setEmails(response.data);
    } catch (error) {
      console.error("Error fetching sent emails:", error);
    }
  };

  useEffect(() => {
    if (currentUser?.email) {
      fetchSentEmails();
    }
  }, [currentUser]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">Emails</h1>
      {emails.length > 0 ? (
        <div className="grid gap-4">
          {emails.map((email) => (
            <div
              key={email._id}
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedEmail(email)}
            >
                <h2 className="text-lg font-semibold text-gray-800">{email.subject}</h2>
                <p className="text-sm text-gray-500">From: {email.sender}</p>
                <p className="text-xs text-gray-400">
                    Sent on: {new Date(email.createdAt).toLocaleString()}
                </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No emails found.</p>
      )}

      {selectedEmail && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full max-h-[70vh] overflow-y-auto relative">
            <button
              className="absolute top-2 right-2 text-black p-2 rounded-[50%] bg-gray-500 hover:text-gray-800"
              onClick={() => setSelectedEmail(null)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-2">{selectedEmail.subject}</h2>
            <p className="text-sm text-gray-500 mb-4">
              From: {selectedEmail.sender}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              To: {selectedEmail.recipients.join(", ")}
            </p>
            <div
              className="text-gray-700 mb-4"
              dangerouslySetInnerHTML={{ __html: selectedEmail.body }}
            />
            {selectedEmail.attachments.length > 0 && (
              <div className="mb-8">
                <p className="font-bold">Attachments:</p>
                <div >
                  {selectedEmail.attachments.map((attachment, index) => (
                    <p key={index} className="mt-4">
                     <a
                        href={attachment}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2  bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                        >
                        View Attachment {index + 1}
                        </a>
                    </p>
                  ))}
                </div>
              </div>
            )}
            <p className="text-xs text-gray-400">
              Sent on: {new Date(selectedEmail.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
