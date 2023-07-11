import { Trip } from "@prisma/client";
import Image from "next/image";

interface tripInfo {
  trip: Trip
}

const Description = ({ trip }: tripInfo) => {
  return (
    <div className="px-5 text-aero_c2">
      <h2 className="font-semibold text-lg">Sobre a viajem</h2>
      <p className="text-sm mt-2 leading-5">{trip.description}</p>

      <div className="py-10">
      <h2 className="font-semibold text-lg">Destaques</h2>

        <div className="grid grid-cols-2 gap-3 mt-2">
          { trip.highlights.map((highlight) => (
            <div className="flex gap-1 items-center">
              <Image src={"/check-icon.png"} width={15} height={15} alt="check" />
              <p key={highlight} className="text-sm text-aero_c5">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Description