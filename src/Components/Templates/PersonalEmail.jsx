import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import { FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import upload from '../Utils/Upload';
import { useAuth } from '../../Context/AuthContext';


const PersonalEmail = () => {
  const { currentUser } = useAuth();
  const [sender, setSender] = useState(currentUser.email);
  const [subject, setSubject] = useState('');
  const [salutation, setSalutation] = useState('Hi');
  const [closing, setClosing] = useState('Warm regards,');
  const [signature, setSignature] = useState('');
  const [recieverName, setRecieverName] = useState('');
  const [body, setBody] = useState('');
  const [recipients, setRecipients] = useState([]);
  const [newRecipient, setNewRecipient] = useState('');
  const [recordedVideo, setRecordedVideo] = useState(null);
  const [recordedVideoFile, setRecordedVideoFile] = useState(null);
  const [isWebcamOpen, setIsWebcamOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [question, setQuestion] = useState("");
  const [generatedContent, setGeneratedContent] = useState('');
  const [loading, setLoading] = useState(false);

  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const recordedChunks = useRef([]);

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


  const handleAddRecipient = () => {
    if (newRecipient.trim()) {
      setRecipients([...recipients, newRecipient.trim()]);
      setNewRecipient('');
    }
  };

  const handleRemoveRecipient = (index) => {
    const updatedRecipients = recipients.filter((_, i) => i !== index);
    setRecipients(updatedRecipients);
  };

  const handleRemoveRecordedVideo = () => {
    setRecordedVideo(null);
  };


  const startRecording = () => {
    if (webcamRef.current && webcamRef.current.video) {
      setIsRecording(true);
      recordedChunks.current = [];
  
      const stream = webcamRef.current.video.srcObject;
      mediaRecorderRef.current = new MediaRecorder(stream, {
        mimeType: 'video/webm',
      });
  
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunks.current.push(event.data);
        }
      };
  
      mediaRecorderRef.current.onstop = () => {
        const videoBlob = new Blob(recordedChunks.current, {
          type: 'video/webm',
        });
        const videoUrl = URL.createObjectURL(videoBlob);
        setRecordedVideo(videoUrl);
        setRecordedVideoFile(videoBlob);
        setIsRecording(false);
      };
  
      mediaRecorderRef.current.start();
  
      setTimeout(() => {
        mediaRecorderRef.current.stop();
      }, 5000);
    } else {
      console.log("Webcam not initialized yet.");
    }
  };  

  const generatePreview = () => {
    const formattedBody = `${salutation} ${recieverName},\n\n${body}\n\n${closing}\n${signature ? signature : ''}`;
    return (
      <div className="p-4 my-4 bg-hoverColor border border-primary rounded-md shadow">
        <h3 className="font-semibold ">To: {recipients.join(', ')}</h3>
        <h4 className="font-semibold ">Subject: {subject}</h4>
        <p className="mt-2 whitespace-pre-wrap">{formattedBody}</p>
        {recordedVideo && (
          <div className="mt-4">
            <p className="font-semibold">Recorded Video:</p>
            <video src={recordedVideo} controls className="mt-2 rounded-md" />
            <button
              onClick={handleRemoveRecordedVideo}
              className="mt-2 px-3 py-1 bg-red-500 text-white font-semibold rounded-md flex items-center gap-2"
            >
              <FaTrashAlt /> Delete Video
            </button>
          </div>
        )}
      </div>
    );
  };

  const handleSendEmail = async () => {
    try {
      let attachmentURL = null;
      if (recordedVideoFile) {
        attachmentURL = await upload(recordedVideoFile, sender);
      }

      const formattedBody = `
      ${salutation ? salutation + ', ' : ''}${recieverName ? recieverName: ''}

      <br><br>${body.replace(/\n/g, '<br>')}<br><br>

      ${closing ? closing + '<br><br>' : ''}
      ${signature ? signature + '<br>' : ''}
      ${recieverName ? recieverName + '<br>' : ''}
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
        setSender(currentUser.email);
        setRecipients([]);
        setRecordedVideo(null);
        setBody("");
        setSubject("")
        setSalutation("Hi")
        setClosing('Warm regards');
        setQuestion("")
        setGeneratedContent("")
        setRecieverName("")
        setSignature("")
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
      <h2 className="text-4xl font-bold mb-12 text-center">Personal Email</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        {/* Sender Email */}
        <div>
          <label className="block text-hoverButtonColor font-semibold mb-2">Your Email</label>
          <input
            type="email"
            placeholder="Sender's Email"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
            disabled
            className="w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:border-2 focus:border-primary"
          />
        </div>

        {/* Salutation */}
        <div>
          <label className="block text-hoverButtonColor font-semibold mb-2">Greeting</label>
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

        {/* Input field for question */}
        <div className="mb-4">
          <label className="block text-hoverButtonColor font-semibold mb-2">Question/Prompt</label>
          <input
            type="text"
            placeholder="Enter your question or prompt ! Yo ZenInBox will do it for you"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:border-2 focus:border-primary"
          />
        </div>

        {/* Button to generate body content with AI */}
        <div className="mt-4 flex justify-end">
          <button
            className="px-6 py-2 bg-primary text-white font-semibold rounded-md shadow hover:bg-hoverButtonColor transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-primary"
            onClick={generate}
          >
            Generate
          </button>
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

        {/* recieverName Field */}
        <div className="flex-1">
        <label className="block text-hoverButtonColor font-semibold mb-2">
          Reciever Relation <span className="text-gray-400">(optional)</span>
        </label>
          <input
            type="text"
            placeholder="(e.g., Dad, Mom etc.)"
            value={recieverName}
            onChange={(e) => setRecieverName(e.target.value)}
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

       <div className="mt-6">
        <label className="block text-hoverButtonColor font-semibold mb-2">Attach a Snap</label>
        <button
          onClick={() => setIsWebcamOpen(true)}
          className="w-full px-3 py-6 border-2 border-primary border-dotted rounded-md bg-white text-primary font-semibold focus:outline-none focus:ring focus:ring-blue-200"
        >
          Open Webcam to Record Video
        </button>

        {isWebcamOpen && (
          <div className="mt-4">
            <Webcam
              audio={true}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="rounded-md border-2 border-primary"
            />
            <button
              onClick={startRecording}
              disabled={isRecording}
              className={`mt-4 px-4 py-2 ${
                isRecording ? 'bg-gray-400' : 'bg-primary'
              } text-white font-semibold rounded-md shadow hover:bg-hoverButtonColor focus:outline-none`}
            >
              {isRecording ? 'Recording...' : 'Start 5-Second Recording'}
            </button>
            <button
              onClick={() => setIsWebcamOpen(false)}
              className="ml-2 mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded-md shadow hover:bg-red-700 focus:outline-none"
            >
              Close Webcam
            </button>
          </div>
        )}
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

export default PersonalEmail;
