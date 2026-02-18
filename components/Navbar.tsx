'use client'

import { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { navLinks } from '@/data/mock'

const Nav = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0 24px;
  transition: all 0.3s ease;
  ${({ $scrolled, theme }) =>
    $scrolled
      ? css`
          background: rgba(10, 10, 15, 0.92);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid ${theme.colors.border};
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
        `
      : css`
          background: transparent;
        `}
`

const NavInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
`

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 800;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
`

const NavLinksDesktop = styled.ul`
  display: none;
  align-items: center;
  gap: 32px;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
  }
`

const NavLink = styled.a`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
  transition: color 0.2s ease;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.textHeading};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.gradient};
    transition: width 0.3s ease;
    border-radius: 1px;
  }

  &:hover::after {
    width: 100%;
  }
`

const CTAButton = styled.a`
  display: none;
  padding: 10px 24px;
  background: ${({ theme }) => theme.colors.whatsapp};
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radius.full};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.3);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: inline-flex;
  }
`

const MobileToggle = styled.button`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  padding: 4px;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`

const ToggleLine = styled.span<{ $open: boolean; $index: number }>`
  display: block;
  width: 24px;
  height: 2px;
  background: ${({ theme }) => theme.colors.textHeading};
  border-radius: 2px;
  transition: all 0.3s ease;

  ${({ $open, $index }) =>
    $open && $index === 0 && css`transform: rotate(45deg) translate(5px, 5px);`}
  ${({ $open, $index }) =>
    $open && $index === 1 && css`opacity: 0;`}
  ${({ $open, $index }) =>
    $open && $index === 2 && css`transform: rotate(-45deg) translate(5px, -5px);`}
`

const MobileMenu = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  background: rgba(10, 10, 15, 0.98);
  backdrop-filter: blur(20px);
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  position: absolute;
  top: 72px;
  left: 0;
  right: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`

const MobileLink = styled.a`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
  padding: 8px 0;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.textHeading};
  }
`

const MobileCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  margin-top: 8px;
  background: ${({ theme }) => theme.colors.whatsapp};
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radius.full};
`

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => setMobileOpen(false)

  return (
    <Nav $scrolled={scrolled}>
      <NavInner>
        <Logo href="#inicio">UpScaler</Logo>
        <NavLinksDesktop>
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </NavLinksDesktop>
        <CTAButton href="https://wa.me/5541933003310" target="_blank" rel="noopener noreferrer">
          Falar no WhatsApp
        </CTAButton>
        <MobileToggle onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {[0, 1, 2].map((i) => (
            <ToggleLine key={i} $open={mobileOpen} $index={i} />
          ))}
        </MobileToggle>
      </NavInner>
      <MobileMenu $open={mobileOpen}>
        {navLinks.map((link) => (
          <MobileLink key={link.href} href={link.href} onClick={handleClick}>
            {link.label}
          </MobileLink>
        ))}
        <MobileCTA href="https://wa.me/5541933003310" target="_blank" rel="noopener noreferrer">
          Falar no WhatsApp
        </MobileCTA>
      </MobileMenu>
    </Nav>
  )
}
