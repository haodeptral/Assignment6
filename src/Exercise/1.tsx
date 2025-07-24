// Bài 1:

// Fix lỗi type và giải thích
let age: number = 25;
let isActive: boolean = true;
let data: any = { x: 10 };
data = "hello";
// Giải thích:
// - 'age' được khai báo là kiểu number, nên chỉ nhận giá trị kiểu số.
// - 'isActive' được khai báo là kiểu boolean, nên chỉ nhận giá trị true hoặc false.
// - 'data' được khai báo là kiểu any, nên có thể nhận bất kỳ giá trị nào, nhưng việc gán "hello" 
// là không hợp lý nếu ta muốn giữ nguyên kiểu dữ liệu ban đầu của 'data'.


// Bài 2:

// Định nghĩa biến 'user' với các type sau bằng type annotation:
// - name (string, bắt buộc)
// - age (number, optional)
// - roles: tuple gồm 2 thanh phan string va number
type User = {
  name: string;
  age?: number; // Optional
  roles: [string, number]; // Tuple với phần tử đầu là string và phần tử thứ hai là number
};

// Bài 3:
// Sử dụng type assertion để fix lỗi
const input = document.getElementById("input") as HTMLInputElement;
const value = input.value; // Giá trị value là string
const valueAsNumber: number = Number(value);

// Bài 4:

// Khi nào dùng 'unknown' thay cho 'any'? Viết ví dụ minh họa.


// 'unknown' được sử dụng khi không biết chắc chắn kiểu dữ liệu của một biến,
// nhưng muốn đảm bảo rằng sẽ kiểm tra kiểu dữ liệu trước khi sử dụng nó
let unknownValue: unknown = "This is a string";
if (typeof unknownValue === "string") {
  console.log(unknownValue.toUpperCase());// Chỉ sử dụng khi đã kiểm tra kiểu dữ liệu là string
}
