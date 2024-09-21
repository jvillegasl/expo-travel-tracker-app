import { Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function TravelScreen() {
    const { travelId } = useLocalSearchParams() as { travelId: string };

    return <Text>Blog post: {travelId}</Text>;
}
