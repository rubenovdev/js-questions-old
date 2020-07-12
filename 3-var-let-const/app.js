// задача 1
var foo = 1
function bar() {
  if (!foo) {
    var foo = 10
  }
  alert(foo)
}
bar()

// задача 2
// var a = 1
// function b() {
//   a = 10
//   return
//   function a() {}
// }
// b()
// alert(a)

// задача 3
// const variable = 5
// function c() {
//   let variable = 3

//   function d() {
//     variable = 1
//     console.log(variable)
//   }
//   d()

//   let variable = 7
//   return variable
// }
// c()
// console.log(variable)
