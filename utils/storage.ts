import * as FileSystem from "expo-file-system";
import { CounterItem } from "@/utils/CounterItem";
import { useEffect, useState } from "react";

const fileName = "count.json";
const fileUri = `${FileSystem.documentDirectory}${fileName}`;

const appendToJsonFile = async (name: string, toAdd: 1 | -1) => {
	try {
		// Read existing file or create new if it doesn't exist
		let existingData: CounterItem[] = [];
		const fileInfo = await FileSystem.getInfoAsync(fileUri);
		if (fileInfo.exists) {
			const fileContent = await FileSystem.readAsStringAsync(fileUri);
			existingData = JSON.parse(fileContent);
		}

		// Append new data
		console.log(existingData);
		var index = existingData.findIndex((item: CounterItem) => item.name === name);
		if (index === -1) {
			existingData.push({ name: name, number: Math.max(0, toAdd) });
		} else {
			existingData[index].number += toAdd;
			if (existingData[index].number < 0) {
				existingData[index].number = 0;
			}
		}

		// Write updated data back to file
		await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(existingData));
	} catch (error) {
		console.error("Error appending to JSON:", error);
	}
};

export const useSavedResults = () => {
	const [listeCounter, setListeCounter] = useState<CounterItem[]>([]);

	const readSavedResults = async () => {
		try {
			const fileInfo = await FileSystem.getInfoAsync(fileUri);
			if (fileInfo.exists) {
				const fileContent = await FileSystem.readAsStringAsync(fileUri);
				setListeCounter(JSON.parse(fileContent));
			}
			return [];
		} catch (error) {
			console.error("Error reading saved results:", error);
			return [];
		}
	};

	useEffect(() => {
		readSavedResults();
	}, []);

	return { listeCounter, refetch: readSavedResults() };
};

export { appendToJsonFile };
