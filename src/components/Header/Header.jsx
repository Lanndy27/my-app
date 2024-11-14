import { useState, useRef, useEffect } from 'react';
import { Img, Text } from "./..";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default function Header({ ...props }) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isSearchVisible, setSearchVisible] = useState(false);
    const dropdownRef = useRef(null);
    const searchRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const toggleSearchForm = () => {
        setSearchVisible(!isSearchVisible);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearchVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header
            {...props}
            className={`${props.className} flex justify-center items-center py-[18px] bg-gray-300`}
        >
            <div className="container-xs flex items-center justify-between gap-5 px-5 w-full">
                <div className="flex items-center pl-[120px]">
                <Link to="/">
                    <img src="asset/image/logo-new.svg" alt="Logo" className="w-[138px] h-[70px] object-contain" />
                </Link>
                </div>

                <div className="flex-1 flex justify-center">
                    <ul className="flex flex-wrap gap-12">
                        <li>
                            <a href="#">
                                <Text as="p" className="text-[18px] font-normal text-blk">
                                    Galeri
                                </Text>
                            </a>
                        </li>
                        <li>
                        <Link to="/Tips-Bahan">
                            <Text as="p" className="text-[18px] font-normal text-blk">
                                Tips
                            </Text>
                        </Link>
                        </li>
                        <li>
                            <a href="#">
                                <Text as="p" className="text-[18px] font-normal text-blk">
                                    Trending
                                </Text>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Text as="p" className="text-[18px] font-normal text-blk">
                                    Produk Kami
                                </Text>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="mr-2.5 flex gap-7 md:mr-0 pr-12 relative">
                    <a href="#" onClick={toggleDropdown}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" strokeLinecap ="round" strokeLinejoin="round" strokeWidth={2}>
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                <circle cx={12} cy={7} r={4}></circle>
                            </g>
                        </svg>
                    </a>

                    {isDropdownOpen && (
                        <div ref={dropdownRef} className="absolute right-0 mt-10 w-48 bg-white border border-gray-300 rounded shadow-lg z-10">
                            <ul className="py-2">
                                <li>
                                    <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profil</Link>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pengaturan</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Keluar</a>
                                </li>
                                <li>
                                    <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Login</Link>
                                </li>
                            </ul>
                        </div>
                    )}

                    <a href="#" onClick={toggleSearchForm} className="pr-[120px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24">
                            <g fill="none" fillRule="evenodd">
                                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                                <path fill="currentColor" d="M10.5 2a8.5 8.5 0 1 0 5.262 15.176l3.652 3.652a1 1 0 0 0 1.414-1.414l-3.652-3.652A8.5 8.5 0 0 0 10.5 2M4 10.5a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0"></path>
                            </g>
                        </svg>
                    </a>

                    {isSearchVisible && (
                        <form ref={searchRef} className="absolute right-0 mt-8 mr-24 w-48 bg-white border border-gray-300 rounded shadow-lg z-10">
                            <input
                                type="text"
                                placeholder="Cari..."
                                className="block w-full px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                            />
                        </form>
                    )}
                </div>
            </div>
        </header>
    );
};