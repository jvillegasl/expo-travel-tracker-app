import { JWTPayload, Session, sessionAtom } from "@/atoms/sessionAtom";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
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

        getSessionAsync()
            .then((t) => _setSession(t))
            .finally(() => setIsLoading(false));
    }, [session, _setSession, setIsLoading]);

    async function setSession(session: Session | null) {
        await setSessionAsync(session);

        _setSession(session);
    }

    async function signIn(request: SignInRequest) {
        const token = await _signIn(request);

        if (!token) return;

        const payload = jwtDecode<JWTPayload>(token);

        setSession({ token, payload });
    }

    async function signOut() {
        await setSession(null);
    }

    return {
        isLoading,
        session,
        signIn,
        signOut,
    };
}
