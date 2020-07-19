// Задача: переписать функцию callApi на async/await

function callApi() {
  return fetch('https://api.github.com/users/rubenovdev')
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      throw new Error(error)
    })
}
