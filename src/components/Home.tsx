import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "@/hooks/useMediaQuery"
import SelectedPage from "@/shared/types"
import ActionButton from "@/shared/ActionButton"
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import { motion } from "framer-motion";

type Props = { setSelectedPage: (value: SelectedPage) => void }

const Home = ({ setSelectedPage }: Props) => {
    const aboveMedium = useMediaQuery("(min-width: 1060px)");

    return (
        <section id={SelectedPage.Home} className="gap-16 bg-gray-20 md:h-full py-10 md:pb-0">
            <motion.div className="md:h-5/6 md:flex w-5/6 mx-auto items-center justify-center"
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
                <div className="z-10 mt-32 md:mt-0 md:basis-3/5">
                    <motion.div className="md:mt-20" initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}} variants={{hidden: {opacity: 0, x:-50},visible: {opacity: 1, x: 0}}}>
                        <div className="relative">
                            <div className="before:hidden md:before:block before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-evolvetext">
                                <img src={HomePageText} alt="home-page-text" />
                            </div>
                        </div>
                        <p className="mt-4 text-sm">
                            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                            Studios to get the Body Shapes That you Dream of.. Get Your Dream
                            Body Now.
                        </p>
                    </motion.div>
                    <motion.div className="mt-8 flex items-center gap-8" initial="hidden" whileInView="visible" 
                    viewport={{once: true, amount: 0.5}} transition={{duration: 0.5,delay: 0.2}} variants={{hidden: {opacity: 0, x:-50},
                    visible: {opacity: 1, x: 0}}}>
                        <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                        <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)} href={`#${SelectedPage.ContactUs}`}>
                            <p>Learn More</p>
                        </AnchorLink>
                    </motion.div>
                </div>
                <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16">
                    <img src={HomePageGraphic} alt="home-pageGraphic" />
                </div>
            </motion.div>
            {/* Sponsors */}
            {aboveMedium && (
                <div className="hidden md:block h-1/6 w-full bg-primary-100">
                    <div className="h-full mx-auto w-5/6 py-8">
                        <div className="h-full w-3/6 flex items-center justify-between">
                            <img src={SponsorRedBull} alt="Sponsor-RedBull" />
                            <img src={SponsorForbes} alt="Sponsor-Forbes" />
                            <img src={SponsorFortune} alt="Sponsor-Fortune" />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Home