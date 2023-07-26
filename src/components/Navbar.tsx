import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import styles from "../stlyes";
import NavLink from "./NavLink.tsx";
import SelectedPage from "@/shared/types.ts";
import useMediaQuery from "@/hooks/useMediaQuery.ts";
import ActionButton from "@/shared/ActionButton.tsx";

type Props = { selectedPage: SelectedPage, setSelectedPage: (value: SelectedPage) => void, isTopPage: boolean }

const Navbar = ({ selectedPage, setSelectedPage, isTopPage }: Props) => {
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const mediaAboveMedium = useMediaQuery("(min-width: 1060px)");
    return (
        <nav>
            <div className={`${styles.flexBetween} fixed top-0 z-30 w-full py-6 transition duration-100
             ${!isTopPage && "bg-primary-100 drop-shadow"}`}>
                <div className={`${styles.flexBetween} mx-auto w-5/6`}>
                    <div className={`${styles.flexBetween} w-full gap-16`}>
                        <img src={Logo} alt="logo" />
                        {mediaAboveMedium ?
                            <div className={`${styles.flexBetween} w-full`}>
                                <div className={`flex gap-6 text-sm flex-1`}>
                                    <NavLink page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                    <NavLink page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                    <NavLink page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                    <NavLink page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                </div>
                                <div className={`${styles.flexBetween} gap-8 ml-6`}>
                                    <p className="cursor-pointer">Sign In</p>
                                    <ActionButton setSelectedPage={setSelectedPage}>Become A Member</ActionButton>
                                </div>
                            </div> : <button className="rounded-full bg-secondary-500 p-2"
                                onClick={() => setIsMenuToggled(prev => !prev)}><Bars3Icon className="h-6 w-6 text-white" /> </button>}
                    </div>
                </div>
            </div>
            {!mediaAboveMedium && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(prev => !prev)}>
                            <XMarkIcon className="h-6 w-6 text-gray-400" />
                        </button>
                    </div>
                    <div className={`ml-[33%] flex flex-col gap-10 `}>
                        <NavLink page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <NavLink page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <NavLink page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <NavLink page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar