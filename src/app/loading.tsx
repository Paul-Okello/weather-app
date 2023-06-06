import { SunIcon } from "@heroicons/react/24/solid"

function Loading() {
    return (
        <div className="bg-gradient-to-br from-[#394F68] to-[#183B7E] min-h-screen flex flex-col items-center justify-center text-slate-500">
            <SunIcon className="h-24 w-24 text-yellow-500 animate-spin" color="yellow" />
            <h1 className="text-6xl font-bold text-center mb-10 animate-pulse">Loading city weather information...</h1>
            <h2 className="text-xl font-bold text-center mb-10 animate-pulse">
                Hold on, we're crunching the numbers & generating an AI summary of the weather for you
            </h2>
        </div>
    )
}

export default Loading

