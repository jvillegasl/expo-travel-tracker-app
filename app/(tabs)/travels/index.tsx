import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { getTravels } from "@/services/getTravels";
import { TravelDTO } from "@/types/DTOs/travelDTO";
import { List, FAB } from "react-native-paper";
import { TravelTimeRange } from "@/components/TravelTimeRange";
import { router } from "expo-router";

export default function TravelsScreen() {
    const [travels, setTravels] = useState<TravelDTO[]>([]);

    useEffect(() => {
        getTravels().then((data) => {
            data.sort((a, b) => a.plannedStartDate.valueOf() - b.plannedStartDate.valueOf());
            setTravels(data);
        });
    }, []);

    return (
        <View style={styles.container}>
            <FAB icon="plus" style={styles.fab} onPress={() => router.push("/travels/newTravel")} />

            <FlatList
                style={{ width: "100%", paddingHorizontal: 16 }}
                data={travels}
                renderItem={({ item: travel }) => {
                    return (
                        <List.Item
                            contentStyle={{ flexWrap: "nowrap", paddingRight: 8 }}
                            title={travel.description}
                            right={() => <TravelTimeRange start={travel.plannedStartDate} end={travel.plannedEndDate} />}
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
    fab: {
        position: "absolute",
        margin: 16,
        right: 0,
        bottom: 0,
        zIndex: 100,
    },
});
