"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { marked } from "marked";
import { FaArrowUp } from "react-icons/fa";
import context from "./contextData";
import promptTemplate from "./promptTemplate";

const BotIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div
      className="tooltip tooltip-left fixed bottom-6 right-6 p-4 rounded-full bg-gradient-to-br from-white/10 to-white/5  backdrop-blur-lg border border-white/10  text-white cursor-pointer shadow-lg z-[9999]"
      data-tip="Click to chat"
      onClick={onClick}
      aria-label="Open chat"
    >
      <Image
        width={16}
        height={16}
        src="/assets/Gnosis.png"
        alt="Gnosis logo"
      />
    </div>
  );
};

interface Message {
  user?: string;
  bot?: string;
}

const API_KEY = "AIzaSyB_55UO346K7-Vncs386cdn_UC_djFe5GI";
const url = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

const ChatWindow: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { bot: "Hello, I am Gnosis. How can I help you?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const fetchBotResponse = async (userMessage: string) => {
    const prompt = promptTemplate(context, userMessage);

    const data = {
      contents: [
        {
          role: "user",
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const botMessageMarkdown =
        result?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't understand that.";
      const botMessageHtml = marked.parse(botMessageMarkdown);

      // Ensure botMessageHtml is a string
      const safeMessageHtml =
        typeof botMessageHtml === "string"
          ? botMessageHtml
          : String(botMessageHtml);

      setMessages((prevMessages) => [
        ...prevMessages,
        { bot: safeMessageHtml },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { bot: "There was an error processing your request." },
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { user: input }]);
      fetchBotResponse(input);
      setInput("");
    }
  };

  return (
    <div className="fixed bottom-4 right-4 h-[520px] w-[400px] bg-white flex flex-col shadow-lg rounded-xl z-[9999]">
      <div className="bg-black flex items-center justify-between py-2 px-4 rounded-t-xl">
        <h1 className="text-white">Gnosis</h1>
        <button className="text-white" onClick={onClose}>
          X
        </button>
      </div>
      <div
        className="flex-1 overflow-y-auto px-2 py-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="space-y-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`max-w-[70%] ${message.user ? "ml-auto" : ""}`}
            >
              <div
                className={`p-2 rounded-btn text-black ${
                  message.user ? "bg-[#d8dee9]" : "bg-[#e1e6d9]"
                }`}
                style={{
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                }}
                dangerouslySetInnerHTML={{
                  __html: message.user || message.bot || "",
                }}
              />
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="p-2 bg-base-300 rounded-b-xl flex items-center"
      >
        <div className="flex w-full items-center bg-white shadow-sm overflow-hidden pr-2 rounded-btn">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type here..."
            className="w-full p-2 border-none outline-none"
            autoFocus
          />
          <button
            type="submit"
            className={`p-2 rounded-full ${
              input ? "bg-[#9c9d9d]" : "bg-[#e5e6e6]"
            }`}
          >
            <FaArrowUp className="text-white" />
          </button>
        </div>
      </form>
    </div>
  );
};

const Bot: React.FC = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);

  const handleChatToggle = () => {
    setIsChatVisible(!isChatVisible);
  };

  return (
    <div>
      {!isChatVisible && <BotIcon onClick={handleChatToggle} />}
      {isChatVisible && <ChatWindow onClose={handleChatToggle} />}
    </div>
  );
};

export default Bot;
