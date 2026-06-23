import { Badge } from "@/components/ui/badge"
import { FileText } from "lucide-react"
import { FaLinkedin } from "react-icons/fa6"
import {
  SiCss,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"

export default function Page() {
  const technologies = [
    { icon: SiHtml5, name: "HTML" },
    { icon: SiCss, name: "CSS" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiShadcnui, name: "Shadcn" },
    { icon: SiTailwindcss, name: "TailwindCSS" },
    { icon: SiSupabase, name: "Supabase" },
    { icon: SiGit, name: "Git" },
  ]

  const socialLinks = [
    { icon: SiGithub, label: "GitHub", href: "https://github.com/GCNX04" },
    { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/gon%C3%A7alo-costa-a6182a3aa/" },
    { icon: FileText, label: "CV", href: "/cv.pdf" },
  ]

  return (
    <main className="container mx-auto flex h-screen flex-col items-center justify-center px-6">
      <div className="w-full max-w-2xl text-left">

        {/* Availability status */}
        <div className="flex items-center gap-2 mb-6">
          <div className="h-3 w-3 shrink-0 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-muted-foreground">Available for work</span>
        </div>


        {/* Introduction */}
        <h1 className="text-4xl font-black md:text-7xl">Gonçalo Costa</h1>

        <p className="mt-4 text-lg">
          I'm a <span className="font-extrabold">FullStack Engineer</span> from{" "}
          <span className="font-extrabold">Portugal</span> with a passion for creating beautiful
          and functional web applications. I specialize in{" "}
          <span className="font-extrabold">React, Next.js and TypeScript</span>, and I'm always
          eager to learn new technologies and improve my skills.
        </p>

         {/* Social links */}
         <div className="mt-4 mb-8 flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>

        {/* Core technologies */}
        <section className="mt-10">
          <p className="italic font-stretch-200% pb-0 py-1 pt-10">Core Technologies</p>

          <div className="flex flex-wrap gap-2 justify-start">
            {technologies.map(({ icon: Icon, name}) => {

              return (
                <Badge
                  key={name}
                  variant="outline"
                  className="flex items-center gap-2 px-3 py-3 text-sm"
                >
                  <Icon size={16} />
                  {name}
                </Badge>
              )
            })}
          </div>
        </section>

      </div>
    </main>
  )
}
