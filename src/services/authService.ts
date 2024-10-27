
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

  return {
    login,
  }
}
