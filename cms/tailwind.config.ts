import type {Config} from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/**/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/**/**/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
}
export default config
