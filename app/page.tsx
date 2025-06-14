'use client'

import React from "react"
import Image from "next/image"
import { Star, Shield, Truck, RotateCcw, Heart, Share2, Plus, Minus, Check, Zap, Eye, Wind } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/placeholder-logo.png"
                                alt="Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8"
                            />
                            <span className="font-semibold text-xl">TopMask</span>
                        </div>
                        <nav className="hidden md:flex items-center space-x-8">
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Products
                            </span>
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Technology
                            </span>
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Support
                            </span>
                        </nav>
                        <div className="flex items-center space-x-3">
                            <Button variant="ghost" size="sm" className="hidden sm:flex">
                                <Heart className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="hidden sm:flex">
                                <Share2 className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Product Section */}
            <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-cyan-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
                        {/* Product Images */}
                        <div className="space-y-4">
                            <div className="aspect-square bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/43d73ded-db1d-4122-8a60-0de1369e6d77.jpg?"
                                    alt="TopMask Pro Full-Face Snorkeling Mask - Main View"
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-3">
                                <div className="aspect-square bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-cyan-300 hover:scale-105 transition-all duration-200">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/66c0556c-8d95-4d19-b33b-923ed00742b9.jpg?"
                                        alt="TopMask Pro underwater view"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-cyan-300 hover:scale-105 transition-all duration-200">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/9a25bc55-ebb6-48de-8137-810824a26f43.jpg?"
                                        alt="TopMask Pro side view"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-cyan-300 hover:scale-105 transition-all duration-200">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/d91d6208-342e-4bb7-9516-f3ea54088a5b.jpg?"
                                        alt="TopMask Pro features"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-cyan-300 hover:scale-105 transition-all duration-200">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/43d73ded-db1d-4122-8a60-0de1369e6d77.jpg?"
                                        alt="TopMask Pro color options"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-6 lg:space-y-8">
                            <div className="space-y-4">
                                <Badge variant="secondary" className="text-xs font-medium bg-cyan-100 text-cyan-800">
                                    🇩🇪 German Engineering
                                </Badge>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                                    TopMask Pro Full-Face Snorkeling Mask
                                </h1>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <span className="text-sm text-slate-600 font-medium">(4.8/5 on Google & TrustPilot)</span>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                                    Revolutionary full-face design with advanced CO2 safety technology. Experience effortless underwater breathing with 180° panoramic views.
                                </p>
                            </div>

                            {/* Price */}
                            <div className="space-y-3">
                                <div className="flex items-baseline gap-4">
                                    <span className="text-4xl font-bold text-slate-900">$89.99</span>
                                    <span className="text-xl text-slate-500 line-through">$129.99</span>
                                    <Badge variant="destructive" className="text-sm font-semibold">
                                        31% OFF
                                    </Badge>
                                </div>
                                <p className="text-sm font-medium text-green-600 flex items-center gap-2">
                                    <Check className="h-4 w-4" />
                                    In stock - Ships within 24 hours
                                </p>
                            </div>

                            {/* Key Features */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl hover:from-cyan-100 hover:to-blue-100 transition-all">
                                    <Wind className="h-5 w-5 text-cyan-700" />
                                    <span className="font-medium text-sm">CO2 Safety System</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl hover:from-cyan-100 hover:to-blue-100 transition-all">
                                    <Eye className="h-5 w-5 text-cyan-700" />
                                    <span className="font-medium text-sm">180° Panoramic View</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl hover:from-cyan-100 hover:to-blue-100 transition-all">
                                    <Zap className="h-5 w-5 text-cyan-700" />
                                    <span className="font-medium text-sm">Anti-Fog Technology</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl hover:from-cyan-100 hover:to-blue-100 transition-all">
                                    <Shield className="h-5 w-5 text-cyan-700" />
                                    <span className="font-medium text-sm">Perfect Fit Guarantee</span>
                                </div>
                            </div>

                            {/* Size Selection */}
                            <div className="space-y-3">
                                <span className="font-medium text-slate-700">Select Size:</span>
                                <div className="flex gap-3">
                                    <Button variant="outline" className="flex-1 h-12 border-2 hover:border-cyan-500 hover:bg-cyan-50">
                                        Adult S/M
                                    </Button>
                                    <Button variant="outline" className="flex-1 h-12 border-2 hover:border-cyan-500 hover:bg-cyan-50">
                                        Adult L/XL
                                    </Button>
                                    <Button variant="outline" className="flex-1 h-12 border-2 hover:border-cyan-500 hover:bg-cyan-50">
                                        Kids
                                    </Button>
                                </div>
                            </div>

                            {/* Quantity & Add to Cart */}
                            <div className="space-y-5">
                                <div className="flex items-center gap-4">
                                    <span className="font-medium text-slate-700">Quantity:</span>
                                    <div className="flex items-center border-2 border-slate-200 rounded-xl overflow-hidden">
                                        <Button variant="ghost" size="sm" className="h-12 w-12 p-0 hover:bg-slate-100">
                                            <Minus className="h-4 w-4" />
                                        </Button>
                                        <span className="px-6 py-3 min-w-[4rem] text-center font-medium">1</span>
                                        <Button variant="ghost" size="sm" className="h-12 w-12 p-0 hover:bg-slate-100">
                                            <Plus className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Button
                                        size="lg"
                                        className="w-full h-14 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
                                    >
                                        Dive Into Adventure - $89.99
                                    </Button>
                                    <Button variant="outline" size="lg" className="w-full h-14 text-lg font-semibold rounded-xl border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50">
                                        Experience Breathing Freedom
                                    </Button>
                                </div>
                            </div>

                            {/* Trust Signals */}
                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                                <div className="text-center space-y-2">
                                    <Truck className="h-7 w-7 mx-auto text-cyan-600" />
                                    <div>
                                        <p className="text-sm font-semibold">Free Shipping</p>
                                        <p className="text-xs text-slate-500">Worldwide delivery</p>
                                    </div>
                                </div>
                                <div className="text-center space-y-2">
                                    <RotateCcw className="h-7 w-7 mx-auto text-cyan-600" />
                                    <div>
                                        <p className="text-sm font-semibold">30-Day Returns</p>
                                        <p className="text-xs text-slate-500">Perfect fit guarantee</p>
                                    </div>
                                </div>
                                <div className="text-center space-y-2">
                                    <Shield className="h-7 w-7 mx-auto text-cyan-600" />
                                    <div>
                                        <p className="text-sm font-semibold">German Quality</p>
                                        <p className="text-xs text-slate-500">Premium materials</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Details Tabs */}
            <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <Tabs defaultValue="features" className="w-full">
                            <TabsList className="grid w-full grid-cols-4 h-12 p-1 bg-white rounded-xl shadow-sm">
                                <TabsTrigger value="features" className="rounded-lg font-medium">
                                    Features
                                </TabsTrigger>
                                <TabsTrigger value="specs" className="rounded-lg font-medium">
                                    Technology
                                </TabsTrigger>
                                <TabsTrigger value="reviews" className="rounded-lg font-medium">
                                    Reviews
                                </TabsTrigger>
                                <TabsTrigger value="faq" className="rounded-lg font-medium">
                                    FAQ
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="features" className="mt-8">
                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-bold text-slate-900">Revolutionary Snorkeling Experience</h3>
                                        <div className="space-y-5">
                                            <div className="flex gap-4">
                                                <Check className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
                                                <div className="space-y-1">
                                                    <h4 className="font-semibold text-slate-900">Advanced CO2 Safety System</h4>
                                                    <p className="text-slate-600 leading-relaxed">Intelligent valve technology prevents CO2 buildup for safer breathing</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <Check className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
                                                <div className="space-y-1">
                                                    <h4 className="font-semibold text-slate-900">180° Panoramic View</h4>
                                                    <p className="text-slate-600 leading-relaxed">Crystal-clear full-face design for unobstructed underwater views</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <Check className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
                                                <div className="space-y-1">
                                                    <h4 className="font-semibold text-slate-900">Anti-Fog Technology</h4>
                                                    <p className="text-slate-600 leading-relaxed">Separate breathing chamber prevents fogging for clear vision</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <Check className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
                                                <div className="space-y-1">
                                                    <h4 className="font-semibold text-slate-900">Prescription Lens Compatible</h4>
                                                    <p className="text-slate-600 leading-relaxed">Supports -6.0 to +6.0 diopters for clear underwater vision</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="aspect-video bg-white rounded-2xl shadow-sm overflow-hidden flex items-center justify-center">
                                        <Image
                                            src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/66c0556c-8d95-4d19-b33b-923ed00742b9.jpg?"
                                            alt="TopMask Pro features demonstration"
                                            width={480}
                                            height={360}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="specs" className="mt-8">
                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                                    <Card className="shadow-sm border-0">
                                        <CardHeader className="pb-4">
                                            <CardTitle className="text-xl">German Engineering Excellence</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="flex justify-between items-center py-3 border-b border-slate-100">
                                                <span className="text-slate-600 font-medium">CO2 Safety Valves</span>
                                                <span className="font-semibold text-slate-900">Dual-Channel System</span>
                                            </div>
                                            <div className="flex justify-between items-center py-3 border-b border-slate-100">
                                                <span className="text-slate-600 font-medium">Viewing Angle</span>
                                                <span className="font-semibold text-slate-900">180° Panoramic</span>
                                            </div>
                                            <div className="flex justify-between items-center py-3 border-b border-slate-100">
                                                <span className="text-slate-600 font-medium">Material</span>
                                                <span className="font-semibold text-slate-900">Medical-Grade Silicone</span>
                                            </div>
                                            <div className="flex justify-between items-center py-3 border-b border-slate-100">
                                                <span className="text-slate-600 font-medium">Lens</span>
                                                <span className="font-semibold text-slate-900">Shatterproof Polycarbonate</span>
                                            </div>
                                            <div className="flex justify-between items-center py-3 border-b border-slate-100">
                                                <span className="text-slate-600 font-medium">Sizes Available</span>
                                                <span className="font-semibold text-slate-900">S/M, L/XL, Kids</span>
                                            </div>
                                            <div className="flex justify-between items-center py-3">
                                                <span className="text-slate-600 font-medium">Colors</span>
                                                <span className="font-semibold text-slate-900">5 Options Available</span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-bold text-slate-900">Safety Features</h3>
                                        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
                                            <div className="flex items-center gap-3">
                                                <Check className="h-5 w-5 text-green-500" />
                                                <span className="text-slate-700">Advanced CO2 prevention system</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Check className="h-5 w-5 text-green-500" />
                                                <span className="text-slate-700">Dry-top snorkel technology</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Check className="h-5 w-5 text-green-500" />
                                                <span className="text-slate-700">Quick-release buckle system</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Check className="h-5 w-5 text-green-500" />
                                                <span className="text-slate-700">CE certified & FDA approved</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Check className="h-5 w-5 text-green-500" />
                                                <span className="text-slate-700">Hypoallergenic materials</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="reviews" className="mt-8">
                                <div className="space-y-8">
                                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                                        <Card className="shadow-sm border-0 bg-white">
                                            <CardContent className="pt-8 text-center">
                                                <div className="text-4xl font-bold mb-3 text-slate-900">4.8</div>
                                                <div className="flex justify-center mb-3">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                                    ))}
                                                </div>
                                                <p className="text-sm text-slate-600 font-medium">Google & TrustPilot Reviews</p>
                                            </CardContent>
                                        </Card>
                                        <div className="md:col-span-2 space-y-4">
                                            {[5, 4, 3, 2, 1].map((stars) => (
                                                <div key={stars} className="flex items-center gap-4">
                                                    <span className="text-sm font-medium w-8">{stars}★</span>
                                                    <div className="flex-1 bg-slate-200 rounded-full h-3">
                                                        <div
                                                            className="bg-cyan-400 h-3 rounded-full transition-all duration-300"
                                                            style={{ width: stars === 5 ? "82%" : stars === 4 ? "15%" : "3%" }}
                                                        />
                                                    </div>
                                                    <span className="text-sm text-slate-600 font-medium w-16 text-right">
                                                        {stars === 5 ? "1,847" : stars === 4 ? "338" : "67"}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <Card className="shadow-sm border-0 bg-white">
                                            <CardContent className="pt-6">
                                                <div className="flex items-start gap-4">
                                                    <Avatar className="h-12 w-12">
                                                        <Image
                                                            src="/placeholder-user.jpg"
                                                            alt="User"
                                                            width={48}
                                                            height={48}
                                                            className="rounded-full"
                                                        />
                                                    </Avatar>
                                                    <div className="flex-1 space-y-2">
                                                        <div className="flex items-center gap-3 flex-wrap">
                                                            <span className="font-semibold text-slate-900">Emma Thompson</span>
                                                            <div className="flex">
                                                                {[1, 2, 3, 4, 5].map((star) => (
                                                                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                                ))}
                                                            </div>
                                                            <span className="text-sm text-slate-500">Verified Purchase</span>
                                                        </div>
                                                        <h4 className="font-semibold text-slate-900">Game changer for snorkeling!</h4>
                                                        <p className="text-slate-600 leading-relaxed">The CO2 safety system really works - no more feeling dizzy or short of breath. Crystal clear view and so comfortable!</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                        <Card className="shadow-sm border-0 bg-white">
                                            <CardContent className="pt-6">
                                                <div className="flex items-start gap-4">
                                                    <Avatar className="h-12 w-12">
                                                        <AvatarFallback className="bg-slate-100 text-slate-700 font-semibold">JM</AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex-1 space-y-2">
                                                        <div className="flex items-center gap-3 flex-wrap">
                                                            <span className="font-semibold text-slate-900">James Miller</span>
                                                            <div className="flex">
                                                                {[1, 2, 3, 4, 5].map((star) => (
                                                                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                                ))}
                                                            </div>
                                                            <span className="text-sm text-slate-500">Verified Purchase</span>
                                                        </div>
                                                        <h4 className="font-semibold text-slate-900">Perfect for beginners</h4>
                                                        <p className="text-slate-600 leading-relaxed">My wife was afraid of snorkeling but this mask made it so easy. The breathing is natural and the view is amazing!</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="faq" className="mt-8">
                                <div className="max-w-4xl mx-auto">
                                    <Accordion type="single" collapsible className="w-full space-y-4">
                                        <AccordionItem value="item-1" className="bg-white rounded-xl px-6 shadow-sm border-0">
                                            <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                                                How does the CO2 safety system work?
                                            </AccordionTrigger>
                                            <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                                                Our intelligent dual-channel valve system separates inhaled and exhaled air, preventing CO2 buildup that can cause dizziness or discomfort during snorkeling.
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-2" className="bg-white rounded-xl px-6 shadow-sm border-0">
                                            <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                                                Can I use this mask if I wear glasses?
                                            </AccordionTrigger>
                                            <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                                                Yes! The mask is compatible with prescription lenses from -6.0 to +6.0 diopters. You can also wear contact lenses comfortably with the mask.
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-3" className="bg-white rounded-xl px-6 shadow-sm border-0">
                                            <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                                                How do I choose the right size?
                                            </AccordionTrigger>
                                            <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                                                S/M fits most women and teens, L/XL fits most men. Measure from the bridge of your nose to your chin: S/M: 10-12cm, L/XL: 12cm+. Kids size available for ages 5-12.
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-4" className="bg-white rounded-xl px-6 shadow-sm border-0">
                                            <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                                                Is it safe for beginners?
                                            </AccordionTrigger>
                                            <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                                                Absolutely! The full-face design makes breathing natural and easy - just breathe normally through your nose or mouth. Perfect for first-time snorkelers.
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-5" className="bg-white rounded-xl px-6 shadow-sm border-0">
                                            <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                                                What's your return policy?
                                            </AccordionTrigger>
                                            <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                                                We offer a 30-day perfect fit guarantee. If the mask doesn't fit perfectly or meet your expectations, return it for a full refund - no questions asked.
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-cyan-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-8 lg:mb-12 text-center">
                            Complete Your Snorkeling Kit
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                            <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                                <CardContent className="p-4">
                                    <div className="aspect-square bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl mb-4 overflow-hidden">
                                        <Image
                                            src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/9a25bc55-ebb6-48de-8137-810824a26f43.jpg?"
                                            alt="Snorkeling fins"
                                            width={200}
                                            height={200}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <h3 className="font-semibold mb-2 text-slate-900 text-sm lg:text-base">Premium Fins</h3>
                                    <p className="text-lg font-bold text-slate-900">$49.99</p>
                                </CardContent>
                            </Card>
                            <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                                <CardContent className="p-4">
                                    <div className="aspect-square bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl mb-4 overflow-hidden">
                                        <Image
                                            src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/d91d6208-342e-4bb7-9516-f3ea54088a5b.jpg?"
                                            alt="Waterproof bag"
                                            width={200}
                                            height={200}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <h3 className="font-semibold mb-2 text-slate-900 text-sm lg:text-base">Waterproof Bag</h3>
                                    <p className="text-lg font-bold text-slate-900">$29.99</p>
                                </CardContent>
                            </Card>
                            <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                                <CardContent className="p-4">
                                    <div className="aspect-square bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl mb-4 overflow-hidden">
                                        <Image
                                            src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/43d73ded-db1d-4122-8a60-0de1369e6d77.jpg?"
                                            alt="Anti-fog spray"
                                            width={200}
                                            height={200}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <h3 className="font-semibold mb-2 text-slate-900 text-sm lg:text-base">Anti-Fog Spray</h3>
                                    <p className="text-lg font-bold text-slate-900">$14.99</p>
                                </CardContent>
                            </Card>
                            <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                                <CardContent className="p-4">
                                    <div className="aspect-square bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl mb-4 overflow-hidden">
                                        <Image
                                            src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/66c0556c-8d95-4d19-b33b-923ed00742b9.jpg?"
                                            alt="Mesh bag"
                                            width={200}
                                            height={200}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <h3 className="font-semibold mb-2 text-slate-900 text-sm lg:text-base">Mesh Carry Bag</h3>
                                    <p className="text-lg font-bold text-slate-900">$19.99</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Simplified Footer */}
            <footer className="border-t bg-slate-50 py-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/placeholder-logo.png"
                                alt="Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8"
                            />
                            <span className="font-semibold text-xl">TopMask</span>
                        </div>
                        <p className="text-sm text-slate-600 text-center sm:text-right">© 2024 TopMask. German Engineering Excellence.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}