import Navbar from "@/components/Navbar"
import ClientParticles from "@/components/client-particles"
import { Badge }  from "@/components/ui/badge"
import { Icon } from "lucide-react"
import { SiReact, SiTypescript, SiShadcnui, SiNextdotjs, SiTailwindcss, SiSupabase} from "react-icons/si"

export default function Page() {

  const technologies = [
    {icon: SiReact, name: "React"},
    {icon: SiTypescript, name: "TypeScript"},
    {icon: SiShadcnui, name: "Shadcn"},
    {icon: SiNextdotjs, name: "Next.js"},
    {icon: SiTailwindcss, name: "TailwindCSS"},
    {icon: SiSupabase, name: "Supabase"},
  ]

  return (
    <div className="min-h-screen">
      <ClientParticles />

      <div className="relative z-10 pointer-events-none">
        <div className="pointer-events-auto">
          <Navbar />
        </div>
        <div className="container mx-auto flex h-screen flex-col justify-center gap-4 px-6 ">
          <h1 className="text-4xl font-black md:text-7xl">
            Gonçalo Costa
          </h1>
          <p className="text-lg w-full md:w-2/3 lg:w-1/2 ">
            I'm a <span className="font-extrabold">Junior Frontend Developer</span> from <span className="font-extrabold">Portugal</span> with a passion for creating beautiful and functional web applications. I specialize in <span className="font-extrabold">React, Next.js and TypeScript</span>, and I'm always eager to learn new technologies and improve my skills. 
          </p>
          <div className="flex flex-col gap-2">
            <p className="italic font-stretch-200% md:w-2/3 lg:w-1/2 pb-0 py-1 pt-10">
            These are the tools i use
          </p>
          <div className="flex flex-wrap gap-2">
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



            {/* <Badge variant="outline" className="flex items-center gap-2 px-3 py-3 text-sm">
              <SiReact size={16} />
              React
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2 px-3 py-3 text-sm">
              <SiTypescript size={16} />
              TypeScript
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2 px-3 py-3 text-sm">
              <SiShadcnui size={16} />
              Shadcn
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2 px-3 py-3 text-sm">
              <SiNextdotjs size={16} />
              Next.js
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2 px-3 py-3 text-sm">
              <SiTailwindcss size={16} />
              TailwindCSS
            </Badge>
             <Badge variant="outline" className="flex items-center gap-2 px-3 py-3 text-sm">
              <SiSupabase size={16} />
              Supabase
            </Badge> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}