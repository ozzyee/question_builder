import './globals.css'
import {Inter} from 'next/font/google'
import React, {ReactNode} from "react";
import {SideNav} from "@/components/navigation/sideNav";
import {TopNav} from "@/components/navigation/topNav";
import {ContextProvider} from "@/components/context";

const inter = Inter({subsets: ['latin']})

export default function RootLayout({children}: { children: ReactNode }) {
	return (
		 <html lang="en">
			 <body>
				 <ContextProvider>
					 <div>
						 <SideNav/>
						 <div className="xl:pl-96">
							 <TopNav/>
							 {children}
						 </div>
					 </div>
				 </ContextProvider>
			 </body>
		 </html>
	)
}
