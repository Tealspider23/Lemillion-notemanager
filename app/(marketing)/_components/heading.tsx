'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export const Heading = () =>{
return(
    <div className="text-black font-bold py-36 sm:text-center space-y-5 max-w-3xl">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-100 to-purple-400 rounded-full">
            Your Ideas, Documents & Plans Unified Welcome to  
             <br /><span className="underline">Lemillion</span>
        </h1>
        <h3 className="text-base sm:text-xl md:text-2xl font-medium">
            Lemillion is the connected workspace where <br />
            better , faster work happens.
        </h3>
        <Button>
            Enter Lemillion
            <ArrowRight className="h-4 w-4 ml-2"/>
        </Button>

    </div>
)
}