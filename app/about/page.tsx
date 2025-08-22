import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Heart, Target, Award, Users, Calendar, Mail, Linkedin } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "Every decision we make is guided by what's best for our customers and their satisfaction.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for perfection in every cleaning task, no matter how big or small.",
  },
  {
    icon: Award,
    title: "Integrity",
    description: "Honest, transparent, and reliable service you can trust in your home or office.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Our success comes from working together and supporting each other every day.",
  },
]

const teamMembers = [
  {
    name: "Sarah Mitchell",
    role: "Founder & CEO",
    bio: "With over 15 years in the cleaning industry, Sarah founded Zenith Cleaning to provide exceptional service with a personal touch.",
    image: "/team-sarah-mitchell.jpg",
    email: "sarah@zenithcleaning.com",
    linkedin: "#",
  },
  {
    name: "Michael Rodriguez",
    role: "Operations Manager",
    bio: "Michael ensures our teams deliver consistent, high-quality service across all locations with his 10+ years of experience.",
    image: "/team-michael-rodriguez.jpg",
    email: "michael@zenithcleaning.com",
    linkedin: "#",
  },
  {
    name: "Emily Chen",
    role: "Quality Assurance Lead",
    bio: "Emily's attention to detail and commitment to excellence ensures every client receives the best possible service.",
    image: "/team-emily-chen.jpg",
    email: "emily@zenithcleaning.com",
    linkedin: "#",
  },
  {
    name: "David Thompson",
    role: "Customer Success Manager",
    bio: "David works closely with clients to ensure their needs are met and exceeded with every cleaning service.",
    image: "/team-david-thompson.jpg",
    email: "david@zenithcleaning.com",
    linkedin: "#",
  },
  {
    name: "Lisa Park",
    role: "Training Coordinator",
    bio: "Lisa develops and implements training programs that keep our cleaning professionals at the top of their game.",
    image: "/team-lisa-park.jpg",
    email: "lisa@zenithcleaning.com",
    linkedin: "#",
  },
  {
    name: "James Wilson",
    role: "Environmental Specialist",
    bio: "James ensures we use the most effective eco-friendly products and sustainable cleaning practices.",
    image: "/team-james-wilson.jpg",
    email: "james@zenithcleaning.com",
    linkedin: "#",
  },
]

const milestones = [
  {
    year: "2018",
    title: "Company Founded",
    description:
      "Sarah Mitchell started Zenith Cleaning with a vision to revolutionize professional cleaning services.",
  },
  {
    year: "2019",
    title: "First 100 Customers",
    description: "Reached our first major milestone with 100 satisfied residential and commercial clients.",
  },
  {
    year: "2020",
    title: "Eco-Friendly Initiative",
    description: "Transitioned to 100% eco-friendly cleaning products and sustainable practices.",
  },
  {
    year: "2021",
    title: "Team Expansion",
    description: "Grew our team to 25+ professional cleaners and support staff to serve more clients.",
  },
  {
    year: "2022",
    title: "Service Area Growth",
    description: "Expanded our service area to cover the entire metropolitan region.",
  },
  {
    year: "2023",
    title: "1000+ Happy Clients",
    description: "Celebrated serving over 1,000 satisfied customers with consistent 5-star reviews.",
  },
  {
    year: "2024",
    title: "Innovation & Technology",
    description: "Implemented advanced scheduling systems and quality tracking for enhanced service delivery.",
  },
]

const stats = [
  { number: "1000+", label: "Happy Customers" },
  { number: "25+", label: "Team Members" },
  { number: "6", label: "Years Experience" },
  { number: "100%", label: "Eco-Friendly" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                  ✨ Trusted Since 2018
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  About{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Zenith
                  </span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-semibold text-muted-foreground">
                  Cleaning Excellence Redefined
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Founded with a vision to revolutionize professional cleaning services, we've been creating cleaner,
                healthier spaces while building lasting relationships with every client we serve.
              </p>

              <div className="grid grid-cols-2 gap-6 py-6">
                <div className="text-center p-4 bg-background/50 backdrop-blur-sm rounded-xl border border-border/50">
                  <div className="text-3xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-background/50 backdrop-blur-sm rounded-xl border border-border/50">
                  <div className="text-3xl font-bold text-secondary">100%</div>
                  <div className="text-sm text-muted-foreground">Eco-Friendly</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                  Join Our Team
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3 bg-background/50 backdrop-blur-sm">
                  Our Story
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/about-hero-team.png"
                  alt="Zenith Cleaning professional team"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />

                {/* Floating Cards */}
                <div className="absolute -top-6 -right-6 bg-background p-6 rounded-2xl shadow-xl border border-border">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-foreground">Award Winning</div>
                      <div className="text-sm text-muted-foreground">Service Excellence</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-2xl shadow-xl border border-border">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-foreground">25+ Team</div>
                      <div className="text-sm text-muted-foreground">Expert Professionals</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl -z-10 transform rotate-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To provide exceptional cleaning services that create healthier, more productive environments while
                building lasting relationships with our clients through reliability, quality, and care.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the most trusted and respected cleaning service provider, known for our commitment to excellence,
                environmental responsibility, and positive impact on our community.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Promise</h2>
              <p className="text-muted-foreground">
                Every space we clean will be treated with the same care and attention we'd give our own homes, using
                safe, eco-friendly products and the highest professional standards.
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do at Zenith Cleaning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card
                  key={index}
                  className="text-center border-0 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
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
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our dedicated professionals bring years of experience and a passion for excellence to every cleaning
              project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg?height=300&width=300"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">{member.name}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {member.role}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                    <div className="flex items-center space-x-3 pt-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                      <a
                        href={member.linkedin}
                        className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              From humble beginnings to becoming a trusted name in professional cleaning services.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full md:transform md:-translate-x-1.5 z-10"></div>

                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <Card className="ml-12 md:ml-0 border-0 shadow-sm">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                            {milestone.year}
                          </Badge>
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground text-sm">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ready to Experience Our Service?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of satisfied customers who trust Zenith Cleaning for their home and office needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8">
              Get Free Estimate
            </Button>
            <Button variant="outline" size="lg" className="px-8 bg-transparent">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
