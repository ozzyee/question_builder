"use client";

import MainLayout from "@/components/mainLayout";

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
		 <MainLayout page={params.page}/>
	)
}