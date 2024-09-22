import { useSession } from "@/hooks/useSession";
import { Redirect } from "expo-router";
import { Text } from "react-native-paper";

export default function Root() {
    const { isLoading, session } = useSession();

    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    if (!session) {
        return <Redirect href="/sign-in" />;
    }

    return <Redirect href="/(tabs)" />;
}
