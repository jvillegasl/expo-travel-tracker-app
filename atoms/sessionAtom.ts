import { atom } from "jotai";

export type Session = {
    token: string;
    payload: JWTPayload;
};

export type JWTPayload = {
    username: string;
    iat: number;
    exp: number;
};

export const sessionAtom = atom<Session | null>(null);
