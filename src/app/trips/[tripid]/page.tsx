import { prisma } from "@/lib/prisma";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import Description from "./components/Description";
import Location from "./components/Location";
import Reservation from "./components/Reservation";

async function getTripID(params: string) {
  const trip = await prisma.trip.findUnique({
    where: {
      id: params,
    },
  })

  return trip;
}

const tripDetails = async ({ params }: { params: { tripid: string } }) => {
  const trip = await getTripID(params.tripid);

  if (!trip) return null;

  return (
    <div className="w-full bg-white">
      <Image src={trip.coverImage} alt={trip.name} width={393} height={208} 
      className="w-full" />
      <div className="px-5 py-1">
        <h3 className="text-aero_c2 font-semibold text-2xl mt-2">{trip.name}</h3>
        <div className="flex items-center gap-1 my-[2px]">
          <ReactCountryFlag countryCode={trip.countryCode} svg />
          <p className="text-md text-aero_c5">{trip.location}</p>
        </div>
        <p className="text-md text-aero_c5">
          <span className="text-aero_c1 font-semibold">R${trip.pricePerDay.toString()}</span> por dia
        </p>
      </div>

      <Reservation trip={trip} />

      <div className="h-[2px] bg-aero_c3 mx-5 my-10"/>

      <Description trip={trip} />
      <Location trip={trip}/>
    </div>
  )
}

export default tripDetails