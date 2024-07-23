'use client';

import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaTelegramPlane, FaGithub } from "react-icons/fa";

const Contact = () => {
    // const [email, setEmail] = useState('');
    // const [phone, setPhone] = useState('');
    // const [address, setAddress] = useState('');
    // const [message, setMessage] = useState('');

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const res = await fetch('/api/sendEmail', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ email, phone, address }),
    //     });

    //     const data = await res.json();

    //     if (res.status === 200) {
    //         setMessage('Email sent successfully');
    //         setEmail('');
    //         setPhone('');
    //         setAddress('');
    //     } else {
    //         setMessage('Error sending email');
    //     }
    // };

    return (
        <div id="contact" className="section min-h-screen flex items-center justify-center py-12 md:py-6 px-4 sm:px-6 lg:px-8 md:mb-[7%]">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-1 gap-10">
                {/* Left Section */}
                <div className=" space-y-6">
                    <h2 className="text-[50px] font-bold text-start mb-4">Contact Me</h2>
                    <h2 className="text-4xl font-bold">Let's Get In Touch!</h2>
                    <p className="text-gray-400 w-[85%]">
                        I’m always excited to work on new projects and collaborate with other developers or clients. Whether you have a question, a project idea, or just want to say hi, feel free to reach out!
                        <br /><br />
                        As a MERN stack developer, I specialize in building robust and scalable web applications. I can help you design, develop, and deploy your web applications with the latest technologies. Let's create something amazing together!
                    </p>

                    <div className="md:flex md:items-center md:gap-5">
                        <h3 className="text-xl font-semibold mb-2">Follow Me :</h3>
                        <div className="flex space-x-7 my-[3%] md:my-[0%]">
                            <a href="https://instagram.com" className=" text-2xl" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="https://t.me/+918870702519" className="text-2xl" target="_blank" rel="noopener noreferrer">
                                <FaTelegramPlane />
                            </a>
                            <a href="https://github.com/BALASANTHOSH01" className="text-2xl" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/balasanthosh01" className=" text-2xl" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Section */}

                {/* <div className=" bg-[#f2f2f2] dark:bg-[var(--secondaryColor)] w-[80%] md:w-[98%] p-8 rounded-lg space-y-6 h-[60vh] md:h-[40vh]">
                    <h2 className="text-2xl font-bold ">Get In Touch!</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full px-4 py-2 border-b-2 border-gray-700 rounded-lg bg-transparent  outline-none"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Enter Your Phone"
                            className="w-full px-4 py-2 border-b-2 border-gray-700 rounded-lg bg-transparent  outline-none"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Enter Your Address"
                            className="w-full px-4 py-2 border-b-2 border-gray-700 rounded-lg bg-transparent text-white outline-none"
                            required
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="w-full my-[2%] py-2 px-4 bg-jade-500 text-white rounded-lg hover:bg-jade-600"
                        >
                            Send Message
                        </button>
                    </form>
                    {message && <p className="text-white">{message}</p>}
                </div> */}

            </div>
        </div>
    );
};

export default Contact;
