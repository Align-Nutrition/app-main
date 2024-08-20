export default function acronymize(string: string = "") {
  return string.match(/\b(\w)/g)?.join("");
}
