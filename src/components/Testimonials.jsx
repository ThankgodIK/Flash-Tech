import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "motion/react";

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-semibold mb-2 text-center">
        Customer{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Here's what our customers have to say:
      </p>

      <div className="flex flex-wrap justify-center md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Testimonial 1 */}
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-[340px] px-8 py-12 border rounded  shadow-lg text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.alt}
              className="w-20 rounded-full mx-auto mb-4"
            />
            <h2 className="italic text-gray-600  text-xl font-medium mt-4">
              "{testimonial.name}"
            </h2>
            <p className="font-semibold mb-4 text-gray-500 text-sm">
              - {testimonial.title}
            </p>

            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {Array.from({ length: testimonial.rating }, (item, index) => (
                <img src={assets.star_icon} alt="" key={index} />
              ))}
            </div>
            <p className="text-gray-500 mt-4">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
