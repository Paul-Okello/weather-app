import { getClient } from "@/apollo-client"
import { CalloutCard, InformationPanel, RainChart, StatCard, TempChart } from "@/components"
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries"
import cleanData from "@/lib/cleanData"
import getBasePath from "@/lib/getbasePath"
import { Root } from "@/typings"
import { Text, Title } from "@tremor/react"

export const revalidate = 60

type Props = {
    params: {
        city: string
        lat: string
        long: string
    }
}

async function WeatherPage({ params: { city, lat, long } }: Props) {
    const client = getClient()

    const { data } = await client.query({
        query: fetchWeatherQuery,
        variables: {
            current_weather: "true",
            longitude: long,
            latitude: lat,
            timezone: "auto",
        }
    })

    const results: Root = data.myQuery

    const dataToSend = cleanData(results, city)
    const res = await fetch(`${getBasePath()}/api/getWeatherSummary`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            weatherData: dataToSend
        }),
    })

    const GPTdata = await res.json()
    const { content } = GPTdata
    console.log("Result", results)
    return (
        <div className="flex flex-col min-h-screen md:flex-row bg-slate-50">
            {/* Information Panel */}
            <InformationPanel city={city} lat={lat} long={long} results={results} />
            <div className="flex-1 p-5 lg:p-10">
                <div className="p-5">
                    <div className="pb-5">
                        <Title className="text-xl font-bold">Overview (Today)</Title>
                        <Text className="text-sm text-gray-400">
                            Last Updated at:{" "}
                            {new Date(results.current_weather.time).toLocaleTimeString()}{" "}
                            {results.timezone}
                        </Text>
                    </div>
                    <div className="m-2 mb-10">
                        {/* Callout Card */}
                        <CalloutCard message={content} />
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
                        <StatCard title="Maximum Temperature" metric={`${results.daily.temperature_2m_max[0].toFixed(1)}°C`} color="green" />
                        <StatCard title="Minimum Temperature" metric={`${results.daily.temperature_2m_min[0].toFixed(1)}°C`} color="yellow" />
                    </div>
                    <div className="my-4">
                        <StatCard title="UV Index" metric={`${results.daily.uv_index_max[0].toFixed(1)}`} color="rose" />
                        {Number(results.daily.uv_index_max[0].toFixed(1)) > 5 && (
                            <CalloutCard message="UV Index is high, wear sunscreen!" warning />
                        )}
                    </div>
                    <div className="flex space-x-3">
                        <StatCard title="Wind Speed" metric={`${results.current_weather.windspeed.toFixed(1)}m/s`} color="cyan" />
                        <StatCard title="Wind Direction" metric={`${results.current_weather.winddirection.toFixed(1)}°`} color="violet" />
                    </div>
                </div>
                <hr className="mb-5" />
                <div className="space-y-3">
                    {/* Temp chart */}
                    <TempChart results={results} />
                    {/* Rain chart */}
                    {/* <RainChart results={results} /> */}
                    {/* Humidity chart */}
                </div>
            </div>
        </div>
    )
}

export default WeatherPage