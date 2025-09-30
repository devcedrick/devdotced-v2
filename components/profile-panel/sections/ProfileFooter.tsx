"use client"
import { Github, Linkedin,  Sun, Moon, SquareCode } from 'lucide-react'

export default function ProfileFooter() {
  const theme = 'dark';

  return (
  <footer className="mt-auto flex flex-col items-start gap-6 min-w-0 h-max">
      <div className="flex flex-col items-start gap-4 border border-border px-5 py-3 rounded-lg w-full">
        <div className='flex items-center gap-1.5'>
          <SquareCode className='w-4.5 aspect-square' color='var(--accent)'/>
          <span className="text-sm text-primary mr-2">Main languages</span>
        </div>
        <div className="flex gap-1.5 flex-wrap min-w-0">
          <span className="tags">TypeScript</span>
          <span className="tags">Next.js</span>
          <span className="tags">Node.js</span> 
        </div>
      </div>

      <div className='flex  justify-between w-full'>
        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href="https://github.com/devcedrick"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-[var(--border)] text-[var(--text)] hover:bg-[var(--accent)] hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className='w-4 aspect-auto' />
          </a>

          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-[var(--border)] text-[var(--text)] hover:bg-[var(--accent)] hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className='w-4 aspect-auto' />
          </a>  
        </div>
        <button
          type="button"
          className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-[var(--border)] text-[var(--text)] hover:bg-[var(--accent)] hover:text-white transition-colors"
          aria-label="Toggle dark mode"
          title="Toggle dark mode"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </footer>
  )
}
