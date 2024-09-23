import { Stack } from "expo-router";

export default function TravelsLayout() {
    return (
        <Stack screenOptions={{ headerShown: true }}>
            <Stack.Screen name="index" options={{ title: "Travels" }} />
            <Stack.Screen name="[travelId]" options={{ title: "Travel" }} />
            <Stack.Screen name="newTravel" options={{ title: "New Travel" }} />
        </Stack>
    );
}
