export interface InvitationConfig {
  heroTitle: string
  coupleNames: string
  weddingDate: string
  couplePhoto: string
  googleMapsUrl: string
  locationButtonLabel: string
  platePrice: number
  plateButtonLabel: string
  footerMessage: string
}

export const invitation: InvitationConfig = {
  heroTitle: 'SAVE THE DATE',
  coupleNames: 'Fulano & Fulana',
  weddingDate: '00 de Mês de 2026',
  couplePhoto: '/images/couple-placeholder.svg',
  googleMapsUrl: 'https://maps.google.com/?q=',
  locationButtonLabel: 'Ver Localização',
  platePrice: 0,
  plateButtonLabel: 'Valor do Prato',
  footerMessage: 'Contamos com a sua presença.',
}

export function formatPlatePrice(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
