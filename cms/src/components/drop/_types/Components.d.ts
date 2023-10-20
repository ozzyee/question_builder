type Components = "form" | "text" | "headings"

type ComponentSelectorProps = {
	component: Components
	onComponentChange: (component: Components) => void
}

