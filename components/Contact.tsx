'use client'

import { useState } from 'react'
import styled from 'styled-components'

const Section = styled.section`
  padding: 100px 24px;
  position: relative;
`

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

const CTABox = styled.div`
  text-align: center;
  padding: 60px 32px;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.xl};
  backdrop-filter: blur(12px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.gradient};
  }
`

const GlowBg = styled.div`
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.06), transparent 70%);
  pointer-events: none;
`

const Headline = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.textHeading};
  margin-bottom: 16px;
  letter-spacing: -0.5px;
  position: relative;
`

const Subtext = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 32px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
  position: relative;
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 48px;
  flex-wrap: wrap;
  position: relative;
`

const WhatsAppBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  background: ${({ theme }) => theme.colors.whatsapp};
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radius.full};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(37, 211, 102, 0.3);
  }
`

const DiagBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  background: transparent;
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 1rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    background: ${({ theme }) => theme.colors.bgCard};
    transform: translateY(-2px);
  }
`

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  max-width: 560px;
  margin: 0 auto;
  text-align: left;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr;
  }
`

const FormGroup = styled.div<{ $full?: boolean }>`
  grid-column: ${({ $full }) => ($full ? '1 / -1' : 'auto')};
`

const Label = styled.label`
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 0.9rem;
  transition: border-color 0.3s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
    opacity: 0.5;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 0.9rem;
  min-height: 100px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
    opacity: 0.5;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`

const SubmitBtn = styled.button`
  width: 100%;
  padding: 14px 24px;
  background: ${({ theme }) => theme.colors.gradient};
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radius.full};
  transition: all 0.3s ease;
  grid-column: 1 / -1;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(59, 130, 246, 0.3);
  }
`

const SuccessMsg = styled.p`
  color: ${({ theme }) => theme.colors.success};
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
  grid-column: 1 / -1;
`

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Section id="contato">
      <Container>
        <CTABox>
          <GlowBg />
          <Headline>Quer escalar seu negócio ainda este mês?</Headline>
          <Subtext>
            Fale com nossa equipe e descubra como podemos transformar a presença digital do seu negócio.
          </Subtext>
          <Buttons>
            <WhatsAppBtn href="https://wa.me/5541933003310?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20como%20posso%20escalar%20o%20meu%20negócio%20e%20conhecer%20melhor%20os%20planos%20disponíveis." target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.462-1.496A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.278 0-4.402-.742-6.116-2.004l-.438-.331-2.651.889.889-2.646-.362-.454A9.723 9.723 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
              </svg>
              Falar no WhatsApp
            </WhatsAppBtn>
            <DiagBtn href="#contato">Agendar diagnóstico</DiagBtn>
          </Buttons>

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Nome</Label>
              <Input id="name" type="text" placeholder="Seu nome" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="phone">Telefone / WhatsApp</Label>
              <Input id="phone" type="tel" placeholder="(00) 00000-0000" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="business">Tipo de negócio</Label>
              <Input id="business" type="text" placeholder="Ex: Barbearia, Restaurante..." required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="plan">Plano de interesse</Label>
              <Input id="plan" type="text" placeholder="Ex: Crescimento" />
            </FormGroup>
            <FormGroup $full>
              <Label htmlFor="message">Mensagem</Label>
              <TextArea id="message" placeholder="Conte um pouco sobre o que você precisa..." />
            </FormGroup>
            {submitted ? (
              <SuccessMsg>Mensagem enviada com sucesso! Entraremos em contato em breve.</SuccessMsg>
            ) : (
              <SubmitBtn type="submit">Enviar mensagem</SubmitBtn>
            )}
          </Form>
        </CTABox>
      </Container>
    </Section>
  )
}
