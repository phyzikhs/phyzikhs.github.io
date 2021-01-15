class Color {
  constructor(price, name, selections) {
    this.name = name;
    this.price = price;
    this.selections = selections;
  }
  function select() {
    selections++;
  }
  function delete() {
    selections--;
  }
}
