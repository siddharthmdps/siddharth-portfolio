import Hero from '@/components/main/Hero'
import Skills from '@/components/main/Skills'
import EducationAndExperience from '@/components/main/EducationAndExperience'
import Projects from '@/components/main/Projects'
export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20'>
        <Hero />
        <Skills />
        <EducationAndExperience />
        <Projects />
      </div>
    </main>
  )
}
