import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'

const meta = {
  title: 'About Me',
  description: 'Just figure me out on your own :)',
  url: `${WEBSITE_HOST_URL}/about`,
}

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
  },
  twitter: {
    title: meta.title,
    description: meta.description,
  },
  alternates: {
    canonical: meta.url,
  },
}

export default function About() {
  return (
    <div className="space-y-7">
      <h1>About</h1>
      Passionate software engineer with a track record of crafting impactful
      products. I thrive on collaborative projects and enjoy working with
      talented individuals. Let's connect and explore opportunities to create
      something remarkable together.
      <h2>Experience</h2>
      Figure out on your own :) hint: Linkedin
      <h2>Education</h2>
      wont bore you with this
      <h2>Skills</h2>
      Everything you can think of. Can learn anything in a week. :)
      <h2>Projects</h2>
      Check github for that
    </div>
  )
}
