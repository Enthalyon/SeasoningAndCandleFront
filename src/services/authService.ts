import { SignUpRequest } from "@/types/authTypes";

export const authService = () => {
  const apiUrl = `${import.meta.env.VITE_API_URL}auth`;

  const login = async (email: string, password: string) => {
    return await fetch(`${apiUrl}/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
  }

  const registerUser = async (signUpRequest: SignUpRequest) => {
    return await fetch(`${apiUrl}/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...signUpRequest }),
    });
  }

  return {
    login,
    registerUser
  }
}
