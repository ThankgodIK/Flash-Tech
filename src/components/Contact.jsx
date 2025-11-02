import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3_FORMS_API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("");
      toast.success("Message sent successfully!");
      event.target.reset();
    } else {
      console.log("error", data);
      toast.error(data.message);
      setResult("");
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container text-center mx-auto py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-semibold mb-2 text-center">
        Get in{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Touch
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready to start your journey with us? Reach out today!
      </p>

      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto text-gray-600 pt-8"
      >
        <div className="flex flex-wrap gap-4">
          <div className="mb-4 w-full md:w-[48%] text-left">
            <label htmlFor="name" className="block text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300  rounded"
              name="Name"
              required
            />
          </div>
          <div className="mb-4 w-full md:w-[48%] text-left">
            <label htmlFor="email" className="block text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300  rounded"
              name="Email"
              required
            />
          </div>
        </div>

        <div className="my-6 w-full text-left">
          <label htmlFor="message" className="block text-gray-700">
            Your Message
          </label>
          <textarea
            id="message"
            placeholder="Your Message"
            className="w-full px-4 py-3 border border-gray-300  rounded mt-2 h-48 resize-none"
            name="Message"
            required
          ></textarea>
        </div>
        <button className="bg-blue-600 text-white px-12 py-2 rounded mb-10">
          {result ? result : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
