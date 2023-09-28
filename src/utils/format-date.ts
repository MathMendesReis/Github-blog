import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
export function formatDate(date: string): string {
  const dateProvided = new Date(date)
  const differenceInHours = formatDistanceToNow(dateProvided, {
    addSuffix: true,
    locale: ptBR,
  })
  return differenceInHours
}
