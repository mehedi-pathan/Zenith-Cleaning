import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MapPin, Clock, DollarSign, Users, Heart, Award, GraduationCap, Shield, Coffee, Car } from "lucide-react"

const openPositions = [
  {
    title: "Residential Cleaning Specialist",
    department: "Operations",
    location: "Multiple Locations",
    type: "Full-time",
    salary: "$18-22/hour",
    description:
      "Join our team of professional cleaners providing exceptional residential cleaning services. Perfect for detail-oriented individuals who take pride in their work.",
    requirements: [
      "Previous cleaning experience preferred",
      "Reliable transportation",
      "Attention to detail",
      "Physical ability to perform cleaning tasks",
      "Professional attitude",
    ],
    benefits: ["Health insurance", "Paid time off", "Flexible scheduling", "Performance bonuses"],
  },
  {
    title: "Commercial Cleaning Team Lead",
    department: "Operations",
    location: "Downtown Area",
    type: "Full-time",
    salary: "$22-26/hour",
    description:
      "Lead a team of commercial cleaners in maintaining office buildings and commercial spaces. Requires leadership skills and cleaning expertise.",
    requirements: [
      "2+ years cleaning experience",
      "Leadership experience",
      "Valid driver's license",
      "Ability to work evenings/weekends",
      "Strong communication skills",
    ],
    benefits: ["Health insurance", "Dental coverage", "Paid time off", "Leadership training", "Company vehicle"],
  },
  {
    title: "Customer Service Representative",
    department: "Customer Success",
    location: "Office - Remote Options",
    type: "Full-time",
    salary: "$16-20/hour",
    description:
      "Handle customer inquiries, schedule appointments, and ensure exceptional customer satisfaction. Great opportunity for someone with strong communication skills.",
    requirements: [
      "Excellent communication skills",
      "Customer service experience",
      "Computer proficiency",
      "Problem-solving abilities",
      "Professional phone manner",
    ],
    benefits: ["Health insurance", "Remote work options", "Paid time off", "Professional development"],
  },
  {
    title: "Quality Assurance Inspector",
    department: "Quality Control",
    location: "Multiple Locations",
    type: "Part-time",
    salary: "$20-24/hour",
    description:
      "Ensure our cleaning standards are met by conducting quality inspections and providing feedback to cleaning teams.",
    requirements: [
      "Attention to detail",
      "Previous cleaning experience",
      "Reliable transportation",
      "Communication skills",
      "Flexible schedule",
    ],
    benefits: ["Flexible hours", "Mileage reimbursement", "Performance bonuses", "Training provided"],
  },
  {
    title: "Marketing Coordinator",
    department: "Marketing",
    location: "Office",
    type: "Full-time",
    salary: "$45,000-55,000/year",
    description:
      "Support our marketing efforts through social media management, content creation, and campaign coordination. Perfect for a creative marketing professional.",
    requirements: [
      "Marketing degree or experience",
      "Social media expertise",
      "Content creation skills",
      "Adobe Creative Suite knowledge",
      "Analytical mindset",
    ],
    benefits: ["Health insurance", "401k matching", "Paid time off", "Professional development", "Creative freedom"],
  },
]

const benefits = [
  {
    icon: Shield,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, dental, and vision coverage for you and your family.",
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Flexible scheduling options and generous paid time off to maintain a healthy work-life balance.",
  },
  {
    icon: GraduationCap,
    title: "Professional Development",
    description: "Ongoing training programs and opportunities for career advancement within our growing company.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description: "Above-market wages with performance bonuses and regular pay reviews.",
  },
  {
    icon: Users,
    title: "Team Environment",
    description: "Join a supportive team that values collaboration, respect, and mutual success.",
  },
  {
    icon: Award,
    title: "Recognition Programs",
    description: "Employee of the month awards, performance bonuses, and public recognition for outstanding work.",
  },
]

const cultureValues = [
  {
    icon: Heart,
    title: "We Care",
    description: "About our employees, customers, and community. Every person matters and every voice is heard.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for the highest standards in everything we do, from cleaning services to employee treatment.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Success comes from working together, supporting each other, and celebrating shared achievements.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Honest, transparent, and ethical practices in all our business and employee relationships.",
  },
]

const perks = [
  { icon: Coffee, text: "Free coffee and snacks" },
  { icon: Car, text: "Mileage reimbursement" },
  { icon: Users, text: "Team building events" },
  { icon: Award, text: "Employee recognition programs" },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">Join Our Growing Team</h1>
              <p className="text-xl text-muted-foreground">
                Build a rewarding career with Zenith Cleaning Co. We're looking for dedicated professionals who share
                our commitment to excellence and customer satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  View Open Positions
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent">
                  Learn About Benefits
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/careers-team-photo.jpg"
                alt="Zenith Cleaning team at work"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-xl shadow-lg border border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Team Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Open Positions</h2>
            <p className="text-xl text-muted-foreground">
              Discover exciting career opportunities and join our mission to provide exceptional cleaning services.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{position.title}</CardTitle>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        <Badge variant="outline">{position.department}</Badge>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {position.type}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {position.salary}
                        </div>
                      </div>
                    </div>
                    <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">Apply Now</Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{position.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {position.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Culture & Values</h2>
            <p className="text-xl text-muted-foreground">
              We believe in creating a positive work environment where everyone can thrive and grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {cultureValues.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="text-center border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-8">Additional Perks</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {perks.map((perk, index) => {
                const Icon = perk.icon
                return (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mb-2">
                      <Icon className="h-5 w-5 text-secondary" />
                    </div>
                    <span className="text-sm text-muted-foreground text-center">{perk.text}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Employee Benefits</h2>
            <p className="text-xl text-muted-foreground">
              We invest in our team members with comprehensive benefits and growth opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ready to Join Our Team?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Take the next step in your career with Zenith Cleaning Co. We're excited to meet you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8">
              Apply Today
            </Button>
            <Button variant="outline" size="lg" className="px-8 bg-transparent">
              Contact HR
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
