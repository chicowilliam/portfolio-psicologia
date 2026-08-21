type GlobModule = Record<string, string>

function sortGlobUrls(modules: GlobModule): string[] {
  return Object.keys(modules)
    .filter((key) => !key.includes('-source.'))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((key) => modules[key])
}

function pickSet(
  preferred: GlobModule,
  fallback: GlobModule,
  rootFallback: GlobModule,
): string[] {
  if (Object.keys(preferred).length > 0) return sortGlobUrls(preferred)
  if (Object.keys(fallback).length > 0) return sortGlobUrls(fallback)
  return sortGlobUrls(rootFallback)
}

const poseANeutro = import.meta.glob('../assets/psicologa/pose-a/neutro/*.{webp,jpg,jpeg}', {
  eager: true,
  import: 'default',
}) as GlobModule

const poseADirect = import.meta.glob('../assets/psicologa/pose-a/*.{webp,jpg,jpeg}', {
  eager: true,
  import: 'default',
}) as GlobModule

const poseBCena = import.meta.glob('../assets/psicologa/pose-b/cena/*.{webp,jpg,jpeg}', {
  eager: true,
  import: 'default',
}) as GlobModule

const poseBDirect = import.meta.glob('../assets/psicologa/pose-b/*.{webp,jpg,jpeg}', {
  eager: true,
  import: 'default',
}) as GlobModule

/** Hero: pose editorial em fundo neutro */
export const POSE_A_PORTRAIT_IMAGES = pickSet(poseANeutro, poseADirect, poseADirect)

/** Sobre: segunda pose / cena */
export const POSE_B_PORTRAIT_IMAGES = pickSet(poseBCena, poseBDirect, poseBDirect)
