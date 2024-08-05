/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#e40611";
const tintColorDark = "#e40611";

export const Colors = {
	validationColor: "#0fd70f",
	cancelColor: "#d91010",
	light: {
		text: "#11181C",
		secondaryText: "#a7a7a7",
		background: "#EBECEC",
		secondaryBackground: "#ece6df",
		tint: tintColorLight,
		icon: "#E30613",
		tabIconDefault: "#737377",
		tabIconSelected: tintColorLight,
	},
	dark: {
		text: "#ECEDEE",
		secondaryText: "#a7a7a7",
		background: "#0c2461",
		secondaryBackground: "#1e3799",
		tint: tintColorDark,
		icon: "#6a89cc",
		tabIconDefault: "#CDCDD0",
		tabIconSelected: tintColorDark,
	},
};
