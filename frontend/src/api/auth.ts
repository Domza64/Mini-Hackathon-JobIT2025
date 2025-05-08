export interface AuthResponse {
  studentId?: string;
  error?: string;
}

export const authenticate = async (username: string): Promise<AuthResponse> => {
  const apiUrl = import.meta.env.VITE_API_URL;

  try {
    const response = await fetch(`${apiUrl}/auth`, {
      method: "post",
      body: username,
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }

    return { studentId: await response.text() };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Authentication failed",
    };
  }
};
