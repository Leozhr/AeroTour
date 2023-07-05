import { prisma } from '@/lib/prisma'

const getTrips = async () => {
  const trips = await prisma.trip.findMany({})

  return trips
}

const Trips = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())

    console.log({ data })

    return (
        <div>
            <h1>Trips</h1>
            <ul>
              {data.map((trip: any) => (
                 <li key={trip.id}>{trip.title}</li>
              ))}
            </ul>
        </div>
    )
}

export default Trips