import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>
          DIME-<em>AI</em>
        </h1>
        <h2 className="font-serif">¡Hola! ¿Quieres chatear?</h2>
        <p className="intro">
          DIME-AI features AI chatbot tutors designed to help you build your Spanish skills with realistic
          conversations. Choose one of our friendly AI-tutors below and start practicing your Spanish writing and
          reading skills!
        </p>
      </div>
    </main>
  );
}
