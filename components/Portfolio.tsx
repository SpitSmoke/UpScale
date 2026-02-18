'use client'

import styled from 'styled-components'
import { projects } from '@/data/mock'

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

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Card = styled.div`
  position: relative;
  padding: 32px 28px;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  backdrop-filter: blur(12px);
  transition: all 0.4s ease;
  overflow: hidden;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    transform: translateY(-4px);
    box-shadow: 0 8px 40px ${({ theme }) => theme.colors.glow};
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.colors.gradient};
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 16px;
`

const CardName = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textHeading};
`

const Segment = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accent};
  background: rgba(139, 92, 246, 0.1);
  padding: 4px 12px;
  border-radius: ${({ theme }) => theme.radius.full};
  white-space: nowrap;
`

const Objective = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 20px;
  line-height: 1.5;
`

const Result = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const Tag = styled.span`
  font-size: 0.7rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
  background: rgba(255, 255, 255, 0.05);
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.colors.border};
`

export default function Portfolio() {
  return (
    <Section id="projetos">
      <Container>
        <SectionLabel>Projetos</SectionLabel>
        <SectionTitle>Resultados reais para negócios reais</SectionTitle>
        <SectionDesc>
          Confira alguns dos projetos que entregaram crescimento mensurável para nossos clientes.
        </SectionDesc>
        <Grid>
          {projects.map((project) => (
            <Card key={project.name}>
              <CardHeader>
                <CardName>{project.name}</CardName>
                <Segment>{project.segment}</Segment>
              </CardHeader>
              <Objective>{project.objective}</Objective>
              <Result>{project.result}</Result>
              <Tags>
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </Tags>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
