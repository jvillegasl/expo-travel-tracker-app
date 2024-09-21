import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { getTravels } from "@/services/getTravels";
import { TravelDTO } from "@/types/DTOs/travelDTO";
import { List } from "react-native-paper";
import { TravelTimeRange } from "@/components/TravelTimeRange";
import { router } from "expo-router";

export default function TravelsScreen() {
    const [travels, setTravels] = useState<TravelDTO[]>([]);

    useEffect(() => {
        getTravels().then((data) => {
            data.sort((a, b) => a.plannedStartTime.valueOf() - b.plannedStartTime.valueOf());
            setTravels(data);
        });
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                style={{ width: "100%", paddingHorizontal: 16 }}
                data={travels}
                renderItem={({ item: travel }) => {
                    return (
                        <List.Item
                            contentStyle={{ flexWrap: "nowrap", paddingRight: 8 }}
                            title={travel.caseName}
                            description={travel.description}
                            right={() => <TravelTimeRange start={travel.plannedStartTime} end={travel.plannedEndTime} />}
                            onPress={() => router.push(`/travels/${travel.id}`)}
                        />
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
