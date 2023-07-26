import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import SelectedPage from "@/shared/types"
import HText from "@/shared/HText";
import ContactPageGraphic from "@/assets/ContactUsPageGraphic.png";


type Props = { setSelectedPage: (value: SelectedPage) => void }

const ContactUs = ({ setSelectedPage }: Props) => {
    const { register, trigger, formState: { errors } } = useForm();
    const inputStyles = "w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mt-8 outline-none caret-white"
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    };
    return (
        <section id={SelectedPage.ContactUs} className="pt-24 pb-20 w-5/6 mx-auto">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}
                    variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }} className="md:w-3/5">
                    <HText className="uppercase"><span className="text-primary-500">join</span> now to get in shape.</HText>
                    <p className="mt-5">
                        Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
                        sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
                        adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
                    </p>
                </motion.div>
                <div className="md:flex justify-between gap-8 mt-5">
                    <motion.div className="basis-3/5 md:mt-0" initial="hidden" whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}
                        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
                        <form action="https://formsubmit.co/kingkong@gmail.com" method="POST" target="_blank" onSubmit={onSubmit}>
                            <input className={inputStyles} type="text" placeholder="NAME" {...register("name", {
                                required: true, maxLength:
                                    100
                            })} />
                            {errors.name && (
                                <p className="mt-1 text-primary-500">
                                    {errors.name.type === "required" && "This field is required."}
                                    {errors.name.type === "maxLength" && "Max length is 100."}
                                </p>
                            )}
                            <input className={inputStyles} type="email" placeholder="EMAIL" {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                            })} />
                            {errors.email && (
                                <p className="mt-1 text-primary-500">
                                    {errors.email.type === "required" && "This field is required."}
                                    {errors.email.type === "maxLength" && "Invalid email address."}
                                </p>
                            )}
                            <textarea className={`${inputStyles} resize-none`} placeholder="MESSAGE" rows={4} cols={50}
                                {...register("message", { required: true, maxLength: 2000 })} />
                            {errors.message && (
                                <p className="mt-1 text-primary-500">
                                    {errors.message.type === "required" && "This field is required."}
                                    {errors.message.type === "maxLength" && "Max length is 2000 char."}
                                </p>
                            )}
                            <button type="submit" className="rounded-lg bg-secondary-500 px-20 py-3 transition duration-500
                            hover:text-white uppercase cursor-pointer mt-8">
                                Submit
                            </button>
                        </form>
                    </motion.div>
                    <motion.div className="relative mt-16 md:mt-0 basis-2/5 md:-top-24" initial="hidden" whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 } }}>
                        <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-20
                        before:z-[-1]">
                            <img src={ContactPageGraphic} alt="contact-us-pageGraphic" className="w-full" />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default ContactUs