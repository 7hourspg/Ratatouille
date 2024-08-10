import * as React from "react"
import Image from "next/image"
import Image1 from "public/carousel/1.jpeg"
import Image2 from "public/carousel/2.webp"
import Image3 from "public/carousel/3.jpg"
import Image4 from "public/carousel/4.avif"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

export function CarouselDemo() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  // array of images
  const images = [Image4, Image2, Image3, Image1]

  return (
    <div className="mt-5 flex w-full flex-col items-center justify-center">
      <Carousel setApi={setApi} className="w-full max-w-screen-lg">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="py-1">
                <Card className="border-none bg-transparent p-0 shadow-none">
                  <CardContent className="flex h-[504px] w-full items-center justify-center overflow-hidden">
                    <Image
                      src={image}
                      alt={`Image ${index + 1}`}
                      className="size-full max-w-screen-lg overflow-hidden rounded-lg object-cover"
                      layout="cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  )
}
