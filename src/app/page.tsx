"use client"

import { useSession } from "next-auth/react";
import Categories from "./components/Categories";
import TripSearch from "./components/TripSearch";

export default function Home() {
  const { data } = useSession();

  return (
    <div className="container mx-auto">
      <TripSearch />
      <Categories />
    </div>
  )
}