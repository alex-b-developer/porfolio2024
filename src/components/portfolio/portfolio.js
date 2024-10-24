import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import isolutionImg from "../../img/portfolio-isolution.jpg";
import lagunaImg from "../../img/portfolio-laguna.jpg";
import jviconImg from "../../img/portfolio-jvicon.jpg";
import drinkImg from "../../img/portfolio-drink.jpg";
import shoesImg from "../../img/portfolio-shoes.jpg";

export default function App() {
  return (
    <div className="max-w-[1200px] gap-2 grid grid-cols-12 grid-rows-2 px-8 mx-auto">  
    <Card className="col-span-6 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">JVICON LLC</p>
        <h4 className="text-white font-medium text-large">Corporate Website</h4>
      </CardHeader>
      <Image
        isZoomed
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={jviconImg}
      />
    </Card>
    <Card className="col-span-6 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Drink Safety Miami</p>
        <h4 className="text-white font-medium text-large">Animated Landing Page</h4>
      </CardHeader>
      <Image
        isZoomed
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={drinkImg}
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Shoes Salome</p>
        <h4 className="text-white font-medium text-large">Ecommerce Project</h4>
      </CardHeader>
      <Image
        isZoomed
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={shoesImg}
      />
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Laguna Media Group</p>
        <h4 className="text-black font-medium text-2xl">Agency Website</h4>
      </CardHeader>
      <Image
        isZoomed  
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full -translate-y-6 object-cover"
        src={lagunaImg}
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">Available soon.</p>
          <p className="text-black text-tiny">Get notified.</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Notify Me
        </Button>
      </CardFooter>
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Isolution Service Center</p>
        <h4 className="text-white/90 font-medium text-xl">Ecommerce Project</h4>
      </CardHeader>
      <Image
        isZoomed
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src={isolutionImg}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src="https://nextui.org/images/breathing-app-icon.jpeg"
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Breathing App</p>
            <p className="text-tiny text-white/60">Get a good night's sleep.</p>
          </div>
        </div>
        <Button radius="full" size="sm">Get App</Button>
      </CardFooter>
    </Card>
  </div>
  );
}