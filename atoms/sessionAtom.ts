import { atom } from "jotai";

export type Session = {
    token: string;
};

export const sessionAtom = atom<Session | null>(null);
