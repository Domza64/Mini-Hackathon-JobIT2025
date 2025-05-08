export default interface Oglas {
  id: number;
  postedById: number;
  categories: string[];
  postedBy: string;
  title: string;
  text: string;
  contact: string;
  date: Date;
}
