"use client";
import Footer from "./components/footer";
import Header from "./components/header";

import { redirect } from "next/navigation";

const handleDashboardClick = () => {
  redirect("/dashboard");
};

export default function Home() {
  return (
    <>
      <Header />
      <div className="container bg-gray-100 m-auto">
        <div>
          <div className="text-black font-bold text-center p-5">Thales CSP</div>
        </div>
        <div className="text-center">
          <button
            onClick={handleDashboardClick}
            className="bg-black text-white rounded-lg p-2"
          >
            Dashboard
          </button>
        </div>
      </div>
    </>
  );
}
