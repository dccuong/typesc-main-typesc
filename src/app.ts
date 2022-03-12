const a: number = 10;
const myobj: object = {};
const myArr: [] = [];
const obArr: object[] = [{ id: 1 }, { id: 2 }];
const strArr: string[] = ["a", "b"];
const numArr: number[] = [1, 2];






const objectTest: { id: number, name: string } = { id: 1, name: "asd3" }
type product = {
    id: number,
    name: string,
}
const prd_obj: product[] = [{ id: 1, name: "asdasdafs" },
{ id: 2, name: "asdasdafqs" },
{ id: 3, name: "asdasdafsw" },]

console.log(a, myArr, myobj, obArr, strArr, numArr, objectTest, prd_obj)
///////////
function show<A, B, C>(a: A, b: B, c: C) {
    return [a, b, c]
}
show("sdasd", 19, "Adasdasd");
function getPrd<t extends product[]>(arr: t): void {
    console.log(arr)

}
