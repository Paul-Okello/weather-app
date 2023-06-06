"use client"

import { Country, City } from "country-state-city"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Select from "react-select"
import { GlobeAltIcon } from "@heroicons/react/24/solid"

type Option = {
    value: {
        latitude: string
        longitude: string
        isoCode: string
    },
    label: string
} | null

type CityOption = {
    value: {
        latitude: string
        longitude: string
        isoCode: string
        name: string
        stateCode: string
    },
    label: string
} | null

function CityPicker() {
    const [selectedCountry, setSelectedCountry] = useState<Option>(null)
    const [selectedCity, setSelectedCity] = useState<CityOption>(null)

    const options = Country.getAllCountries().map((country) => ({
        value: {
            latitude: country.latitude,
            longitude: country.longitude,
            isoCode: country.isoCode,
        },
        label: country.name,
    }))

    const cityOptions = selectedCountry
        ? City.getCitiesOfCountry(selectedCountry.value.isoCode)?.map((city) => ({
            value: {
                latitude: city.latitude!,
                longitude: city.longitude!,
                isoCode: city.countryCode,
                name: city.name,
                stateCode: city.stateCode,
            },
            label: city.name,
        }))
        : [];

    const router = useRouter()

    function handleSelectedCountry(option: Option) {
        setSelectedCountry(option)
        setSelectedCity(null)
    }

    function handleSelectedCity(option: CityOption) {
        setSelectedCity(option)
        router.push(`/location/${option?.value.name}/${option?.value?.latitude}/${option?.value?.longitude}`)
    }

    return (
        <div>
            <div className="space-y-2">
                <div className="flex items-center space-x-2 text-white/80">
                    <GlobeAltIcon className="h-5 w-5 text-white" />
                    <label htmlFor="Country">Country</label>
                </div>
                <Select
                    options={options}
                    value={selectedCountry}
                    onChange={handleSelectedCountry}
                    className="text-black"
                    aria-label="country-select"
                />

                {selectedCountry && (<div className="space-y-2">
                    <div className="flex items-center space-x-2 text-white/80">
                        <GlobeAltIcon className="h-5 w-5 text-white" />
                        <label htmlFor="City">City</label>
                    </div>
                    <Select
                        aria-label="city-select"
                        options={cityOptions}
                        value={selectedCity}
                        onChange={handleSelectedCity}
                        className="text-black"
                    />
                </div>)}
            </div>

        </div>
    )
}

export default CityPicker