import { OurClassType } from '@/shared/types'

type Props = {ourClass: OurClassType}

const OurClass = ({ourClass: {name,description,image}}: Props) => {
    const overlayStyles = `p-5 absolute z-20 flex flex-col items-center justify-center h-[380px] w-[450px]
    whitespace-normal bg-primary-500 text-center text-white opacity-0 hover:opacity-90 transition duration-500`;
    return (
        <li className="relative mx-5 inline-block h-[380px] w-[450px]">
            <div className={overlayStyles}>
                <p className="text-2xl">{name}</p>
                <p className="mt-5">{description}</p>
            </div>
            <img src={image} alt="image-1" />
        </li>
    )
}

export default OurClass