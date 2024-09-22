export type SignInRequest = {
    username: string;
    password: string;
};

export async function signIn(request: SignInRequest) {
    const url = "http://10.0.2.2:3000/auth/login";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accept: "application/json",
            },
            body: JSON.stringify(request),
        });

        if (response.status !== 200) return;

        const body = await response.json();
        const token = body.token as string;

        return token;
    } catch (error) {
        console.error(error);

        return;
    }
}
