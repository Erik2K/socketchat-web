import { SignInRequest } from "@/app/lib/types/auth/signin";

export async function SignIn (request: SignInRequest) {
    const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request),
        credentials: 'include'
    })

    console.log(response)

    if (!response.ok) throw new Error('Failed to login');

    return response.json()
}