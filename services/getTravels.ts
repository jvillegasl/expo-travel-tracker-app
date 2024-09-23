import { getAxiosInstance } from "@/lib/http";
import { TravelDTO, TravelDTOJson } from "@/types/DTOs/travelDTO";
import { plainToInstance } from "class-transformer";

export async function getTravels() {
    const axios = getAxiosInstance();
    const response = await axios.get<TravelDTOJson[]>("http://10.0.2.2:3000/auth/travel");
    const data = response.data;

    const travels = plainToInstance(TravelDTO, data);

    return travels;
}
