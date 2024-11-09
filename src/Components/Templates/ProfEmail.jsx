import React, { useState } from 'react';

const ProfEmail = () => {
  const [sender, setSender] = useState('');
  const [subject, setSubject] = useState('');
  const [salutation, setSalutation] = useState('Dear');
  const [closing, setClosing] = useState('Best regards,');
  const [signature, setSignature] = useState('');
  const [body, setBody] = useState('');
  const [recipients, setRecipients] = useState([]);
  const [newRecipient, setNewRecipient] = useState('');
  const [attachment, setAttachment] = useState(null);

  const handleAddRecipient = () => {
    if (newRecipient.trim()) {
      setRecipients([...recipients, newRecipient.trim()]);
      setNewRecipient('');
    }
  };

  const handleAttachmentChange = (e) => {
    setAttachment(e.target.files[0]);
  };

  const handleRemoveRecipient = (index) => {
    const updatedRecipients = recipients.filter((_, i) => i !== index);
    setRecipients(updatedRecipients);
  };

  const generatePreview = () => {
    const formattedBody = `${salutation},\n\n${body}\n\n${closing}\n${signature ? signature : ''}`;
    return (
      <div className="p-4 my-4 bg-blue-50 border border-blue-200 rounded-md shadow">
        <h3 className="font-semibold text-blue-700">To: {recipients.join(', ')}</h3>
        <h4 className="font-semibold text-blue-600">Subject: {subject}</h4>
        <p className="text-blue-800 mt-2 whitespace-pre-wrap">{formattedBody}</p>
      </div>
    );
  };

  return (
    <div className="w-[80%] mx-auto p-6 mt-[120px] mb-12 rounded-lg">
      <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Professional Email</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        {/* Sender Email */}
        <div>
          <label className="block text-blue-700 font-semibold mb-2">Sender's Email</label>
          <input
            type="email"
            placeholder="Sender's Email"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
            className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Salutation */}
        <div>
          <label className="block text-blue-700 font-semibold mb-2">Salutation</label>
          <input
            type="text"
            placeholder="Salutation (e.g., Dear)"
            value={salutation}
            onChange={(e) => setSalutation(e.target.value)}
            className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-blue-700 font-semibold mb-2">Subject</label>
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-blue-700 font-semibold mb-2">Email Body</label>
        <textarea
          placeholder="Email Body (Use placeholders like {Name}, {Company}, {Location})"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          rows="4"
        />
        
        {/* Button to generate body content with AI */}
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => setBody('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-blue-300"
          >
            Generate Body with AI
          </button>
        </div>
      </div>

      <div className="mb-4 flex space-x-4">
        {/* Closing Field */}
        <div className="flex-1">
          <label className="block text-blue-700 font-semibold mb-2">Closing</label>
          <input
            type="text"
            placeholder="Closing (e.g., Best regards)"
            value={closing}
            onChange={(e) => setClosing(e.target.value)}
            className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Signature Field */}
        <div className="flex-1">
          <label className="block text-blue-700 font-semibold mb-2">Signature</label>
          <input
            type="text"
            placeholder="Signature (e.g., Your Name)"
            value={signature}
            onChange={(e) => setSignature(e.target.value)}
            className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
      </div>


      <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">Recipients</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {recipients.map((recipient, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-500 text-white rounded-full flex items-center gap-2"
            >
              {recipient}
              <button
                onClick={() => handleRemoveRecipient(index)}
                className="text-white bg-transparent hover:bg-blue-700 rounded-full p-1"
              >
                ×
              </button>
            </span>
          ))}
        </div>

        <div className="mb-4 p-4 bg-white border border-blue-200 rounded-md shadow-md">
          <input
            type="email"
            placeholder="Add Recipient Email"
            value={newRecipient}
            onChange={(e) => setNewRecipient(e.target.value)}
            className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
          <button
            onClick={handleAddRecipient}
            className="w-full py-2 mt-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none"
          >
            Add Recipient
          </button>
        </div>


      <div className="mb-4 mt-6">
        <label className="block text-blue-700 font-semibold mb-2">Attach File</label>
        <input
          type="file"
          onChange={handleAttachmentChange}
          className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
        {attachment && (
          <p className="mt-2 text-blue-600 font-medium">Attached: {attachment.name}</p>
        )}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-blue-800">Email Preview:</h3>
        <div className="mt-4">
          {generatePreview()}
        </div>
      </div>

      <button
        className="w-full py-2 mt-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none"
      >
        Send Email
      </button>
    </div>
  );
};

export default ProfEmail;
