"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CheckCircle, Clock, Shield, Star, Users, Sparkles, MapPin, Award, TrendingUp, Calendar } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const features = [
  {
    icon: Shield,
    title: "Trusted & Insured",
    description: "Fully licensed and insured for your peace of mind",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book services that fit your busy schedule",
  },
  {
    icon: Sparkles,
    title: "Eco-Friendly",
    description: "Safe, green cleaning products for your family",
  },
  {
    icon: Users,
    title: "Trained Professionals",
    description: "Experienced team with attention to detail",
  },
]

const services = [
  {
    title: "Office Cleaning",
    description: "Professional workspace cleaning for productivity",
    image: "/modern-office-cleaning.png",
  },
  {
    title: "Home Cleaning",
    description: "Comprehensive residential cleaning services",
    image: "/home-cleaning-living-room.png",
  },
  {
    title: "Deep Cleaning",
    description: "Thorough cleaning for every corner of your space",
    image: "/deep-cleaning-bathroom.png",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content: "Zenith Cleaning transformed my home! Their attention to detail is incredible.",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "Office Manager",
    content: "Professional, reliable, and thorough. Our office has never looked better.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "Busy Parent",
    content: "They saved me so much time. I can focus on my family while they handle the cleaning.",
    rating: 5,
  },
]

const processSteps = [
  {
    step: "1",
    title: "Book Online",
    description: "Schedule your cleaning service in just a few clicks",
    icon: Calendar,
  },
  {
    step: "2",
    title: "We Arrive",
    description: "Our professional team arrives on time with all supplies",
    icon: Users,
  },
  {
    step: "3",
    title: "Deep Clean",
    description: "Thorough cleaning using eco-friendly products and proven methods",
    icon: Sparkles,
  },
  {
    step: "4",
    title: "Quality Check",
    description: "Final inspection to ensure everything meets our high standards",
    icon: CheckCircle,
  },
]

const stats = [
  { number: "10,000+", label: "Happy Customers" },
  { number: "5+", label: "Years Experience" },
  { number: "99%", label: "Satisfaction Rate" },
  { number: "24/7", label: "Support Available" },
]

const serviceAreas = [
  "Downtown",
  "Midtown",
  "Uptown",
  "East Side",
  "West End",
  "Suburbs",
  "Business District",
  "Residential Areas",
]

const beforeAfterGallery = [
  {
    title: "Kitchen Deep Clean",
    before: "/messy-kitchen-before.png",
    after: "/spotless-clean-kitchen.png",
  },
  {
    title: "Office Space",
    before: "/cluttered-office-before.png",
    after: "/clean-organized-office.png",
  },
  {
    title: "Bathroom Restoration",
    before: "/dirty-bathroom-before.png",
    after: "/sparkling-clean-bathroom.png",
  },
]

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div
        className="fixed pointer-events-none z-10 w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-300 ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(16, 185, 129, 0.2) 50%, transparent 70%)",
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Professional Cleaning
                  <span className="text-primary block">Made Simple</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Transform your space with our trusted cleaning professionals. Reliable, thorough, and eco-friendly
                  services for homes and offices.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4">
                  Book a Service
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 bg-transparent">
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Free Estimates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Satisfaction Guaranteed</span>
                </div>
              </div>
            </div>

            
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/proCleaningHero.png"
                  alt="Professional cleaning service - woman in orange overalls cleaning windows"
                  className="w-full max-w-lg mx-auto h-auto max-h-[500px] sm:max-h-[600px] lg:max-h-[700px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Zenith Cleaning?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to delivering exceptional cleaning services with professionalism and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="text-center border-0 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Getting professional cleaning services has never been easier. Here's our simple 4-step process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform -translate-x-1/2"></div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From regular maintenance to deep cleaning, we've got all your cleaning needs covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="px-8 bg-transparent">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Trusted by Thousands</h2>
            <p className="text-xl text-muted-foreground">
              Our numbers speak for themselves - see why we're the preferred cleaning service.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">See the Difference</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our professional cleaning transforms spaces. See the remarkable before and after results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {beforeAfterGallery.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <div className="grid grid-cols-2">
                    <div className="relative">
                      <img
                        src={item.before || "/placeholder.svg"}
                        alt={`${item.title} before cleaning`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                        Before
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        src={item.after || "/placeholder.svg"}
                        alt={`${item.title} after cleaning`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-secondary text-white px-2 py-1 rounded text-xs font-medium">
                        After
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground text-center">{item.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Areas We Serve</h2>
            <p className="text-xl text-muted-foreground">
              Professional cleaning services available throughout the metropolitan area.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {serviceAreas.map((area, index) => (
              <div key={index} className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>{area}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">Don't see your area listed?</p>
            <Button variant="outline" className="bg-transparent">
              <Link href="/contact">Contact Us to Check Availability</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Licensed, Bonded & Insured</h2>
            <p className="text-xl text-muted-foreground">
              Your peace of mind is our priority. We're fully certified and protected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Fully Insured</h3>
                <p className="text-muted-foreground text-sm">
                  Comprehensive liability insurance protects your property and gives you peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Licensed & Bonded</h3>
                <p className="text-muted-foreground text-sm">
                  Properly licensed and bonded to operate in all service areas with full legal compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Quality Guaranteed</h3>
                <p className="text-muted-foreground text-sm">
                  100% satisfaction guarantee - if you're not happy, we'll make it right at no extra cost.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from our satisfied customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ready to Experience the Difference?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get your free estimate today and see why thousands of customers trust Zenith Cleaning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3">
              Get Free Estimate
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
