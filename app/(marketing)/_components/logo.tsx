import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";


const poppins = Poppins({
    subsets: ["latin"],
    weight:['400','600']
  });


const Logo = () => {
    return ( 
    <div className="hidden md:flex items-center gap-x-2">
        <Image
        src ='/logo.svg'
        height = '40'
        width = '40'
        alt = 'Logo'
        />
        <p className={cn("font-semibold",poppins.className)}></p>
    </div>
);
}
 
export default Logo;