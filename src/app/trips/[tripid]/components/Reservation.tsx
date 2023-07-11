"use client"

import Button from "@/components/Button"
import DatePicker from "@/components/DatePicker"
import Input from "@/components/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Trip } from "@prisma/client"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"

interface tripInfo {
  trip: Trip
}

const ReservationSchema = z.object({
  startDate: z.date({ required_error: "Este campo é obrigatório." }).nullable(),
  endDate: z.date({ required_error: "Este campo é obrigatório." }).nullable(),
  guests: z.number({ invalid_type_error: "Este campo é obrigatório." })
  .min(2, "Mínimo de 2 hóspedes")
  .max(10, "Máximo de 10 hóspedes"),
})

type ReservationData = z.infer<typeof ReservationSchema>

const Reservation = ({ trip }: tripInfo) => {
  const { register, handleSubmit, formState: { errors }, control, watch } = useForm<ReservationData>({
    resolver: zodResolver(ReservationSchema),
  })

  const onSubmit = (data: any) => {
    console.log({ data })
  }

  const watchStartDate = watch("startDate")

  return (
      <div className="flex flex-col gap-3 my-4 px-5">
        <div className="flex gap-3">
          <Controller
          name="startDate"
          control={control}
          render={({ field }) => (
            <DatePicker 
            placeholderText="Data de Inicio" 
            onChange={ field.onChange }
            selected={ field.value }
            error={!!errors.startDate}
            errorMessage={errors.startDate?.message}
            minDate={trip.startDate}
            className="w-full" />
            )} />
        
          <Controller
          name="endDate"
          control={control}
          render={({ field }) => (
            <DatePicker 
            placeholderText="Data Final" 
            onChange={ field.onChange }
            selected={ field.value }
            error={ !!errors.endDate }
            errorMessage={  errors.endDate?.message }
            maxDate={ trip.endDate }
            minDate={ watchStartDate ?? trip.startDate }
            className="w-full" />
            )} />
        </div>

        <Input {...register("guests", { valueAsNumber: true })}
        placeholder="Numero de Hóspedes"
        error={!!errors.guests}
        errorMessage={errors.guests?.message}
        type="number" />

        <div className="flex justify-between text-aero_c2 text-md py-2 font-medium">
          <p>Total (7 Dias)</p>
          <span>R$3000</span>
        </div>

        <Button onClick={() => handleSubmit(onSubmit)()}>Reservar</Button>
    </div>
  )
}

export default Reservation