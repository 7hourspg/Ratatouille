import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { HeartPulse, Pizza, Truck } from "lucide-react"
import FoodImage from "public/food.png"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function IndexPage() {
  const CardData = [
    {
      title: "Fast Delivery",
      description: "We deliver your food in the fastest time possible",
      icon: <Truck size={48} />,
    },
    {
      title: "Healthy Food",
      description: "We deliver your food in the fastest time possible",
      icon: <HeartPulse size={48} />,
    },
    {
      title: "Tasty Food",
      description: "We deliver your food in the fastest time possible",
      icon: <Pizza size={48} />,
    },
  ]
  return (
    <section className="grid min-h-screen items-center gap-6 bg-gradient-to-l from-input pb-8 pt-6 md:py-10">
      <div className="container flex min-h-[90vh] w-full items-center justify-between gap-10">
        <div className="flex flex-[1.3] flex-col gap-4">
          <h1 className="font-rubik text-7xl font-semibold capitalize leading-tight">
            Test the
            <br />
            <span className="text-primary"> difference,</span>
            <br />
            test the
            <span className="text-primary"> good life</span>
          </h1>
          <p>
            We are most fastest and Favourite Food Delivery Services over the
            all over the world Search for your Favourite food or resturant in
            your area
          </p>
          <div className="flex gap-4 max-w-screen-sm">
            <Input
              placeholder="Search for your favourite food"
              className="flex-1"
            />
            <Button variant="default">Search</Button>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src={FoodImage}
            alt="food"
            className="size-[500px] bg-blend-multiply"
          />
        </div>
      </div>

      {/* Cards */}
      <div className="container flex flex-col gap-12">
        <h1 className="text-center font-serif text-6xl font-semibold">
          Eat like a<span className="text-primary"> king</span>
        </h1>
        {
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {CardData.map((card, index) => (
              <Card key={index}>
                <CardHeader>{card.icon}</CardHeader>
                <CardContent>
                  {/* Make the first word in primary color */}
                  <CardTitle>
                    <span className="text-primary">
                      {card.title.split(" ")[0]}{" "}
                    </span>
                    {card.title.split(" ")[1]}
                  </CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        }
      </div>
    </section>
  )
}
