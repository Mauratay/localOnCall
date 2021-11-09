let functions = firebase.functions()

functions.useFunctionsEmulator('http://localhost:5001')

let btn = document.querySelector("#btn-get-data")
let label = document.querySelector("#label")
let retrieveData = functions.httpsCallable("retrieve")

btn.addEventListener("click", (e) => {
  retrieveData()
  .then((res) => {
    label.innerHTML = res.data
    console.log("successfully retrieved")
  })
  .catch((e) => console.log(e))
})