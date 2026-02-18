'use client'

import { useState } from 'react'
import styled, { css } from 'styled-components'
import { subscriptionPlans, fullPricePlans } from '@/data/mock'

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
  margin: 0 auto 40px;
  line-height: 1.7;
`

const Toggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-bottom: 48px;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.full};
  padding: 4px;
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
`

const ToggleBtn = styled.button<{ $active: boolean }>`
  flex: 1;
  padding: 12px 20px;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radius.full};
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.colors.textMuted};
  background: transparent;

  ${({ $active, theme }) =>
    $active &&
    css`
      background: ${theme.colors.gradient};
      color: #fff;
      box-shadow: 0 4px 15px rgba(59, 130, 246, 0.25);
    `}
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  align-items: stretch;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Card = styled.div<{ $highlight?: boolean }>`
  position: relative;
  padding: 36px 28px;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  backdrop-filter: blur(12px);
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;

  ${({ $highlight, theme }) =>
    $highlight &&
    css`
      border-color: ${theme.colors.borderHover};
      background: rgba(139, 92, 246, 0.05);
      box-shadow: 0 0 60px ${theme.colors.glowAccent};
      transform: scale(1.02);

      @media (min-width: ${theme.breakpoints.md}) {
        transform: scale(1.04);
      }
    `}

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    transform: translateY(-4px);
    box-shadow: 0 8px 40px ${({ theme }) => theme.colors.glowAccent};
  }
`

const BadgeWrap = styled.div`
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
`

const PlanBadge = styled.span`
  display: inline-block;
  padding: 6px 20px;
  font-size: 0.75rem;
  font-weight: 700;
  color: #fff;
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: ${({ theme }) => theme.radius.full};
  white-space: nowrap;
`

const PlanName = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textHeading};
  margin-bottom: 8px;
  margin-top: 8px;
`

const PlanPrice = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: 24px;
`

const Price = styled.span`
  font-size: 2.2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.textHeading};
`

const Period = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textMuted};
`

const Features = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
  flex-grow: 1;
`

const Feature = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.5;
`

const CheckIcon = styled.svg`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  margin-top: 2px;
`

const PlanBtn = styled.a<{ $highlight?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 24px;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radius.full};
  transition: all 0.3s ease;
  text-align: center;

  ${({ $highlight, theme }) =>
    $highlight
      ? css`
          background: ${theme.colors.gradient};
          color: #fff;
          &:hover {
            box-shadow: 0 8px 30px rgba(59, 130, 246, 0.3);
            transform: translateY(-2px);
          }
        `
      : css`
          background: transparent;
          color: ${theme.colors.textHeading};
          border: 1px solid ${theme.colors.border};
          &:hover {
            border-color: ${theme.colors.borderHover};
            background: ${theme.colors.bgCard};
          }
        `}
`

const ObsBox = styled.div<{ $variant?: 'warning' }>`
  margin-top: 48px;
  padding: 28px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme, $variant }) =>
    $variant === 'warning' ? 'rgba(245, 158, 11, 0.05)' : theme.colors.bgCard};
  border: 1px solid ${({ theme, $variant }) =>
    $variant === 'warning' ? 'rgba(245, 158, 11, 0.2)' : theme.colors.border};
`

const ObsTitle = styled.h4<{ $variant?: 'warning' }>`
  font-size: 0.95rem;
  font-weight: 700;
  color: ${({ theme, $variant }) =>
    $variant === 'warning' ? '#f59e0b' : theme.colors.textHeading};
  margin-bottom: 12px;
`

const ObsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const ObsItem = styled.li`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.5;
  padding-left: 16px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
  }
`

export default function Pricing() {
  const [tab, setTab] = useState<'subscription' | 'full'>('subscription')

  const plans = tab === 'subscription' ? subscriptionPlans : fullPricePlans

  return (
    <Section id="planos">
      <Container>
        <SectionLabel>Planos</SectionLabel>
        <SectionTitle>Escolha o plano ideal para o seu negócio</SectionTitle>
        <SectionDesc>
          Opções flexíveis para cada fase do seu crescimento. Comece pequeno e escale conforme os resultados chegam.
        </SectionDesc>

        <Toggle>
          <ToggleBtn $active={tab === 'subscription'} onClick={() => setTab('subscription')}>
            Assinatura Mensal
          </ToggleBtn>
          <ToggleBtn $active={tab === 'full'} onClick={() => setTab('full')}>
            Pagamento Único
          </ToggleBtn>
        </Toggle>

        <Grid>
          {plans.map((plan) => (
            <Card key={plan.name} $highlight={plan.highlight}>
              {'badge' in plan && plan.badge && (
                <BadgeWrap>
                  <PlanBadge>{plan.badge}</PlanBadge>
                </BadgeWrap>
              )}
              <PlanName>{plan.name}</PlanName>
              <PlanPrice>
                <Price>{plan.price}</Price>
                {plan.period && <Period>{plan.period}</Period>}
              </PlanPrice>
              <Features>
                {plan.features.map((f) => (
                  <Feature key={f}>
                    <CheckIcon viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </CheckIcon>
                    {f}
                  </Feature>
                ))}
              </Features>
              <PlanBtn href="#contato" $highlight={plan.highlight}>
                Solicitar diagnóstico
              </PlanBtn>
            </Card>
          ))}
        </Grid>

        {tab === 'subscription' ? (
          <ObsBox>
            <ObsTitle>O que está incluso na assinatura:</ObsTitle>
            <ObsList>
              <ObsItem>Inclui acompanhamento mensal</ObsItem>
              <ObsItem>Atualizações e melhorias contínuas</ObsItem>
              <ObsItem>Suporte ativo</ObsItem>
              <ObsItem>Gestão opcional de domínio/hospedagem</ObsItem>
            </ObsList>
          </ObsBox>
        ) : (
          <ObsBox $variant="warning">
            <ObsTitle $variant="warning">OBS Importante:</ObsTitle>
            <ObsList>
              <ObsItem>Pagamento único NÃO inclui acompanhamento mensal</ObsItem>
              <ObsItem>NÃO inclui atualizações contínuas</ObsItem>
              <ObsItem>Após entrega, manutenção é responsabilidade da empresa cliente</ObsItem>
              <ObsItem>Domínio e hospedagem ficam sob responsabilidade do cliente</ObsItem>
              <ObsItem>Alterações futuras são cobradas separadamente</ObsItem>
            </ObsList>
          </ObsBox>
        )}
      </Container>
    </Section>
  )
}
