import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <header className="w-full px-4 py-4 bg-gray-900">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/opa&jort.jpg"
              alt="Wiebrens familie logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-semibold text-lg text-white">Wiebrens</span>
          </Link>
          <nav className="space-x-4">
            <Button
              variant="ghost"
              className="text-white hover:text-white hover:bg-gray-800"
              asChild
            >
              <Link href="/overOns">De familie Wiebrens</Link>
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-white hover:bg-gray-800"
              asChild
            >
              <Link href="/mijn_verhaal">Het verhaal van Jaap Wiebrens</Link>
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-white hover:bg-gray-800"
              asChild
            >
              <Link href="/wiebrensinhetnieuws">Wiebrens in het nieuws</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Centering the main content with Flexbox */}
      <main className="flex-grow flex justify-center items-center container mx-auto px-4 py-8">
        <section className="w-full max-w-4xl text-center">
          <div className="relative aspect-video mb-8">
            <Image
              src="/opa&jort.jpg"
              alt="Family Hero Image"
              height={575}
              width={1000}
              objectFit="cover"
              className="rounded-lg"
            />
            <p className="mt-4">
              Opa Jaap en Jort voor ons huis in Voorschoten in 2005
            </p>
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-white">
              Welkom op de website van de familie Wiebrens
            </h1>
            <p className="text-lg text-gray-300">
              Deze website is gemaakt om het werk van mijn grootvader Jaap Wiebrens te eren.
              Jaap was geobsedeerd met het archief en maakte er altijd tijd voor.
              </p> 
            <p>
                Zijn toewijding aan het archief is ongekend en op deze wijze willen we zijn werk eren.
              </p>
            <p>
              Wiebrens.com is er om het werk van Jaap Wiebrens te delen met de wereld.
            </p>
          </div>
        </section>
      </main>

      <footer className="w-full px-4 py-6 bg-gray-900">
        <div className="container mx-auto text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Family Name. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
