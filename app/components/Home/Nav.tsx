
import React from 'react';
import LogoImage from '@/public/images/logo.png';
import Link from 'next/link';
import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';
import User from '../Helper/User';

const Nav =async () => {
    const ses= await getServerSession(authOptions);
    

    return (
        <nav className="bg-white shadow-md ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <span>
                                <Image src={LogoImage} alt="logo" width={200} height={200} />
                            </span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="/about">
                                <span className="text-gray-500 hover:text-green-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors duration-300">About Us</span>
                            </Link>
                            <div className="relative inline-block text-left group">
                                <span className="text-gray-500 hover:text-green-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors duration-300">Categories</span>
                                <div className="hidden group-hover:block origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <Link href="/category1">
                                            <span className="block px-4 py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-gray-100 cursor-pointer transition-colors duration-300" role="menuitem">Category 1</span>
                                        </Link>
                                        <Link href="/category2">
                                            <span className="block px-4 py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-gray-100 cursor-pointer transition-colors duration-300" role="menuitem">Category 2</span>
                                        </Link>
                                        {/* Add more categories here */}
                                    </div>
                                </div>
                            </div>
                            <Link href="/browse-tasks">
                                <span className="text-gray-500 hover:text-green-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors duration-300">Browse Tasks</span>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                           {!ses &&(
                            <Link href="/signup">
                                <button className="inline-block px-4 py-2 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer transition-colors duration-300">
                                    Sign Up
                                </button>
                            </Link>)}
                            {ses && <User session={ses}/> }
                            <Link href="/post-task">
                            {ses &&( <button className="inline-block px-4 py-2 border border-transparent text-base font-medium rounded-full text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer transition-colors duration-300">
                                    Post a job
                                </button>)}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
