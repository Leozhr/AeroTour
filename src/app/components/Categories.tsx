import Image from "next/image";

const Categories = () => {
  return (
    <div className="container mx-auto py-2 px-5 ">
      <div className="flex items-center gap-2">
        <div className="h-[1.5px] bg-aero_c5 flex-[2] opacity-40" />
        <h1 className="text-aero_t3 font-semibold">Tente pesquisar por</h1>
        <div className="h-[1.5px] bg-aero_c5 flex-[2] opacity-40" />
      </div>

      <div className="flex w-full justify-around py-6 text-aero_t3">
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="/hotel-icon.png" width={30} height={30} alt="Hotel" />

          <p>Hotel</p>
        </div>

        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="/farm-icon.png" width={30} height={30} alt="Hotel" />

          <p>Fazenda</p>
        </div>

        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="/cottage-icon.png" width={30} height={30} alt="Hotel" />

          <p>Chalé</p>
        </div>

        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="/inn-icon.png" width={30} height={30} alt="Hotel" />

          <p>Pousada</p>
        </div>
      </div>
    </div>
  )
}

export default Categories