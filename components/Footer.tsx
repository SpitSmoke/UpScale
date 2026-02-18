'use client'

import styled from 'styled-components'

const FooterWrap = styled.footer`
  padding: 60px 24px 32px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 48px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Brand = styled.div`
  max-width: 300px;
`

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 800;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
  margin-bottom: 12px;
`

const BrandDesc = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
`

const LinksGroup = styled.div`
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
`

const LinkCol = styled.div``

const ColTitle = styled.h4`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textHeading};
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const ColLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const ColLink = styled.a`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textMuted};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`

const Socials = styled.div`
  display: flex;
  gap: 12px;
`

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.colors.textMuted};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    color: ${({ theme }) => theme.colors.primaryLight};
    background: ${({ theme }) => theme.colors.bgCard};
  }

  svg {
    width: 18px;
    height: 18px;
  }
`

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding-top: 32px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Copyright = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMuted};
`

export default function Footer() {
  return (
    <FooterWrap>
      <Container>
        <Top>
          <Brand>
            <Logo href="#inicio">UpScaler</Logo>
            <BrandDesc>
              Escalamos a presença digital do seu negócio com estratégia, design e performance.
            </BrandDesc>
          </Brand>
          <LinksGroup>
            <LinkCol>
              <ColTitle>Links</ColTitle>
              <ColLinks>
                <li><ColLink href="#inicio">Início</ColLink></li>
                <li><ColLink href="#quem-somos">Quem Somos</ColLink></li>
                <li><ColLink href="#projetos">Projetos</ColLink></li>
                <li><ColLink href="#planos">Planos</ColLink></li>
              </ColLinks>
            </LinkCol>
            <LinkCol>
              <ColTitle>Mais</ColTitle>
              <ColLinks>
                <li><ColLink href="#resultados">Resultados</ColLink></li>
                <li><ColLink href="#depoimentos">Depoimentos</ColLink></li>
                <li><ColLink href="#contato">Contato</ColLink></li>
              </ColLinks>
            </LinkCol>
            <LinkCol>
              <ColTitle>Social</ColTitle>
              <Socials>
                <SocialLink href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </SocialLink>
                <SocialLink href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </SocialLink>
                <SocialLink href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </SocialLink>
              </Socials>
            </LinkCol>
          </LinksGroup>
        </Top>
        <Bottom>
          <Copyright>&copy; {new Date().getFullYear()} UpScaler. Todos os direitos reservados.</Copyright>
        </Bottom>
      </Container>
    </FooterWrap>
  )
}
