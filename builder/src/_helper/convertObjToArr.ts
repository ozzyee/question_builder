export const convertObjToArr = (obj: object) => {
  const arr: any[] = [];
  for (const key in obj) {
    arr.push(obj[key]);
  }
  return arr;
}