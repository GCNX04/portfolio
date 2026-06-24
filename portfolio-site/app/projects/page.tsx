"use client"

import { Badge } from "@/components/ui/badge"
import { FolderOpen } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import {
    SiNextdotjs,
    SiReact,
    SiShadcnui,
    SiSupabase,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si"

const projects = [
    {
        href: "",
        name: "Portfolio Site",
        imageLight: "/portfolio-light.png",
        imageDark: "/portfolio-dark.png",
        description:
            "A polished personal website built to showcase experience, projects, and certificates with a modern editorial feel.",
        date: "June 24, 2026",
        tech: [
            { name: "Next.js", icon: SiNextdotjs, color: "border-chart-2/40 bg-chart-2/10 text-chart-2" },
            { name: "React", icon: SiReact, color: "border-chart-4/40 bg-chart-4/10 text-chart-4" },
            { name: "TypeScript", icon: SiTypescript, color: "border-chart-3/40 bg-chart-3/10 text-chart-3" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "border-chart-5/40 bg-chart-5/10 text-chart-5" },
            { name: "Shadcn UI", icon: SiShadcnui, color: "border-accent/40 bg-accent/10 text-accent" },
        ],
    },
    {
        href: "",
        name: "SpendWise",
        imageLight: "/placeholder-project.png",
        imageDark: "/placeholder-project-dark.png",
        description:
            "Budget Finance Tracker (in development)",
        date: "2026",
        tech: [
            { name: "React", icon: SiReact, color: "border-chart-4/40 bg-chart-4/10 text-chart-4" },
            { name: "Next.js", icon: SiNextdotjs, color: "border-chart-2/40 bg-chart-2/10 text-chart-2" },
            { name: "TypeScript", icon: SiTypescript, color: "border-chart-3/40 bg-chart-3/10 text-chart-3" },
            { name: "Supabase", icon: SiSupabase, color: "border-primary/30 bg-primary/10 text-primary" },
            { name: "Shadcn UI", icon: SiShadcnui, color: "border-accent/40 bg-accent/10 text-accent" },
        ],
    },
    // {
    //     href: "",
    //     name: "Creative Landing Page",
    //     imageLight: "/placeholder-project.png",
    //     imageDark: "/placeholder-project-dark.png",
    //     description:
    //         "A bold marketing experience designed to feel lightweight, animated, and memorable across screen sizes.",
    //     date: "2024",
    //     tech: [
    //         { name: "Next.js", icon: SiNextdotjs, color: "border-chart-2/40 bg-chart-2/10 text-chart-2" },
    //         { name: "Tailwind CSS", icon: SiTailwindcss, color: "border-chart-5/40 bg-chart-5/10 text-chart-5" },
    //         { name: "React", icon: SiReact, color: "border-chart-4/40 bg-chart-4/10 text-chart-4" },
    //     ],
    // },
]

function getProjectPreviewImage(project: { imageLight: string; imageDark: string }, resolvedTheme: string | undefined) {
    return resolvedTheme === "dark" ? project.imageDark : project.imageLight
}

export default function Page() {
    const { resolvedTheme } = useTheme()

    return (
        <main className="container mx-auto min-h-screen px-6 py-34 md:px-16 md:py-38 lg:px-10 lg:pt-32">
            <section className="mx-auto flex max-w-5xl flex-col gap-3 space-y-4">
                <div className="mt-20 space-y-3">
                    <div className="relative z-10 flex h-9 items-center justify-start gap-3">
                        <FolderOpen className="h-10 w-10 md:h-10 md:w-10" />
                        <h1 className="text-4xl font-black tracking-tight md:text-5xl">
                            Projects
                        </h1>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((project) => (
                        <Link
                            href={""}
                            key={project.name}
                            className="group cursor-pointer rounded-none border border-border/70 bg-card p-6 shadow-[4px_4px_0_0_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-chart-2/70 hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.16)]"
                        >
                            <div className="mb-5 flex h-44 items-center justify-center overflow-hidden rounded-none border border-border/70 bg-muted/40 text-sm uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 group-hover:border-chart-2/60 group-hover:bg-chart-2/10">
                                    <img
                                        src={getProjectPreviewImage(project, resolvedTheme)}
                                        alt={project.name}
                                        className="h-full w-full object-contain bg-background/70 p-2 transition-transform duration-300 group-hover:scale-[1.03]"
                                    />
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <div className="flex w-full items-baseline justify-between">
                                        <h2 className="text-xl font-semibold">{project.name}</h2>
                                        <div className="flex items-center justify-between text-sm font-medium text-muted-foreground">
                                            <span>{project.date}</span>
                                        </div>
                                    </div>
                                    <p className="text-sm leading-6 text-muted-foreground">
                                        {project.description}
                                    </p>
                                </div>


                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(({ name, icon: Icon, color }) => (
                                        <Badge
                                            key={name}
                                            variant="outline"
                                            className={`flex items-center gap-2 px-3 py-2 text-xs font-medium ${color}`}
                                        >
                                            <Icon size={14} />
                                            {name}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    )
}
