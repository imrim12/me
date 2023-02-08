// Swap 2 elements in an array by their indexes
export function swap<T>(array: T[], index1: number, index2: number): void {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}
