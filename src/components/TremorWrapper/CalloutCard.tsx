"use client"

import { Callout } from "@tremor/react"
import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/solid"

type Props = {
  message: string
  warning?: boolean
}

export default function CalloutCard({ message, warning }: Props) {
  return (
    <Callout
      title={message}
      icon={warning ? ExclamationCircleIcon : CheckCircleIcon}
      color={warning ? "rose" : "teal"}
      className="mt-4"
    />
  )
}
