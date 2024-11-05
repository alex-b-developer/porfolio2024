import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

// Importación de imágenes
import drinkImg from "../../img/portfolio-drink.jpg";
import isolutionImg from "../../img/portfolio-isolution.PNG";
import jviconImg from "../../img/portfolio-jvicon.jpg";
import karismaImg from "../../img/portfolio-karisma.PNG";
import lagunaImg from "../../img/portfolio-laguna.jpg";
import nickelodeonImg from "../../img/portfolio-nickelodeon.PNG";
import shoesImg from "../../img/portfolio-shoes.jpg";
import sportravelImg from "../../img/portfolio-sportravel.jpg";
import wbehfImg from "../../img/portfolio-wbehf.PNG";

// Importación de íconos
import drinkIcon from "../../img/icon-drink.PNG";
import isolutionIcon from "../../img/icon-isolution.PNG";
import jviconIcon from "../../img/icon-jvicon.PNG";
import karismaIcon from "../../img/icon-karisma.PNG";
import lagunaIcon from "../../img/icon-laguna.PNG";
import nickelodeonIcon from "../../img/icon-nickelodeon.PNG";
import shoesIcon from "../../img/icon-shoes.PNG";
import sportravelIcon from "../../img/icon-sportravel.PNG";
import wbehfIcon from "../../img/icon-wbehf.PNG";

export default function App() {
  return (
    <div className="max-w-[1200px] gap-2 grid grid-cols-12 grid-rows-2 px-8 mx-auto">

      {/* Tarjeta JVICON LLC */}
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            JVICON LLC
          </p>
          <h4 className="text-white font-medium text-large">
            Corporate Website
          </h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Imagen del sitio web de JVICON LLC"
          className="z-0 w-full h-full object-cover"
          src={jviconImg}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Logo icon for JVICON LLC"
              className="rounded-full w-10 h-11 bg-black"
              src={jviconIcon}
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">jviconllc.com</p>
            </div>
          </div>
          <a href="https://jviconllc.com/" target="_blank" rel="noreferrer">
            <Button radius="full" size="sm">
              Visit Website
            </Button>
          </a>
        </CardFooter>
      </Card>

      {/* Card for Drink Safety Miami Landing Page */}
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Drink Safety Miami
          </p>
          <h4 className="text-white font-medium text-large">
            Animated Landing Page
          </h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={drinkImg}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Icon"
              className="rounded-full w-10 h-11 bg-black"
              src={drinkIcon}
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">drinksafely.miami</p>
            </div>
          </div>
          <a
            href="https://www.drinksafely.miami/"
            target="_blank"
            rel="noreferrer"
          >
            <Button radius="full" size="sm">
              Visit Website
            </Button>
          </a>
        </CardFooter>
      </Card>

      {/* Card for Shoes Salome Ecommerce */}
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Shoes Salome
          </p>
          <h4 className="text-white font-medium text-large">Ecommerce</h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={shoesImg}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Icon"
              className="rounded-full w-10 h-11 bg-black"
              src={shoesIcon}
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">shoessalome.com.co</p>
            </div>
          </div>
          <a
            href="https://shoessalome.com.co/"
            target="_blank"
            rel="noreferrer"
          >
            <Button radius="full" size="sm">
              Visit Website
            </Button>
          </a>
        </CardFooter>
      </Card>

      {/* Card for Laguna Media Group Corporate Website */}
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">
        Laguna Media Group
          </p>
          <h4 className="text-white/90 font-medium text-xl">
            Corporate Website and Tech Blog
          </h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full -translate-y-6 object-cover"
          src={lagunaImg}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Icon"
              className="rounded-full w-10 h-11 bg-black"
              src={lagunaIcon}
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">lagunamg.com</p>
            </div>
          </div>
          <a href="https://lagunamg.com/" target="_blank" rel="noreferrer">
            <Button radius="full" size="sm">
              Visit Website
            </Button>
          </a>
        </CardFooter>
      </Card>

      {/* Card for Isolution Service Center Ecommerce */}
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Isolution Service Center
          </p>
          <h4 className="text-white/90 font-medium text-xl">Ecommerce</h4>
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
              alt="Icon"
              className="rounded-full w-10 h-11 bg-black"
              src={isolutionIcon}
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">isolution.com.co</p>
            </div>
          </div>
          <a href="https://isolution.com.co/" target="_blank" rel="noreferrer">
            <Button radius="full" size="sm">
              Visit Website
            </Button>
          </a>
        </CardFooter>
      </Card>

      {/* Card for Women’s Business Enterprise */}
      <Card className="col-span-12 sm:col-span-3 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Women’s Business Enterprise
          </p>
          <h4 className="text-white font-medium text-large">
            Corporate Website
          </h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={wbehfImg}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Icon"
              className="rounded-full w-10 h-11 bg-black"
              src={wbehfIcon}
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">wbehf.org</p>
            </div>
          </div>
          <a href="https://wbehf.org/" target="_blank" rel="noreferrer">
            <Button radius="full" size="sm">
              Visit Website
            </Button>
          </a>
        </CardFooter>
      </Card>

      {/* Card for Sportravel */}
      <Card className="col-span-12 sm:col-span-3 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Sportravel
          </p>
          <h4 className="text-white font-medium text-large">
            Event Website and Ecommerce
          </h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={sportravelImg}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Icon"
              className="rounded-full w-10 h-11 bg-black"
              src={sportravelIcon}
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">sportravel.co</p>
            </div>
          </div>
          <a href="https://www.sportravel.co/" target="_blank" rel="noreferrer">
            <Button radius="full" size="sm">
              Visit Website
            </Button>
          </a>
        </CardFooter>
      </Card>

      {/* Card for Karisma Hotels and resorts */}
      <Card className="col-span-12 sm:col-span-3 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Karisma Hotels and Resorts
          </p>
          <h4 className="text-white font-medium text-large">Mailing Webpage</h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={karismaImg}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Icon"
              className="rounded-full w-10 h-11 bg-black"
              src={karismaIcon}
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">karismahotels.com</p>
            </div>
          </div>
          <a
            href="https://marketing.karismahotels.com/eblasts/Weeding-newsletterFeb2023/index.html"
            target="_blank"
            rel="noreferrer"
          >
            <Button radius="full" size="sm">
              Visit Website
            </Button>
          </a>
        </CardFooter>
      </Card>

      {/* Card for Nickelodeon Hotels and resorts */}
      <Card className="col-span-12 sm:col-span-3 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Nickelodeon Hotels and Resorts
          </p>
          <h4 className="text-white font-medium text-large">Mailing Webpage</h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={nickelodeonImg}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Icon"
              className="rounded-full w-10 h-11 bg-black"
              src={nickelodeonIcon}
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">karismahotels.com</p>
            </div>
          </div>
          <a
            href="https://marketing.karismahotels.com/eblasts/SOS-April2023/SOS-Launch-TA/index.html"
            target="_blank"
            rel="noreferrer"
          >
            <Button radius="full" size="sm">
              Visit Website
            </Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
