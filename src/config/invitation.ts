export interface InvitationConfig {
  heroTitle: string
  coupleNames: string
  weddingDate: string
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
  coupleNames: 'Fulano & Fulana',
  weddingDate: '00 de Mês de 2026',
  civilMarriageMessage: 'Venha celebrar conosco o nosso casamento civil',
  dinnerMessage: 'Venha celebrar conosco em um jantar especial',
  couplePhoto: '/images/photo1.jpeg',
  googleMapsUrl: 'https://maps.google.com/?q=',
  locationButtonLabel: 'Ver Localização',
  platePriceMin: 0,
  platePriceMax: 0,
  plateButtonLabel: 'Valor do Prato',
  moreInfoUrl: 'https://example.com',
  moreInfoLabel: 'Ver Cardápio',
  footerMessage: 'Com amor, Fulano & Fulana',
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
