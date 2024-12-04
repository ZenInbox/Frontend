import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaTrashAlt } from 'react-icons/fa';
import axios from "axios";
import upload from '../Utils/Upload';
import { useAuth } from '../../Context/AuthContext';

const CustomEmail = () => {

  const { currentUser } = useAuth();

  const [sender, setSender] = useState();
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [recipients, setRecipients] = useState([]);
  const [newRecipient, setNewRecipient] = useState('');
  const [attachment, setAttachment] = useState(null);


  const handleSendEmail = async () => {
    try {
      let attachmentURL = null;
      if (attachment) {
        attachmentURL = await upload(attachment, sender);
      }
      const emailData = {
        sender,
        recipients,
        subject,
        body,
        attachments: attachmentURL ? [attachmentURL] : [], 
        accessToken: localStorage.getItem("gmailAccessToken")
      };
  
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/email/send-email`, emailData);
  
      if (response.status === 200) {
        alert('Email sent successfully!');
        setSender("");
        setRecipients([]);
        setAttachment(null);
        setBody("");
        setSubject("")
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error uploading file or sending email:', error);
      alert('Error occurred while sending email.');
    }
  };



  const handleAddRecipient = () => {
    if (newRecipient.trim()) {
      setRecipients([...recipients, newRecipient.trim()]);
      setNewRecipient('');
    }
  };

  const handleAttachmentChange = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setAttachment(acceptedFiles[0]);
    }
  };

  const handleRemoveAttachment = () => {
    setAttachment(null);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleAttachmentChange,
    accept: '.jpg,.jpeg,.png,.pdf,.doc,.docx,.ppt',
  });

  const generatePreview = () => {
    return (
      <div className="p-4 my-4 bg-orange-100 border border-orange-200 rounded-md shadow">
        <h3 className="font-semibold text-orange-800">To: {recipients.join(', ')}</h3>
        <h4 className="font-semibold text-orange-600">Subject: {subject}</h4>
        <p className="text-orange-700 mt-2 whitespace-pre-wrap">{body}</p>
      </div>
    );
  };

  return (
    <div className="w-[80%] mx-auto p-6 mt-24 mb-12 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-black mb-6 text-center">Custom Email Template</h1>
      
      <div className="mb-4">
        <label className="block text-orange-700 font-semibold mb-2">Sender's Email</label>
        <input
          type="email"
          placeholder="Sender's Email"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
          className="w-full px-3 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring focus:ring-orange-200"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-orange-700 font-semibold mb-2">Subject</label>
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full px-3 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring focus:ring-orange-200"
        />
      </div>

      <div className="mb-4">
        <label className="block text-orange-700 font-semibold mb-2">Email Body</label>
        <textarea
          placeholder="Write your full email here, including salutation, closing, and signature"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full px-3 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring focus:ring-orange-200"
          rows="6"
        />
      </div>

      <h3 className="text-xl font-semibold text-orange-800 mt-6 mb-4">Recipients</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {recipients.map((recipient, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-orange-500 text-white rounded-full"
          >
            {recipient}
          </span>
        ))}
      </div>

      <div className="mb-4 p-4 bg-white border border-orange-200 rounded-md shadow-md">
        <input
          type="email"
          placeholder="Add Recipient Email"
          value={newRecipient}
          onChange={(e) => setNewRecipient(e.target.value)}
          className="w-full px-3 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring focus:ring-orange-200"
        />
        <button
          onClick={handleAddRecipient}
          className="w-full py-2 mt-2 bg-orange-600 text-white font-semibold rounded-md shadow hover:bg-orange-700 focus:outline-none"
        >
          Add Recipient
        </button>
      </div>

      {/* Attach File Section */}
      <div className="mb-4 mt-6">
        <label className="block text-orange-700 font-semibold mb-2">Attach File</label>
        <div
          {...getRootProps()}
          className="w-full px-3 py-6 border-2 border-orange-300 border-dashed rounded-md focus:outline-none focus:ring focus:ring-orange-200 cursor-pointer"
        >
          <input {...getInputProps()} />
          {attachment ? (
            <div className="flex items-center justify-between">
              <p className="mt-2 text-orange-600 font-medium">Attached: {attachment.name}</p>
              <button
                onClick={handleRemoveAttachment}  
                className="ml-4 text-gray-400"
              >
                <FaTrashAlt size={14} />
              </button>
            </div>
          ) : (
            <p className="mt-2 text-center text-orange-600">Drag & Drop a file or click to browse.</p>
          )}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-orange-800">Email Preview:</h3>
        <div className="mt-4">
          {generatePreview()}
        </div>
      </div>

      <button
        onClick={handleSendEmail}
        className="w-full py-2 mt-4 bg-orange-600 text-white font-semibold rounded-md shadow hover:bg-orange-700 focus:outline-none"
      >
        Send Email
      </button>
    </div>
  );
};

export default CustomEmail;
