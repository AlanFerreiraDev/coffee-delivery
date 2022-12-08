export function formatMoney(price: number): string {
  return price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })
}
