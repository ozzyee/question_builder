"use client";

import Index from "@/components/layout/mainLayout";

type PageProps = {
	params: {
		page: string
	}
	searchParams: {
		panel: string
	}
}

export default function Page({params}: PageProps) {
	return (
		 <Index page={params.page}/>
	)
}