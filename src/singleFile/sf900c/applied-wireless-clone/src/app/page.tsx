"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Menu, Search, Minus, Plus } from "lucide-react";

// Product images
const productImages = [
  "https://ext.same-assets.com/2615582048/2932947796.jpeg",
  "https://ext.same-assets.com/2615582048/3174737338.png",
  "https://ext.same-assets.com/2615582048/3990088171.png",
];

// Related products data
const relatedProducts = [
  {
    id: 1,
    name: "SFT900C Long-Range Remote Control Transmitter, Handheld, 900 MHz",
    image: "https://ext.same-assets.com/2615582048/919830582.jpeg",
    price: "$189.95 – $209.95",
    hasVariants: true,
  },
  {
    id: 2,
    name: "SF900C-RX-OPT14 Remote Control Receiver, Long Range, 900MHz, Outdoor Enclosure",
    image: "https://ext.same-assets.com/2615582048/631757503.jpeg",
    price: "$297.95 – $369.95",
    hasVariants: true,
  },
];

const moreProducts = [
  {
    id: 3,
    name: "SF900C-OPT14 \"Switch Follower\" Remote Control and Voltage Input Transceiver, NEMA 4X Enclosure",
    image: "https://ext.same-assets.com/2615582048/173976705.jpeg",
    price: "$274.95 – $324.95",
    hasVariants: true,
  },
  {
    id: 4,
    name: "RCR24SSA-6R-OPT14 High EMI Receiver, 6-Relay, NEMA Enclosure",
    image: "https://ext.same-assets.com/2615582048/151839538.png",
    price: "$231.95",
    hasVariants: false,
  },
];

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedModel, setSelectedModel] = useState("");

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-[#44525d] text-white py-2.5">
        <div className="container mx-auto px-4 text-center">
          <a
            href="tel:805383-9600"
            className="text-sm font-semibold hover:underline"
          >
            (805) 383-9600
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="https://ext.same-assets.com/2615582048/457987590.png"
                alt="Applied Wireless Logo"
                width={200}
                height={60}
                className="h-14 w-auto"
              />
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-md hidden md:block">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-sm text-sm focus:outline-none focus:border-[#44525d]"
                />
                <button
                  type="button"
                  className="bg-[#d4a84b] hover:bg-[#c49a3d] px-4 py-2 rounded-r-sm"
                >
                  <Search className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Menu Icon */}
            <button
              type="button"
              className="p-2 border border-gray-300 rounded-sm hover:bg-gray-50"
            >
              <Menu className="w-6 h-6 text-[#44525d]" />
            </button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="container mx-auto px-4 py-4">
        <ol className="flex items-center text-sm text-[#44525d]">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li className="mx-2">/</li>
          <li>
            <Link href="/shop" className="hover:underline">
              Shop
            </Link>
          </li>
          <li className="mx-2">/</li>
          <li>
            <Link href="/remote-control" className="hover:underline">
              Remote Control
            </Link>
          </li>
          <li className="mx-2">/</li>
          <li className="text-gray-500">
            SF900C-RX Remote Control Receiver, Long Range
          </li>
        </ol>
      </nav>

      {/* Main Product Section */}
      <main className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-white flex items-center justify-center p-4">
              <Image
                src={productImages[selectedImage]}
                alt="SF900C-RX Remote Control Receiver"
                width={500}
                height={500}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 justify-center">
              {productImages.map((img, index) => (
                <button
                  type="button"
                  key={img}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 border-2 rounded overflow-hidden ${
                    selectedImage === index
                      ? "border-[#44525d]"
                      : "border-gray-200"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Product view ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#44525d] leading-tight font-['PT_Sans']">
              SF900C-RX Remote Control Receiver, Long Range
            </h1>

            <p className="text-2xl text-[#5a6a78]">$227.95 – $279.95</p>

            <div className="space-y-4 text-[#44525d]">
              <div>
                <p className="font-bold">Model:</p>
                <p>SF900C-RX</p>
              </div>

              <div>
                <p className="font-bold">Description:</p>
                <p className="leading-relaxed">
                  The SF900C-RX receivers, when used with SFT900C handheld
                  transmitters, are designed to provide a quick and cost
                  effective solution for a variety of wireless switching
                  applications with range of up to 2+ miles.
                </p>
              </div>

              <p className="leading-relaxed">
                The SF900C-RX receiver operates as a multi-channel, up to 10
                wireless relays using a SFT900C handheld or wall mount remote
                control. The default channel mode is Momentary but with optional
                custom software, Latched and Toggle modes are available
                applications. Mixed modes can also be programmed. When a button
                is pushed on the SFT900C transmitter, an RX LED and audible tone
                will indicate that the proper relay was triggered after
                receiving a verified acknowledgment reply back from the
                SF900C-RX receiver. Multiple transmitters can be used with one
                receiver as well as one transmitter can operate multiple
                receivers.
              </p>

              <p className="leading-relaxed">
                For wireless remote applications with voltage input triggers
                (external switches, dry contacts, PLC activation, etc.) use
                SF900C-B-B transmitters and SF900C-B-R receivers for up to
                3-mile range.
              </p>

              <p className="leading-relaxed">
                These products utilize frequency hopping spread spectrum
                technology and are resistant to interference and multi-path
                fading. They will not cause interference with wi-fi networks.
                Also available in outdoor NEMA IP-67 enclosure and with 120/240V
                internal power supply options.
              </p>

              <div>
                <p className="font-bold">Includes:</p>
                <p>SF900-RX Receiver & Antenna</p>
              </div>
            </div>

            {/* Model Selection */}
            <div className="flex items-center gap-4">
              <span className="font-bold text-[#44525d]">Available Models</span>
              <Select value={selectedModel} onValueChange={setSelectedModel}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Choose an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="SF900C10-B-RX">SF900C10-B-RX</SelectItem>
                  <SelectItem value="SF900C4-B-RX">SF900C4-B-RX</SelectItem>
                  <SelectItem value="SF900C8-B-RX">SF900C8-B-RX</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))
                  }
                  className="w-12 text-center py-2 border-x border-gray-300 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <Button className="bg-[#b06342] hover:bg-[#9a5639] text-white px-8 py-3 rounded-sm font-semibold">
                Add to cart
              </Button>
            </div>

            {/* SKU and Category */}
            <div className="text-sm text-gray-600 space-y-1 pt-4">
              <p>
                <span className="font-semibold">SKU:</span> N/A
              </p>
              <p>
                <span className="font-semibold">Category:</span>{" "}
                <Link href="/remote-control" className="text-[#44525d] hover:underline">
                  Remote Control
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="additional" className="w-full">
            <TabsList className="w-full justify-start bg-transparent border-b border-gray-200 rounded-none h-auto p-0 gap-0">
              <TabsTrigger
                value="additional"
                className="rounded-none border border-gray-200 bg-white data-[state=active]:border-b-white data-[state=inactive]:border-b-gray-200 data-[state=inactive]:bg-gray-50 px-6 py-3 text-sm font-normal text-[#44525d] data-[state=active]:shadow-none"
              >
                Additional information
              </TabsTrigger>
              <TabsTrigger
                value="datasheet"
                className="rounded-none border border-gray-200 border-l-0 bg-white data-[state=active]:border-b-white data-[state=inactive]:border-b-gray-200 data-[state=inactive]:bg-gray-50 px-6 py-3 text-sm font-normal text-[#44525d] data-[state=active]:shadow-none"
              >
                Data Sheet
              </TabsTrigger>
              <TabsTrigger
                value="userguide"
                className="rounded-none border border-gray-200 border-l-0 bg-white data-[state=active]:border-b-white data-[state=inactive]:border-b-gray-200 data-[state=inactive]:bg-gray-50 px-6 py-3 text-sm font-normal text-[#44525d] data-[state=active]:shadow-none"
              >
                User Guide [PDF]
              </TabsTrigger>
            </TabsList>

            <TabsContent value="additional" className="pt-8">
              <h2 className="text-2xl font-bold text-[#44525d] mb-6 font-['PT_Sans']">
                Description
              </h2>

              <h3 className="text-base font-bold text-[#44525d] mb-3 uppercase tracking-wide">
                Features
              </h3>
              <ul className="list-disc list-inside space-y-1 text-[#44525d] mb-8 ml-2">
                <li>Works with SFT900 Series Handheld and Wall Mount Transmitters</li>
                <li>Up to 10 each-10A Relay Outputs</li>
                <li>Long Range: 1/2 to 2+ Miles</li>
                <li>Sends "Acknowledgment" Back to Transmitter</li>
                <li>Spread Spectrum Technology</li>
                <li>12-28 Volt DC or AC Operation</li>
                <li>Optional 120/240 VAC Input Power</li>
                <li>FCC Certified</li>
                <li>Made in USA</li>
              </ul>

              <h3 className="text-base font-bold text-[#44525d] mb-3 uppercase tracking-wide">
                Typical Application
              </h3>
              <ul className="list-disc list-inside space-y-1 text-[#44525d] ml-2">
                <li>Pump Control</li>
                <li>Motor Control</li>
                <li>Solenoid Control</li>
                <li>Lighting Control</li>
                <li>Access Control</li>
                <li>PLC Activation</li>
                <li>Conveyor Control</li>
              </ul>
            </TabsContent>

            <TabsContent value="datasheet" className="pt-8">
              <h2 className="text-2xl font-bold text-[#44525d] mb-4 font-['PT_Sans']">
                Data Sheet
              </h2>
              <a
                href="#"
                className="text-[#44525d] hover:underline"
              >
                SF900C-RX RECEIVER Spec 3-2024
              </a>
            </TabsContent>

            <TabsContent value="userguide" className="pt-8">
              <h2 className="text-2xl font-bold text-[#44525d] mb-4 font-['PT_Sans']">
                User Guide [PDF]
              </h2>
              <a
                href="#"
                className="text-[#44525d] hover:underline"
              >
                UG SF900C-B-RX 2-6-2026
              </a>
            </TabsContent>
          </Tabs>
        </div>

        {/* You may also like */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-[#44525d] mb-8 font-['PT_Sans']">
            You may also like...
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-square bg-white flex items-center justify-center mb-4 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-[#44525d] font-medium mb-2 leading-snug">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{product.price}</p>
                <Button
                  variant="outline"
                  className="text-sm border-[#b06342] text-[#b06342] hover:bg-[#b06342] hover:text-white"
                >
                  Select options
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-[#44525d] mb-8 font-['PT_Sans']">
            Related products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {moreProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-square bg-white flex items-center justify-center mb-4 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-[#44525d] font-medium mb-2 leading-snug">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{product.price}</p>
                <Button
                  variant="outline"
                  className="text-sm border-[#b06342] text-[#b06342] hover:bg-[#b06342] hover:text-white"
                >
                  {product.hasVariants ? "Select options" : "Add to cart"}
                </Button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">© 2026 Applied Wireless</p>
        </div>
      </footer>
    </div>
  );
}
