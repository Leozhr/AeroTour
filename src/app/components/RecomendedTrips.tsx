import TripItem from "@/components/TripItem";
import { prisma } from "@/lib/prisma";

async function fetchTrips() {
  const trips = await prisma.trip.findMany({})

  return trips
} 

const RecomendedTrips = async () => {
  const data = await fetchTrips();

  return (
    <div className="container mx-auto px-5">
    <div className="flex items-center gap-2 mb-6">
      <div className="h-[1.5px] bg-aero_c5 flex-[2] opacity-40" />
      <h1 className="text-aero_t3 font-semibold">Destinos Recomendados</h1>
      <div className="h-[1.5px] bg-aero_c5 flex-[2] opacity-40" />
    </div>
    
    <div className="flex flex-col gap-6 items-center">
        {data.map((trip) => (
          <TripItem key={trip.id} trip={trip} />
        ))}
    </div>
  </div>
  )
}

export default RecomendedTrips