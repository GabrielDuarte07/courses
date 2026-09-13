export function formatPrice(price: number) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export function formatStudents(count: number) {
  if (count >= 1000) {
    return `${(count / 1000).toLocaleString("en-US", {
      maximumFractionDigits: 1,
    })}K`;
  }
  return count.toLocaleString("en-US");
}
