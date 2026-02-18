'use client'

import styled, { keyframes } from 'styled-components'

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`

const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
`

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 24px 80px;
  overflow: hidden;
`

const BgGradient = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 30% 20%, rgba(59, 130, 246, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
  pointer-events: none;
`

const Shape1 = styled.div`
  position: absolute;
  top: 15%;
  left: 10%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.08), transparent 70%);
  filter: blur(60px);
  animation: ${float} 8s ease-in-out infinite;
  pointer-events: none;
`

const Shape2 = styled.div`
  position: absolute;
  bottom: 20%;
  right: 10%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.06), transparent 70%);
  filter: blur(80px);
  animation: ${float} 10s ease-in-out infinite reverse;
  pointer-events: none;
`

const GridLines = styled.div`
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: ${pulse} 6s ease-in-out infinite;
  pointer-events: none;
`

const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
`

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  margin-bottom: 32px;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgCard};
  backdrop-filter: blur(10px);
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryLight};
`

const BadgeDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  animation: ${pulse} 2s ease-in-out infinite;
`

const Headline = styled.h1`
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.textHeading};
  line-height: 1.1;
  margin-bottom: 24px;
  letter-spacing: -1px;

  span {
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`

const Subheadline = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 600px;
  margin: 0 auto 40px;
  line-height: 1.7;
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
`

const PrimaryBtn = styled.a`
  padding: 14px 32px;
  background: ${({ theme }) => theme.colors.gradient};
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radius.full};
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(59, 130, 246, 0.3);
  }
`

const SecondaryBtn = styled.a`
  padding: 14px 32px;
  background: transparent;
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 1rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    background: ${({ theme }) => theme.colors.bgCard};
    transform: translateY(-2px);
  }
`

export default function Hero() {
  return (
    <Section id="inicio">
      <BgGradient />
      <Shape1 />
      <Shape2 />
      <GridLines />
      <Content>
        <Badge>
          <BadgeDot />
          Agência de marketing digital
        </Badge>
        <Headline>
          Escalamos a <span>presença digital</span> do seu negócio.
        </Headline>
        <Subheadline>
          Landing pages, anúncios estratégicos e soluções digitais para pequenos negócios crescerem.
        </Subheadline>
        <Buttons>
          <PrimaryBtn href="#planos">Ver Planos</PrimaryBtn>
          <SecondaryBtn href="#projetos">Ver Projetos</SecondaryBtn>
        </Buttons>
      </Content>
    </Section>
  )
}
