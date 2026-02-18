'use client'

import { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { chartData } from '@/data/mock'

type TabKey = 'visibility' | 'clicks' | 'conversions'

const grow = keyframes`
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
`

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

const Tabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-bottom: 48px;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.full};
  padding: 4px;
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
`

const TabBtn = styled.button<{ $active: boolean }>`
  flex: 1;
  padding: 10px 16px;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radius.full};
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.colors.textMuted};
  background: transparent;
  white-space: nowrap;

  ${({ $active, theme }) =>
    $active &&
    css`
      background: ${theme.colors.gradient};
      color: #fff;
      box-shadow: 0 4px 15px rgba(59, 130, 246, 0.25);
    `}
`

const KPIRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
  margin-bottom: 48px;
  flex-wrap: wrap;
`

const KPIItem = styled.div`
  text-align: center;
`

const KPIValue = styled.div`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
`

const KPILabel = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-top: 4px;
`

const ChartWrap = styled.div`
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 32px 24px 24px;
  backdrop-filter: blur(12px);
  max-width: 800px;
  margin: 0 auto;
`

const ChartTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textHeading};
  margin-bottom: 24px;
  text-align: center;
`

const Legend = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-bottom: 20px;
`

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMuted};
`

const LegendDot = styled.span<{ $color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 3px;
  background: ${({ $color }) => $color};
`

const BarChart = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  height: 220px;
  gap: 12px;
  padding-top: 8px;
`

const BarGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex: 1;
`

const Bars = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 4px;
  height: 180px;
  width: 100%;
  justify-content: center;
`

const Bar = styled.div<{ $height: number; $color: string }>`
  width: 20px;
  height: ${({ $height }) => $height}%;
  background: ${({ $color }) => $color};
  border-radius: 4px 4px 0 0;
  transform-origin: bottom;
  animation: ${grow} 0.8s ease forwards;
  min-height: 4px;
  max-width: 28px;

  @media (min-width: 640px) {
    width: 28px;
  }
`

const BarLabel = styled.span`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: 500;
`

const tabs: { key: TabKey; label: string }[] = [
  { key: 'visibility', label: 'Visibilidade' },
  { key: 'clicks', label: 'Cliques no WhatsApp' },
  { key: 'conversions', label: 'Leads / Conversões' },
]

const allKpis = [
  { value: '+120%', label: 'Visibilidade' },
  { value: '+64%', label: 'Cliques' },
  { value: '+38%', label: 'Conversões' },
]

export default function ResultsCharts() {
  const [activeTab, setActiveTab] = useState<TabKey>('visibility')

  const data = chartData[activeTab]
  const maxVal = Math.max(...data.before, ...data.after)

  return (
    <Section id="resultados">
      <Container>
        <SectionLabel>Resultados</SectionLabel>
        <SectionTitle>Números que falam por si</SectionTitle>
        <SectionDesc>
          Acompanhe a evolução de métricas reais em projetos gerenciados pela UpScaler.
        </SectionDesc>

        <KPIRow>
          {allKpis.map((kpi) => (
            <KPIItem key={kpi.label}>
              <KPIValue>{kpi.value}</KPIValue>
              <KPILabel>{kpi.label}</KPILabel>
            </KPIItem>
          ))}
        </KPIRow>

        <Tabs>
          {tabs.map((t) => (
            <TabBtn key={t.key} $active={activeTab === t.key} onClick={() => setActiveTab(t.key)}>
              {t.label}
            </TabBtn>
          ))}
        </Tabs>

        <ChartWrap key={activeTab}>
          <ChartTitle>Antes vs Depois — {data.label}</ChartTitle>
          <Legend>
            <LegendItem>
              <LegendDot $color="rgba(255,255,255,0.15)" />
              Antes
            </LegendItem>
            <LegendItem>
              <LegendDot $color="#3b82f6" />
              Depois (com UpScaler)
            </LegendItem>
          </Legend>
          <BarChart>
            {data.months.map((month, i) => (
              <BarGroup key={month}>
                <Bars>
                  <Bar $height={(data.before[i] / maxVal) * 100} $color="rgba(255,255,255,0.1)" />
                  <Bar $height={(data.after[i] / maxVal) * 100} $color="#3b82f6" />
                </Bars>
                <BarLabel>{month}</BarLabel>
              </BarGroup>
            ))}
          </BarChart>
        </ChartWrap>
      </Container>
    </Section>
  )
}
