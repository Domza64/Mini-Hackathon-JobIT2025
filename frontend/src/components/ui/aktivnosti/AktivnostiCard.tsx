export interface Aktivnost {
  title: string;
}

export default function AktivnostiCard({ title }: Aktivnost) {
  return <div>{title}</div>;
}
