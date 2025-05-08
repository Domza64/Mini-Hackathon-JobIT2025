import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaTimes, FaCheck } from "react-icons/fa";
import { postOglas } from "../api/util";
import { useUserData } from "../hooks/useUserData";
import { allCategories } from "./OglasiPage";

export default function NewPostPage() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [contact, setContact] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const { userData } = useUserData();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const { success, errorMessage } = await postOglas({
        title,
        text,
        categories,
        contact,
        postedById: userData?.id || -1,
        postedBy: userData?.name || "",
      });

      if (success) {
        setSuccess(true);
        setTimeout(() => navigate("/oglasi"), 1500);
      } else {
        setErrorMessage(errorMessage || "Failed to post announcement");
      }
    } catch (err) {
      setErrorMessage("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleCategory = (category: string) => {
    setCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <main className="flex-grow p-6 max-w-3xl mx-auto w-full">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FaPlus className="text-blue-500" />
            New Announcement
          </h1>

          {success ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-center text-green-700 gap-2">
                <FaCheck />
                <span>Announcement posted successfully!</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {errorMessage && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center text-red-700 gap-2">
                    <FaTimes />
                    <span>{errorMessage}</span>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                {/* Title Field */}
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Title*
                  </label>
                  <input
                    id="title"
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter announcement title"
                  />
                </div>

                {/* Description Field */}
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Description*
                  </label>
                  <textarea
                    id="description"
                    required
                    rows={5}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Provide detailed information about your announcement"
                  />
                </div>

                {/* Categories Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Categories (select up to 3)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {allCategories.map((category) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => toggleCategory(category)}
                        disabled={
                          categories.length >= 3 &&
                          !categories.includes(category)
                        }
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                          categories.includes(category)
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        } ${
                          categories.length >= 3 &&
                          !categories.includes(category)
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact Field */}
                <div>
                  <label
                    htmlFor="contact"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Contact Information*
                  </label>
                  <input
                    id="contact"
                    type="text"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Email or phone number"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || !title || !text || !contact}
                    className={`px-4 py-2 rounded-lg text-white transition-colors ${
                      isSubmitting || !title || !text || !contact
                        ? "bg-blue-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                  >
                    {isSubmitting ? "Posting..." : "Post Announcement"}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
