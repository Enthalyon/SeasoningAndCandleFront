const apiUrl = `${import.meta.env.VITE_API_URL}auth`;

export const login = async (email: string, password: string) => {
  const response = await fetch(`${apiUrl}/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
};