class Rectangle {
  constructor(width, height) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive integers');
    }
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    if (side <= 0) {
      throw new Error('Side must be a positive integer');
    }
    super(side, side);
  }

  getPerimeter() {
    return 4 * this._width;
  }
}

// Demo functionality
const button = document.getElementById('runDemo');
const output = document.getElementById('output');

button.addEventListener('click', () => {
  const rectangle = new Rectangle(5, 10);
  const square = new Square(7);

  output.textContent =
    `Rectangle width: ${rectangle.width}\n` +
    `Rectangle height: ${rectangle.height}\n` +
    `Rectangle area: ${rectangle.getArea()}\n\n` +
    `Square side: ${square.width}\n` +
    `Square area: ${square.getArea()}\n` +
    `Square perimeter: ${square.getPerimeter()}`;
});
