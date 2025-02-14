import React from 'react'

const Contact = () => {
  return (
    <div>
        <section className="bg-gray-900 shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-200">Contact Us</h2>
        <p className="text-gray-200 text-lg mb-6">
          Have questions or feedback? We would love to hear from you. Fill out
          the form below or reach us through the provided contact details.
        </p>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border rounded-lg p-3 w-full focus:outline-none focus:ring focus:ring-blue-200"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border rounded-lg p-3 w-full focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring focus:ring-blue-200"
          />
          <textarea
            placeholder="Your Message"
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring focus:ring-blue-200"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>

        <div className="mt-6 space-y-2 text-white">
          <p>
            <strong>Email:</strong> XYZexample22@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> 92 876655555
          </p>
        </div>
      </section>
    </div>
  )
}

export default Contact