import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function OptionsCarousel() {
  return (
    <div className="mt-5 flex w-full flex-col items-center justify-center mx-8">
      <div className="flex flex-col w-full py-2">
        <h1 className="text-xl text-start font-semibold">
          What&#39;s on your mind?
        </h1>
      </div>

      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {Array.from({ length: 12 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/12"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
