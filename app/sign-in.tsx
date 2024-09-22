import { useSession } from "@/hooks/useSession";
import { router } from "expo-router";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";

type SignInForm = {
    username: string;
    password: string;
};

export default function SignInScreen() {
    const { signIn } = useSession();
    const theme = useTheme();
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignInForm>({
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<SignInForm> = async (data) => {
        await signIn(data);
        router.replace("/");
    };

    return (
        <View style={styles.container}>
            <Text variant="titleLarge" style={{ textAlign: "center" }}>
                Sign-In
            </Text>

            <Controller
                name="username"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onBlur, onChange } }) => <TextInput label="Username" value={value} onBlur={onBlur} onChangeText={onChange} />}
            />
            {!!errors.username && <Text style={{ color: theme.colors.error }}>This field is required</Text>}

            <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onBlur, onChange } }) => <TextInput label="Password" value={value} onBlur={onBlur} onChangeText={onChange} />}
            />
            {!!errors.password && <Text style={{ color: theme.colors.error }}>This field is required</Text>}

            <Button mode="contained" disabled={isSubmitting} onPress={handleSubmit(onSubmit)}>
                Submit
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        paddingHorizontal: 16,
        gap: 16,
    },
});
