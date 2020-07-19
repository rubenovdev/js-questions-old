async function callApi() {
  try {
    const resp = await fetch('https://api.github.com/users/rubenovdev')
    const data = await resp.json()
    console.log(data)
  } catch (error) {
    throw new Error(error)
  }
}
