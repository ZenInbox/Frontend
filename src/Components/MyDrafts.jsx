import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { io } from "socket.io-client";

export default function MyDrafts() {
  const [drafts, setDrafts] = useState([]);
  const [selectedDraft, setSelectedDraft] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const { currentUser } = useAuth();
  const [page, setPage] = useState(1);

  const fetchDrafts = async () => {
    setLoading(true);
    try {
      const userEmail = currentUser.email;
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/email/drafts`,
        { senderEmail: userEmail, page: page }
      );
      setDrafts((prevDrafts) => [
        ...prevDrafts,
        ...response.data.filter(
          (draft) => !prevDrafts.some((prev) => prev._id === draft._id)
        ),
      ]);

      if (response.data.length === 0) {
        setHasMore(false);  
      }
    } catch (error) {
      console.error("Error fetching drafts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSendDraft = async (draftId) => {
    try {
      setLoading(true);
      const draft = drafts.find((email) => email._id === draftId);
      const emailData = {
        sender: currentUser.email,
        recipients: draft.recipients,
        subject: draft.subject,
        body: draft.body,
        attachments: draft.attachments,
        emailId: draft._id,
        accessToken: localStorage.getItem("gmailAccessToken"),
      };
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/email/send-draft`,
        emailData
      );
      alert(response.data.message);
    } catch (error) {
      console.error("Error sending draft:", error);
      alert("Error sending draft.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentUser?.email) {
      fetchDrafts();
    }
  }, [currentUser, page,handleSendDraft]); 

  const loadMoreDrafts = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1); 
    }
  };


  return (
    <div className="p-6 bg-hoverColor min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center text-primary">
        My Drafts
      </h1>

      <InfiniteScroll
        dataLength={drafts.length}
        next={loadMoreDrafts}
        hasMore={hasMore}
        loader={<div className="text-center mt-4">Loading...</div>}
        endMessage={
          <div className="text-center text-gray-500 mt-4">
            No more drafts to show.
          </div>
        }
      >
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {drafts.map((draft) => (
            <div
              key={draft._id}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer hover:bg-pink-50  hover:scale-105"
              onClick={() => setSelectedDraft(draft)}
            >
              <h2 className="text-xl font-semibold text-hoverButtonColor mb-2">
                {draft.subject}
              </h2>

              <p className="text-sm text-gray-500 mb-4">
                Drafted on: {new Date(draft.createdAt).toLocaleString()}
              </p>

              <p className="text-gray-600 line-clamp-2">
                {draft.body
                  ? draft.body
                      .replace(/<br\s*\/?>/g, " ")
                      .replace(/<\/?[^>]+(>|$)/g, "")
                      .replace(/\n/g, " ")
                  : "No preview available"}
              </p>
            </div>
          ))}
        </div>
      </InfiniteScroll>

      {selectedDraft && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full max-h-[70vh] overflow-y-auto relative">
            <button
              className="absolute top-2 right-2 text-black p-2 rounded-[50%] bg-gray-500 hover:text-gray-800"
              onClick={() => setSelectedDraft(null)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-2">{selectedDraft.subject}</h2>
            <p className="text-sm text-gray-500 mb-4">
              To: {selectedDraft.recipients.join(", ")}
            </p>
            <div
              className="text-gray-700 mb-4"
              dangerouslySetInnerHTML={{ __html: selectedDraft.body }}
            />
            {selectedDraft.attachments.length > 0 && (
              <div className="mb-8">
                <p className="font-bold">Attachments:</p>
                <div>
                  {selectedDraft.attachments.map((attachment, index) => (
                    <p key={index} className="mt-4">
                      <a
                        href={attachment}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                      >
                        View Attachment {index + 1}
                      </a>
                    </p>
                  ))}
                </div>
              </div>
            )}
            <p className="text-xs text-gray-400">
              Drafted on: {new Date(selectedDraft.createdAt).toLocaleString()}
            </p>
            <button
              className="w-full py-2 mt-4 bg-orange-600 text-white font-semibold rounded-md shadow hover:bg-orange-700 focus:outline-none"
              onClick={() => handleSendDraft(selectedDraft._id)}
            >
              {loading ? "Sending..." : "Send Draft"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
