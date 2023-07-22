import React from "react";

const Contact = () => {
  return (
    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-3">Contact Details</h2>
      <ul>
        <li className="mb-2">
          <strong className="mr-1">Phone: </strong>
          <a href="tel:+821023456789" className="text-blue-600 block">
            +88 015 1521 3009
          </a>
        </li>
        <li className="mb-2">
          <strong className="mr-1">E-mail: </strong>
          <a href="mailto:awalhadi5@gmailcom" className="block">
            awalhadi5@gmailcom
          </a>
        </li>
        <li>
          <strong className="mr-1">Location: </strong>
          <span className="block">Dhaka, Bangladesh</span>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
