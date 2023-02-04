declare interface Directory {
  name: string;
  path: string;
  children?: Directory[];
}
