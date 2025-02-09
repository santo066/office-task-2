import img from "../../assets/Screenshot_104 (1).png"
import logo from "../../assets/Screenshot_105.png"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaSlack } from "react-icons/fa";
import { Button } from "@/components/ui/button";



export default function FooterNew() {
    return (
        <div className=" bg-[#f7f6f2]">
            <div className="max-w-[1640px] mx-auto py-40">
                <div className="bg-[#262626] flex px-[100px] justify-between pt-11 h-[330px] rounded-[24px]">
                    <h3 className="text-[48px]/[120%] font-semibold text-white max-w-[680px]">Become Part of the Fastest Growing Community of Creators</h3>
                    <img src={img} alt="" />
                </div>
                <div className="flex justify-between items-end mt-[100px] mb-[40px]">
                    <div className="">
                        <img src={logo} alt="logo" />
                        <div className="flex gap-6">
                            <div className="bg-[#FF2919] w-[32px] h-[32px] flex items-center justify-center rounded-[8px]">
                                <FaGithub className="text-[#FFffff] text-2xl" />
                            </div>
                            <div className="bg-[#FF2919] w-[32px] h-[32px] flex items-center justify-center rounded-[8px]">
                                <FaLinkedin className="text-[#FFffff] text-2xl" />
                            </div>
                            <div className="bg-[#FF2919] w-[32px] h-[32px] flex items-center justify-center rounded-[8px]">
                                <RiTwitterXFill className="text-[#FFffff] text-2xl" />
                            </div>
                            <div className="bg-[#FF2919] w-[32px] h-[32px] flex items-center justify-center rounded-[8px]">
                                <FaSlack className="text-[#FFffff] text-2xl" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#262626] py-[30px] px-[40px] rounded-[24px]">
                        <p className="text-white">Sign up for our newsletter and join the growing Rig.dev community.</p>
                        <div className="mt-[24px] flex gap-3 ">
                            <input className="bg-[#1F1F1F] py-[12px] px-[16px] border-2 border-[#484848] rounded-[9px]" type="text" name="name" placeholder="first name" />
                            <input className="bg-[#1F1F1F] py-[12px] px-[16px] border-2 border-[#484848] rounded-[9px]" type="text" name="name" placeholder="first name" />
                            <Button className={"rounded-lg"} variant={'homeNewButton'}>Sign Up</Button>
                        </div>
                    </div>
                </div>
                <div className="pt-[40px] flex gap-6 border-t-2 border-black">
                    <span>c 2023 Rig.Dev ApS</span>
                    <span>Terms of Service</span>
                    <span>Privacy & Cookies policy</span>
                </div>
            </div>
        </div>
    )
}