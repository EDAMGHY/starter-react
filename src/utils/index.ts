export function formatDate(date: Date, format = "en-US") {
  return new Intl.DateTimeFormat(format, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date)
}
