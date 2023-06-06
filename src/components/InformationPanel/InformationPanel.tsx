import { Root } from "@/typings"
import { TremorText, TremorTitle } from "../TremorWrapper/UtilComponents"
import CityPicker from "../CityPicker/CityPicker"
import weatherCodeToString from "@/lib/weatherCodeToString"
import Image from "next/image"
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"

type Props = {
    city: string
    lat: string
    long: string
    results: Root
}


export default function InformationPanel({ city, lat, long, results }: Props) {
    return (
        <div className="bg-gradient-to-br from-[#394F68] to-[#183B7E] text-white p-10">
            <div className="pb-5">
                <TremorTitle child={decodeURI(city)} className="text-6xl font-bold text-zinc-200 my-4" />
                <TremorText child={`Latitude/Longitude: ${lat}, ${long}`} className="text-xs text-gray-400" />
            </div>
            <CityPicker />
            <hr className="my-10" />
            <div className=" flex items-center justify-between space-x-10 my-5">
                <div className="text-white">
                    <TremorText child={
                        new Date().toLocaleDateString("en-GB", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })
                    } className="text-xl text-white" />
                    <TremorText child={`Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}`} className="font-extralight text-white" />
                </div>
                <TremorText child={new Date().toLocaleTimeString("en-GB", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                })} className="text-xl font-bold uppercase text-white" />
            </div>
            <hr className="my-10" />
            <div className="flex items-center justify-between">
                <div className="">
                    {/* Image */}
                    <Image
                        src={`https://www.weatherbit.io/static/img/icons/${weatherCodeToString[results.current_weather.weathercode].icon}.png`}
                        alt={weatherCodeToString[results.current_weather.weathercode].label}
                        width={75}
                        height={75}
                    />
                    <div className="flex items-center justify-between space-x-10">
                        <TremorText child={`${results.current_weather.temperature.toFixed(1)}°C`} className="text-6xl font-semibold  text-white" />
                        <TremorText child={weatherCodeToString[results.current_weather.weathercode].label} className="text-lg font-extralight text-right text-white" />
                    </div>
                </div>
            </div>

            <div className="space-y-2 py-5">
                <div className="flex items-center space-x-2 px-4 py-3 border border-[#6F90CD] rounded-md bg-[#405885]">
                    <SunIcon className="h-10 w-10 text-gray-400" />
                    <div className="flex-1 flex justify-between items-center">
                        <TremorText child="Sunrise" className="text-white font-extralight" />
                        <TremorText child={new Date(results.daily.sunrise[0]).toLocaleTimeString("en-GB", {
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                        })} className="text-white uppercase text-2xl" />
                    </div>
                </div>
                {/* Sunset */}
                <div className="flex items-center space-x-2 px-4 py-3 border border-[#6F90CD] rounded-md bg-[#405885]">
                    <MoonIcon className="h-10 w-10 text-gray-400" />
                    <div className="flex-1 flex justify-between items-center">
                        <TremorText child="Sunset" className="text-white font-extralight" />
                        <TremorText child={new Date(results.daily.sunset[0]).toLocaleTimeString("en-GB", {
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                        })} className="text-white uppercase text-2xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

