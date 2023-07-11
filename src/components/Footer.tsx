import Image from "next/image"

const Footer = () => {
  return (
    <footer className="flex flex-col place-items-center bg-aero_c3 gap-1 py-2">
      <Image width={183} height={32} src="/aerotour.svg" alt="AeroTour"
      className="scale-[0.8]" />
      <span className="text-sm font-regular">Todos direitos reservados</span>
    </footer>
  )
}

export default Footer