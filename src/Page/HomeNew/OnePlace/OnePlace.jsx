import img from "../../../assets/Screenshot_92.png";
import img1 from "../../../assets/Screenshot_93.png";
import img2 from "../../../assets/Screenshot_94.png";
import img3 from "../../../assets/Screenshot_95.png";
import img4 from "../../../assets/Screenshot_98.png";
import img5 from "../../../assets/Screenshot_96 (1).png";
import img6 from "../../../assets/Screenshot_97.png";



export default function OnePlace() {
    return (
        <div className="max-w-[1640px] mx-auto flex flex-col gap-8 py-[150px]">
            <div className="text-center mb-[100px]">
                <h2 className="text-[64px] font-bold">Everything You Need to Succeed, All in One Place</h2>
            </div>
            <div className="flex gap-8">
                <div className="w-[35%] bg-[#f9bdb5] p-[35px] rounded-[30px]">
                    <span className="text-[32px] font-semibold">All Features</span>
                    <img className="w-[350px]" src={img} alt="" />
                    <div>
                        <img src={img1} className="w-[350px] rounded-[20px] mb-8" alt="" />
                        <p className="max-w-[350px] text-lg font-medium">Use a pre-designed template or personalize with video, stickers, fonts, and more</p>
                    </div>
                </div>
                <div className="w-[65%] flex flex-col gap-8">
                    <div className="flex items-center bg-[#f94f64] rounded-[30px] px-10">
                        <div>
                            <span className="text-[32px] font-semibold">24/7 Support</span>
                            <p className="text-[18px] font-medium">Schedule all your cards and gifts now and we'll send them later</p>
                        </div>
                        <img src={img2} className="h-[300px]" alt="" />
                    </div>
                    <div className="flex gap-8">
                        <div className="bg-[#c00e01] px-14 pb-[30px] rounded-[30px]">
                            <img src={img3} alt="" />
                            <div className="text-white">
                                <span className="text-[32px] font-semibold">Subscriptions</span>
                                <p className="text-[18px] font-medium max-w-[300px] mt-2">SAccess all your gifts and save up your Givingli Cash</p>
                            </div>
                        </div>
                        <div className="bg-[#ff2919] px-14 pt-[30px] rounded-[30px] flex flex-col justify-between">
                            <div className="text-white">
                                <span className="text-[32px] font-semibold">Smart Messaging</span>
                                <p className="text-[18px] font-medium max-w-[300px] mt-2">Track your gifts, group chats, and sent cards</p>
                            </div>
                            <img src={img4} className="w-[400px]" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-8">
                <div className="w-[70%] flex justify-between items-center bg-[#db0a15] pl-[46px] rounded-[32px]">
                    <div>
                        <span className="text-[32px] font-semibold">Pay-to-View</span>
                        <p className="text-[18px] font-medium max-w-[300px] mt-2">Send as a group with friends or individually</p>
                    </div>
                    <img src={img5} alt="" />
                </div>
                <div className="w-[30%] bg-[#f94f64] pt-10 pl-10 rounded-[32px]">
                    <div className="text-black">
                        <span className="text-[32px] font-semibold">Advanced Insights</span>
                        <p className="text-[18px] font-medium max-w-[300px] mt-2">Never miss a birthday or special occasion again</p>
                    </div>
                    <div className="w-[100%] flex justify-end">
                        <img src={img6} className="w-[400px]" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}