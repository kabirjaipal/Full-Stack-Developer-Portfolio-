import React, { useState } from "react";

const Contact = () => {
  const [user, setUser] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Message: "",
  });
  /**
   *
   * @param {Event} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  const handleValue = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <section id="contact" className="bg-gray-100">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-800">Get in touch</h2>
        <p className="mt-4 text-gray-600">
          Have a question or want to work together? Send me a message!
        </p>
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="FirstName"
                className="block text-sm font-medium text-gray-700"
              >
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="FirstName"
                  required
                  onChange={handleValue}
                  value={user.FirstName}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="LastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="LastName"
                  onChange={handleValue}
                  value={user.LastName}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="Email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                onChange={handleValue}
                name="Email"
                type="email"
                required
                value={user.Email}
                className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="Message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <div className="mt-1">
              <textarea
                onChange={handleValue}
                name="Message"
                rows="4"
                required
                value={user.Message}
                className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              ></textarea>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="py-3 px-4 bg-indigo-500 transition duration-500 hover:bg-indigo-600 text-white rounded-md"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
