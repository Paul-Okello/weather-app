"use client"

import { Color, Text, Title } from "@tremor/react";

type Props = {
    child: string
    className?: string
    color?: Color
}

export function TremorTitle({ child, className, color }: Props) {
    return (
        <Title className={className} color={color}>
            {child}
        </Title>
    )
}

export function TremorText({ child, className, color }: Props) {
    return (
        <Text className={className} color={color}>
            {child}
        </Text>
    )
}