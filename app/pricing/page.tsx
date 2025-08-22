import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Check,
  X,
  Star,
  Clock,
  Shield,
  Phone,
  Calculator,
  CreditCard,
  Users,
  TrendingUp,
  Award,
  DollarSign,
} from "lucide-react"

const pricingPlans = [
  {
    name: "Basic Clean",
    price: "$120",
    period: "per visit",
    description: "Perfect for regular maintenance cleaning of smaller spaces",
    popular: false,
    features: [
      "Living areas & bedrooms",
      "Kitchen cleaning",
      "Bathroom sanitization",
      "Trash removal",
      "Basic dusting",
      "Vacuum & mop floors",
    ],
    notIncluded: ["Inside appliances", "Window cleaning", "Deep cleaning tasks", "Laundry service"],
    cta: "Book Basic Clean",
  },
  {
    name: "Standard Clean",
    price: "$180",
    period: "per visit",
    description: "Our most popular comprehensive cleaning service for most homes",
    popular: true,
    features: [
      "Everything in Basic",
      "Inside microwave & oven",
      "Interior window cleaning",
      "Detailed dusting",
      "Baseboards & trim",
      "Light fixture cleaning",
      "Cabinet fronts",
    ],
    notIncluded: ["Inside refrigerator", "Carpet deep cleaning", "Garage cleaning"],
    cta: "Book Standard Clean",
  },
  {
    name: "Premium Clean",
    price: "$250",
    period: "per visit",
    description: "Complete deep cleaning service with attention to every detail",
    popular: false,
    features: [
      "Everything in Standard",
      "Inside all appliances",
      "Interior & exterior windows",
      "Inside cabinets & drawers",
      "Light switches & outlets",
      "Door frames & handles",
      "Ceiling fan cleaning",
      "Garage organization",
    ],
    notIncluded: ["Carpet shampooing", "Pressure washing"],
    cta: "Book Premium Clean",
  },
  {
    name: "Commercial",
    price: "Custom",
    period: "quote",
    description: "Tailored cleaning solutions for offices and commercial spaces",
    popular: false,
    features: [
      "Customized cleaning plan",
      "Flexible scheduling",
      "Professional equipment",
      "Trained commercial staff",
      "Quality assurance",
      "Eco-friendly products",
      "Insurance coverage",
    ],
    notIncluded: [],
    cta: "Get Quote",
  },
]

const addOnServices = [
  { name: "Interior Window Cleaning", price: "$8 per window" },
  { name: "Refrigerator Deep Clean", price: "$25" },
  { name: "Oven Deep Clean", price: "$35" },
  { name: "Carpet Cleaning", price: "$80 per room" },
  { name: "Garage Cleaning", price: "$75" },
  { name: "Laundry Service", price: "$20 per load" },
]

const frequencyDiscounts = [
  { frequency: "Weekly", discount: "15%", savings: "Save $27 per visit", popular: true },
  { frequency: "Bi-weekly", discount: "10%", savings: "Save $18 per visit", popular: false },
  { frequency: "Monthly", discount: "5%", savings: "Save $9 per visit", popular: false },
]

const paymentOptions = [
  {
    icon: CreditCard,
    title: "Credit & Debit Cards",
    description: "Visa, Mastercard, American Express, Discover",
    fee: "No additional fees",
  },
  {
    icon: DollarSign,
    title: "Bank Transfer (ACH)",
    description: "Direct bank transfer for recurring services",
    fee: "Save 2% on all services",
  },
  {
    icon: Phone,
    title: "Pay by Phone",
    description: "Secure payment over the phone",
    fee: "No additional fees",
  },
]

const guarantees = [
  {
    icon: Shield,
    title: "100% Satisfaction Guarantee",
    description: "If you're not completely satisfied, we'll return within 24 hours to make it right at no extra cost.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Every cleaning is inspected by our quality team to ensure it meets our high standards.",
  },
  {
    icon: Users,
    title: "Bonded & Insured",
    description: "All our cleaners are fully bonded and insured for your complete peace of mind.",
  },
]

const faqs = [
  {
    question: "How often should I schedule cleaning services?",
    answer: "Most clients schedule weekly, bi-weekly, or monthly services depending on their needs and lifestyle.",
  },
  {
    question: "Do you bring your own cleaning supplies?",
    answer: "Yes, we bring all necessary eco-friendly cleaning supplies and professional equipment.",
  },
  {
    question: "What if I'm not satisfied with the service?",
    answer:
      "We offer a 100% satisfaction guarantee. If you're not happy, we'll return within 24 hours to make it right.",
  },
  {
    question: "Are your cleaners insured and bonded?",
    answer: "Yes, all our cleaning professionals are fully insured and bonded for your peace of mind.",
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the cleaning plan that fits your needs and budget. All plans include our satisfaction guarantee and
            eco-friendly products.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-secondary" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-secondary" />
              <span>Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-secondary" />
              <span>Flexible Scheduling</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
              <Calculator className="h-8 w-8 text-primary" />
              Quick Price Estimator
            </h2>
            <p className="text-lg text-muted-foreground">
              Get an instant estimate based on your home size and cleaning frequency
            </p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">1-2 Bedrooms</div>
                  <div className="text-sm text-muted-foreground mb-4">Up to 1,500 sq ft</div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Basic:</span>
                      <span className="font-semibold">$120</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Standard:</span>
                      <span className="font-semibold">$180</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Premium:</span>
                      <span className="font-semibold">$250</span>
                    </div>
                  </div>
                </div>

                <div className="text-center p-6 bg-primary/10 rounded-lg border-2 border-primary">
                  <div className="text-2xl font-bold text-primary mb-2">3-4 Bedrooms</div>
                  <div className="text-sm text-muted-foreground mb-4">1,500 - 3,000 sq ft</div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Basic:</span>
                      <span className="font-semibold">$160</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Standard:</span>
                      <span className="font-semibold">$220</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Premium:</span>
                      <span className="font-semibold">$300</span>
                    </div>
                  </div>
                  <Badge className="mt-3 bg-primary text-primary-foreground">Most Popular</Badge>
                </div>

                <div className="text-center p-6 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">5+ Bedrooms</div>
                  <div className="text-sm text-muted-foreground mb-4">Over 3,000 sq ft</div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Basic:</span>
                      <span className="font-semibold">$200</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Standard:</span>
                      <span className="font-semibold">$280</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Premium:</span>
                      <span className="font-semibold">$380</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Prices may vary based on specific requirements and location. Contact us for a personalized quote.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Get Exact Quote
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 ${
                  plan.popular ? "ring-2 ring-primary scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">Most Popular</Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">/{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.notIncluded.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Not Included:</h4>
                      <ul className="space-y-2">
                        {plan.notIncluded.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center text-sm">
                            <X className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                        : "bg-primary hover:bg-primary/90 text-primary-foreground"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
              <TrendingUp className="h-8 w-8 text-secondary" />
              Save More with Regular Service
            </h2>
            <p className="text-xl text-muted-foreground">
              The more frequently you schedule, the more you save on each visit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {frequencyDiscounts.map((discount, index) => (
              <Card
                key={index}
                className={`border-0 shadow-sm hover:shadow-lg transition-all duration-300 ${
                  discount.popular ? "ring-2 ring-secondary scale-105" : ""
                }`}
              >
                {discount.popular && (
                  <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">Best Value</Badge>
                )}
                <CardContent className="p-8 text-center">
                  <div className="text-2xl font-bold text-foreground mb-2">{discount.frequency}</div>
                  <div className="text-4xl font-bold text-secondary mb-2">{discount.discount}</div>
                  <div className="text-lg text-muted-foreground mb-4">OFF</div>
                  <div className="text-sm font-medium text-primary">{discount.savings}</div>
                  <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                    <div className="text-sm text-muted-foreground">
                      Standard Clean: <span className="line-through">$180</span>
                    </div>
                    <div className="text-lg font-bold text-secondary">
                      Now: ${Math.round(180 * (1 - Number.parseInt(discount.discount) / 100))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Lock in your savings with a recurring service plan. Cancel or modify anytime with 24-hour notice.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Start Recurring Service
            </Button>
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Add-On Services</h2>
            <p className="text-xl text-muted-foreground">
              Customize your cleaning service with these additional options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOnServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6 flex items-center justify-between">
                  <span className="font-medium text-foreground">{service.name}</span>
                  <span className="text-primary font-semibold">{service.price}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Flexible Payment Options</h2>
            <p className="text-xl text-muted-foreground">Choose the payment method that works best for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paymentOptions.map((option, index) => {
              const Icon = option.icon
              return (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{option.title}</h3>
                    <p className="text-muted-foreground mb-4">{option.description}</p>
                    <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
                      {option.fee}
                    </Badge>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Card className="border-0 shadow-sm bg-primary/5">
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  <strong>Payment Terms:</strong> Payment is due upon completion of service. For recurring services, we
                  offer automatic billing for your convenience. All payments are processed securely and we never store
                  your payment information.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Guarantees</h2>
            <p className="text-xl text-muted-foreground">Your satisfaction and peace of mind are our top priorities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => {
              const Icon = guarantee.icon
              return (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{guarantee.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{guarantee.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-16 text-center">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-secondary/10 to-primary/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">30-Day Money-Back Guarantee</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Not completely satisfied with your first cleaning? We'll refund your money, no questions asked. That's
                  how confident we are in our service quality.
                </p>
                <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-secondary" />
                    <span>Licensed & Insured</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-secondary" />
                    <span>Background Checked Staff</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-secondary" />
                    <span>Eco-Friendly Products</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about our pricing and services.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us today for a free estimate tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8">
              Get Free Estimate
            </Button>
            <Button variant="outline" size="lg" className="px-8 bg-transparent">
              <Phone className="h-4 w-4 mr-2" />
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
