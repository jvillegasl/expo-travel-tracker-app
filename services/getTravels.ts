import { TravelDTO, TravelDTOJson } from "@/types/DTOs/travelDTO";
import { plainToInstance } from "class-transformer";

const DATA: TravelDTOJson[] = [
    {
        id: 1,
        caseName: "Trip to Paris",
        description: "A short visit to Paris.",
        plannedStartTime: "2024-09-25T10:00:00",
        plannedEndTime: "2024-09-26T18:00:00",
    },
    {
        id: 2,
        caseName: "Business Meeting in Tokyo",
        description: "Quick business meeting in Tokyo.",
        plannedStartTime: "2024-10-05T08:00:00",
        plannedEndTime: "2024-10-06T12:00:00",
    },
    {
        id: 3,
        caseName: "Conference in New York",
        description: "A two-day tech conference in New York.",
        plannedStartTime: "2024-11-15T09:00:00",
        plannedEndTime: "2024-11-16T17:00:00",
    },
    {
        id: 4,
        caseName: "Family Trip to Hawaii",
        description: "A short family vacation in Hawaii.",
        plannedStartTime: "2024-12-01T14:00:00",
        plannedEndTime: "2024-12-02T10:00:00",
    },
    {
        id: 5,
        caseName: "Workshop in Berlin",
        description: "A quick workshop in Berlin.",
        plannedStartTime: "2024-09-21T09:00:00",
        plannedEndTime: "2024-09-21T16:00:00",
    },
    {
        id: 6,
        caseName: "Vacation in Greece",
        description: "A short trip to the Greek islands.",
        plannedStartTime: "2024-10-10T13:00:00",
        plannedEndTime: "2024-10-11T15:00:00",
    },
    {
        id: 7,
        caseName: "Team Building Retreat",
        description: "A quick team building retreat.",
        plannedStartTime: "2024-11-03T10:00:00",
        plannedEndTime: "2024-11-04T12:00:00",
    },
    {
        id: 8,
        caseName: "Sales Meeting in London",
        description: "Brief meeting with clients.",
        plannedStartTime: "2024-12-10T09:00:00",
        plannedEndTime: "2024-12-11T11:00:00",
    },
    {
        id: 9,
        caseName: "Product Launch Event",
        description: "Launching a new product.",
        plannedStartTime: "2024-11-25T16:00:00",
        plannedEndTime: "2024-11-26T19:00:00",
    },
    {
        id: 10,
        caseName: "Research Trip to Antarctica",
        description: "A short research trip.",
        plannedStartTime: "2025-01-05T08:00:00",
        plannedEndTime: "2025-01-06T20:00:00",
    },
    {
        id: 11,
        caseName: "Photography Trip to Iceland",
        description: "Capturing the northern lights.",
        plannedStartTime: "2024-11-12T22:00:00",
        plannedEndTime: "2024-11-13T06:00:00",
    },
    {
        id: 12,
        caseName: "Client Visit in San Francisco",
        description: "Visiting a client for a project demo.",
        plannedStartTime: "2024-10-09T11:00:00",
        plannedEndTime: "2024-10-10T13:00:00",
    },
    {
        id: 13,
        caseName: "Training Seminar in Berlin",
        description: "Attending a software training seminar.",
        plannedStartTime: "2024-11-19T09:00:00",
        plannedEndTime: "2024-11-20T17:00:00",
    },
    {
        id: 14,
        caseName: "Networking Event in Hong Kong",
        description: "Meeting potential business partners.",
        plannedStartTime: "2024-12-07T18:00:00",
        plannedEndTime: "2024-12-08T21:00:00",
    },
    {
        id: 15,
        caseName: "Overnight Hike in the Swiss Alps",
        description: "A guided overnight hike in the mountains.",
        plannedStartTime: "2024-08-14T06:00:00",
        plannedEndTime: "2024-08-14T07:35:00",
    },
    {
        id: 16,
        caseName: "Film Shoot in LA",
        description: "Shooting a short film in Los Angeles.",
        plannedStartTime: "2024-07-20T14:00:00",
        plannedEndTime: "2024-07-21T18:00:00",
    },
    {
        id: 17,
        caseName: "Food Festival in Rome",
        description: "A culinary experience in Rome's famous food festival.",
        plannedStartTime: "2024-09-17T09:00:00",
        plannedEndTime: "2024-09-18T23:00:00",
    },
    {
        id: 18,
        caseName: "Wine Tasting in Napa Valley",
        description: "A day trip for wine tasting.",
        plannedStartTime: "2024-06-05T11:00:00",
        plannedEndTime: "2024-06-06T16:00:00",
    },
    {
        id: 19,
        caseName: "Startup Pitch in Austin",
        description: "Pitching to investors at a startup event.",
        plannedStartTime: "2024-03-27T09:00:00",
        plannedEndTime: "2024-03-28T15:00:00",
    },
    {
        id: 20,
        caseName: "Design Sprint in Seattle",
        description: "A design sprint for a new app concept.",
        plannedStartTime: "2024-02-22T08:00:00",
        plannedEndTime: "2024-02-23T12:00:00",
    },
] as const;

export async function getTravels() {
    const travels = plainToInstance(TravelDTO, DATA);

    return travels;
}
