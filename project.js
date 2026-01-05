document.getElementById('deployBtn').addEventListener('click', deployApp)


function deployApp() {
const name = document.getElementById('name').value.trim()
const out = document.getElementById('output')


if (!name) {
out.innerText = 'Please enter your name!'
return
}


out.innerText = `Deployment successful! Welcome, ${name}`
}
