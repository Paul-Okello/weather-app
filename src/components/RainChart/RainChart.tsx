// "use client"

// import { chunkValues } from "@/lib/utils"
// import { Root } from "@/typings"
// import { Card, BarChart, Title } from "@tremor/react"

// type Props = {
//     results: Root
// }

// export default function RainChart({ results }: Props) {
//     console.log("Results", results)


//     const daily = results?.daily?.time.map(time => new Date(time).toLocaleString("en-GB", {
//         weekday: "long",
//     }))
//     const showers = chunkValues(results.hourly.showers, 24)
//     const relativeHumidity = chunkValues(results.hourly.relativehumidity_2m, 24)
//     const data = daily?.map((day, index) => ({
//         time: day,
//         "Rain (%)": showers.[index],
//     }))

//     console.log("Data", data)


//     const dataFormatter = (value: number) => `${value} °C`
//     return (
//         <Card>
//             <Title className="text-3xl">Temperature & UV Index 7 day Forecast</Title>
//             <BarChart
//                 className="mt-6"
//                 data={data}
//                 showLegend
//                 index="time"
//                 categories={["Temperature (°C)", "UV Index"]}
//                 colors={["yellow", "rose"]}
//                 valueFormatter={dataFormatter}
//                 yAxisWidth={40}
//             />
//         </Card>
//     )
// }
