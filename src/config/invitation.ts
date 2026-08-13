export interface InvitationConfig {
  heroTitle: string
  coupleNames: string
  weddingDate: string
  dinnerMessage: string
  couplePhoto: string
  googleMapsUrl: string
  locationButtonLabel: string
  platePrice: number
  plateButtonLabel: string
  footerMessage: string
}

export const invitation: InvitationConfig = {
  heroTitle: 'Save the date',
  coupleNames: 'Fulano & Fulana',
  weddingDate: '00 de Mês de 2026',
  dinnerMessage: 'Venha celebrar conosco em um jantar especial',
  couplePhoto: '/images/couple-placeholder.svg',
  googleMapsUrl: 'https://maps.google.com/?q=',
  locationButtonLabel: 'Ver Localização',
  platePrice: 0,
  plateButtonLabel: 'Valor do Prato',
  footerMessage: 'Com amor, Fulano & Fulana',
}

export function formatPlatePrice(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
