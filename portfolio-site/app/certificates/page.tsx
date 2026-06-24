import { Badge } from "@/components/ui/badge"
import { ShieldCheck } from "lucide-react"
import Link from "next/link"
import { Icon } from "lucide-react"

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
]

export default function Page() {
  return (
    <main className="container mx-auto min-h-screen px-6 py-34 md:px-16 md:py-38 lg:px-10 lg:pt-32">
      <section className="mx-auto flex max-w-4xl flex-col gap-8 space-y-4">
        <div className="mt-20 space-y-3">
          <div className="relative z-10 flex h-9 items-center justify-start gap-3">
            <ShieldCheck className="h-10 w-10 md:h-10 md:w-10" />
            <h1 className="text-4xl font-black tracking-tight md:text-5xl">
              Certificates
            </h1>
          </div>
        </div>

        <div className="flex flex-col divide-y divide-accent/70 border-y border-accent/70">
          {certificates.map((certificate) => (
            <Link
              href={certificate.href}
              key={certificate.title}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 py-6 md:flex-row md:items-center md:gap-6 hover:bg-card"
            >
              <div className="w-20 shrink-0 md:w-15">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <div className="flex flex-1 items-center justify-between gap-4">
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold underline-offset-4 transition-all duration-200 group-hover:scale-[1.02] group-hover:underline">
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