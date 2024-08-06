import { SafeAreaView, StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedCircleButton } from "@/components/CircleButton";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { appendToJsonFile, useSavedResults } from "@/utils/storage";
import { CounterItem } from "@/utils/CounterItem";

export default function Index() {
	const listePersonnes = ["Arkageddon", "Bismuth", "Iphinis", "McDown", "Wirare"];
	const { listeCounter, refetch } = useSavedResults();

	const getCounter = (name: string) => {
		const index = listeCounter.findIndex((item: CounterItem) => item.name === name);
		if (index === -1) {
			return 0;
		} else {
			return listeCounter[index].number;
		}
	};
	return (
		<SafeAreaView
			style={[
				styles.container,
				{
					backgroundColor: Colors[useColorScheme() ?? "light"].background,
				},
			]}
		>
			<View style={styles.title}>
				<ThemedText type={"title"}>Compteur des BOYS</ThemedText>
			</View>
			<View style={styles.title}>
				<ThemedText>{JSON.stringify(listeCounter)}</ThemedText>
			</View>
			{listePersonnes.map((item, index) => (
				<View style={styles.row} key={index}>
					<ThemedText>{item}</ThemedText>
					<View style={styles.buttons}>
						<ThemedCircleButton
							title={""}
							iconName={"add-circle-outline"}
							size={50}
							onPress={() => appendToJsonFile(item, 1)}
						/>
						<ThemedText style={{ padding: 10 }}>{getCounter(item)}</ThemedText>
						<ThemedCircleButton
							title={""}
							iconName={"remove-circle-outline"}
							size={50}
							onPress={() => appendToJsonFile(item, -1)}
						/>
					</View>
				</View>
			))}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 20,
		marginRight: 20,
		marginTop: 10,
		marginBottom: 10,
	},
	buttons: {
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		flex: 1,
	},
});
