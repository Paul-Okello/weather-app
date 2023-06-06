"use client"

import { Root } from "@/typings"
import { Card, BarChart, Title } from "@tremor/react"

type Props = {
    results: Root
}

export default function TempChart({ results }: Props) {
    console.log("Results", results)


    const daily = results?.daily?.time.map(time => new Date(time).toLocaleString("en-GB", {
        weekday: "long",
    }))

    const data = daily?.map((day, index) => ({
        time: day,
        "UV Index": results.daily.uv_index_max[index],
        "Temperature (°C)": results.daily.temperature_2m_max[index],
    }))

    console.log("Data", data)


    const dataFormatter = (value: number) => `${value} °C`
    return (
        <Card>
            <Title className="text-3xl">Temperature & UV Index 7 day Forecast</Title>
            <BarChart
                className="mt-6"
                data={data}
                showLegend
                index="time"
                categories={["Temperature (°C)", "UV Index"]}
                colors={["yellow", "rose"]}
                valueFormatter={dataFormatter}
                yAxisWidth={40}
            />
        </Card>
    )
}
