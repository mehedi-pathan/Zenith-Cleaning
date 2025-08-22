import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Calendar, User, ArrowRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const blogPosts = [
  {
    id: "spring-cleaning-checklist",
    title: "The Ultimate Spring Cleaning Checklist for 2024",
    excerpt:
      "Get your home ready for spring with our comprehensive cleaning checklist. From deep cleaning carpets to organizing closets, we've got you covered.",
    image: "/blog-spring-cleaning.jpg",
    author: "Sarah Mitchell",
    date: "March 15, 2024",
    category: "Cleaning Tips",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: "eco-friendly-cleaning-products",
    title: "Why Eco-Friendly Cleaning Products Matter",
    excerpt:
      "Discover the benefits of using environmentally safe cleaning products in your home and how they protect your family's health.",
    image: "/blog-eco-friendly.jpg",
    author: "James Wilson",
    date: "March 10, 2024",
    category: "Green Cleaning",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: "office-cleaning-productivity",
    title: "How a Clean Office Boosts Employee Productivity",
    excerpt:
      "Learn about the connection between workplace cleanliness and employee performance, plus tips for maintaining a productive office environment.",
    image: "/blog-office-productivity.jpg",
    author: "Michael Rodriguez",
    date: "March 5, 2024",
    category: "Commercial Cleaning",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: "deep-cleaning-vs-regular",
    title: "Deep Cleaning vs. Regular Cleaning: What's the Difference?",
    excerpt:
      "Understanding when you need deep cleaning services versus regular maintenance cleaning can save you time and money.",
    image: "/blog-deep-vs-regular.jpg",
    author: "Emily Chen",
    date: "February 28, 2024",
    category: "Cleaning Services",
    readTime: "3 min read",
    featured: false,
  },
  {
    id: "carpet-maintenance-tips",
    title: "5 Essential Carpet Maintenance Tips",
    excerpt:
      "Keep your carpets looking fresh and extend their lifespan with these professional maintenance tips from our cleaning experts.",
    image: "/blog-carpet-tips.jpg",
    author: "David Thompson",
    date: "February 20, 2024",
    category: "Cleaning Tips",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: "seasonal-cleaning-guide",
    title: "Seasonal Cleaning: Preparing Your Home for Each Season",
    excerpt:
      "A comprehensive guide to seasonal cleaning tasks that will keep your home comfortable and healthy year-round.",
    image: "/blog-seasonal-cleaning.jpg",
    author: "Lisa Park",
    date: "February 15, 2024",
    category: "Home Care",
    readTime: "7 min read",
    featured: false,
  },
]

const categories = ["All", "Cleaning Tips", "Green Cleaning", "Commercial Cleaning", "Cleaning Services", "Home Care"]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Cleaning Tips & Insights</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Expert advice, cleaning tips, and industry insights from the professionals at Zenith Cleaning Co.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input type="text" placeholder="Search articles..." className="pl-10 pr-4 py-2 w-full" />
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={category === "All" ? "bg-primary hover:bg-primary/90" : "bg-transparent"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Featured Article</h2>
            <div className="w-12 h-1 bg-primary rounded"></div>
          </div>

          {blogPosts
            .filter((post) => post.featured)
            .map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-square overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg?height=400&width=600"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge className="bg-secondary text-secondary-foreground">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{post.title}</h3>
                    <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <Button variant="outline" className="bg-transparent">
                        <Link href={`/blog/${post.id}`} className="flex items-center">
                          Read More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Latest Articles</h2>
            <div className="w-12 h-1 bg-primary rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter((post) => !post.featured)
              .map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg?height=200&width=400"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                        <Calendar className="h-3 w-3 ml-2" />
                        <span>{post.date}</span>
                      </div>
                      <Button size="sm" variant="ghost" className="p-0 h-auto">
                        <Link href={`/blog/${post.id}`} className="flex items-center text-primary">
                          Read
                          <ArrowRight className="h-3 w-3 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Stay Updated</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get the latest cleaning tips and insights delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
