import { useState } from "react";

export const addEvent = async (eventData: {
  title: string;
  type: string;
  course: string;
  start: Date;
  end: Date;
  canceled: boolean;
  allDay: boolean;
  classroomId: number;
}): Promise<{
  error?: string;
  message?: string;
}> => {
  const apiUrl = import.meta.env.VITE_API_URL;

  try {
    const response = await fetch(`${apiUrl}/event`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }

    return { message: await response.text() };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Error adding event",
    };
  }
};

export default function AddEventForm() {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    course: "",
    start: "",
    end: "",
    canceled: false,
    allDay: false,
    classroomId: 0,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    error?: string;
    message?: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: parseInt(value, 10),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const eventData = {
        ...formData,
        start: new Date(formData.start),
        end: new Date(formData.end),
      };

      const result = await addEvent(eventData);
      setSubmitResult(result);

      if (!result.error) {
        setFormData({
          title: "",
          type: "",
          course: "",
          start: "",
          end: "",
          canceled: false,
          allDay: false,
          classroomId: 0,
        });
      }
    } catch (error) {
      setSubmitResult({
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Event</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Type */}
          <div>
            <label
              htmlFor="type"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Event Type
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select type</option>
              <option value="lecture">Lecture</option>
              <option value="lab">Lab</option>
              <option value="exam">Exam</option>
              <option value="meeting">Meeting</option>
            </select>
          </div>

          {/* Course */}
          <div>
            <label
              htmlFor="course"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Course
            </label>
            <input
              type="text"
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Date/Time Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Start */}
            <div>
              <label
                htmlFor="start"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Start Date/Time
              </label>
              <input
                type="datetime-local"
                id="start"
                name="start"
                value={formData.start}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* End */}
            <div>
              <label
                htmlFor="end"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                End Date/Time
              </label>
              <input
                type="datetime-local"
                id="end"
                name="end"
                value={formData.end}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Checkbox Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* All Day */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="allDay"
                name="allDay"
                checked={formData.allDay}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="allDay"
                className="ml-2 block text-sm text-gray-700"
              >
                All Day Event
              </label>
            </div>

            {/* Canceled */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="canceled"
                name="canceled"
                checked={formData.canceled}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="canceled"
                className="ml-2 block text-sm text-gray-700"
              >
                Canceled
              </label>
            </div>
          </div>

          {/* Classroom ID */}
          <div>
            <label
              htmlFor="classroomId"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Classroom ID
            </label>
            <input
              type="number"
              id="classroomId"
              name="classroomId"
              value={formData.classroomId}
              onChange={handleNumberChange}
              required
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </>
            ) : (
              "Add Event"
            )}
          </button>
        </div>

        {/* Result Messages */}
        {submitResult && (
          <div
            className={`mt-4 p-3 rounded ${
              submitResult.error
                ? "bg-red-50 text-red-700"
                : "bg-green-50 text-green-700"
            }`}
          >
            {submitResult.error && <p>{submitResult.error}</p>}
            {submitResult.message && <p>{submitResult.message}</p>}
          </div>
        )}
      </form>
    </div>
  );
}
