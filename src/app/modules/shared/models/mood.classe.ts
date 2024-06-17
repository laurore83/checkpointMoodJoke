export class Mood {
  id: number;
  mood_name: string;
  mood_img: string;

  constructor(id: number, mood_name: string, mood_img: string) {
    this.id = id;
    this.mood_name = mood_name;
    this.mood_img = mood_img;
  }
}
