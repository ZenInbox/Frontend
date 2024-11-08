import React, { useState } from 'react';

const ComposeEmail = () => {
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
    <div className="w-[90%] mx-auto p-6 mt-12 mb-12 bg-blue-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Compose Email</h2>
      
      <div className="mb-4">
        <label className="block text-blue-700 font-semibold mb-2">Sender's Email</label>
        <input
          type="email"
          placeholder="Sender's Email"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
          className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-blue-700 font-semibold mb-2">Subject</label>
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label className="block text-blue-700 font-semibold mb-2">Salutation</label>
        <input
          type="text"
          placeholder="Salutation (e.g., Dear)"
          value={salutation}
          onChange={(e) => setSalutation(e.target.value)}
          className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
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
      </div>

      <div className="mb-4">
        <label className="block text-blue-700 font-semibold mb-2">Closing</label>
        <input
          type="text"
          placeholder="Closing (e.g., Best regards)"
          value={closing}
          onChange={(e) => setClosing(e.target.value)}
          className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label className="block text-blue-700 font-semibold mb-2">Signature</label>
        <input
          type="text"
          placeholder="Signature (e.g., Your Name)"
          value={signature}
          onChange={(e) => setSignature(e.target.value)}
          className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">Recipients</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {recipients.map((recipient, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-500 text-white rounded-full"
          >
            {recipient}
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

export default ComposeEmail;
