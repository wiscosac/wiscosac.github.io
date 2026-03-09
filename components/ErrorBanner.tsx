// components/ErrorBanner.tsx
'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'

function BannerContent() {
  const searchParams = useSearchParams()
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    if (searchParams.get('error') === '404') {
      setShowBanner(true)
      // Clean up the URL
      window.history.replaceState({}, '', '/')
      setTimeout(() => {setShowBanner(false)},2000);
      
    }
  }, [searchParams])

  if (!showBanner) return null

  return (
    <div className="bg-red-500 text-white p-4 text-center">
      Page not found
    </div>
  )
}

export default function ErrorBanner() {
  return (
    <Suspense fallback={null}>
      <BannerContent />
    </Suspense>
  )
}
