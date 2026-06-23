import Navbar from "@/components/Navbar"
import { Badge }  from "@/components/ui/badge"
import { SiReact, SiTypescript, SiShadcnui, SiNextdotjs, SiTailwindcss, SiSupabase, SiGithub, SiGit, SiJavascript, SiHtml5, SiCss} from "react-icons/si"

export default function Page() {

  const technologies = [
    {icon: SiHtml5, name: "HTML"},
    {icon: SiCss, name: "CSS"},
    {icon: SiJavascript, name: "JavaScript"},
    {icon: SiReact, name: "React"},
    {icon: SiNextdotjs, name: "Next.js"},
    {icon: SiTypescript, name: "TypeScript"},
    {icon: SiShadcnui, name: "Shadcn"},
    {icon: SiTailwindcss, name: "TailwindCSS"},
    {icon: SiSupabase, name: "Supabase"},
    {icon: SiGit, name: "Git"},
  ]

  return (
    <main className="container mx-auto flex h-screen flex-col items-center justify-center px-6">
      <div className="relative z-10 pointer-events-none">
        <div className="pointer-events-auto">
        </div>
        <div className="container mx-auto flex h-screen flex-col items-center justify-center px-6">
          <div className="w-full max-w-2xl text-left">
            <h1 className="text-4xl font-black md:text-7xl">
              Gonçalo Costa
            </h1>
            <p className="mt-4 text-lg">
              I'm a <span className="font-extrabold">Junior Frontend Developer</span> from <span className="font-extrabold">Portugal</span> with a passion for creating beautiful and functional web applications. I specialize in <span className="font-extrabold">React, Next.js and TypeScript</span>, and I'm always eager to learn new technologies and improve my skills. 
            </p>
            <div className="mt-10">
              <p className="italic font-stretch-200% pb-0 py-1 pt-10">
                Core Technologies
              </p>
              <div className="flex flex-wrap gap-2 justify-start">
                {technologies.map((tech) => {
                  const Icon = tech.icon
      
                  return (
                  <Badge
                  key={tech.name}
                  variant="outline"
                  className="flex items-center gap-2 px-3 py-3 text-sm"
                  >
                    <Icon size={16} />
                    {tech.name}
                  </Badge>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}