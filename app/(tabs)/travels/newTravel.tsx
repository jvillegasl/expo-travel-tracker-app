import { View, StyleSheet } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { DateTimeInput } from "@/components/DateTimeIInput";
import { createTravels } from "@/services/createTravel";
import { router } from "expo-router";

type NewTravelForm = {
    description: string;
    plannedStartDate: Date | null;
    plannedEndDate: Date | null;
};

const schema = z
    .object({
        description: z
            .string()
            .transform((t) => t.trim())
            .pipe(z.string().min(1)),
        plannedStartDate: z.date({ message: "This field is required" }),
        plannedEndDate: z.date({ message: "This field is required" }),
    })
    .refine((t) => t.plannedEndDate > t.plannedStartDate, {
        message: "End date must be after start date",
        path: ["plannedEndDate"],
    }) satisfies z.ZodSchema<NewTravelForm>;

export default function NewTravelScreen() {
    const theme = useTheme();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<NewTravelForm>({
        defaultValues: {
            description: "",
            plannedStartDate: null,
            plannedEndDate: null,
        },
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<NewTravelForm> = async (rawData) => {
        const validationResults = schema.safeParse(rawData);

        if (!validationResults.success) return;

        const data = validationResults.data;

        await createTravels(data);

        router.back();
    };

    return (
        <View style={styles.container}>
            <View>
                <Controller
                    name="plannedStartDate"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value } }) => (
                        <DateTimeInput label="Start Date" value={value} onChange={onChange} error={!!errors.plannedStartDate} />
                    )}
                />
                {!!errors.plannedStartDate && <Text style={{ color: theme.colors.error }}>{errors.plannedStartDate.message}</Text>}
            </View>

            <View>
                <Controller
                    name="plannedEndDate"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value } }) => (
                        <DateTimeInput label="Start Date" value={value} onChange={onChange} error={!!errors.plannedEndDate} />
                    )}
                />
                {!!errors.plannedEndDate && <Text style={{ color: theme.colors.error }}>{errors.plannedEndDate.message}</Text>}
            </View>

            <View>
                <Controller
                    name="description"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <TextInput
                            label="Description"
                            multiline={true}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            error={!!errors.description}
                            blurOnSubmit={true}
                        />
                    )}
                />
                {!!errors.description && <Text style={{ color: theme.colors.error }}>{errors.description.message}</Text>}
            </View>

            <Button mode="contained" onPress={handleSubmit(onSubmit)}>
                Submit
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { gap: 16, padding: 16 },
});
