import { Img, Text, Button, Input, Heading } from "../../components";
import React, { useState } from "react"; // Import useState untuk mengelola status visibilitas kata sandi
import { Icon } from '@iconify/react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

export default function LoginRow() {
    const [showPassword, setShowPassword] = useState(false); // State untuk mengatur visibilitas kata sandi

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Mengubah status visibilitas kata sandi
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Proses login di sini, misalnya panggil API
        console.log('Login berhasil'); // Ganti dengan logika login yang sesuai
        
        // Setelah login berhasil, navigasi ke halaman home
        navigate('/');
    };

    return (
        <div className=" flex justify-center">
            <div className="max-w-[1220px] mx-auto flex w-full items-start justify-center px-2.5 md:flex-col md:px-5">
                <div className="px-[46px] gap-[42px] mt-[115px] w-[42%] flex flex-col items-start md:w-full md:px-5 md:pl-28 mt-[-69px]">
                    <Heading as="h1" className="sm:text-[38px] md:text-[44px] text-[48px] font-bold text-blk mx-28 mb-4">
                        MASUK
                    </Heading>
                    <div className="mr-3 flex flex-col items-start gap-3.5 self-stretch md:mr-0">
                        <div className="gap-[18px] flex flex-col self self-stretch w-[396px]">
                            <Input 
                                shape="square" 
                                type="email" 
                                name="email" 
                                placeholder={`E-mail`} 
                                className="w-full"
                            />
                            <Input 
                                shape="square" 
                                type="username" 
                                name="userName" 
                                placeholder={`Username`} 
                                className="w-full"
                            />
                            
                            <div className="flex items-center w-full"> {/* Menggunakan flex untuk menempatkan input dan tombol mata */}
                                <Input 
                                    shape="square" 
                                    type={showPassword ? "text" : "password"} // Mengubah tipe input berdasarkan state
                                    name="kata_sandi" 
                                    placeholder={`Kata Sandi`} 
                                    className="w-full" // Menambahkan padding kanan untuk ikon
                                />
                                <button 
                                    type="button" 
                                    onClick={togglePasswordVisibility} 
                                    className="mr-[-40px] ml-2" // Mengatur posisi tombol agar tidak memotong ukuran input
                                >
                                    {showPassword ? (
                                        <Icon icon="mdi:eye-off" width="24" height="24" /> // Ikon mata tertutup
                                    ) : (
                                        <Icon icon="mdi:eye" width="24" height="24" /> // Ikon mata terbuka
                                    )}
                                </button>
                            </div>

                            <Link to="/" className="w-full"> {/* Tambahkan link ke halaman Home */}
                                <Button color="blk" size="md" shape="square" className="px-[34px] text-white w-full mb-4">
                                    Masuk
                                </Button>
                            </Link>
                        </div>
                        <Text as="p" className="text-[12px] font-normal text-blk mx-28 mb-8 flex flex-row">
                            Belum punya akun? <a href="/daftar" className="text-blue-500 ml-1">Daftar</a>
                        </Text>
                        <Text as="p" className="text-[12px] font-normal text-blk">
                            <a href="/lupa-password" className="text-blue-500">Lupa Password</a>
                        </Text>
                    </div>
                </div>
                <div className="flex-1 flex items-start justify-end md:w-full md:flex-none md:self-stretch pr-28">
                    <Img
                        src="asset/image/login.svg"
                        alt="Image"
                        className="w-[35.3%] h-auto object-contain mt-[-488px]" />
                </div>
            </div>
        </div>
    );
}