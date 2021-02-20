export default function colorGenerator(): string {
  const r: number = Math.floor(Math.random() * (256 - 200) + 200);
  const g: number = Math.floor(Math.random() * (256 - 200) + 200);
  const b: number = Math.floor(Math.random() * (256 - 200) + 200);
  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}
