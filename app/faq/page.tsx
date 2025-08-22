import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, Phone, Mail, MessageCircle } from "lucide-react"

const faqCategories = [
  {
    title: "General Services",
    faqs: [
      {
        question: "What cleaning services do you offer?",
        answer:
          "We offer comprehensive residential and commercial cleaning services including regular house cleaning, deep cleaning, office cleaning, carpet cleaning, window cleaning, and post-construction cleanup. Each service can be customized to meet your specific needs.",
      },
      {
        question: "How often should I schedule cleaning services?",
        answer:
          "The frequency depends on your lifestyle and needs. Most residential clients choose weekly, bi-weekly, or monthly services. Busy families often prefer weekly cleaning, while others find bi-weekly or monthly sufficient. We can help you determine the best schedule during your consultation.",
      },
      {
        question: "Do you bring your own cleaning supplies and equipment?",
        answer:
          "Yes, we bring all necessary cleaning supplies and professional-grade equipment. We use eco-friendly, non-toxic products that are safe for your family and pets. If you have specific product preferences or allergies, we're happy to accommodate your requests.",
      },
      {
        question: "Are your cleaning products safe for children and pets?",
        answer:
          "We exclusively use eco-friendly, non-toxic cleaning products that are safe for children, pets, and the environment. Our products are effective at cleaning and disinfecting while being gentle on your family's health.",
      },
    ],
  },
  {
    title: "Pricing & Booking",
    faqs: [
      {
        question: "How do you determine pricing for cleaning services?",
        answer:
          "Our pricing is based on several factors including the size of your space, the type of cleaning service, frequency of visits, and any special requirements. We offer free in-home consultations to provide accurate, personalized quotes with no hidden fees.",
      },
      {
        question: "Do you offer free estimates?",
        answer:
          "Yes, we provide free, no-obligation estimates for all our services. We can often provide quotes over the phone for standard services, or we can schedule an in-home consultation for more complex or customized cleaning needs.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept cash, check, and all major credit cards. For recurring services, we can set up automatic billing for your convenience. Payment is typically due upon completion of service.",
      },
      {
        question: "Can I reschedule or cancel my appointment?",
        answer:
          "Yes, we understand that schedules change. We ask for at least 24 hours notice for rescheduling or cancellations to avoid any fees. You can contact us by phone, email, or through our online portal to make changes to your appointment.",
      },
    ],
  },
  {
    title: "Service Details",
    faqs: [
      {
        question: "What's included in a standard house cleaning?",
        answer:
          "Our standard house cleaning includes dusting all surfaces, vacuuming carpets and rugs, mopping hard floors, cleaning bathrooms (toilets, sinks, tubs, showers), kitchen cleaning (counters, appliances, sink), trash removal, and making beds. We can customize the service based on your priorities.",
      },
      {
        question: "What's the difference between regular cleaning and deep cleaning?",
        answer:
          "Regular cleaning focuses on maintenance tasks like dusting, vacuuming, and surface cleaning. Deep cleaning is more thorough and includes tasks like cleaning inside appliances, baseboards, light fixtures, window sills, and other areas not typically covered in regular cleaning.",
      },
      {
        question: "How long does a typical cleaning take?",
        answer:
          "Cleaning time varies based on the size of your home and type of service. A standard cleaning for an average 3-bedroom home typically takes 2-3 hours with our team. Deep cleaning services may take 4-6 hours. We'll provide an estimated timeframe when scheduling your service.",
      },
      {
        question: "Do I need to be home during the cleaning?",
        answer:
          "You don't need to be home during the cleaning service. Many of our clients provide us with a key or garage code for convenient access. We're fully insured and bonded, and all our team members undergo thorough background checks for your peace of mind.",
      },
    ],
  },
  {
    title: "Quality & Satisfaction",
    faqs: [
      {
        question: "What if I'm not satisfied with the cleaning?",
        answer:
          "Your satisfaction is our top priority. We offer a 100% satisfaction guarantee. If you're not completely happy with our service, contact us within 24 hours and we'll return to address any concerns at no additional charge.",
      },
      {
        question: "Are your cleaners insured and bonded?",
        answer:
          "Yes, all our cleaning professionals are fully insured and bonded. We carry comprehensive liability insurance and workers' compensation coverage. This protects both you and our team members in the unlikely event of an accident or damage.",
      },
      {
        question: "Do you perform background checks on your employees?",
        answer:
          "Absolutely. All our team members undergo thorough background checks and reference verification before joining our team. We also provide ongoing training to ensure consistent, high-quality service and professionalism.",
      },
      {
        question: "How do you ensure consistent quality?",
        answer:
          "We maintain quality through regular training, detailed checklists for each service, quality assurance inspections, and customer feedback. Our team leaders conduct periodic reviews to ensure our high standards are consistently met.",
      },
    ],
  },
]

const contactOptions = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our friendly team",
    action: "(555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us your questions",
    action: "info@zenithcleaning.com",
    href: "mailto:info@zenithcleaning.com",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with us online",
    action: "Start Chat",
    href: "#",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Find answers to common questions about our cleaning services, pricing, and policies. Can't find what you're
            looking for? Contact us directly.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input type="text" placeholder="Search FAQs..." className="pl-10 pr-4 py-2 w-full" />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">{category.title}</h2>

              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${categoryIndex}-${faqIndex}`}
                    className="border border-border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground">
              Our friendly team is here to help. Reach out to us through any of these channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactOptions.map((option, index) => {
              const Icon = option.icon
              return (
                <Card
                  key={index}
                  className="text-center border-0 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{option.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{option.description}</p>
                    <Button variant="outline" size="sm" className="bg-transparent">
                      <a href={option.href}>{option.action}</a>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">Ready to Schedule Your Cleaning Service?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Get Free Estimate
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent">
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
