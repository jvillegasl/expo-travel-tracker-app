import { Session } from "@/atoms/sessionAtom";
import { SecureStoreKeys } from "@/constants/SecureStoreKeys";
import * as SecureStore from "expo-secure-store";

export async function getSessionAsync() {
    const storedSessionJson = await SecureStore.getItemAsync(SecureStoreKeys.session);

    if (!storedSessionJson) return null;

    try {
        const storedSession: Session | null = JSON.parse(storedSessionJson);

        return storedSession;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function setSessionAsync(session: Session | null) {
    await SecureStore.setItemAsync(SecureStoreKeys.session, JSON.stringify(session));
}
