import ButtonLight from "@/components/ButtonLight";
import { Trip } from "@prisma/client";
import Image from "next/image";

interface tripInfo {
  trip: Trip
}

const Location = ({ trip }: tripInfo) => {
  return (
    <div className="px-5 text-aero_c2">
      <h2 className="font-semibold text-lg">Localização</h2>
      <div className="py-4">
        <Image src={"/map-mobile.png"} width={600} height={300} alt="location"
        className="w-full" />
      </div>

      <div className="py-2 mb-10">
        <ButtonLight className="w-full">Ver no Google Maps</ButtonLight>
      </div>
    </div>
  )
}

export default Location