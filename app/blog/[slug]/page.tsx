import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Calendar, User, ArrowLeft, Share2, Clock } from "lucide-react"
import Link from "next/link"

// This would typically come from a CMS or database
const blogPost = {
  id: "spring-cleaning-checklist",
  title: "The Ultimate Spring Cleaning Checklist for 2024",
  content: `
    <p>Spring is the perfect time to give your home a fresh start. After months of closed windows and indoor living, it's time to open up, air out, and deep clean every corner of your space.</p>
    
    <h2>Why Spring Cleaning Matters</h2>
    <p>Spring cleaning isn't just about aesthetics – it's about creating a healthier, more organized living environment. Regular deep cleaning can improve indoor air quality, reduce allergens, and create a more peaceful, productive space.</p>
    
    <h2>Room-by-Room Checklist</h2>
    
    <h3>Kitchen</h3>
    <ul>
      <li>Deep clean appliances inside and out</li>
      <li>Organize and clean pantry and cabinets</li>
      <li>Scrub backsplash and clean light fixtures</li>
      <li>Clean and organize refrigerator</li>
      <li>Wash windows and window treatments</li>
    </ul>
    
    <h3>Living Areas</h3>
    <ul>
      <li>Dust all surfaces, including baseboards</li>
      <li>Clean upholstery and carpets</li>
      <li>Organize entertainment centers and bookshelves</li>
      <li>Clean light fixtures and ceiling fans</li>
      <li>Wash or dry clean curtains and drapes</li>
    </ul>
    
    <h3>Bedrooms</h3>
    <ul>
      <li>Rotate and flip mattresses</li>
      <li>Organize closets and donate unused items</li>
      <li>Dust furniture and clean mirrors</li>
      <li>Wash bedding and pillows</li>
      <li>Vacuum under beds and furniture</li>
    </ul>
    
    <h3>Bathrooms</h3>
    <ul>
      <li>Deep clean grout and tile</li>
      <li>Organize medicine cabinets and drawers</li>
      <li>Clean and disinfect all surfaces</li>
      <li>Replace old towels and bath mats</li>
      <li>Clean exhaust fans and light fixtures</li>
    </ul>
    
    <h2>Professional Help</h2>
    <p>While this checklist covers the basics, some tasks are best left to professionals. Consider hiring a cleaning service for tasks like carpet deep cleaning, window washing, or comprehensive deep cleaning of your entire home.</p>
    
    <p>At Zenith Cleaning Co., we specialize in thorough spring cleaning services that will leave your home spotless and fresh for the season ahead.</p>
  `,
  image: "/blog-spring-cleaning-detail.jpg",
  author: "Sarah Mitchell",
  date: "March 15, 2024",
  category: "Cleaning Tips",
  readTime: "5 min read",
}

const relatedPosts = [
  {
    id: "eco-friendly-cleaning-products",
    title: "Why Eco-Friendly Cleaning Products Matter",
    image: "/blog-eco-friendly-small.jpg",
    category: "Green Cleaning",
  },
  {
    id: "deep-cleaning-vs-regular",
    title: "Deep Cleaning vs. Regular Cleaning: What's the Difference?",
    image: "/blog-deep-vs-regular-small.jpg",
    category: "Cleaning Services",
  },
]

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Badge className="bg-secondary text-secondary-foreground">{blogPost.category}</Badge>
              <span className="text-sm text-muted-foreground">{blogPost.readTime}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">{blogPost.title}</h1>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{blogPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{blogPost.date}</span>
                </div>
              </div>

              <Button variant="outline" size="sm" className="bg-transparent">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video overflow-hidden rounded-2xl">
            <img
              src={blogPost.image || "/placeholder.svg?height=400&width=800"}
              alt={blogPost.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <article className="lg:col-span-3 prose prose-lg max-w-none">
              <div
                className="text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <Card className="border-0 shadow-sm sticky top-24">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Article Info</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{blogPost.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{blogPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{blogPost.date}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-3">Need Professional Help?</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Let our experts handle your spring cleaning needs.
                    </p>
                    <Button size="sm" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      Get Free Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg?height=200&width=400"}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <Badge variant="outline" className="text-xs mb-2">
                    {post.category}
                  </Badge>
                  <h3 className="font-semibold text-foreground mb-2">{post.title}</h3>
                  <Link href={`/blog/${post.id}`} className="text-primary text-sm hover:text-primary/80">
                    Read Article →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
