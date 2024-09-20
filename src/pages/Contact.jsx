import React from "react";

const Contact = () => {
  return (
    <div className="p-10 bg-gray-100 h-screen">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        If you have any questions, feel free to reach out to us at {" "}
        <a
          href="mailto:contact@example.com"
          className="text-blue-500 underline"
        >
          contact@example.com
        </a>
        .
      </p>

      <h2 className="text-3xl font-semibold mb-4">Our Team:</h2>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-2xl font-bold">Nicklaus Nathanael S Gurukinayan</h3>
          <p>Role: Ketua</p>
          <p>
            Email:{" "}
            <a
              href="mailto:member1@example.com"
              className="text-blue-500 underline"
            >
              member1@example.com
            </a>
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-2xl font-bold">Revy Pramana</h3>
          <p>Role: Developer</p>
          <p>
            Email:{" "}
            <a
              href="mailto:member2@example.com"
              className="text-blue-500 underline"
            >
              member2@example.com
            </a>
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-2xl font-bold">M. Fahmi Syahputra</h3>
          <p>Role: Developer</p>
          <p>
            Email:{" "}
            <a
              href="mailto:member3@example.com"
              className="text-blue-500 underline"
            >
              member3@example.com
            </a>
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-2xl font-bold">Rasya Nur Aqilla</h3>
          <p>Role: Developer</p>
          <p>
            Email:{" "}
            <a
              href="mailto:member4@example.com"
              className="text-blue-500 underline"
            >
              member4@example.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
