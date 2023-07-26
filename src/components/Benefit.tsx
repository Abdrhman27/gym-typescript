import SelectedPage, { BenefitType } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {motion} from "framer-motion"

const childVariant = {
    hidden: {opacity: 0, scale: 0.9},
    visible: {opacity: 1, scale: 1}
}

type Props = { benefit: BenefitType, setSelectedPage: (value: SelectedPage) => void };

const Benefit = ({ benefit, setSelectedPage }: Props) => {
    const content = (
        <>
            <div className="benefit-icon flex justify-center mb-4">
                <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
                    {benefit.icon}
                </div>
            </div>
            <h3 className="font-bold">{benefit.title}</h3>
            <p className="my-3">{benefit.description}</p>
            <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500 cursor-pointer"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}>
                Learn More
            </AnchorLink>
        </>
    )
    return (
        <motion.div className="benefit mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center" variants={childVariant}>
            {content}
        </motion.div>
    )
}

export default Benefit