import { Session, sessionAtom } from "@/atoms/sessionAtom";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { SecureStoreKeys } from "@/constants/SecureStoreKeys";
import { signIn as _signIn, SignInRequest } from "@/services/signIn";
import { getSessionAsync, setSessionAsync } from "@/lib/session";

type UseSessionStateLoading = {
    isLoading: true;
    session?: Session | null;
};

type UseSessionStateLoaded = {
    isLoading: false;
    session: Session | null;
};

export type UseSessionState = (UseSessionStateLoading | UseSessionStateLoaded) & {
    signIn: (request: SignInRequest) => Promise<void>;
    signOut: () => Promise<void>;
};

export function useSession(): UseSessionState {
    const [session, _setSession] = useAtom(sessionAtom);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (session) {
            setIsLoading(false);
            return;
        }

        async function fn() {
            const storedSessionJson = await SecureStore.getItemAsync(SecureStoreKeys.session);

            if (!storedSessionJson) return;

            await getSessionAsync().then((t) => _setSession(t));
        }

        fn().finally(() => setIsLoading(false));
    }, [session, _setSession, setIsLoading]);

    async function setSession(session: Session | null) {
        await setSessionAsync(session);

        _setSession(session);
    }

    async function signIn(request: SignInRequest) {
        const token = await _signIn(request);

        if (!token) return;

        setSession({ token });
    }

    async function signOut() {
        setSession(null);
    }

    return {
        isLoading,
        session,
        signIn,
        signOut,
    };
}
