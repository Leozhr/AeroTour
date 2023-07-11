"use client"

import Button from "@/components/Button"
import DatePicker from "@/components/DatePicker"
import Input from "@/components/Input"

const Reservation = ({ price }: { price: number }) => {
  return (
      <div className="flex flex-col gap-3 my-4 px-5">
        <div className="flex gap-3">
            <DatePicker placeholderText="Data de Inicio" onChange={() => {}} className="w-full"/>
            <DatePicker placeholderText="Data Final" onChange={() => {}} className="w-full"/>
        </div>

        <Input placeholder="Hóspedes"/>

        <div className="flex justify-between text-aero_c2 text-md py-2 font-medium">
          <p>Total (7 Dias)</p>
          <span>R${price * 7}</span>
        </div>

        <Button>Ver no Google Maps</Button>
      </div>
  )
}

export default Reservation