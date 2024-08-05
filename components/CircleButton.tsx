import { type ButtonProps, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import React from "react";

export type ThemedCircleButtonProps = ButtonProps & {
	color?: string;
	darkColor?: string;
	lightColor?: string;
	iconName?: string;
	iconColor?: string;
	style?: ViewStyle;
	size?: number;
	onPress?: () => void;
};

export function ThemedCircleButton({
	style,
	lightColor,
	darkColor,
	iconName = "home",
	size = 50,
	onPress,
	color,
	title = "",
	iconColor = useThemeColor({ light: lightColor, dark: darkColor }, "icon"),
	...otherProps
}: ThemedCircleButtonProps) {
	const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "secondaryBackground");

	return (
		<TouchableOpacity
			style={[
				styles.button,
				{
					width: size,
					height: size,
					borderRadius: size / 2,
					backgroundColor: backgroundColor,
				},
				style,
			]}
			onPress={onPress}
		>
			<TabBarIcon name={iconName} color={iconColor} size={size} />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		justifyContent: "center",
		alignItems: "center",
	},
});
