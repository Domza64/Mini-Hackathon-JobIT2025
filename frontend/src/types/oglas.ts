export default interface Oglas {
  postId: number;
  postedById: number;
  categories: string[];
  postedBy: string;
  text: string;
  contact: string;
  date: Date;
}
