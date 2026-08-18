import { cn } from '@/lib/utils'

interface MeshBackgroundProps {
  className?: string
  variant?: 'hero' | 'cta' | 'subtle'
}

export function MeshBackground({
  className,
  variant = 'subtle',
}: MeshBackgroundProps) {
  return (
    <div
      className={cn('mesh-background pointer-events-none absolute inset-0', className)}
      aria-hidden="true"
    >
      <div className={cn('mesh-blob mesh-blob-1', variant === 'hero' && 'mesh-blob-hero')} />
      <div className={cn('mesh-blob mesh-blob-2', variant === 'cta' && 'mesh-blob-cta')} />
      <div className="mesh-blob mesh-blob-3" />
    </div>
  )
}
