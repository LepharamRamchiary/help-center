import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white py-8 px-8 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-4 md:mb-0">
                        <h4 className="text-lg font-semibold mb-2">Abstract</h4>
                        <ul>
                            <li><a href="#" className="text-gray-400 hover:text-white">Branches</a></li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h4 className="text-lg font-semibold mb-2">Resources</h4>
                        <ul>
                            <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Releaase Notes</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Status</a></li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h4 className="text-lg font-semibold mb-2">Community</h4>
                        <ul>
                            <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Drible</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Podcast</a></li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h4 className="text-lg font-semibold mb-2">Company</h4>
                        <ul>
                            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Legal</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div className="text-center md:mt-24 mt-6 pt-4">
                        <p className="text-sm">&copy; {new Date().getFullYear()} </p>
                        <p>Abstract Studio Design, Inc.</p>
                        <p>All rigth reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
