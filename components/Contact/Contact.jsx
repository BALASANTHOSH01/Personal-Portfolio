'use client'

// pages/contact.js
import React from "react";
import { FaInstagram, FaLinkedin, FaTelegramPlane, FaTwitter, FaGithub, FaFacebookF } from "react-icons/fa";
import { MdEmail as EmailIcon } from "react-icons/md";

const Contact = () => {
    return (
        <div id="contact" className="section min-h-screen flex items-center justify-center py-12 md:py-6 px-4 sm:px-6 lg:px-8 md:mb-[7%]">
            <div className="max-w-7xl w-full  grid grid-cols-2 md:grid-cols-1 gap-10">
                {/* Left Section */}
                <div className="text-white space-y-6">
                    <h2 className="text-[50px]  font-bold text-white text-start mb-4">Contact Me</h2>
                    <h2 className="text-4xl font-bold">Let's Get In Touch!</h2>
                    <p className="text-gray-400 w-[85%]">
                        I’m always excited to work on new projects and collaborate with other developers or clients. Whether you have a question, a project idea, or just want to say hi, feel free to reach out!
                        <br /><br />
                        As a MERN stack developer, I specialize in building robust and scalable web applications. I can help you design, develop, and deploy your web applications with the latest technologies. Let's create something amazing together!
                    </p>

                    <div className="md:flex md:items-center md:gap-5">
                        <h3 className="text-xl font-semibold mb-2">Follow Me :</h3>
                        <div className="flex space-x-7 my-[3%] md:my-[0%]">
                            <a href="#" className="text-white text-2xl">
                                <FaInstagram />
                            </a>
                            <a href="https://t.me/+918870702519" target="_blank" rel="noopener noreferrer" className="text-2xl">
                                <FaTelegramPlane />
                            </a>
                            <a href="https://github.com/BALASANTHOSH01" className="text-white text-2xl">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/balasanthosh01" className="text-white text-2xl">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Right Section */}
                <div className="bg-[var(--secondaryColor)] w-[80%] md:w-[98%] p-8 rounded-lg space-y-6 h-[60vh] md:h-[60vh]">
                    <h2 className="text-2xl font-bold text-white">Get In Touch!</h2>
                    <form className="space-y-4">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full px-4 py-2 border-b-2 border-gray-700 rounded-lg bg-transparent text-white outline-none"
                            required
                        />
                        <input
                            type="phone"
                            placeholder="Enter Your Phone"
                            className="w-full px-4 py-2 border-b-2 border-gray-700 rounded-lg bg-transparent text-white outline-none"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Enter Your Address"
                            className="w-full px-4 py-2 border-b-2 border-gray-700 rounded-lg bg-transparent text-white outline-none"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full my-[2%] py-2 px-4 bg-jade-500 text-white rounded-lg hover:bg-jade-600"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;


