export const projects = [
  {
    name: 'Barbearia BlackCut',
    segment: 'Barbearia',
    objective: 'Aumentar agendamentos online',
    result: '+48% agendamentos',
    tags: ['Landing Page', 'Google Ads'],
  },
  {
    name: 'Pizzaria Forno Vivo',
    segment: 'Restaurante',
    objective: 'Impulsionar pedidos via delivery',
    result: '+71% pedidos',
    tags: ['Landing Page', 'Instagram Ads'],
  },
  {
    name: 'Auto Center Prime',
    segment: 'Automotivo',
    objective: 'Gerar mais chamadas telefônicas',
    result: '+52% chamadas',
    tags: ['Google Ads', 'SEO'],
  },
  {
    name: 'Clínica Sorriso+',
    segment: 'Saúde',
    objective: 'Captar mais leads qualificados',
    result: '+39% leads',
    tags: ['Landing Page', 'Google Ads'],
  },
  {
    name: 'Academia PowerFit',
    segment: 'Fitness',
    objective: 'Aumentar visitas ao site e matrículas',
    result: '+57% visitas',
    tags: ['Instagram Ads', 'SEO'],
  },
  {
    name: 'Loja Casa & Estilo',
    segment: 'Decoração',
    objective: 'Melhorar conversão no e-commerce',
    result: '+44% conversões',
    tags: ['Landing Page', 'Instagram Ads'],
  },
]

export const subscriptionPlans = [
  {
    name: 'Presença Online',
    price: 'R$ 297',
    period: '/mês',
    highlight: false,
    features: [
      'Landing page profissional',
      'Design responsivo',
      'Otimização para SEO básico',
      'Formulário de contato',
      'Integração com WhatsApp',
      'Hospedagem inclusa',
      'Atendimento via WhatsApp • resposta rápida'
    ],
  },
  {
    name: 'Crescimento',
    price: 'R$ 697',
    period: '/mês',
    highlight: true,
    badge: 'Mais vendido',
    features: [
      'Tudo do plano Presença Online',
      'Gestão de Google Ads',
      'Gestão de Instagram Ads',
      'Relatórios mensais',
      'Copywriting persuasivo',
      'Otimização contínua de campanhas',
      'Suporte prioritário',
      'Atendimento via WhatsApp • resposta rápida'
    ],
  },
  {
    name: 'Autoridade',
    price: 'R$ 1.497',
    period: '/mês',
    highlight: false,
    features: [
      'Tudo do plano Crescimento',
      'Estratégia completa de marketing',
      'Funil de vendas completo',
      'Automação de e-mails',
      'SEO avançado',
      'Consultoria estratégica mensal',
      'Criação de conteúdo',
      'Dashboard de resultados',
      'Atendimento via WhatsApp • resposta rápida'
    ],
  },
]

export const fullPricePlans = [
  {
    name: 'Presença Online',
    price: 'R$ 1.490',
    period: '',
    highlight: false,
    features: [
      'Landing page profissional',
      'Design responsivo',
      'Otimização para SEO básico',
      'Formulário de contato',
      'Integração com WhatsApp',
      'Entrega em até 7 dias',
      'Atendimento via WhatsApp • resposta rápida'
    ],
  },
  {
    name: 'Crescimento',
    price: 'R$ 3.490',
    period: '',
    highlight: true,
    badge: 'Mais completo',
    features: [
      'Tudo do plano Presença Online',
      'Setup de Google Ads',
      'Setup de Instagram Ads',
      'Copywriting persuasivo',
      'Relatório de performance inicial',
      'Suporte de implantação (30 dias)',
      'Atendimento via WhatsApp • resposta rápida'
    ],
  },
  {
    name: 'Autoridade',
    price: 'R$ 6.990',
    period: '',
    highlight: false,
    features: [
      'Tudo do plano Crescimento',
      'Funil de vendas completo',
      'Automação de e-mails configurada',
      'SEO avançado',
      'Criação de conteúdo inicial',
      'Dashboard de resultados',
      'Suporte de implantação (60 dias)',
      'Atendimento via WhatsApp • resposta rápida'
    ],
  },
]

export const chartData = {
  visibility: {
    label: 'Visibilidade',
    kpi: '+120%',
    kpiLabel: 'Aumento de visibilidade',
    before: [20, 25, 28, 35, 42, 55],
    after: [30, 45, 58, 72, 88, 110],
    months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  },
  clicks: {
    label: 'Cliques no WhatsApp',
    kpi: '+64%',
    kpiLabel: 'Mais cliques',
    before: [15, 18, 22, 25, 28, 30],
    after: [20, 32, 40, 48, 55, 65],
    months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  },
  conversions: {
    label: 'Leads / Conversões',
    kpi: '+38%',
    kpiLabel: 'Mais conversões',
    before: [8, 10, 12, 14, 16, 18],
    after: [12, 16, 20, 24, 28, 32],
    months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  },
}

export const testimonials = [
  {
    name: 'Ricardo Dantas',
    initials: 'RD',
    role: 'Dono da Barbearia StudioAfro',
    text: 'Depois da UpScaler, meu WhatsApp passou a receber clientes todos os dias. O investimento se pagou no primeiro mês.',
  },
  {
    name: 'Maria Fernanda Costa',
    initials: 'MFC',
    role: 'Proprietária da Pizzaria Daskina',
    text: 'Nunca pensei que uma landing page pudesse fazer tanta diferença. Nossos pedidos online dispararam em poucas semanas.',
  },
  {
    name: 'Lucas Ferreira',
    initials: 'LF',
    role: 'Gerente da Academia PowerFit',
    text: 'A equipe da UpScaler entendeu exatamente o que meu negócio precisava. Profissionalismo e resultados reais.',
  },
]

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Planos', href: '#planos' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]
