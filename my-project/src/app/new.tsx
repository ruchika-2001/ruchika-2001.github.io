import Image from "next/image";
import profile from '../static/images/profile.png'
import curvedLinesForWeb from '../static/images/curvedLinesForWeb.png'
import redesignOnboarding from '@/static/images/redesignOnboarding.png'
import redesignUX from '@/static/images/redesignUX.png';
import loudEcoFriendly from '@/static/images/loudEcoFriendly.png';
import graphicMotionDesign from '@/static/images/graphicMotionDesign.png';
import internationalLogisticsPlatform from '@/static/images/internationalLogisticsPlatform.png';
import journeyProfile from '@/static/images/journeyProfile.png';
import certificate from '@/static/images/certificate.png';
import whileDesigning from '@/static/images/whileDesigning.png';
import teamImage from '@/static/images/teamImage.png';
import Link from "next/link";
import { Poppins, Playfair_Display } from 'next/font/google'
import { faLinkedin, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-playfair',
    weight: ['400', '500', '600', '700', '800', '900']
})

export default function Home() {

    return (
        <div className={`${poppins.variable} font-poppins`}>
            <div className="p-4 flex space-x-4 justify-end items-end">
                <Link href={'https://drive.google.com/file/d/1Inf0C1dqghEuHrF4TlRJnWfFvPA_N3Z4/view?usp=sharing'} target="_blank">
                    Resume
                </Link>
                <Link href={'https://linkedin.com/in/ruchika-enakhiya-4b5200208/'} target="_blank">
                    Contact</Link>
            </div>
            <div className="p-4 my-32 flex flex-col justify-center space-y-6 text-center mx-auto md:w-5/12 md:my-24">
                <Image src={profile} alt="profile-picture" className="h-48 w-48 self-center object-cover" />
                <p className={`font-medium text-3xl ${playfairDisplay.variable} font-playfairDisplay md:text-5xl md:font-semibold`}>Hi, I&apos;m Ruchika</p>
                <p className="text-[#5F6B7B] text-medium text-center font-light px-4">
                    <span className="font-medium">Product Designer </span>
                    | Love for learning and designing intuitive, equitable, enjoyable and useful products keeps me going. </p>
            </div>
            <div className="my-6">
                <Image src={curvedLinesForWeb} alt="curved-lines" className="w-full h-80" />
                <div className="-mt-56 p-4 space-y-8 md:flex-row">
                    <p className="font-medium text-2xl text-center">FEATURED PROJECTS</p>
                    <div className="px-4 md:grid md:grid-cols-3 md:gap-6">
                        <Link href={'https://www.notion.so/Redesign-Onboarding-of-Learning-Platform-Mechanism-1b622aa16b9b494f80d95fb279f25ce1'} target="_blank">
                            <div className="my-6 cursor-pointer">
                                <Image src={redesignOnboarding} alt="redesign-onboarding" className="self-center object-cover" />
                                <p className="text-[#5F6B7B] px-2 text-medium font-light"><span className="font-medium">Redesign Onboarding for a Learning Platform Mechanism</span> | Scale up the conversion rates in just 6 days</p>
                            </div>
                        </Link>
                        <Link href={'https://www.notion.so/Design-International-Logistics-Web-Application-a2656717d8684d5c9cd88ef0dd5a922b'} target="_blank">
                            <div className="my-6 cursor-pointer">
                                <Image src={internationalLogisticsPlatform} alt="redesign-onboarding" className="self-center object-cover" />
                                <p className="text-[#5F6B7B] px-2 text-medium font-light"><span className="font-medium">Design International Logistics Platform</span> | Simplifying the bidding process for shippers and forwarders</p>
                            </div>
                        </Link>
                        <Link href={'https://www.notion.so/Redesign-Website-UX-d675ed13127046ef91160da742a1f75a'} target="_blank">
                            <div className="my-6 cursor-pointer">
                                <Image src={redesignUX} alt="redesign-onboarding" className="self-center object-cover" />
                                <p className="text-[#5F6B7B] px-2 text-medium font-light"><span className="font-medium">Redesign UX of website</span> | To 2x the conversion rates </p>
                            </div>
                        </Link>
                        <Link href={'https://www.notion.so/Loud-Eco-Friendly-Branding-37c9b74067d944e88e85202efc7287ba'} target="_blank">
                            <div className="my-6 cursor-pointer md:mt-0">
                                <Image src={loudEcoFriendly} alt="redesign-onboarding" className="self-center object-cover" />
                                <p className="text-[#5F6B7B] px-2 text-medium font-light"><span className="font-medium">Loud Eco-Friendly Branding</span> | Creating brand identity for sustainable products through designs </p>
                            </div>
                        </Link>
                        <Link href={'https://www.notion.so/Creative-Graphics-and-Motions-2937cb4f86cc4c15824c1142e3ecf4a5'} target="_blank">
                            <div className="my-6 cursor-pointer md:mt-0">
                                <Image src={graphicMotionDesign} alt="redesign-onboarding" className="self-center object-cover" />
                                <p className="text-[#5F6B7B] px-2 text-medium font-light"><span className="font-medium">Creative Graphic Motion Designs</span> | Create brand awareness through offline campaigns and social media </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-28">
                <p className={`${playfairDisplay.variable} font-playfairDisplay font-medium text-3xl text-center md:hidden`}>My Design Journey</p>
                <div className="flex flex-col md:flex-row">
                    <div className="mt-6 bg-gradient-to-b from-[#C84C06] to-[#F9641A] h-44 w-full md:w-12 md:h-[720px]"></div>
                    <div className="px-4 md:px-16 flex flex-col md:flex-row-reverse">
                        <div className="md:w-1/2 md:my-auto md:py-12">
                            <div className="flex justify-center space-x-2 -mt-40 px-4 md:mt-0">
                                <div className="flex flex-col space-y-2 self-end w-1/2">
                                    <Image src={certificate} alt="certificate" className="h-16 w-20 self-end" />
                                    <Image src={whileDesigning} alt="while-designing" className="h-32 w-32 md:h-52 md:w-52 self-end" />
                                </div>
                                <Image src={journeyProfile} alt="journey-profile" className="h-52 md:h-80 w-1/2 object-cover" />
                            </div>
                            <Image src={teamImage} alt="team-image" className="px-4 mt-1 object-cover" />
                        </div>
                        <div className="md:w-1/2 py-12 space-y-6 px-4 md:px-20">
                            <p className={`${playfairDisplay.variable} font-playfairDisplay font-medium text-3xl sm:hidden md:block`}>My Design Journey</p>
                            <p className="text-[#5F6B7B] text-medium  md:my-auto font-light">
                                Hello folks! Myself Ruchika, a final year BTech student at <span className="font-semibold">IIT Roorkee.</span> I explored various career interests and finally realized my passion for Design while working as a Generalist Designer at an early stage startup. <p>Learning design always excites me. I&apos;m always curious about discovering sustainable solutions in new ways and working hard till I get it done in the best possible way. It&apos;s been 2+ years of happy designing now and I&apos;ll continue to create impactful products :)
                                </p></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20 mb-16 px-4 flex flex-col self-center mx-auto md:w-1/3">
                <p className={`${playfairDisplay.variable} font-playfairDisplay font-medium text-3xl text-center`}>Shoot me an email 💫</p>
                <p className="px-4 mt-4 text-[#5F6B7B] text-center font-light">I am available for freelance projects, remote work or just discussing design, feel free to ping me at</p>
                <button className="bg-[#EE5E15] my-6 text-center self-center px-3 py-2 rounded text-white"><Link href={'mailto:ruchika_e@me.iitr.ac.in'}>ruchika_e@me.iitr.ac.in</Link></button>
            </div>

            <div className="w-full bg-black py-24 space-y-9">
                <p className="text-center  text-white md:text-2xl">Let&apos;s do some great work together!</p>
                <div className="flex items-center justify-center space-x-10">
                    <Link href={'https://linkedin.com/in/ruchika-enakhiya-4b5200208/'} target="_blank">
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            style={{ color: "white", fontSize: 32 }}
                        /></Link>
                    <Link href={'https://wa.me/7793072102'} target="_blank">
                        <FontAwesomeIcon
                            icon={faWhatsapp}
                            style={{ color: "white", fontSize: 32 }}
                        />
                    </Link>
                    <Link href={'https://www.instagram.com/ruchi_enakhiya1112/'} target="_blank">
                        <FontAwesomeIcon
                            icon={faInstagram}
                            style={{ color: "white", fontSize: 32 }}
                        /></Link>
                </div>
                <p className="text-center  text-white md:text-lg">Made with <span className="text-red-500">♥️</span> by Ruchika</p>
            </div>
        </div >
    )
}

