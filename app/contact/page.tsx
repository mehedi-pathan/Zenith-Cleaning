import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  CheckCircle,
  AlertCircle,
  User,
  Building,
  Calendar,
  Home,
} from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["(555) 123-4567", "Mon-Fri: 8AM-6PM", "Sat: 9AM-4PM"],
    href: "tel:+15551234567",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@zenithcleaning.com", "quotes@zenithcleaning.com", "support@zenithcleaning.com"],
    href: "mailto:info@zenithcleaning.com",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Clean Street", "Suite 100", "City, ST 12345"],
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "Sunday: Closed"],
    href: null,
  },
]

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "LinkedIn", href: "#", icon: Linkedin },
]

const serviceAreas = ["Downtown", "Midtown", "Uptown", "East Side", "West Side", "North Hills", "South Bay", "Suburbs"]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready to experience the Zenith Cleaning difference? Contact us today for a free estimate or to schedule your
            cleaning service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Phone className="h-4 w-4 mr-2" />
              Call Now: (555) 123-4567
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent">
              <MessageCircle className="h-4 w-4 mr-2" />
              Live Chat
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-6">
                  <CardTitle className="text-3xl flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 text-primary" />
                    </div>
                    Get Your Free Quote
                  </CardTitle>
                  <p className="text-muted-foreground text-lg">
                    Tell us about your cleaning needs and we'll provide a personalized quote within 2 hours.
                  </p>

                  {/* Progress Steps */}
                  <div className="flex items-center justify-between mt-6 p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
                        1
                      </div>
                      <span className="text-sm font-medium text-primary">Contact Info</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-border mx-4"></div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground text-sm font-medium">
                        2
                      </div>
                      <span className="text-sm text-muted-foreground">Service Details</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-border mx-4"></div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground text-sm font-medium">
                        3
                      </div>
                      <span className="text-sm text-muted-foreground">Submit</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-8">
                  {/* Step 1: Personal Information */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 pb-4 border-b border-border">
                      <User className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">Personal Information</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="firstName" className="text-sm font-medium flex items-center gap-2">
                          First Name <span className="text-destructive">*</span>
                        </Label>
                        <Input id="firstName" placeholder="Enter your first name" className="h-12 text-base" required />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="lastName" className="text-sm font-medium flex items-center gap-2">
                          Last Name <span className="text-destructive">*</span>
                        </Label>
                        <Input id="lastName" placeholder="Enter your last name" className="h-12 text-base" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                          Email Address <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          className="h-12 text-base"
                          required
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="phone" className="text-sm font-medium">
                          Phone Number
                        </Label>
                        <Input id="phone" type="tel" placeholder="(555) 123-4567" className="h-12 text-base" />
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Service Information */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 pb-4 border-b border-border">
                      <Building className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">Service Details</h3>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="address" className="text-sm font-medium flex items-center gap-2">
                        <Home className="h-4 w-4" />
                        Property Address <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="address"
                        placeholder="123 Main Street, City, State 12345"
                        className="h-12 text-base"
                        required
                      />
                      <p className="text-xs text-muted-foreground">
                        We'll use this to calculate travel time and provide accurate pricing
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="service" className="text-sm font-medium">
                          Service Type <span className="text-destructive">*</span>
                        </Label>
                        <Select required>
                          <SelectTrigger className="h-12 text-base">
                            <SelectValue placeholder="Choose your service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="residential">🏠 Residential Cleaning</SelectItem>
                            <SelectItem value="commercial">🏢 Commercial Cleaning</SelectItem>
                            <SelectItem value="deep">✨ Deep Cleaning</SelectItem>
                            <SelectItem value="carpet">🧽 Carpet Cleaning</SelectItem>
                            <SelectItem value="window">🪟 Window Cleaning</SelectItem>
                            <SelectItem value="construction">🔨 Post-Construction</SelectItem>
                            <SelectItem value="other">💬 Other (specify in message)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="frequency" className="text-sm font-medium flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Frequency
                        </Label>
                        <Select>
                          <SelectTrigger className="h-12 text-base">
                            <SelectValue placeholder="How often do you need service?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="one-time">One-time service</SelectItem>
                            <SelectItem value="weekly">Weekly (save 15%)</SelectItem>
                            <SelectItem value="bi-weekly">Bi-weekly (save 10%)</SelectItem>
                            <SelectItem value="monthly">Monthly (save 5%)</SelectItem>
                            <SelectItem value="quarterly">Quarterly</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-3">
                        <Label htmlFor="bedrooms" className="text-sm font-medium">
                          Bedrooms
                        </Label>
                        <Select>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="0" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0">0</SelectItem>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5+">5+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="bathrooms" className="text-sm font-medium">
                          Bathrooms
                        </Label>
                        <Select>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="0" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="1.5">1.5</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="2.5">2.5</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="3+">3+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="sqft" className="text-sm font-medium">
                          Square Footage
                        </Label>
                        <Select>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-1000">Under 1,000 sq ft</SelectItem>
                            <SelectItem value="1000-1500">1,000 - 1,500 sq ft</SelectItem>
                            <SelectItem value="1500-2500">1,500 - 2,500 sq ft</SelectItem>
                            <SelectItem value="2500-4000">2,500 - 4,000 sq ft</SelectItem>
                            <SelectItem value="over-4000">Over 4,000 sq ft</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Additional Information */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 pb-4 border-b border-border">
                      <MessageCircle className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">Additional Information</h3>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-sm font-medium">
                        Special Requirements or Questions
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about any special cleaning requirements, areas of focus, pets, allergies, preferred cleaning products, or any questions you have..."
                        rows={5}
                        className="text-base resize-none"
                      />
                      <p className="text-xs text-muted-foreground">
                        The more details you provide, the more accurate your quote will be
                      </p>
                    </div>

                    {/* Checkboxes for additional services */}
                    <div className="space-y-4">
                      <Label className="text-sm font-medium">Additional Services (Optional)</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                          <Checkbox id="inside-fridge" />
                          <Label htmlFor="inside-fridge" className="text-sm cursor-pointer">
                            Inside refrigerator cleaning
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                          <Checkbox id="inside-oven" />
                          <Label htmlFor="inside-oven" className="text-sm cursor-pointer">
                            Inside oven cleaning
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                          <Checkbox id="garage" />
                          <Label htmlFor="garage" className="text-sm cursor-pointer">
                            Garage cleaning
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                          <Checkbox id="basement" />
                          <Label htmlFor="basement" className="text-sm cursor-pointer">
                            Basement cleaning
                          </Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 p-6 bg-muted/30 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <Checkbox id="consent" className="mt-1" />
                        <Label htmlFor="consent" className="text-sm text-muted-foreground cursor-pointer">
                          I agree to receive communications from Zenith Cleaning Co. regarding my inquiry, quotes, and
                          future services. You can unsubscribe at any time.
                        </Label>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                          I agree to the{" "}
                          <a href="#" className="text-primary hover:underline">
                            Terms of Service
                          </a>{" "}
                          and{" "}
                          <a href="#" className="text-primary hover:underline">
                            Privacy Policy
                          </a>
                        </Label>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Button
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 text-lg font-medium"
                        size="lg"
                      >
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Get My Free Quote
                      </Button>

                      <div className="text-center space-y-2">
                        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                          <AlertCircle className="h-4 w-4" />
                          We typically respond within 2 hours during business hours
                        </p>
                        <p className="text-xs text-muted-foreground">
                          No obligation • Free estimates • Fully insured & bonded
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground text-sm mb-1">{info.title}</h3>
                              <div className="space-y-1">
                                {info.details.map((detail, detailIndex) => (
                                  <p key={detailIndex} className="text-muted-foreground text-xs">
                                    {info.href && detailIndex === 0 ? (
                                      <a href={info.href} className="hover:text-primary transition-colors">
                                        {detail}
                                      </a>
                                    ) : (
                                      detail
                                    )}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>

              {/* Service Areas */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Service Areas</h3>
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-4">
                    <p className="text-muted-foreground text-sm mb-3">We proudly serve:</p>
                    <div className="grid grid-cols-1 gap-2">
                      {serviceAreas.map((area, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                          <span className="text-xs text-muted-foreground">{area}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">
                      Don't see your area? Contact us - we may still serve you!
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Follow Us</h3>
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-4">
                    <p className="text-muted-foreground text-sm mb-3">Stay connected:</p>
                    <div className="flex space-x-2">
                      {socialLinks.map((social) => {
                        const Icon = social.icon
                        return (
                          <a
                            key={social.name}
                            href={social.href}
                            className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                          >
                            <Icon className="h-4 w-4" />
                          </a>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Find Us</h2>
            <p className="text-xl text-muted-foreground">Visit our office or we'll come to you!</p>
          </div>

          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive Map</p>
                <p className="text-sm text-muted-foreground">123 Clean Street, Suite 100, City, ST 12345</p>
                <Button variant="outline" className="mt-4 bg-transparent">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    Open in Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Need Emergency Cleaning Services?</h2>
              <p className="text-muted-foreground mb-6">
                We offer 24/7 emergency cleaning services for urgent situations like water damage, post-event cleanup,
                or last-minute needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <Phone className="h-4 w-4 mr-2" />
                  Emergency Line: (555) 911-CLEAN
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent">
                  Learn More About Emergency Services
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
