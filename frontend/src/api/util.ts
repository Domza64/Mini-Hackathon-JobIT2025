export interface UploadResponse {
  success: boolean;
  message: string;
}

export const hello = async (): Promise<UploadResponse> => {
  const apiUrl = import.meta.env.VITE_API_URL;

  try {
    const response = await fetch(`${apiUrl}`, {
      method: "GET",
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }

    return { success: true, message: await response.text() };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Upload failed",
    };
  }
};
