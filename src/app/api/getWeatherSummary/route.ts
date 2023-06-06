import { NextResponse } from "next/server";
import openai from "../../../../openai";


export async function POST(request: Request) {
    const { weatherData } = await request.json();
    
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        temperature: 0.8,
        n: 1,
        stream: false,
        messages: [
            {
                role: "system",
                content: `As a lively weather news presenter, inform viewers about the city's weather and offer preparation tips. Assume data is from the news office.`
            }, 
            {
                role: "user",
                content: `Hi there, can I get a summary of todays weather, use the following information to get the weather data: ${JSON.stringify(weatherData)}`
            }
        ]
    })

    const { data } = response;
    
    return NextResponse.json(data.choices[0].message)
 }