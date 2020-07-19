// Задача 1. Что будет в консоли ?

// console.log(1)
// setTimeout(() => {
//   console.log(2)
// }, 1000)
// setTimeout(() => {
//   console.log(3)
// }, 0)
// console.log(4)

// Задача 2. Что будет в консоли ?

// Promise.reject('a')
//   .catch((p) => p + 'b')
//   .catch((p) => p + 'с')
//   .then((p) => p + 'd')
//   .finally((p) => p + 'e')
//   .then((p) => console.log(p))
// console.log('f')

// Задача 3. Что будет в консоли ?

// console.log(1)
// setTimeout(function () {
//   console.log(2)
// })
// Promise.resolve(3).then(console.log)
// console.log(4)
// setTimeout(function () {
//   console.log(5)
// }, 0)
// console.log(6)

// Задача 4. Что будет в консоли ?

// console.log(1)

// new Promise((resolve, reject) => {
//   console.log(2)
//   resolve(3)
//   console.log(4)
//   reject(5)
//   console.log(6)
// })
//   .catch((error) => {
//     console.log(error)
//   })
//   .then((data) => {
//     console.log(data)
//   })
//   .finally((data) => {
//     console.log(data)
//   })

// setTimeout(() => {
//   console.log(7)
// }, 1000)

// Задача 5. Что будет в консоли ?

// setTimeout(() => console.log('task 1'))

// const promise1 = new Promise((resolve, reject) => {
//   resolve()
// })
// promise1.then(() => console.log('task 2'))

// const promise2 = new Promise((resolve, reject) => {
//   resolve()
// })
// promise2.then(() => console.log('task 3'))

// console.log('task 4')

// Задача 6. Что будет в консоли ?

// const promise = Promise.reject('java')
//   .then((data) => data + 'script')
//   .catch((data) => data + ' is')
//   .catch((data) => data + ' 100%')
//   .then((data) => data + ' the best!!!')

// promise.then((result) => console.log(result))
