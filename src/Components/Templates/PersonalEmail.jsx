import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import { FaTrashAlt } from 'react-icons/fa';

const PersonalEmail = () => {
  const [sender, setSender] = useState('');
  const [subject, setSubject] = useState('');
  const [salutation, setSalutation] = useState('Hi');
  const [closing, setClosing] = useState('Warm regards,');
  const [signature, setSignature] = useState('');
  const [recieverName, setRecieverName] = useState('');
  const [body, setBody] = useState('');
  const [recipients, setRecipients] = useState([]);
  const [newRecipient, setNewRecipient] = useState('');
  const [recordedVideo, setRecordedVideo] = useState(null);
  const [isWebcamOpen, setIsWebcamOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const recordedChunks = useRef([]);

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
      setIsRecording(false);
    };

    mediaRecorderRef.current.start();

    setTimeout(() => {
      mediaRecorderRef.current.stop();
    }, 10000);
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

  return (
    <div className="w-[80%] mx-auto p-6 mt-[120px] mb-12 rounded-lg">
      <h2 className="text-3xl font-bold mb-12 text-center">Personal Email</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        {/* Sender Email */}
        <div>
          <label className="block text-hoverButtonColor font-semibold mb-2">Your Email</label>
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
        <label className="block text-hoverButtonColor font-semibold mb-2">Email Body</label>
        <textarea
          placeholder="Email Body (Use placeholders like {Name}, {Company}, {Location})"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:border-2 focus:border-primary"
          rows="4"
        />
        
        {/* Button to generate body content with AI */}
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => setBody('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}
            className="px-6 py-2 bg-primary text-white font-semibold rounded-md shadow hover:bg-hoverButtonColor transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-primary"
          >
            Generate Body with AI
          </button>
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
              {isRecording ? 'Recording...' : 'Start 10-Second Recording'}
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
        className="w-full py-2 mt-2 bg-primary text-white font-semibold rounded-md shadow hover:bg-hoverButtonColor focus:outline-none"
      >
        Send Email
      </button>
    </div>
  );
};

export default PersonalEmail;