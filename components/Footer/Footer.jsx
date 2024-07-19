// components/Footer.js
import React from "react";
import { FaInstagram, FaLinkedin, FaTelegramPlane, FaTwitter, FaGithub, FaFacebookF } from "react-icons/fa";
import { MdEmail as EmailIcon } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 px-10">
            <div className="container mx-auto grid grid-cols-4 md:grid-cols-1 px-4">
                {/* Column 1 */}
                <div className="flex-1">
                    <h3 className="text-2xl font-bold">BALASANTHOSH</h3>
                    <p className="text-gray-400 my-4">
                        Contact me through email or fill out the contact form to reach me. I'd love to hear from you!
                    </p>
                    <div className="flex items-center">
                        <EmailIcon className="text-2xl mr-2" />
                        <span>Email</span>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="flex-1 px-[20%] md:px-[0%] md:my-[6%]">
                    <h3 className="text-xl font-bold mb-4 md:underline">Quick Link</h3>
                    <ul className="space-y-2 ">
                        <div className="text-gray-400 hover:text-white cursor-pointer">Home</div>
                        <div className="text-gray-400 hover:text-white cursor-pointer">About</div>
                        <div className="text-gray-400 hover:text-white cursor-pointer">Skill</div>
                        <div className="text-gray-400 hover:text-white cursor-pointer">Project</div>
                    </ul>
                </div>

                {/* Column 3 */}
                <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4 md:underline">Link</h3>
                    <ul className="space-y-2">
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div className="flex-1 md:my-[6%]">
                    <h3 className="text-xl font-bold mb-4 md:underline">Social Media</h3>
                    <div>

                        <div className="flex space-x-7 my-[3%]">
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

            </div>

            <div className="text-center text-gray-400 mt-8 md:my-5">
                © 2024 All rights reserved - BalaSanthosh
            </div>
        </footer>
    );
};

export default Footer;