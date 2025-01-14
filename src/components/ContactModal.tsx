import Image from "next/image";


export default function ContactModal({ isOpen , setIsOpen }: { isOpen: boolean , setIsOpen: (isOpen: boolean) => void }) {
    if (!isOpen) return null;
    return (
        <div className="p-4 w-fit h-fit   bg-black/50 backdrop-blur-md shadow-lg border border-white/30 rounded-lg bottom-[-147px] absolute z-30 ">

            <div className="absolute top-2 right-4 text-white">
                <button onClick={()=>{
                    setIsOpen(false);
                }}>
                   X
                </button>
            </div>
            <div className="flex gap-4 mt-2  ">
                   
                    <a href="https://github.com/PaulSpaurgen" rel="noopener noreferrer" target="_blank">
                        <Image src="/images/github.svg" alt="GitHub" width={36} height={36} />
                    </a>
                    <a href="mailto:gspaurgen@gmail.com" rel="noopener noreferrer" target="_blank">
                        <Image src="/images/gmail.svg" alt="Gmail" width={36} height={36} />
                    </a>
                    <a href="https://www.linkedin.com/in/paul-spaurgen/" rel="noopener noreferrer" target="_blank">
                        <Image src="/images/linkedin.svg" alt="LinkedIn" width={36} height={36} />
                    </a>
                </div>

                <div className="mt-8">
                    <a className="px-4 py-2 border border-white rounded-md cursor-pointer text-white" href="https://calendly.com/gspaurgen/30min" target="_blank">Schedule a call with me</a>
                </div>
        </div>
    )
}