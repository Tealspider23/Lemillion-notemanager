import { Heading } from "./_components/heading";

import { Comfortaa } from "next/font/google";

import { cn } from "@/lib/utils";

const comfortaa = Comfortaa({
    subsets: ["latin"],
    weight:'700'
  });


const MarketingPage= () => {
    return (
    <div className={cn("min-h-full flex flex-col",comfortaa.className)}>
        <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
           <Heading />
        </div>
    </div>
      );
}
export default MarketingPage;