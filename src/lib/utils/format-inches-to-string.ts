export default function formatInchesToFeetString(inches: number) {
  const feet = Math.floor(inches / 12);
  const remainingInches = inches % 12;

  return `${feet}' ${remainingInches}"`;
}
