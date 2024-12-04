import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import upload from '../Utils/Upload';

const ProfEmail = () => {
  const [sender, setSender] = useState('');
  const [subject, setSubject] = useState('');
  const [salutation, setSalutation] = useState('Dear');
  const [closing, setClosing] = useState('Best regards,');
  const [signature, setSignature] = useState('');
  const [designation,setDesignation] = useState('');
  const [body, setBody] = useState('');
  const [recipients, setRecipients] = useState([]);
  const [newRecipient, setNewRecipient] = useState('');
  const [attachment, setAttachment] = useState(null);
  const [question, setQuestion] = useState("");
  const [generatedContent, setGeneratedContent] = useState('');
  const [loading, setLoading] = useState(false);

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

  const handleRemoveRecipient = (index) => {
    const updatedRecipients = recipients.filter((_, i) => i !== index);
    setRecipients(updatedRecipients);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleAttachmentChange,
    accept: '.jpg,.jpeg,.png,.pdf,.doc,.docx,.ppt,.pptx',
  });

  const generate = async () => {
    if (!question.trim()) {
      alert("Please enter a question or prompt.");
      return;
    }
  
    setLoading(true);
    const zenInboxContext = `
    ZenInbox is a custom Email Sender developed by our Team. It is a website that allows users to compose *only the body* of emails based on prompts provided by the user. 
    
    You are only allowed to generate the body content in plain text. 
    
    Do not include:
    - Greetings (e.g., Dear [Name], Hello, etc.)
    - Salutations (e.g., Best regards, Sincerely, etc.)
    - Subject lines
    - Any bold or italicized text
    - Any other formatting (e.g., lists, numbers)
    - No special characters or extra line breaks
    
    Only generate the plain body text, based on the prompt provided.`
    
    try {
      const response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${import.meta.env.VITE_GEMINI_API}`, {
        contents: [{ parts: [{ text: zenInboxContext + question }] }],
      });
  
      if (response.data && response.data.candidates && response.data.candidates.length > 0) {
        const newAnswer = response.data.candidates[0].content.parts[0].text;
        setGeneratedContent(newAnswer);
        setBody(newAnswer);
      } else {
        console.log("Unexpected response structure:", response.data);
        alert("Failed to generate content.");
      }
    } catch (error) {
      console.log(error);
      alert("Error generating content. Please try again.");
    } finally {
      setLoading(false);
    }
  }


  const generatePreview = () => {
    const formattedBody = `${salutation},\n\n${body}\n\n${closing}\n${signature ? signature : ''}\n${designation}`;
    return (
      <div className="p-4 my-4 bg-hoverColor border border-primary rounded-md shadow">
        <h3 className="font-semibold ">To: {recipients.join(', ')}</h3>
        <h4 className="font-semibold ">Subject: {subject}</h4>
        <p className="mt-2 whitespace-pre-wrap">{formattedBody}</p>
      </div>
    );
  };

  const handleSendEmail = async () => {
    try {
      let attachmentURL = null;
      if (attachment) {
        attachmentURL = await upload(attachment, sender);
      }

      const formattedBody = `
      ${salutation ? salutation + ',<br><br>' : ''}

      ${body.replace(/\n/g, '<br>')}<br><br>

      ${closing ? closing + '<br><br>' : ''}
      ${signature ? signature + '<br>' : ''}
      ${designation ? designation + '<br>' : ''}
      `;

      const emailData = {
        sender,
        recipients,
        subject,
        body: formattedBody,
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
        setSalutation("Dear")
        setClosing('Best regards,');
        setQuestion("")
        setGeneratedContent("")
        
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error uploading file or sending email:', error);
      alert('Error occurred while sending email.');
    }
  };

  return (
    <div className="w-[80%] mx-auto p-6 mt-[120px] mb-12 rounded-lg">
      <h2 className="text-4xl font-bold mb-12 text-center">Professional Email</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        {/* Sender Email */}
        <div>
          <label className="block text-hoverButtonColor font-semibold mb-2">Sender's Email</label>
          <input
            type="email"
            placeholder="Sender's Email"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
            className="w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:border-2 focus:border-primary"
          />
        </div>

        {/* Salutation */}
        <div>
          <label className="block text-hoverButtonColor font-semibold mb-2">Salutation</label>
          <input
            type="text"
            placeholder="Salutation (e.g., Dear)"
            value={salutation}
            onChange={(e) => setSalutation(e.target.value)}
            className="w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:border-2 focus:border-primary"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-hoverButtonColor font-semibold mb-2">Subject</label>
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:border-2 focus:border-primary"
          />
        </div>
      </div>

      <div className="mb-4">
      <label className="block text-hoverButtonColor font-semibold mb-2">Question/Prompt</label>
      <input
        type="text"
        placeholder="Enter your question or prompt ! Yo ZenInBox will do it for you"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:border-2 focus:border-primary"
      />
          
        {/* Button to generate body content with AI */}
        <div className="mt-4 flex justify-end">
          <button
            onClick={generate}
            className="px-6 py-2 bg-primary text-white font-semibold rounded-md shadow hover:bg-hoverButtonColor transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-primary"
          >
            Generate Body with AI
          </button>
        </div>
      </div>

       {/* Loading state */}
      <div className={loading ? "mt-4" : "hidden"}>
        <p className="text-gray-500">Generating content...</p>
      </div>

      <label className="block text-hoverButtonColor font-semibold mb-2">AI Generated Content </label>
      <div className="p-4 bg-white border border-hoverColor rounded-md">
        <textarea
          className="w-full p-2 border border-primary rounded-md"
          placeholder="Generated content will appear here !  You can edit after you generate the prompt"
          value={generatedContent || ''}
          onChange={(e) => setGeneratedContent(e.target.value)}
          // readOnly
          rows="4"
        />
      </div>

      <div className="mb-4 flex space-x-4">
        {/* Closing Field */}
        <div className="flex-1">
          <label className="block text-hoverButtonColor font-semibold mb-2">Closing</label>
          <input
            type="text"
            placeholder="Closing (e.g., Best regards)"
            value={closing}
            onChange={(e) => setClosing(e.target.value)}
            className="w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:border-2 focus:border-primary"
          />
        </div>

        {/* Signature Field */}
        <div className="flex-1">
          <label className="block text-hoverButtonColor font-semibold mb-2">Signature</label>
          <input
            type="text"
            placeholder="Signature (e.g., Your Name)"
            value={signature}
            onChange={(e) => setSignature(e.target.value)}
            className="w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:border-2 focus:border-primary"
          />
        </div>

        {/* Designation Field */}
        <div className="flex-1">
        <label className="block text-hoverButtonColor font-semibold mb-2">
          Designation <span className="text-gray-400">(optional)</span>
        </label>
          <input
            type="text"
            placeholder="Designation (e.g., Your Job Title)"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            className="w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:border-2 focus:border-primary"
          />
        </div>
      </div>


      <h3 className="font-semibold text-hoverButtonColor mt-6 mb-2">Recipients</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {recipients.map((recipient, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-primary text-white rounded-full flex items-center gap-2 text-sm"
          >
            {recipient}
            <button
              onClick={() => handleRemoveRecipient(index)}
              className="text-white bg-transparent hover:bg-hoverButtonColor rounded-full p-1"
            >
              ×
            </button>
          </span>
        ))}
      </div>

      <div className="mb-4 p-4 bg-white border border-hoverColor rounded-md shadow-md">
        <input
          type="email"
          placeholder="Add Recipient Email"
          value={newRecipient}
          onChange={(e) => setNewRecipient(e.target.value)}
          className="w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:border-2 focus:border-primary"
        />
        <button
          onClick={() => {
            // Regex to check valid email format
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (emailRegex.test(newRecipient)) {
              handleAddRecipient();
            } else {
              alert('Please enter a valid email address.');
            }
          }}
          className="w-full py-2 mt-2 bg-primary text-white font-semibold rounded-md shadow hover:bg-hoverButtonColor focus:outline-none"
        >
          Add Recipient
        </button>
      </div>

      {/* Attach File Section */}
      <div className="mb-4 mt-6">
        <label className="block text-hoverButtonColor font-semibold mb-2">Attach File</label>
        <div
          {...getRootProps()}
          className="w-full px-3 py-6 border-2 border-primary border-dashed rounded-md focus:outline-none focus:ring focus:ring-blue-200 cursor-pointer"
        >
          <input {...getInputProps()} />
          {attachment ? (
            <div className="flex items-center justify-between">
              <p className="mt-2 text-blue-600 font-medium">Attached: {attachment.name}</p>
              <button
                onClick={() => setAttachment(null)}  
                className="ml-4 text-gray-400"
              >
                <FaTrashAlt size={14} /> 
              </button>
            </div>
          ) : (
            <p className="mt-2 text-center text-primary">Drag & Drop a file or click to browse.</p>
          )}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-hoverButtonColor">Email Preview:</h3>
        <div className="mt-4">
          {generatePreview()}
        </div>
      </div>

      <button
      onClick={handleSendEmail}
        className="w-full py-2 mt-2 bg-primary text-white font-semibold rounded-md shadow hover:bg-hoverButtonColor focus:outline-none"
      >
        Send Email
      </button>
    </div>
  );
};

export default ProfEmail;
