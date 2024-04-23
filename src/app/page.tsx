import Image from "next/image";
import React from "react";
import TutorCards from "@/components/TutorCards";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <h1>
          DIME-<em>AI</em>
        </h1>
        <h2 className="font-serif mb-4">¡Hola! ¿Quieres chatear?</h2>
        <p className="intro mb-3" style={{ width: "42rem" }}>
          DIME-AI features AI chatbot tutors designed to help you build your Spanish skills with realistic
          conversations. Choose one of our friendly AI-tutors below and start practicing your Spanish writing and
          reading skills!
        </p>
      </div>
      <div className="tutors">
        <TutorCards />
      </div>
    </main>
  );
}
