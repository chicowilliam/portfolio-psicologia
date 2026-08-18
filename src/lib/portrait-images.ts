type GlobModule = Record<string, string>

function sortGlobUrls(modules: GlobModule): string[] {
  return Object.keys(modules)
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

const poseANeutro = import.meta.glob('../assets/psicologa/pose-a/neutro/*.{webp,jpg,jpeg,png}', {
  eager: true,
  import: 'default',
}) as GlobModule

const poseADirect = import.meta.glob('../assets/psicologa/pose-a/*.{webp,jpg,jpeg,png}', {
  eager: true,
  import: 'default',
}) as GlobModule

const poseBCena = import.meta.glob('../assets/psicologa/pose-b/cena/*.{webp,jpg,jpeg,png}', {
  eager: true,
  import: 'default',
}) as GlobModule

const poseBDirect = import.meta.glob('../assets/psicologa/pose-b/*.{webp,jpg,jpeg,png}', {
  eager: true,
  import: 'default',
}) as GlobModule

/** Hero — mesma pose, fundo neutro para composição sobre gradiente mesh */
export const POSE_A_PORTRAIT_IMAGES = pickSet(poseANeutro, poseADirect, poseADirect)

/** Sobre — poses variadas, cena completa dentro do card */
export const POSE_B_PORTRAIT_IMAGES = pickSet(poseBCena, poseBDirect, poseBDirect)
