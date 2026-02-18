import 'styled-components'

export const theme = {
  colors: {
    bg: '#0a0a0f',
    bgLight: '#12121a',
    bgCard: 'rgba(255, 255, 255, 0.04)',
    text: '#e4e4e7',
    textMuted: '#9ca3af',
    textHeading: '#ffffff',
    primary: '#3b82f6',
    primaryLight: '#60a5fa',
    accent: '#8b5cf6',
    accentLight: '#a78bfa',
    gradient: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    gradientHover: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
    border: 'rgba(255, 255, 255, 0.08)',
    borderHover: 'rgba(139, 92, 246, 0.4)',
    glow: 'rgba(59, 130, 246, 0.15)',
    glowAccent: 'rgba(139, 92, 246, 0.15)',
    success: '#10b981',
    whatsapp: '#25d366',
  },
  fonts: {
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  radius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },
} as const

export type ThemeType = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
