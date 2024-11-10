import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaTrashAlt } from 'react-icons/fa';

const MarkEmail = () => {
  const [sender, setSender] = useState('');
  const [subject, setSubject] = useState('');
  const [salutation, setSalutation] = useState('Greatings');
  const [closing, setClosing] = useState('Thanks!');
  const [signature, setSignature] = useState('');
  const [designation, setDesignation] = useState('');
  const [body, setBody] = useState('');
  const [recipients, setRecipients] = useState([]);
  const [newRecipient, setNewRecipient] = useState('');
  const [attachment, setAttachment] = useState(null);
  const [cta, setCta] = useState('');
  const [unsubscribe, setUnsubscribe] = useState('');

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

  const generatePreview = () => {
    return (
      <div className="p-4 my-4 bg-hoverColor border border-primary rounded-md shadow">
        <h3 className="font-semibold">To: {recipients.join(', ')}</h3>
        <h4 className="font-semibold">Subject: {subject}</h4>
        <p className="mt-2">
          {salutation},<br /><br />
          {body}<br /> <br />
          <span className="text-xl font-bold text-primary">{cta}</span><br /><br />
          {closing}<br />
          {signature && <span>{signature}<br /></span>}
          {designation && <span>{designation}</span>}<br />
          <span className="text-sm">Unsubscribe from here: {unsubscribe}</span>
        </p>
      </div>
    );
  };

  const handleSubmit = () => {
    alert('Marketing email sent!');
  };

  return (
    <div className="w-[80%] mx-auto p-6 mt-[120px] mb-12 rounded-lg">
      <h2 className="text-4xl font-bold mb-12 text-center">Marketing Email</h2>

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
        <label className="block text-hoverButtonColor font-semibold mb-2">Email Body</label>
        <textarea
          placeholder="Email Body (Include placeholders like {Name}, {Company}, {Discount})"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:border-2 focus:border-primary"
          rows="4"
        />
        
        {/* Button to generate body content with AI */}
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => setBody('Exclusive Offer: Save 20% on your next purchase at {Company}! Use code {Discount}.')}
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

        {/* Designation Field */}
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
        <label className="block text-hoverButtonColor font-semibold mb-2">Attach a Flyer</label>
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

      <div className="mb-4 mt-6 flex space-x-4">
        {/* Call to Action Section */}
        <div className="flex-1">
          <label className="block text-hoverButtonColor font-semibold mb-2">Call to Action (CTA)</label>
          <input
            type="text"
            placeholder="Call to Action (e.g., Shop Now)"
            value={cta}
            onChange={(e) => setCta(e.target.value)}
            className="w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:border-2 focus:border-primary"
          />
        </div>

        {/* Unsubscribe Section */}
        <div className="flex-1">
          <label className="block text-hoverButtonColor font-semibold mb-2">Unsubscribe Link</label>
          <input
            type="text"
            placeholder="Unsubscribe URL"
            value={unsubscribe}
            onChange={(e) => setUnsubscribe(e.target.value)}
            className="w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:border-2 focus:border-primary"
          />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-hoverButtonColor">Email Preview:</h3>
        <div className="mt-4">
          {generatePreview()}
        </div>
      </div>

      <button
        className="w-full py-2 mt-2 bg-primary text-white font-semibold rounded-md shadow hover:bg-hoverButtonColor focus:outline-none"
        onClick={handleSubmit}
      >
        Send Email
      </button>
    </div>

  );
};

export default MarkEmail;
