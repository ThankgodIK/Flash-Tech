import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="bg-gray-800 text-white py-4 pt-10 px-6 md:px-20 lg:px-32 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="" />
          <p className="text-gray-400 mt-4">
            Finding the place you'll call home.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h5 className="text-lg font-semibold">Quick Links</h5>
          <ul className="mt-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h5 className="text-lg font-semibold">Subscribe</h5>
          <p className="text-gray-400 mt-2">
            Sign up for our newsletter to get the latest updates.
          </p>
          <form className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-l-md border border-gray-600 bg-gray-700 text-white focus:outline-none"
            />
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-md">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4">
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} T.I.K Tech. All rights reserved.
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
