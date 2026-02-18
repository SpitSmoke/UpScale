'use client'

import styled from 'styled-components'

const Section = styled.section`
  padding: 100px 24px;
  position: relative;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const SectionLabel = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 16px;
  text-align: center;
`

const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.textHeading};
  text-align: center;
  margin-bottom: 20px;
  letter-spacing: -0.5px;
`

const SectionDesc = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: center;
  max-width: 640px;
  margin: 0 auto 60px;
  line-height: 1.7;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Card = styled.div`
  position: relative;
  padding: 36px 28px;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  backdrop-filter: blur(12px);
  transition: all 0.4s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    transform: translateY(-4px);
    box-shadow: 0 8px 40px ${({ theme }) => theme.colors.glowAccent};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.gradient};
    border-radius: ${({ theme }) => theme.radius.lg} ${({ theme }) => theme.radius.lg} 0 0;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`

const IconWrap = styled.div`
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.md};
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
  margin-bottom: 20px;
`

const IconSvg = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${({ theme }) => theme.colors.primaryLight};
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`

const CardTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textHeading};
  margin-bottom: 10px;
`

const CardDesc = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
`

const cards = [
  {
    title: 'Design que converte',
    desc: 'Páginas pensadas para guiar o visitante até a ação. Cada elemento é estratégico.',
    icon: (
      <IconSvg viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </IconSvg>
    ),
  },
  {
    title: 'Performance e velocidade',
    desc: 'Sites rápidos e otimizados que carregam em milissegundos, em qualquer dispositivo.',
    icon: (
      <IconSvg viewBox="0 0 24 24">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </IconSvg>
    ),
  },
  {
    title: 'Estratégia de crescimento',
    desc: 'Tráfego pago, SEO e funis de venda para escalar seus resultados continuamente.',
    icon: (
      <IconSvg viewBox="0 0 24 24">
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </IconSvg>
    ),
  },
]

export default function About() {
  return (
    <Section id="quem-somos">
      <Container>
        <SectionLabel>Quem Somos</SectionLabel>
        <SectionTitle>Presença digital que gera resultados</SectionTitle>
        <SectionDesc>
          A UpScaler ajuda pequenos negócios a ganharem visibilidade e atraírem mais clientes
          através de presença digital estratégica.
        </SectionDesc>
        <Grid>
          {cards.map((card) => (
            <Card key={card.title}>
              <IconWrap>{card.icon}</IconWrap>
              <CardTitle>{card.title}</CardTitle>
              <CardDesc>{card.desc}</CardDesc>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
