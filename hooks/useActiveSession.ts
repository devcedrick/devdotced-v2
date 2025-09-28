'use client'
import { useEffect, useState } from 'react'

export default function useActiveSection(sectionSelector = '[data-section]') {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const sections = Array.from(document.querySelectorAll<HTMLElement>(sectionSelector))
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) {
          setActiveId(visible.target.id || visible.target.getAttribute('data-section'))
        } else {
          let best: { id: string; distance: number } | null = null
          const viewportCenter = window.innerHeight / 2

          sections.forEach((s) => {
            const rect = s.getBoundingClientRect()
            const distance = Math.abs(rect.top + rect.height / 2 - viewportCenter)
            const id = s.id || s.getAttribute('data-section')
            if (!id) return;
            if (best === null || distance < best.distance) best = { id, distance }
          })

          if (best !== null) setActiveId((best as { id: string; distance: number }).id)
        }
      },
      {
        root: null,
        // rootMargin shifts the effective viewport; use negative top/bottom to center
        rootMargin: '-40% 0px -40% 0px',
        // track many intersection ratios for stability
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [sectionSelector])

  return activeId
}