import {Components} from "@/components/drop/_types/Components";

export type Layouts = {
	id: string,
	order: number,
	component: Components,
	props: {
		[key: string]: any
	}
	children?: Layouts[]
}

export const questionLayout: Layouts[] = [
	{
		id: "1",
		order: 1,
		component: "header",
		props: {
			type: "h1",
			placeholder: "Question",
			value: null
		}
	},
	{
		id: "2",
		order: 2,
		component: "header",
		props: {
			type: "h2",
			placeholder: "subtitle...",
			value: null
		}
	},
	{
		id: "3",
		order: 3,
		component: "wrapper",
		props: {
			parentElementType: "div",
			children: [
				{
					id: "4",
					order: 1,
					component: "answer",
					props: {
						placeholder: "Question...",
						value: null
					},
				},
				{
					id: "5",
					order: 2,
					component: "answer",
					props: {
						placeholder: "Question...",
						value: null
					}
				}
			]
		}
	}
]

export const testData: Layouts[] = [
	{
		"id": "1",
		"order": 1,
		"component": "header",
		"props": {
			"type": "h1",
			"placeholder": "Question",
			"value": {
				"id": "1",
				"content": "test",
				"component": "heading"
			}
		}
	},
	{
		"id": "2",
		"order": 2,
		"component": "header",
		"props": {
			"type": "h2",
			"placeholder": "subtitle...",
			"value": {
				"id": "2",
				"content": "123",
				"component": "heading"
			}
		}
	},
	{
		"id": "3",
		"order": 3,
		"component": "wrapper",
		"props": {
			"parentElementType": "div",
			"children": [
				{
					"id": "4",
					"order": 1,
					"component": "answer",
					"props": {
						"placeholder": "Question...",
						"value": {
							"id": "4",
							"content": "321",
							"redirect": {
								"id": 1,
								"name": "capital city"
							},
							"component": "answer"
						}
					}
				},
				{
					"id": "5",
					"order": 2,
					"component": "answer",
					"props": {
						"placeholder": "Question...",
						"value": {
							"id": "5",
							"content": "vov",
							"redirect": {
								"id": 3,
								"name": "test321"
							},
							"component": "answer"
						}
					}
				}
			]
		}
	}
]