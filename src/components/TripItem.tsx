import { Trip } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";

interface TripItemProps {
  trip: Trip;
}

const TripItem = ({ trip }: TripItemProps) => {
  return (
    <Link href={`/trips/${trip.id}`}>
      <div className="flex flex-col">
        <div className="relative h-[280px] w-[280px]">
          <Image
            src={trip.coverImage}
            className="rounded-lg shadow-md"
            style={{
              objectFit: "cover",
            }}
            fill
            alt={trip.name}
          />
        </div>

        <h3 className="text-aero_c2 font-medium text-lg mt-2">{trip.name}</h3>
        <div className="flex items-center gap-1 my-[2px]">
          <ReactCountryFlag countryCode={trip.countryCode} svg />
          <p className="text-sm text-aero_c5">{trip.location}</p>
        </div>

        <p className="text-sm text-aero_c5">
          <span className="text-aero_c1 font-semibold">R${trip.pricePerDay.toString()}</span> por dia
        </p>
      </div>
    </Link>
  );
};

export default TripItem;