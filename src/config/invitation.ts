export interface InvitationConfig {
  heroTitle: string
  coupleNames: string
  weddingDate: string
  weddingTime: string
  civilMarriageMessage: string
  dinnerMessage: string
  couplePhoto: string
  googleMapsUrl: string
  locationButtonLabel: string
  platePriceMin: number
  platePriceMax: number
  plateButtonLabel: string
  moreInfoUrl: string
  moreInfoLabel: string
  footerMessage: string
}

export const invitation: InvitationConfig = {
  heroTitle: 'Save the date',
  coupleNames: 'Pilar & Andrés',
  weddingDate: '04 de Setembro de 2026',
  weddingTime: '19:00h',
  civilMarriageMessage: 'Venha celebrar conosco o nosso casamento civil,',
  dinnerMessage: 'com um jantar especial',
  couplePhoto: '/images/cropped_photo.jpeg',
  googleMapsUrl: 'https://maps.app.goo.gl/dXicuiEzw2TKg9fP6',
  locationButtonLabel: 'Cantina do Délio Batel',
  platePriceMin: 80,
  platePriceMax: 140,
  plateButtonLabel: 'Valor do Prato',
  moreInfoUrl: 'https://cantinadodeliov.cloudfy.net.br/home',
  moreInfoLabel: 'Ver Cardápio',
  footerMessage: 'Com amor, Pilar & Andrés',
}

function formatCurrency(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

export function formatPlatePriceRange(min: number, max: number): string {
  return `${formatCurrency(min)} – ${formatCurrency(max)} por pessoa`
}
