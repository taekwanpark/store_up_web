/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx,vue}',
	],
	theme: {
		extend: {
			colors: {
				amuzGray: {
					f5f5f5: '#F5F5F5',
					d2d2d2: '#D2D2D2',
					cacaca: '#CACACA',
					979797: '#979797',
					707070: '#707070',
				},
			},
		},
	},
	plugins: [],
};
