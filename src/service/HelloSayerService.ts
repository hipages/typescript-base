
const SALUTES = [ 'Hello', 'Hi', 'I salute you', 'Top of the morning to you, my dear'];

export class HelloSayerService {
  sayHi(name: string): string {
    return `${SALUTES[Math.floor(Math.random()*SALUTES.length)]} ${name}`;
  }
}
