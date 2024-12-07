import { Card, CardContent, CardFooter } from '@/components/ui/card'

const testimonials = [
  {
    quote: "Wallet API helped us identify fraudulent wallets and secure our platform seamlessly. Highly recommend!",
    author: "John D.",
    position: "Compliance Manager at XYZ Exchange"
  },
  {
    quote: "Our developers found the integration process fast and smooth. The API is well-documented.",
    author: "Sarah K.",
    position: "DevOps Engineer at DeFi Protocol"
  }
]

export default function Testimonials() {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">What Our Customers Say</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <p className="mb-4 text-lg italic">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

