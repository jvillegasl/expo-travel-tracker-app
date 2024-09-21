import { DateTimeOffset } from "@/lib/models/dateTimeOffset";
import { Text, View } from "react-native";

type DateTimeRangeProps = {
    start: DateTimeOffset;
    end: DateTimeOffset;
};

export function TravelTimeRange({ start, end }: DateTimeRangeProps) {
    const startDate = start.format("DD/MM/YY");
    const startTime = start.format("HH:mm");

    return (
        <View>
            <Text style={{ textAlign: "right" }}>{startDate}</Text>
            <Text style={{ textAlign: "right" }}>{startTime}</Text>
            <Text style={{ textAlign: "right" }}>{rangeDuration(start, end)}</Text>
        </View>
    );
}

function rangeDuration(start: DateTimeOffset, end: DateTimeOffset) {
    const ms = end.diff(start, "milliseconds");

    const totalHours = ms / (60 * 60 * 1000);

    const hours = Math.trunc(totalHours);
    const minutes = Math.trunc(ms / (60 * 1000) - 60 * hours);

    const times: string[] = [];

    if (hours > 0) {
        times.push(hours + "h");
    }

    if (minutes > 0) {
        times.push(minutes + "m");
    }

    return times.join(" ");
}
