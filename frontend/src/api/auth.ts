export const authenticate = async (
  username: string
): Promise<string | null> => {
  const apiUrl = import.meta.env.VITE_API_URL;

  try {
    const response = await fetch(`${apiUrl}/auth`, {
      method: "post",
      body: username,
    });

    if (!response.ok) {
      throw new Error();
    }

    return response.text();
  } catch (error) {
    return null;
  }
};
