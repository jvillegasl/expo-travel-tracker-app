import { DateTimeOffset } from "@/lib/models/dateTimeOffset";
import { Transform, Type } from "class-transformer";

export type TravelDTOJson = {
    id: number;
    description: string;
    plannedStartDate: string;
    plannedEndDate: string;
    createdAt: string;
};

export class TravelDTO {
    id!: number;
    caseName!: string;
    description!: string;

    @Transform(({ value }) => new DateTimeOffset(value), { toClassOnly: true })
    plannedStartDate!: DateTimeOffset;

    @Transform(({ value }) => new DateTimeOffset(value), { toClassOnly: true })
    plannedEndDate!: DateTimeOffset;

    @Type(() => Date)
    createdAt!: Date;
}
