"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Building2,
  Home,
  Sparkles,
  Sofa,
  AppWindow as Window,
  Car,
  Trash2,
  Shirt,
  CheckCircle,
  Clock,
  Shield,
  Star,
} from "lucide-react"

const services = [
  {
    id: "office",
    icon: Building2,
    title: "Office Cleaning",
    description: "Professional workspace cleaning to maintain a productive and healthy work environment.",
    features: ["Daily/Weekly cleaning", "Sanitization", "Trash removal", "Kitchen cleaning"],
    price: "Starting at $150/visit",
    popular: false,
    image: "/office-cleaning-service.png",
  },
  {
    id: "home",
    icon: Home,
    title: "Home Cleaning",
    description: "Comprehensive residential cleaning services tailored to your family's needs.",
    features: ["All rooms cleaned", "Bathroom sanitization", "Kitchen deep clean", "Flexible scheduling"],
    price: "Starting at $120/visit",
    popular: true,
    image: "/home-cleaning-service.png",
  },
  {
    id: "deep",
    icon: Sparkles,
    title: "Deep Cleaning",
    description:
      "Thorough, detailed cleaning for every corner of your space. Perfect for move-ins or seasonal cleaning.",
    features: ["Inside appliances", "Baseboards & trim", "Light fixtures", "Cabinet interiors"],
    price: "Starting at $250/visit",
    popular: false,
    image: "/deep-cleaning-service.png",
  },
  {
    id: "carpet",
    icon: Sofa,
    title: "Carpet Cleaning",
    description: "Professional carpet and upholstery cleaning using eco-friendly products and advanced techniques.",
    features: ["Steam cleaning", "Stain removal", "Odor elimination", "Fast drying"],
    price: "Starting at $80/room",
    popular: false,
    image: "/carpet-cleaning-service.png",
  },
  {
    id: "window",
    icon: Window,
    title: "Window Cleaning",
    description: "Crystal clear windows inside and out, including screens and sills for maximum natural light.",
    features: ["Interior & exterior", "Screen cleaning", "Sill cleaning", "Streak-free finish"],
    price: "Starting at $8/window",
    popular: false,
    image: "/window-cleaning-service.png",
  },
  {
    id: "post-construction",
    icon: Trash2,
    title: "Post-Construction Cleanup",
    description: "Specialized cleaning after construction or renovation projects to remove dust and debris.",
    features: ["Dust removal", "Paint cleanup", "Debris removal", "Final polish"],
    price: "Custom quote",
    popular: false,
    image: "/construction-cleanup-service.png",
  },
]

const additionalServices = [
  {
    icon: Car,
    title: "Garage Cleaning",
    description: "Complete garage organization and cleaning service.",
  },
  {
    icon: Shirt,
    title: "Laundry Service",
    description: "Wash, dry, and fold service for busy households.",
  },
  {
    icon: Sparkles,
    title: "Move-in/Move-out",
    description: "Comprehensive cleaning for property transitions.",
  },
]

const benefits = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Complete coverage for your peace of mind",
  },
  {
    icon: CheckCircle,
    title: "Satisfaction Guaranteed",
    description: "We'll make it right if you're not happy",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Services that fit your busy lifestyle",
  },
  {
    icon: Star,
    title: "Trained Professionals",
    description: "Experienced team with attention to detail",
  },
]

const slaFeatures = [
  {
    icon: Clock,
    title: "Response Time Guarantee",
    description: "Emergency services within 2 hours, regular services within 24 hours",
    metric: "< 2 Hours",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Multi-point inspection checklist with digital reporting",
    metric: "100% Verified",
  },
  {
    icon: Shield,
    title: "Service Level Agreement",
    description: "Contractual commitment to service standards and performance",
    metric: "99.9% Uptime",
  },
  {
    icon: Star,
    title: "Performance Metrics",
    description: "Monthly performance reports and continuous improvement",
    metric: "Real-time Tracking",
  },
]

const technologyFeatures = [
  {
    icon: Building2,
    title: "Professional Equipment",
    description: "Industrial-grade cleaning equipment and eco-friendly products",
  },
  {
    icon: CheckCircle,
    title: "Digital Checklists",
    description: "QR code-based inspection system with real-time updates",
  },
  {
    icon: Shield,
    title: "Security Protocols",
    description: "Background-checked staff with secure key management",
  },
  {
    icon: Clock,
    title: "Scheduling Platform",
    description: "Advanced booking system with automated notifications",
  },
]

const complianceItems = [
  "OSHA Safety Standards",
  "EPA Environmental Compliance",
  "ISSA Certification",
  "Bonded & Insured",
  "Background Checked Staff",
  "Green Cleaning Certified",
]

const customPackages = [
  {
    title: "Startup Package",
    description: "Perfect for growing businesses with flexible terms",
    features: ["Weekly cleaning", "Basic supplies included", "Flexible scheduling", "No long-term contract"],
    price: "Starting at $200/week",
  },
  {
    title: "Corporate Package",
    description: "Comprehensive solution for established enterprises",
    features: ["Daily cleaning", "Premium supplies", "Dedicated account manager", "SLA guarantee"],
    price: "Custom pricing",
    popular: true,
  },
  {
    title: "Medical/Healthcare",
    description: "Specialized cleaning for healthcare facilities",
    features: ["Medical-grade disinfection", "HIPAA compliance", "Specialized equipment", "24/7 availability"],
    price: "Custom pricing",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Classic background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(74,222,128,0.05),transparent_50%)]"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 border border-secondary/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-secondary/20 rounded-full animate-bounce delay-700"></div>

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            {/* Classic badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium animate-fade-in">
              <Sparkles className="w-4 h-4 mr-2" />
              Professional Cleaning Excellence Since 2018
            </div>

            {/* Main heading with classic typography */}
            <div className="space-y-6 animate-fade-in-up delay-200">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light text-foreground leading-tight">
                Professional
                <span className="block font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Cleaning Services
                </span>
              </h1>

              <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto animate-scale-in delay-500"></div>
            </div>

            {/* Classic description */}
            <div className="max-w-3xl mx-auto space-y-6 animate-fade-in-up delay-400">
              <p className="text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed">
                Elevating cleanliness standards with meticulous attention to detail, professional expertise, and
                unwavering commitment to excellence.
              </p>

              <p className="text-lg text-muted-foreground/80 leading-relaxed">
                From comprehensive residential care to specialized commercial solutions, we deliver pristine results
                using eco-friendly products and advanced techniques.
              </p>
            </div>

            {/* Classic CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-fade-in-up delay-600">
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <span>Request Free Consultation</span>
                <CheckCircle className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group bg-transparent border-2 border-primary/20 hover:border-primary/40 text-foreground px-8 py-4 text-lg font-medium rounded-full hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1"
              >
                <Clock className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>View Our Process</span>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 pt-12 text-sm text-muted-foreground animate-fade-in delay-800">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Fully Insured & Bonded</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-secondary" />
                <span>5-Star Rated Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes scale-in {
          from { 
            opacity: 0; 
            transform: scaleX(0); 
          }
          to { 
            opacity: 1; 
            transform: scaleX(1); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
        }
        
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>

      {/* Main Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground">
              Choose from our range of professional cleaning services designed to meet your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card
                  key={service.id}
                  className="relative overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {service.popular && (
                    <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                      Most Popular
                    </Badge>
                  )}

                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg?height=200&width=400"}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">What's Included:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="font-semibold text-primary">{service.price}</span>
                        <Button size="sm" variant="outline" className="bg-transparent">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Additional Services</h2>
            <p className="text-xl text-muted-foreground">
              We also offer specialized services to meet your unique cleaning needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="text-center border-0 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                    <Button size="sm" variant="outline" className="bg-transparent">
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Service Level Agreements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Enterprise Service Level Agreements</h2>
            <p className="text-xl text-muted-foreground">
              Guaranteed service standards with measurable performance metrics for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {slaFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="text-center border-0 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-secondary mb-2">{feature.metric}</div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Advanced Technology & Equipment */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Advanced Technology & Equipment</h2>
            <p className="text-xl text-muted-foreground">
              State-of-the-art cleaning technology and digital systems for superior results and transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologyFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Compliance & Certifications</h2>
            <p className="text-xl text-muted-foreground">
              Fully certified and compliant with industry standards for your peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {complianceItems.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-6 w-6 text-secondary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Enterprise Packages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Custom Enterprise Packages</h2>
            <p className="text-xl text-muted-foreground">
              Tailored cleaning solutions designed specifically for your business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative border-0 shadow-sm hover:shadow-lg transition-all duration-300 ${pkg.popular ? "ring-2 ring-secondary" : ""}`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl mb-2">{pkg.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{pkg.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-border">
                      <div className="text-lg font-semibold text-primary mb-4">{pkg.price}</div>
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                        Get Custom Quote
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 24/7 Enterprise Support */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">24/7 Enterprise Support</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Round-the-clock support for your business with dedicated account management and emergency response
                capabilities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Clock className="h-4 w-4 text-secondary" />
                  </div>
                  <span className="text-foreground">24/7 Emergency Response</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                  </div>
                  <span className="text-foreground">Dedicated Account Manager</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Shield className="h-4 w-4 text-secondary" />
                  </div>
                  <span className="text-foreground">Priority Service Guarantee</span>
                </div>
              </div>
            </div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Contact Enterprise Support</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Emergency Hotline</p>
                    <p className="text-lg font-semibold text-foreground">(555) 123-CLEAN</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Enterprise Email</p>
                    <p className="text-lg font-semibold text-foreground">enterprise@zenithcleaning.com</p>
                  </div>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    Schedule Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-muted-foreground">
              We're committed to delivering exceptional results with every cleaning service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us today for a free estimate and discover the Zenith Cleaning difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8">
              Schedule Service
            </Button>
            <Button variant="outline" size="lg" className="px-8 bg-transparent">
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
