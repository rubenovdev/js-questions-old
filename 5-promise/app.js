'use strict'

// Задача: переписать функцию loadScript, используя Promise

function initUsers(error) {
  if (error) {
    throw new Error(error)
  } else {
    getUsers()
  }
}

function loadScript(src, callback) {
  let script = document.createElement('script')
  script.src = src

  script.onload = () => callback(null)
  script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`))

  document.head.append(script)
}

loadScript('users.js', initUsers)
