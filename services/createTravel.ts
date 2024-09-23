import { getAxiosInstance } from "@/lib/http";
import moment from "moment";

export type CreateTravelRequest = {
    description: string;
    plannedStartDate: Date;
    plannedEndDate: Date;
};

export async function createTravels(request: CreateTravelRequest) {
    const description = request.description;
    const plannedStartDate = moment(request.plannedStartDate).format("YYYY-MM-DDTHH:mm:ssZ");
    const plannedEndDate = moment(request.plannedEndDate).format("YYYY-MM-DDTHH:mm:ssZ");

    const axios = getAxiosInstance();
    await axios.post("http://10.0.2.2:3000/auth/travel", {
        description,
        plannedStartDate,
        plannedEndDate,
    });

    return;
}
