import Navbar from "@/components/Navbar"
import ClientParticles from "@/components/client-particles"
import { Badge }  from "@/components/ui/badge"
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
        <div className="container mx-auto flex h-screen flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl font-black md:text-7xl">
            Gonçalo Costa
          </h1>
          <p className="mt-4 max-w-2xl text-lg ">
            I'm a <span className="font-extrabold">Junior Frontend Developer</span> from <span className="font-extrabold">Portugal</span> with a passion for creating beautiful and functional web applications. I specialize in <span className="font-extrabold">React, Next.js and TypeScript</span>, and I'm always eager to learn new technologies and improve my skills. 
          </p>
          <div className="mt-10 w-full">
            <p className="italic font-stretch-200% mx-auto md:w-2/3 lg:w-1/2 pb-0 py-1 pt-10">
            These are the tools i use
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
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
  )
}