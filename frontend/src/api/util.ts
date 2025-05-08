import { Aktivnost } from "../types/aktivnost";
import CalendarEvent from "../types/calendarEvent";
import Oglas from "../types/oglas";

export interface ScheduleResponse {
  schedule?: CalendarEvent[];
  error?: string;
}

export const fetchSchedule = async (
  studentId: number // In actual app use studentId from JWT
): Promise<ScheduleResponse> => {
  const apiUrl = import.meta.env.VITE_API_URL;

  try {
    const response = await fetch(`${apiUrl}/schedule?studentId=${studentId}`, {
      // Send JWT instead of studentId as url param
      method: "GET",
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }

    return { schedule: await response.json() };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Error getting schedule",
    };
  }
};

export const fetchActivities = async (
  type: string
): Promise<{ error?: string; aktivnosti?: Aktivnost[] }> => {
  const apiUrl = import.meta.env.VITE_API_URL;

  try {
    const response = await fetch(`${apiUrl}/aktivnosti/${type}`, {
      method: "GET",
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }

    return { aktivnosti: await response.json() };
  } catch (error) {
    return {
      error:
        error instanceof Error ? error.message : "Error getting activities",
    };
  }
};

export const fetchOglasi = async (
  categories?: string[]
): Promise<{ error?: string; oglasi?: Oglas[] }> => {
  const apiUrl = import.meta.env.VITE_API_URL;

  try {
    const response = await fetch(
      `${apiUrl}/oglasi${
        categories && categories.length > 0
          ? `?categories=${categories.join("-")}`
          : ""
      }`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }

    return { oglasi: await response.json() };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Error getting oglasi",
    };
  }
};

export interface OglasPostData {
  title: string;
  text: string;
  categories: string[];
  contact: string;
  postedById: number;
  postedBy: string;
}

export const postOglas = async (
  oglasData: OglasPostData
): Promise<{ success: boolean; errorMessage?: string }> => {
  const apiUrl = import.meta.env.VITE_API_URL;

  try {
    const response = await fetch(`${apiUrl}/oglasi`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(oglasData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to post announcement");
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      errorMessage:
        error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
};
