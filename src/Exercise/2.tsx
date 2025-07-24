// 2. Function
// Bài 1:

// Viết hàm 'sum' nhận vào 2 số, trả về tổng, với tham số thứ hai có default value = 10
function sum(a: number, b: number = 10): number {
  return a + b;
}

// Bài 2:

// Sử dụng rest parameter để viết hàm 'mergeStrings' nhận nhiều chuỗi, trả về chuỗi đã
function mergeStrings(...strings: string[]): string {
  return strings.join(" ");
}

// Bài 3:
// Overload hàm 'getValue' để xử lý 2 trường hợp:
// - Nếu đầu vào là string, trả về string uppercase
// - Nếu đầu vào là number, trả về số * 2
function getValue(input: string | number): string | number {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else {
    return input * 2;
  }
}

// Bài 4:

// Tim hieu ve generic va ung dung
// Sử dụng generic để viết hàm 'filterArray' lọc các phần tử theo điều kiện
function filterArray<T>(arr: T[], condition: (item: T) => boolean): T[] {
// Triển khai logic
    return arr.filter(condition);
}