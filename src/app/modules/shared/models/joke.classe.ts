export class Joke {
  id: number;
  joke_text: string;
  name: string;

  constructor(id: number, joke_text: string, name: string) {
    this.id = id;
    this.joke_text = joke_text;
    this.name = name;
  }
}
