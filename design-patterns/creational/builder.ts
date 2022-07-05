class Builder {
  static builder(builder) {
    return new Builder(builder);
  }

  $$type;

  constructor(object = {}) {
    for (const key in object) {
      if (Object.hasOwnProperty.call(object, key)) {
        this[key] = object[key];
      }
    }
  }

  withType(type) {
    this.$$type = type;
    return this;
  }

  fromJson(object = {}) {
    const objectKeys = Object.keys(object);
    for (let index = 0; index < objectKeys.length; index++) {
      const key = objectKeys[index];
      if (this[key] && this[key] === object[key]) {
        continue;
      }

      this[key] = object[key];
    }

    return this;
  }

  toJson() {
    return Object.keys(this).reduce((acc, key) => {
      acc[key] = this[key];

      return acc;
    }, {});
  }
}

class Car extends Builder {
  color;

  setColor(color) {
    this.color = color;
    return this;
  }
}

class Motobike extends Builder {
  color: string;

  setColor(color) {
    this.color = color;
    return this;
  }
}

const car = new Car({ of: 'tanna' })
  .withType('@builder/car')
  .setColor('black-pink');
console.log(car);

const motobike = new Motobike({ of: 'tanna' })
  .withType('@builder/motobike')
  .setColor('yellow');
console.log(motobike);
