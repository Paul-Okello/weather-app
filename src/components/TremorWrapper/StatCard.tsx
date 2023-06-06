"use client"

import { Card, Metric, Text, Color } from "@tremor/react"

type Props = {
    title: string
    metric: string
    color?: Color
}

function StatCard({ title, metric, color }: Props) {
    return (
        <Card decorationColor={color} decoration="top">
            <Text className="text-base font-semibold">{title}</Text>
            <Metric className="text-4xl">{metric}</Metric>
        </Card>
    )
}

export default StatCard
