import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { AnimatePresence, motion, useReducedMotion } from '@/lib/motion-react'
import { cn } from '@/lib/utils'

export type LivingPortraitVariant = 'subtle' | 'expressive'

interface LivingPortraitProps {
  images: string[]
  ariaLabel: string
  variant?: LivingPortraitVariant
  priority?: boolean
  className?: string
  imageClassName?: string
}

const SUBTLE_INTERVAL = [5000, 7000] as const
const EXPRESSIVE_INTERVAL = [6000, 8000] as const
const CROSSFADE_DURATION = 1.35

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min)
}

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.decoding = 'async'
    image.onload = () => resolve()
    image.onerror = () => reject(new Error(`Failed to preload: ${src}`))
    image.src = src
  })
}

interface PortraitFrameProps {
  src: string
  variant: LivingPortraitVariant
  frameIndex: number
  priority: boolean
  isFirstImage: boolean
  onError: () => void
  imageClassName?: string
}

function PortraitFrame({
  src,
  variant,
  frameIndex,
  priority,
  isFirstImage,
  onError,
  imageClassName,
}: PortraitFrameProps) {
  const breatheDuration = 5.8 + frameIndex * 0.45
  const breatheScale = variant === 'subtle' ? 1.022 : 1.028
  const panX = variant === 'expressive' ? (frameIndex % 2 === 0 ? 5 : -4) : 0
  const panY = variant === 'expressive' ? (frameIndex % 3 === 0 ? -3 : 4) : 0

  return (
    <motion.img
      src={src}
      alt=""
      aria-hidden="true"
      draggable={false}
      decoding="async"
      loading={priority && isFirstImage ? 'eager' : 'lazy'}
      fetchPriority={priority && isFirstImage ? 'high' : 'auto'}
      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 560px"
      onError={onError}
      className={cn(
        'absolute inset-0 size-full object-cover object-[center_18%]',
        imageClassName,
      )}
      initial={{ opacity: 0, scale: 1, x: 0, y: 0 }}
      animate={{
        opacity: 1,
        scale: [1, breatheScale, 1],
        x: variant === 'expressive' ? [0, panX, 0] : 0,
        y: variant === 'expressive' ? [0, panY, 0] : 0,
      }}
      exit={{
        opacity: 0,
        scale: 1,
        x: 0,
        y: 0,
        transition: { duration: CROSSFADE_DURATION, ease: [0.45, 0, 0.55, 1] },
      }}
      transition={{
        opacity: { duration: CROSSFADE_DURATION, ease: [0.45, 0, 0.55, 1] },
        scale: {
          duration: breatheDuration,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        },
        x: {
          duration: breatheDuration * 1.1,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        },
        y: {
          duration: breatheDuration * 0.95,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        },
      }}
    />
  )
}

export function LivingPortrait({
  images,
  ariaLabel,
  variant = 'subtle',
  priority = false,
  className,
  imageClassName,
}: LivingPortraitProps) {
  const prefersReducedMotion = useReducedMotion()
  const containerRef = useRef<HTMLElement>(null)
  const indexRef = useRef(0)

  const [failedSources, setFailedSources] = useState<Set<string>>(() => new Set())
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const [isDocumentVisible, setIsDocumentVisible] = useState(
    () => typeof document === 'undefined' || document.visibilityState === 'visible',
  )

  const validImages = useMemo(
    () => images.filter((src) => !failedSources.has(src)),
    [images, failedSources],
  )

  indexRef.current =
    validImages.length > 0 ? currentIndex % validImages.length : 0

  const currentSrc = validImages[indexRef.current]

  const handleImageError = useCallback((src: string) => {
    setFailedSources((previous) => {
      const next = new Set(previous)
      next.add(src)
      return next
    })
  }, [])

  useEffect(() => {
    if (!priority || !validImages[0]) return

    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = validImages[0]
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [priority, validImages])

  useEffect(() => {
    function onVisibilityChange() {
      setIsDocumentVisible(document.visibilityState === 'visible')
    }

    document.addEventListener('visibilitychange', onVisibilityChange)
    return () => document.removeEventListener('visibilitychange', onVisibilityChange)
  }, [])

  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.15, rootMargin: '40px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (currentIndex >= validImages.length && validImages.length > 0) {
      setCurrentIndex(0)
    }
  }, [currentIndex, validImages.length])

  useEffect(() => {
    const shouldCycle =
      !prefersReducedMotion &&
      isDocumentVisible &&
      isInView &&
      validImages.length > 1

    if (!shouldCycle) return

    let timeoutId = 0
    let cancelled = false

    async function scheduleNext() {
      const [min, max] =
        variant === 'subtle' ? SUBTLE_INTERVAL : EXPRESSIVE_INTERVAL

      timeoutId = window.setTimeout(async () => {
        if (cancelled || validImages.length <= 1) return

        const nextIndex = (indexRef.current + 1) % validImages.length
        const nextSrc = validImages[nextIndex]

        try {
          await preloadImage(nextSrc)
        } catch {
          handleImageError(nextSrc)
          if (!cancelled) scheduleNext()
          return
        }

        if (cancelled) return

        setCurrentIndex(nextIndex)
        scheduleNext()
      }, randomBetween(min, max))
    }

    scheduleNext()

    return () => {
      cancelled = true
      window.clearTimeout(timeoutId)
    }
  }, [
    handleImageError,
    isDocumentVisible,
    isInView,
    prefersReducedMotion,
    validImages,
    variant,
  ])

  if (validImages.length === 0) {
    return (
      <figure
        className={cn(
          'relative flex size-full items-center justify-center overflow-hidden bg-gradient-to-br from-primary/15 via-primary-light/20 to-accent/15',
          className,
        )}
        role="img"
        aria-label={ariaLabel}
      >
        <span className="px-6 text-center text-sm text-muted-foreground">
          Adicione fotos em{' '}
          <code className="text-xs">src/assets/psicologa/</code>
        </span>
      </figure>
    )
  }

  if (prefersReducedMotion) {
    return (
      <figure
        ref={containerRef}
        className={cn('relative size-full overflow-hidden', className)}
        role="img"
        aria-label={ariaLabel}
      >
        <img
          src={validImages[0]}
          alt=""
          aria-hidden="true"
          decoding="async"
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 560px"
          onError={() => handleImageError(validImages[0])}
          className={cn(
            'absolute inset-0 size-full object-cover object-[center_18%]',
            imageClassName,
          )}
        />
      </figure>
    )
  }

  return (
    <figure
      ref={containerRef}
      className={cn('relative size-full overflow-hidden', className)}
      role="img"
      aria-label={ariaLabel}
    >
      <AnimatePresence mode="sync" initial={false}>
        {currentSrc && (
          <PortraitFrame
            key={currentSrc}
            src={currentSrc}
            variant={variant}
            frameIndex={indexRef.current}
            priority={priority}
            isFirstImage={indexRef.current === 0}
            onError={() => handleImageError(currentSrc)}
            imageClassName={imageClassName}
          />
        )}
      </AnimatePresence>
    </figure>
  )
}
