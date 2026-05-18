export function money(value: number) {
  return `${value.toLocaleString("fr-FR")} FCFA`;
}

export function percent(value: number) {
  return `${value.toFixed(1).replace(".", ",")} %`;
}
