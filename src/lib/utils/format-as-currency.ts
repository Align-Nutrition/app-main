type FormatAsCurrencyType = {
  value: number;
  options?: {
    currency?: string;
  };
};

export default function formatAsCurrency(props: FormatAsCurrencyType) {
  const { value, options } = props;

  const formatter = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
    ...options,
  });

  return formatter.format(value ?? 0);
}
