"use client"

import React from "react"

import { CarouselDemo } from "./components/carousel"
import { OptionsCarousel } from "./components/options-carousel"

export default function Food() {
  const [data, setData] = React.useState(null)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    fetch("/api/swiggy")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error))
  }, [])

  return (
    <div className="container">
      <CarouselDemo />
      <OptionsCarousel />
    </div>
  )
}
