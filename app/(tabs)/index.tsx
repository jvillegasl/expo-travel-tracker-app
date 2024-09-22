import { useSession } from "@/hooks/useSession";
import { router } from "expo-router";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-paper";

export default function TravelsScreen() {
    const { signOut } = useSession();

    async function handlePress() {
        await signOut();

        router.replace("/sign-in");
    }

    return (
        <View style={styles.container}>
            <Text>Hello World!</Text>
            <Button mode="contained" onPress={handlePress}>
                Sign Out
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
