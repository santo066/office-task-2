import { useEffect, useLayoutEffect } from "react";
import { Button } from "@/components/ui/button";
import { FaDollarSign } from "react-icons/fa";
import img from "../../../assets/Screenshot_83-removebg-preview.png"
import img2 from "../../../assets/Screenshot_84-removebg-preview.png"
import img3 from "../../../assets/Screenshot_85-removebg-preview.png"
import "./FeatureNew.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function FeatureNew() {
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: `.jb_image_animation_section`,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                }
            });

            timeline.from(`.jb_image_animation_section .image_tow`, {
                y: "-110%",
                duration: 0.5,
            }).from(`.jb_image_animation_section .image_three`, {
                y: "-110%",
                duration: 0.5,
            })
        });

        return () => ctx.revert();
    });

    return (
        <div className="relative py-[100px] jb_image_animation_section">
            <div className="max-w-[1520px] mx-auto h-[1965px] flex gap-32">
                <div className="flex flex-col justify-around h-[100%]">
                    <div className="max-w-[580px]">
                        <a href="#" className="bg-[#3a3a340f] py-[8px] px-[20px] rounded-[50px] flex w-max items-center justify-center text-[16px]">
                            <FaDollarSign />
                            <span>Subscription</span>
                        </a>
                        <h2 className="text-[48px]/[125%] font-semibold max-w-[580px] mt-5">Monetize Your Content Through <span className="text-[#ff2919]"> Subscriptions</span></h2>
                        <p className="text-lg font-normal max-w-[480px] mb-8 mt-8">Unlock Recurring Revenue by Offering Your Exclusive Content Behind a Paywall for Your Top Fans to Subscribe</p>
                        <Button variant={'homeNewButton'}>Sign Up</Button>
                    </div>
                    <div className="max-w-[580px]">
                        <a href="#" className="bg-[#3a3a340f] text-[16px] py-[8px] px-[20px] rounded-[50px] flex w-max items-center justify-center">
                            <FaDollarSign />
                            <span>Missuging</span>
                        </a>
                        <h2 className="text-[48px]/[125%] font-semibold max-w-[580px] mt-5">Engage with Your Fans Through Direct<span className="text-[#ff2919]"> Messaging</span></h2>
                        <p className="text-lg font-normal mb-8 mt-8">Engage with Your Fans via Direct Messages - Whether Paid or Freot</p>
                        <Button variant={'homeNewButton'}>Sign Up</Button>
                    </div>
                    <div className="max-w-[580px]">
                        <a href="#" className="bg-[#3a3a340f] text-[16px] py-[8px] px-[20px] rounded-[50px] flex w-max items-center justify-center">
                            <FaDollarSign />
                            <span>Pay-to-view</span>
                        </a>
                        <h2 className="text-[48px]/[125%] font-semibold max-w-[580px] mt-5">Monetize Your Content with <span className="text-[#ff2919]">Pay-to-View</span> Access</h2>
                        <p className="text-lg font-normal max-w-[480px] mb-8 mt-8">Unlock Recurring Revenue by Offering Your Exclusive Content Behind a Paywall for Your Top Fans to Subscribe</p>
                        <Button variant={'homeNewButton'}>Sign Up</Button>
                    </div>
                </div>
                <div className="jb_image_animation">
                    {/* animation element */}
                    <div className="image_wrapper">
                        <div className="image image_one"></div>
                        <div className="image image_tow"></div>
                        <div className="image image_three"></div>
                    </div>
                </div>
            </div>
            <img src={img2} className="absolute top-0 right-0" alt="" />
            <img src={img3} className="absolute bottom-0 left-0 h-[550px]" alt="" />
        </div>
    )
}