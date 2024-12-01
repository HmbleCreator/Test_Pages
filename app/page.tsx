import { Github, Linkedin, Mail } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import dynamic from 'next/dynamic'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const ParticleBackground = dynamic(() => import("@/components/ParticleBackground"), { ssr: false })

export default function Home() {
  return (
    <main className="relative">
      <ParticleBackground />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative w-40 h-40">
            <Image
              src="/placeholder.svg"
              alt="Profile"
              fill
              className="rounded-full border-4 border-primary"
              priority
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-white">
              Hi <span className="animate-wave inline-block">👋</span>, I'm{" "}
              <span className="text-primary">Your Name</span>
            </h1>
            <p className="text-xl text-gray-400">
              A Full Stack Developer with a passion for Physics and Web Applications
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com/yourusername">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://linkedin.com/in/yourusername">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="mailto:your.email@example.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Skills Section */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">
            Technologies & Tools
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "Git",
              "SQL",
              "Physics Simulations",
              "Data Analysis",
            ].map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="justify-center py-2 text-sm"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Physics Simulation Web App",
                description: "An interactive web application demonstrating various physics concepts using WebGL and Three.js.",
              },
              {
                title: "Data Analysis Dashboard",
                description: "A full-stack dashboard for analyzing and visualizing large datasets from physics experiments.",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="p-6 bg-gray-900/80 border-gray-800 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="#">View Project</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="#">Source Code</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

