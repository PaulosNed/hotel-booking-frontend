import HomePage from "@/components/home/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Nahusenay International Hotel"
}


export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  )
}
