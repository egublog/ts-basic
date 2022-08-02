export default class World {
  message: string;
  constructor(message: string) {
    this.message = "Hello World";
  }

  public sayHello(elem: HTMLElement | null) {
    if(elem) {
      elem.innerHTML = this.message;
    }
  }
}