import { Button } from "@/components/ui/button";
import img from "../../../assets/Screenshot_101.png"
import img1 from "../../../assets/Screenshot_102.png"
import img2 from "../../../assets/Screenshot_103.png"
import { FaCircleArrowRight } from "react-icons/fa6";



export default function Marketing() {
    return (
        <div className="py-[100px]">
            <div className="max-w-[1640px] mx-auto">
                <h2 className="text-center text-[55px]/[120%] font-semibold max-w-[900px] mx-auto mb-[80px]">Master Online Marketing with Ease and Independence, Completely Free</h2>
                <div>
                    <div className="flex gap-[20px] justify-center">
                        <div className="bg-[#e4f1ff] w-[50%] text-center flex flex-col items-center justify-between pt-[65px] rounded-[24px]">
                            <h2 className="text-[40px]/[120%] font-semibold max-w-[350px]">Join a platform that <span className="text-[#ff2919]">cares</span></h2>
                            <p className="text-[18px] text-[#2a496b] font-normal max-w-[380px]">Where marketers and recruiters exchange insights on a daily basis</p>
                            <img src={img} alt="" />
                        </div>
                        <div className="bg-[#efe7ff] text-center flex flex-col items-center pt-[65px] rounded-[24px] px-[88px]">
                            <h2 className="text-[40px]/[120%] font-semibold max-w-[380px]">Simple & easy to get<span className="text-[#ff2919]"> started</span></h2>
                            <p className="text-[18px] text-[#2a496b] font-normal max-w-[380px]">The popular 60-minute mobile funnel crash course, moderated live</p>
                            <div className="flex items-center gap-4 clear-start my-8">
                                <FaCircleArrowRight />
                                <span className="text-[20px] font-medium">Learn More</span>
                            </div>
                            <img className="rounded-t-[24px]" src={img1} alt="" />
                        </div>
                    </div>
                    <div className="bg-[#faf1e3] flex justify-between items-center mt-[20px] rounded-[24px]">
                        <div className="max-w-[800px] text-center flex flex-col items-center">
                            <h2 className="text-[64px]/[120%] font-semibold">Sign up this month, <span className="text-[#ff2919]">earn more</span></h2>
                            <p className="max-w-[412px]">Our Head of Content, Leni, guides you through your first successful funnel</p>
                            <Button className={"mt-8"} variant={'homeNewButton'}>Sign Up</Button>
                        </div>
                        <img src={img2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}