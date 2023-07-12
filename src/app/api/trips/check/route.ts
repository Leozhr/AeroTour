import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const req = await request.json();
  
  const reservation = await prisma.trip.findMany({
    where: {
      id: req.tripId,
      startDate: { lte: new Date(req.endDate) },
      endDate: { lte: new Date(req.startDate) }
    }
  })

  if (reservation.length > 0) {
    return new NextResponse(JSON.stringify({
      error: {
        code: "Já existe uma reserva para esse período"
      }
    }))
  }

  return new NextResponse(JSON.stringify({
    success: true
  }))
}