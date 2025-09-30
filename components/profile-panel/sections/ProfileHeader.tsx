import Image from 'next/image'
import Link from 'next/link'
import { Download } from 'lucide-react'

export default function ProfileHeader() {
  return (
    <div className="w-full flex flex-col items-center gap-2 bg-transparent rounded-xl">
      <div className='flex flex-col items-center gap-4'>
        <div className="relative w-30 aspect-square border-4 border-border rounded-full">
          <Image
            src="/images/jimeno-id.png"
            alt="Profile"
            fill
            className="rounded-full object-cover"
          />
        </div>

        <div className="text-center flex flex-col gap-1">
          <h1 className="text-lg font-bold text-[var(--text)]">Ken Cedrick A. Jimeno</h1>
          <p className="text-secondary text-xs">CS Student · Full Stack Developer</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-1 text-secondary">
        <div className="w-2 aspect-square rounded-full bg-green-500" />
        <span className='text-[0.7rem] text-center'>Available for opportunities</span>
      </div>     

      <div className="flex items-center gap-3 w-full mt-3">
        <Link
          href="/files/DevDotCed-Resume.pdf"
          className="inline-flex items-center justify-center gap-2 px-3 py-2 w-full rounded-full bg-border text-primary hover:bg-accent hover:text-background transition-colors"
          download
          aria-label="Download CV"
        >
          <Download className="w-4 h-4" />
          <span className="text-sm">Download CV</span>
        </Link>
      </div>
    </div>
  )
}
