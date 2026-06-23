import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const certificates = [
  {
    title: "JavaScript Basics",
    issuer: "@ Cod3r Cursos",
    date: "26-06-2024",
    href: "https://www.cod3r.com.br/certificates/5jigkzl3ls",
    image: "/cod3r.jpg",
  },
  {
    title: "React and Next.js Developer",
    issuer: "@ Udemy",
    date: "17-03-2026",
    href: "",
    image: "/udemy.jpg",
  },
  {
    title: "UI/UX Fundamentals",
    issuer: "@Coursera",
    date: "02-06-2025",
    href: "",
    image: "/certificate-placeholder.png",
  },
  {
    title: "Web Performance Basics",
    issuer: "@freeCodeCamp",
    date: "06-02-2026",
    href: "",
    image: "/certificate-placeholder.png",
  },
]

export default function Page() {
  return (
    <main className="container mx-auto min-h-screen px-6 py-34 md:px-16 md:py-38 lg:px-10 lg:py-42">
      <section className="mx-auto flex max-w-4xl flex-col gap-8 space-y-12">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Portfolio
          </p>
          <h1 className="text-4xl font-black tracking-tight md:text-5xl">
            Certificates
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground">
            A simple overview of courses and achievements that helped shape my journey.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-chart-2/30 border-y border-chart-2/30">
          {certificates.map((certificate) => (
            <Link
              href={certificate.href}
              key={certificate.title}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 py-6 md:flex-row md:items-center md:gap-6 hover:bg-card"
            >
              {/* Image */}
              <div className="shrink-0 w-20 md:w-15">
                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate preview`}
                  className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

                {/* Content */}
              <div className="flex flex-1 items-center justify-between gap-4">
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold text-chart-2 underline-offset-4 transition-all duration-200 group-hover:underline">
                    {certificate.title}
                  </h2>
                  <p className="text-sm font-semibold text-muted-foreground">
                    {certificate.issuer}
                  </p>
                </div>

                <Badge variant="outline">{certificate.date}</Badge>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}