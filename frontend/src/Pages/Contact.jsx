import React, { useState } from 'react';
import InfoModal from '../Components/InfoModal.jsx';

function Contact() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p>
        Have questions or need help? Reach out to us!
      </p>
      <ul className="list-disc pl-5 mt-2 mb-6">
        <li>Email: support@ecommerce.com</li>
        <li>Phone: +1 234 567 890</li>
        <li>Address: 123 Main Street, City, Country</li>
      </ul>

      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        onClick={() => setModalOpen(true)}
      >
        Show Contact Info (Modal)
      </button>
      <InfoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Contact Us"
      >
        <p>
          Have questions or need help? Reach out to us!
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>Email: support@ecommerce.com</li>
          <li>Phone: +1 234 567 890</li>
          <li>Address: 123 Main Street, City, Country</li>
        </ul>
      </InfoModal>
    </div>
  );
}

export default Contact;