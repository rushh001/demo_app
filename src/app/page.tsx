
"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/form", {
      method: "POST", // Use the correct method (GET, POST, etc.)
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phoneNumber }),
    });
    
    const data = await res.json();
    console.log(data);
    

    if (res.ok) {
      setMessage("User added successfully!");
      setName("");
      setEmail("");
      setPhoneNumber("");
    } else {
      setMessage("Error adding user.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">User Form</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="border p-2" required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2" required />
        <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="border p-2" required />
        <button type="submit" className="bg-blue-500 text-white p-2">Submit</button>
      </form>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}
