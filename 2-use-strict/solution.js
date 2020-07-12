// 'use strict'

function globalVariable() {
  try {
    mistypeVaraible = 121212
    return false
  } catch (error) {
    console.error(error)
    return true
  }
}
// console.log(globalVariable())

function reservedKeyword() {
  try {
    const obj = {
      get x() {
        return 'hello'
      },
    }

    obj.x = 5
    return false
  } catch (error) {
    console.error(error)
    return true
  }
}
// console.log(reservedKeyword())

function settingPropertiesForPrimitives() {
  try {
    false.hello = 'hello!'
    return false
  } catch (error) {
    console.error(error)
    return true
  }
}
// console.log(settingPropertiesForPrimitives())

const isStrictMode = () => {
  function checkThis() {
    return this
  }

  return checkThis() === undefined
}
// console.log(isStrictMode())
