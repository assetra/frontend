"use client";
import React, { useCallback, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import {
  Bold,
  Italic,
  Heading1,
  Heading2,
  Heading3,
  Link,
  List,
  ListOrdered,
  Code,
  Quote,
  Images,
} from "lucide-react";

const Write = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [selectedAuthor, setSelectedAuthor] = useState<string>("");

  const authors: string[] = ["gio", "bob", "claude", "yash", "ashmeet"];

  const fetchedTags: string[] = [
    "javascript",
    "bitcoin",
    "design",
    "innovation",
    "tutorial",
    "business",
  ];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]); // Save image file locally
    }
  };

  // Upload image to Next.js API route and get the URL
  const uploadImage = async () => {
    if (!imageFile) return ""; // Return empty string if no image is selected

    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const response = await fetch("/api/blog", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Image upload failed");
      }

      const data = await response.json();
      return data.filePath; // Return the image URL after upload
    } catch (error) {
      console.error("Error uploading image:", error);
      return ""; // Return empty string if there's an error
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    const uploadedImageUrl = await uploadImage();

    const image = uploadedImageUrl;
    const tags = selectedTags.join(",");
    const author = selectedAuthor;
    console.log(content, title, image, tags, author);

    try {
      const response = await fetch(
        "https://gtxadmin.pythonanywhere.com/create_blog",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            author,
            content,
            title,
            tags,
            image,
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Response error:", errorText);
        throw new Error("Failed to create post");
      }
      setContent("");
      setTitle("");
      setSelectedTags([]);
      setImageFile(null);
      setSelectedAuthor("");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else if (selectedTags.length < 3) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setContent(e.target.value);
    },
    []
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedAuthor(value);
  };

  const formatText = useCallback(
    (markdownSyntax: string, defaultText: string = "") => {
      const textarea = textareaRef.current;
      if (!textarea) return;

      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = textarea.value.slice(start, end) || defaultText;
      const beforeText = textarea.value.slice(0, start);
      const afterText = textarea.value.slice(end);

      const formattedText = `${beforeText}${markdownSyntax}${selectedText}${markdownSyntax}${afterText}`;
      setContent(formattedText);

      textarea.focus();
      textarea.setSelectionRange(
        start + markdownSyntax.length,
        end + markdownSyntax.length
      );
    },
    []
  );

  const handleBold = useCallback(
    () => formatText("**", "bold text"),
    [formatText]
  );
  const handleItalic = useCallback(
    () => formatText("*", "italic text"),
    [formatText]
  );

  const handleHeading = useCallback((level: number) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.slice(start, end) || `Heading ${level}`;
    const beforeText = textarea.value.slice(0, start);
    const afterText = textarea.value.slice(end);

    const headingMarker = "#".repeat(level) + " ";
    const formattedText = `${beforeText}${headingMarker}${selectedText}${afterText}`;
    setContent(formattedText);

    textarea.focus();
    textarea.setSelectionRange(
      start + headingMarker.length,
      start + headingMarker.length + selectedText.length
    );
  }, []);

  const handleLink = useCallback(() => {
    const url = prompt("Enter the URL:");
    if (url) {
      formatText("[", "](" + url + ")");
    }
  }, [formatText]);

  const handleList = useCallback((ordered: boolean) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const beforeText = textarea.value.slice(0, start);
    const afterText = textarea.value.slice(start);

    const listMarker = ordered ? "1. " : "- ";
    const formattedText = `${beforeText}\n${listMarker}List item${afterText}`;
    setContent(formattedText);

    textarea.focus();
    textarea.setSelectionRange(
      start + listMarker.length + 1,
      start + listMarker.length + 9
    );
  }, []);

  const handleInlineCode = useCallback(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.slice(start, end) || "code here";
    const beforeText = textarea.value.slice(0, start);
    const afterText = textarea.value.slice(end);

    const formattedText = `${beforeText}\`\`\`\n${selectedText}\n\`\`\`${afterText}`;
    setContent(formattedText);

    textarea.focus();
    textarea.setSelectionRange(start + 4, start + 4 + selectedText.length);
  }, []);

  const handleBlockQuote = useCallback(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.slice(start, end) || "Quoted text";
    const beforeText = textarea.value.slice(0, start);
    const afterText = textarea.value.slice(end);

    const quotedText = selectedText
      .split("\n")
      .map((line) => `> ${line}`)
      .join("\n");
    const formattedText = `${beforeText}${quotedText}${afterText}`;
    setContent(formattedText);

    textarea.focus();
    textarea.setSelectionRange(start + 2, start + quotedText.length);
  }, []);

  return (
    <div>
      <div className="p-16">
        <div className="mt-8 p-4 bg-base-300 rounded-xl">
          <p className="m-4">Write Post</p>
          <form
            onSubmit={handleSubmit}
            className="grid grid-rows-6 max-h-[70svh] min-h-[400px] p-4 bg-gray-800 overflow-y-auto rounded-xl gap-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your post title here..."
              className="row-span-1 bg-[#2C353D] rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <div className="row-span-4 bg-[#2C353D] rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500">
              <div className="flex flex-row w-full h-full rounded-b-xl gap-4">
                <div className="flex flex-col w-1/2 h-full rounded-b-xl">
                  <div className="flex flex-wrap space-x-2 p-2 bg-gray-700 border-b rounded-t-xl">
                    <button
                      onClick={handleBold}
                      className="p-1 bg-white rounded shadow hover:bg-gray-200"
                      type="button"
                      aria-label="Bold"
                    >
                      <Bold size={16} color="black" />
                    </button>
                    <button
                      onClick={handleItalic}
                      className="p-1 bg-white rounded shadow hover:bg-gray-200"
                      type="button"
                      aria-label="Italic"
                    >
                      <Italic size={16} color="black" />
                    </button>
                    <button
                      onClick={() => handleHeading(1)}
                      className="p-1 bg-white rounded shadow hover:bg-gray-200"
                      type="button"
                      aria-label="Heading 1"
                    >
                      <Heading1 size={16} color="black" />
                    </button>
                    <button
                      onClick={() => handleHeading(2)}
                      className="p-1 bg-white rounded shadow hover:bg-gray-200"
                      type="button"
                      aria-label="Heading 2"
                    >
                      <Heading2 size={16} color="black" />
                    </button>
                    <button
                      onClick={() => handleHeading(3)}
                      className="p-1 bg-white rounded shadow hover:bg-gray-200"
                      type="button"
                      aria-label="Heading 3"
                    >
                      <Heading3 size={16} color="black" />
                    </button>
                    <button
                      onClick={handleLink}
                      className="p-1 bg-white rounded shadow hover:bg-gray-200"
                      type="button"
                      aria-label="Link"
                    >
                      <Link size={16} color="black" />
                    </button>
                    <button
                      onClick={() => handleList(false)}
                      className="p-1 bg-white rounded shadow hover:bg-gray-200"
                      type="button"
                      aria-label="Unordered List"
                    >
                      <List size={16} color="black" />
                    </button>
                    <button
                      onClick={() => handleList(true)}
                      className="p-1 bg-white rounded shadow hover:bg-gray-200"
                      type="button"
                      aria-label="Ordered List"
                    >
                      <ListOrdered size={16} color="black" />
                    </button>
                    <button
                      onClick={handleInlineCode}
                      className="p-1 bg-white rounded shadow hover:bg-gray-200"
                      type="button"
                      aria-label="Inline Code"
                    >
                      <Code size={16} color="black" />
                    </button>
                    <button
                      onClick={handleBlockQuote}
                      className="p-1 bg-white rounded shadow hover:bg-gray-200"
                      type="button"
                      aria-label="Block Quote"
                    >
                      <Quote size={16} color="black" />
                    </button>
                  </div>

                  <textarea
                    ref={textareaRef}
                    className="flex-1 p-4 bg-white overflow-auto outline-none rounded-b-xl text-black resize-none"
                    value={content}
                    onChange={handleInput}
                    placeholder="Start writing your Markdown here..."
                  />
                </div>
                <div className="flex flex-col w-1/2 h-full rounded-b-xl">
                  <div className="flex flex-wrap space-x-2 py-[6px] px-2 bg-gray-700 border-b rounded-t-xl">
                    <h3 className="text-lg font-semibold">Preview:</h3>
                  </div>
                  <div className="prose max-w-none flex-1 p-4 bg-white overflow-auto outline-none rounded-b-xl text-black resize-none">
                    <ReactMarkdown>{content}</ReactMarkdown>
                  </div>
                </div>
              </div>
            </div>

            {/* Tag Selection */}
            <div className="row-span-1 flex items-center justify-between">
              <div className="flex space-x-2">
                {fetchedTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className={`p-2 text-[14px] rounded-badge ${
                      selectedTags.includes(tag)
                        ? "bg-orange-500 text-white"
                        : "bg-[#2C353D] text-gray-400"
                    }`}
                    onClick={() => handleTagClick(tag)}
                    disabled={
                      !selectedTags.includes(tag) && selectedTags.length >= 3
                    }
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <div>
                <select
                  value={selectedAuthor}
                  title="author"
                  onChange={handleChange}
                  className="p-2 bg-orange-500 rounded-btn hover:bg-orange-600 md:w-[150px] text-white"
                >
                  {authors.map((author) => (
                    <option key={author} value={author}>
                      {author}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative flex items-center">
                {/* Hidden file input */}
                <input
                  id="file-upload"
                  title="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />

                {/* Custom file upload button with icon */}
                <label
                  htmlFor="file-upload"
                  className="flex items-center cursor-pointer p-2 bg-orange-500 rounded-btn hover:bg-orange-600 md:w-[150px] text-white"
                >
                  <Images color="white" className="m-auto" />
                </label>

                {imageFile && (
                  <span className="ml-4 text-gray-200">Image Uploaded</span>
                )}
              </div>

              <button
                type="submit"
                className="p-2 bg-orange-500 rounded-btn hover:bg-orange-600 md:w-[150px] text-white"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Write;
