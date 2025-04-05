import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#b3dff8] text-gray-800 p-6 md:p-12 relative overflow-hidden">
      {/* Fluffy Circular SVG Clouds */}
      <svg className="absolute top-0 left-10 w-64 h-32 z-0" viewBox="0 0 200 100" fill="none">
        <circle cx="40" cy="60" r="40" fill="#fff" />
        <circle cx="80" cy="50" r="30" fill="#fff" />
        <circle cx="120" cy="60" r="35" fill="#f1f5f9" />
        <circle cx="90" cy="70" r="25" fill="#fff" />
      </svg>
      <svg className="absolute top-4 right-20 w-72 h-36 z-0" viewBox="0 0 220 110" fill="none">
        <circle cx="50" cy="70" r="40" fill="#f1f5f9" />
        <circle cx="90" cy="60" r="35" fill="#fff" />
        <circle cx="130" cy="70" r="30" fill="#f1f5f9" />
        <circle cx="110" cy="80" r="25" fill="#fff" />
      </svg>
      <svg className="absolute top-12 left-1/3 w-64 h-32 z-0" viewBox="0 0 200 100" fill="none">
        <circle cx="40" cy="60" r="30" fill="#fff" />
        <circle cx="70" cy="50" r="25" fill="#f1f5f9" />
        <circle cx="100" cy="60" r="30" fill="#fff" />
        <circle cx="80" cy="70" r="20" fill="#f1f5f9" />
      </svg>

      <header className="relative z-10 max-w-5xl mx-auto mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Jane Doe</h1>
        <p className="text-xl md:text-2xl mb-6">Software Engineer specializing in full-stack web development, building clean and scalable applications.</p>
        <div className="flex space-x-4">
          <a href="https://github.com/janedoe" target="_blank" rel="noopener noreferrer">
            <Button><Github className="mr-2" /> GitHub</Button>
          </a>
          <a href="https://linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer">
            <Button variant="outline"><Linkedin className="mr-2" /> LinkedIn</Button>
          </a>
          <a href="mailto:jane@example.com">
            <Button variant="ghost"><Mail className="mr-2" /> Contact</Button>
          </a>
        </div>
      </header>

      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Project Alpha</h3>
              <p className="mb-4">A web-based analytics dashboard using React, Node.js, and PostgreSQL. Real-time data visualization and user authentication.</p>
              <a href="https://github.com/janedoe/project-alpha" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">View Code</Button>
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">BetaApp</h3>
              <p className="mb-4">Mobile app built with React Native and Firebase. Enables users to track personal finance with a clean and intuitive UI.</p>
              <a href="https://github.com/janedoe/betaapp" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">View Code</Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 list-disc pl-6">
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
          <li>Node.js / Express</li>
          <li>PostgreSQL / MongoDB</li>
          <li>Python / Django</li>
          <li>Git / GitHub / CI/CD</li>
        </ul>
      </section>

      {/* Rolling Hills Landscape Behind Footer */}
      <svg className="absolute bottom-0 left-0 w-full h-48 z-0" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#bbf7d0" d="M0,288L60,266.7C120,245,240,203,360,192C480,181,600,203,720,208C840,213,960,203,1080,197.3C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        <path fill="#86efac" d="M0,320L80,304C160,288,320,256,480,234.7C640,213,800,203,960,213.3C1120,224,1280,256,1360,272L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
        <path fill="#4ade80" d="M0,320L1440,320L1440,310L0,310Z" />
        <path d="M1340 260 L1380 260 L1360 230 Z" fill="#ef4444" />
        <rect x="1344" y="260" width="32" height="30" fill="#f87171" />
        <rect x="1355" y="270" width="10" height="15" fill="#1e3a8a" />
        <circle cx="1360" cy="210" r="5" fill="#d1d5db">
          <animate attributeName="cy" values="210;200;210" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="1363" cy="200" r="3" fill="#e5e7eb">
          <animate attributeName="cy" values="200;190;200" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>

      <footer className="relative z-10 max-w-5xl mx-auto text-center text-sm text-gray-500">
        &copy; 2025 Jane Doe. All rights reserved.
      </footer>
    </div>
  );
}
