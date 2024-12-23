import React, { useState , useEffect} from 'react';
import { useDropzone } from 'react-dropzone';
import { FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import upload from '../Utils/Upload';
import { useAuth } from '../../Context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FollowUpEmail = () => {
  const { currentUser } = useAuth();
  const [sender, setSender] = useState("");
  const [subject, setSubject] = useState('');
  const [salutation, setSalutation] = useState('Greetings');
  const [closing, setClosing] = useState('Looking forward to your reply.');
  const [signature, setSignature] = useState('');
  const [designation, setDesignation] = useState('');
  const [body, setBody] = useState('');
  const [recipients, setRecipients] = useState([]);
  const [newRecipient, setNewRecipient] = useState('');
  const [attachment, setAttachment] = useState(null);
  const [priority, setPriority] = useState('Normal');
  const [followUpDate, setFollowUpDate] = useState('');
  const [question, setQuestion] = useState("");
  const [generatedContent, setGeneratedContent] = useState('');
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (currentUser?.email) {
      setSender(currentUser.email);
    }
  }, [currentUser]);

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
    accept: '.jpg,.jpeg,.png,',
  });

  const generate = async () => {
    if (!question.trim()) {
      toast.error("Please enter a question or prompt.");
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
        toast.error("Failed to generate content.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error generating content. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const generatePreview = () => {
    const formattedFollowUpDate = followUpDate
      ? new Date(followUpDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : '';
  
    const formattedBody = `
  ${salutation ? salutation + ',\n' : ''}
  
  ${body}
  
  ${closing ? closing + ',\n' : ''}
  ${signature ? signature + '\n' : ''}
  ${designation ? designation + '\n' : ''}
  
  ${formattedFollowUpDate ? `Follow-Up Date: ${formattedFollowUpDate}` : ''}
  `;
  
    return (
      <div className="p-4 my-4 bg-hoverColor border border-primary rounded-md shadow">
        <h3 className="font-semibold">To: {recipients.join(', ')}</h3>
        <h4 className="font-semibold">Subject: {subject}</h4>
        <p className="mt-2 whitespace-pre-wrap">{formattedBody}</p>
      </div>
    );
  };
  
  

  const handleSubmit = () => {
    toast.success('Follow-up email sent!');
  };

  const handleSendEmail = async () => {
    try {
      if (!sender || !recipients.length || !subject || !body) {
        toast.error("Please fill in all the fields (Sender, Recipients, Subject, and Body).");
        return; 
      }
      let attachmentURL = null;
      if (attachment) {
        attachmentURL = await upload(attachment, sender);
      }

      const formattedFollowUpDate = followUpDate
      ? new Date(followUpDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : '';

      const formattedBody = `
      ${salutation ? salutation + ',<br><br>' : ''}

      ${body.replace(/\n/g, '<br>')}<br><br>

      ${closing ? closing + ',<br><br>' : ''}
      ${signature ? signature + '<br>' : ''}
      ${designation ? designation + '<br>' : ''}

      ${formattedFollowUpDate ? `Follow-Up Date: ${formattedFollowUpDate}<br>` : ''}
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
        toast.success('Email sent successfully!');
        setSender(currentUser.email);
        setRecipients([]);
        setAttachment(null);
        setBody("");
        setSubject("")
        setSalutation("")
        setFollowUpDate("")
        setPriority("Normal")
        setSalutation('Greetings');
        setClosing('Looking forward to your reply.');
        setQuestion("")
        setGeneratedContent("")
        setDesignation("")
        setSignature("")
      } else {
        toast.error('Failed to send email.');
      }
    } catch (error) {
      console.error('Error uploading file or sending email:', error);
      toast.error('Error occurred while sending email.');
    }
  };

  const handleSaveDraft = async () => {
    try {
      if (!sender || !recipients.length || !subject || !body) {
        toast.error("Please fill in all the fields (Sender, Recipients, Subject, and Body).");
        return; 
      }
      let attachmentURL = null;
      if (attachment) {
        attachmentURL = await upload(attachment, sender);
      }

      const formattedFollowUpDate = followUpDate
      ? new Date(followUpDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : '';

      const formattedBody = `
      ${salutation ? salutation + ',<br><br>' : ''}

      ${body.replace(/\n/g, '<br>')}<br><br>

      ${closing ? closing + ',<br><br>' : ''}
      ${signature ? signature + '<br>' : ''}
      ${designation ? designation + '<br>' : ''}

      ${formattedFollowUpDate ? `Follow-Up Date: ${formattedFollowUpDate}<br>` : ''}
      `;

      const emailData = {
        sender,
        recipients,
        subject,
        body: formattedBody,
        attachments: attachmentURL ? [attachmentURL] : [], 
        accessToken: localStorage.getItem("gmailAccessToken")
      };
  
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/email/save-draft`, emailData);
  
      if (response.status === 200) {
        toast.success('Draft saved successfully!');
        setSender(currentUser.email);
        setRecipients([]);
        setAttachment(null);
        setBody("");
        setSubject("")
        setSalutation("")
        setFollowUpDate("")
        setPriority("Normal")
        setSalutation('Greetings');
        setClosing('Looking forward to your reply.');
        setQuestion("")
        setGeneratedContent("")
        setDesignation("")
        setSignature("")
      } else {
        toast.error('Failed to save draft.');
      }
    } catch (error) {
      console.error('Error uploading file or sending email:', error);
      toast.error('Error occurred while sending email.');
    }
  };


  return (
    <div className="w-[80%] mx-auto p-6 mt-[120px] mb-12 rounded-lg " >
      <ToastContainer/>
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-bl from-pink-400 via-orange-400 to-pink-600 bg-clip-text text-transparent">Follow-Up Email</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-hoverButtonColor font-semibold mb-2">Sender's Email</label>
          <input
            type="email"
            placeholder="Sender's Email"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
            disabled
            className="w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:border-2 focus:border-primary"
          />
        </div>

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
          
        <div className="mt-4 flex justify-end">
          <button
            onClick={generate}
            className="px-6 py-2 bg-primary text-white font-semibold rounded-md shadow hover:bg-hoverButtonColor transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-primary"
          >
            Generate Body with AI
          </button>
        </div>
      </div>

      <div className={loading ? "mt-4" : "hidden"}>
        <p className="text-gray-500">Generating content...</p>
      </div>

      <label className="block text-hoverButtonColor font-semibold mb-2">AI Generated Content </label>
      <div className="p-4 bg-white border border-hoverColor rounded-md">
        <textarea
          className="w-full p-2 border border-primary rounded-md"
          placeholder="Generated content will appear here !  You can edit after you generate the prompt"
          value={generatedContent || ''}
          onChange={(e) => {
            const newValue = e.target.value;
            setGeneratedContent(newValue);  
            setBody(newValue);  
          }}
          rows="4"
        />
      </div>

      <div className="mb-4 flex space-x-4">
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

        <div className="flex-1">
          <label className="block text-hoverButtonColor font-semibold mb-2">
            Designation <span className="text-gray-400">(optional)</span>
          </label>
          <input
            type="text"
            placeholder="Designation (e.g., Marketing Manager)"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            className="w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:border-2 focus:border-primary"
          />
        </div>
      </div>

      <div className="mb-4 flex space-x-4 mt-8">
        <div className="flex-1">
          <label className="block text-hoverButtonColor font-semibold mb-2">Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:border-2 focus:border-primary"
          >
            <option value="High">High</option>
            <option value="Normal">Normal</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div className="flex-1 ">
          <label className="block text-hoverButtonColor font-semibold mb-2">Follow-Up Date</label>
          <input
            type="date"
            value={followUpDate}
            onChange={(e) => setFollowUpDate(e.target.value)}
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
              toast.error('Please enter a valid email address.');
            }
          }}
          className="w-full py-2 mt-2 bg-primary text-white font-semibold rounded-md shadow hover:bg-hoverButtonColor focus:outline-none"
        >
          Add Recipient
        </button>
      </div>

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

      <div className="flex gap-2">
      <button
        onClick={handleSendEmail}
        className="w-full py-2 mt-4 bg-orange-600 text-white font-semibold rounded-md shadow hover:bg-orange-700 focus:outline-none"
      >
        Send Email
      </button>
      <button
        onClick={handleSaveDraft}
        className="w-full py-2 mt-4 bg-orange-600 text-white font-semibold rounded-md shadow hover:bg-orange-700 focus:outline-none"
      >
        Save as Draft
      </button>
      {/* <button
        
        className="w-full py-2 mt-4 bg-orange-600 text-white font-semibold rounded-md shadow hover:bg-orange-700 focus:outline-none"
      >
        Schedule Email
      </button> */}
      </div>

    </div>
  );
};

export default FollowUpEmail;
