import React, { useState } from 'react';
import InfoModal from '../Components/InfoModal.jsx';

function About() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p>
        Welcome to our Ecommerce platform! We are dedicated to providing the best products at the best prices. Our mission is to deliver quality and value to our customers with a seamless shopping experience.
      </p>
      <ul className="list-disc pl-5 mt-2 mb-6">
        <li>Wide range of products</li>
        <li>Fast and secure delivery</li>
        <li>Excellent customer support</li>
      </ul>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => setModalOpen(true)}
      >
        Show About Info (Modal)
      </button>
      <InfoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="About Us"
      >
        <p>
          Welcome to our Ecommerce platform! We are dedicated to providing the best products at the best prices. Our mission is to deliver quality and value to our customers with a seamless shopping experience.
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>Wide range of products</li>
          <li>Fast and secure delivery</li>
          <li>Excellent customer support</li>
        </ul>
      </InfoModal>
    </div>
  );
}

export default About;
