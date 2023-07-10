import Categories from "./components/Categories";
import RecomendedTrips from "./components/RecomendedTrips";
import TripSearch from "./components/TripSearch";

export default function Home() {
  return (
    <div>
      <TripSearch />
      <Categories />
      <RecomendedTrips />
    </div> 
  )
}