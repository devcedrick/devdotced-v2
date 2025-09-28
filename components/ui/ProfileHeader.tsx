import Image from 'next/image'

export default function ProfileHeader() {
  return (
    <div className="w-full flex flex-col items-center gap-2 p-6 bg-transparent rounded-xl">
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
          <p className="text-secondary text-xs">CS Student · Web Dev · IoT Explorer</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-1 mt-1 text-secondary">
        <div className="w-2 aspect-square rounded-full bg-green-500" />
        <span className='text-[0.65rem] text-center'>Available for opportunities</span>
      </div>     
    </div>
  )
}
