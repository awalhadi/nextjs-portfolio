import { useState } from "react";

const ContactMeForm = () => {

  const [mailData, setMailData] = useState({
    name:'',
    subject:'',
    email:'',
    message:'',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mailData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessageSent(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('An error occurred while submitting the form.');
    }

    setIsLoading(false);
  };

  function inputChangeHandler(e) {
    const {name, value} = e.target;

    setMailData((prevState) => ({
      ...prevState,
      [name]: value,
  }));
  }

    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-teal-800">MeForm Me</h2>
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  onChange={inputChangeHandler}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="subject"
                  type="text"
                  placeholder="Enter your subject"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  onChange={inputChangeHandler}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  onChange={inputChangeHandler}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  onChange={inputChangeHandler}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                  id="message"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
            {messageSent && (
              <p className="text-green-600 mt-4">Message sent successfully! I'll get back to you soon.</p>
            )}
            {errorMessage && <p className="text-red-600 mt-4">{errorMessage}</p>}
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactMeForm;
  