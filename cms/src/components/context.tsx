"use client";
import {createContext, ReactNode, useContext, useEffect, useState,} from "react";

type TContentContext = {};

const ContentContext = createContext<TContentContext>({});

export const useContent = () => useContext(ContentContext);

export const ContextProvider = ({ children }: { children: ReactNode }) => {

	return(
		 <ContentContext.Provider value={{}}>
			 {children}
		 </ContentContext.Provider>
	)
}
