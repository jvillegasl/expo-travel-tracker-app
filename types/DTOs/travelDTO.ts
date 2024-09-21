import { DateTimeOffset } from "@/lib/models/dateTimeOffset";
import { Transform } from "class-transformer";

export type TravelDTOJson = {
    id: number;
    caseName: string;
    description: string;
    plannedStartTime: string;
    plannedEndTime: string;
};

export class TravelDTO {
    id!: number;
    caseName!: string;
    description!: string;

    @Transform(({value}) => new DateTimeOffset(value), {toClassOnly: true})
    plannedStartTime!: DateTimeOffset;

    @Transform(({value}) => new DateTimeOffset(value), {toClassOnly: true})
    plannedEndTime!: DateTimeOffset;
}
