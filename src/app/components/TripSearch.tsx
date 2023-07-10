"use client";

import Button from "@/components/Button";
import CurrencyInput from "@/components/CurrencyInput";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";

const TripSearch = () => {
  return (
    <div className="bg-world bg-cover bg-center bg-no-repeat px-5 py-10">
      <h1 className="font-semibold text-2xl text-aero_c2 text-center">
        Encontre sua próxima <span className="text-aero_c1">viagem!</span>
      </h1>

        <div className="flex flex-col gap-4 mt-5">
          <Input placeholder="Onde você quer ir?"/>

        <div className="flex">
            <DatePicker placeholderText="Quando quer ir?" onChange={() => {}}/>
            <CurrencyInput placeholder="Orçamento"/>
        </div>

        <Button>Buscar</Button>
        </div>
      </div>
  )
}

export default TripSearch