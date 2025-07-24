// 4. Classes và OOP
// Bài 1:

// Tạo class 'Animal' với:
// - private property 'name'
// - constructor khởi tạo name
// - method 'speak()' in ra tên

class Animal {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    speak(): void {
        console.log(`${this.name}`);
    }
}

// Bài 2:

// Tạo class 'Cat' kế thừa 'Animal', override method 'speak()' để in "Meow"
class Cat extends Animal {
    speak(): void {
        console.log("Meow");
    }
}

// Bài 3:

// Tạo abstract class 'Shape' với abstract method 'area()', sau đó triển khai cho class
abstract class Shape {
    abstract area(): number;
}

class Circle extends Shape {
    private radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    area(): number {
        return Math.PI * this.radius ** 2;
    }
}

// Bài 4:
// Sử dụng getter/setter để validate giá trị age (0 < age < 120) trong class 'Person'
class Person {
    private age: number;
    constructor(age: number) {
        this.age = this.validateAge(age);
    }
    private validateAge(age: number): number {
        if (age < 0 || age > 120) {
            throw new Error("Invalid age");
        }
        return age;
    }
}