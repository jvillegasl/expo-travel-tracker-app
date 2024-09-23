import { useState } from "react";
import { Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import moment from "moment";

type DateTimeInputProps = {
    label: string;
    value?: Date | null;
    onChange?: (date: Date) => void;
    error?: boolean;
};

export function DateTimeInput({ label, value, onChange, error }: DateTimeInputProps) {
    const [showPicker, setShowPicker] = useState(false);
    const [mode, setMode] = useState<"date" | "time">("date");

    function handleChange(event: DateTimePickerEvent, newDate?: Date) {
        setShowPicker(false);

        if (mode === "time") {
            setMode("date");
        }

        if (event.type === "dismissed" || !newDate) return;

        onChange && onChange(newDate);

        if (mode === "date") {
            setShowPicker(true);
            setMode("time");
        } else {
            setMode("date");
        }
    }

    return (
        <Pressable onPress={() => setShowPicker(true)}>
            <TextInput label={label} editable={false} error={error} value={value ? moment(value).format("DD/MM/YYYY HH:mm") : "DD/MM/YYYY HH:mm"} />
            {showPicker && <DateTimePicker value={value ?? new Date()} mode={mode} onChange={handleChange} />}
        </Pressable>
    );
}
