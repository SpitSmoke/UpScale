'use client'

import styled from 'styled-components'
import { testimonials } from '@/data/mock'

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
  padding: 36px 28px;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  backdrop-filter: blur(12px);
  transition: all 0.4s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    transform: translateY(-4px);
    box-shadow: 0 8px 40px ${({ theme }) => theme.colors.glow};
  }
`

const QuoteIcon = styled.div`
  font-size: 2.5rem;
  line-height: 1;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
  font-family: Georgia, serif;
`

const QuoteText = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.7;
  margin-bottom: 24px;
  font-style: italic;
`

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`

const Avatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
`

const AuthorInfo = styled.div``

const AuthorName = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textHeading};
`

const AuthorRole = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMuted};
`

export default function Testimonials() {
  return (
    <Section id="depoimentos">
      <Container>
        <SectionLabel>Depoimentos</SectionLabel>
        <SectionTitle>O que dizem nossos clientes</SectionTitle>
        <SectionDesc>
          Histórias reais de negócios que transformaram sua presença digital com a UpScaler.
        </SectionDesc>
        <Grid>
          {testimonials.map((t) => (
            <Card key={t.name}>
              <QuoteIcon>{'\u201C'}</QuoteIcon>
              <QuoteText>{t.text}</QuoteText>
              <Author>
                <Avatar>{t.initials}</Avatar>
                <AuthorInfo>
                  <AuthorName>{t.name}</AuthorName>
                  <AuthorRole>{t.role}</AuthorRole>
                </AuthorInfo>
              </Author>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
