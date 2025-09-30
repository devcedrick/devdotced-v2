'use client'
import { useEffect, useState, useCallback } from 'react'

// Debounce utility for performance optimization
const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export default function useActiveSection(sectionSelector = '[data-section]') {
  const [activeId, setActiveId] = useState<string | null>(null)

  // Debounced setActiveId for smoother updates
  const debouncedSetActiveId = useCallback(
    debounce((id: string | null) => setActiveId(id), 50),
    []
  )

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
          debouncedSetActiveId(visible.target.id || visible.target.getAttribute('data-section'))
        } else {
          // Improved fallback: find the section closest to the top of the viewport
          let best: { id: string; distance: number } | null = null
          const viewportTop = 100 // Small offset from top for better UX

          sections.forEach((s) => {
            const rect = s.getBoundingClientRect()
            // Calculate distance from section top to viewport top
            const distance = Math.abs(rect.top - viewportTop)
            const id = s.id || s.getAttribute('data-section')
            if (!id) return;
            
            // Only consider sections that are at least partially visible or close to viewport
            if (rect.bottom > 0 && rect.top < window.innerHeight + 200) {
              if (best === null || distance < best.distance) {
                best = { id, distance }
              }
            }
          })

          if (best !== null) {
            debouncedSetActiveId((best as { id: string; distance: number }).id)
          }
        }
      },
      {
        root: null,
        // Tighter margins for better section detection with smaller gaps
        rootMargin: '-20% 0px -20% 0px',
        // More granular thresholds for smoother transitions
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 0.9, 1],
      }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [sectionSelector, debouncedSetActiveId])

  return activeId
}