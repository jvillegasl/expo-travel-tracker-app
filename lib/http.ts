import axios from "axios";
import { getSessionAsync } from "./session";

export function getAxiosInstance() {
    const axiosInstance = axios.create();

    axiosInstance.interceptors.request.use(async (config) => {
        const session = await getSessionAsync();

        if (!session) throw new Error("No session found");

        const token = session.token;

        config.headers.Authorization = `Bearer ${token}`;

        return config;
    });

    return axiosInstance;
}
