
import Faq from "react-faq-component";
import "../../../Homenew.css"

const data = {
    // title: "FAQ (How it works)",
    rows: [
        {
            title: "Is there a free trial available?",
            content: `Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and
            running as soon as possible.`,
        },
        {
            title: "Can I change my plan later?",
            content: `Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and
            running as soon as possible.`,
        },
        {
            title: "What is your cancellation policy?",
            content: `Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and
            running as soon as possible.`,
        },
        {
            title: "Can other info be added to an invoice?",
            content: `Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and
            running as soon as possible.`,
        },
        {
            title: "How does billing work?",
            content: `Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and
            running as soon as possible.`,
        },
        {
            title: "How do I change my account email?",
            content: `Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and
            running as soon as possible.`,
        },
    ],
};

const styles = {
    bgColor: 'transparent',
    titleTextColor: "black",
    rowTitleColor: "black",
    arrowPaddingTop: "20px",
    rowContentPaddingLeft: "20px",
    rowContentPaddingBottom: "20px",
    titlePadding: "20px",
};


const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
    expandIcon: "➕",
    collapseIcon: "➖",
};


export default function FaqNew() {
    return (
        <div>
            <div className="max-w-[1640px] mx-auto py-[100px]">
                <div className="text-center mb-20">
                    <h2 className="text-[64px] font-semibold">Frequently asked questions</h2>
                    <p>Everything you need to know about the product and billing.</p>
                </div>
                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                />
            </div>
        </div>
    )
}