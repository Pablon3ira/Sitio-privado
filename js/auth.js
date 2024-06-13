const auth = new URLSearchParams(window.location.search)

const username = auth.get('username')
console.log(username)

const password = auth.get('password');
console.log('password')

if (username == 'admin@1' && password == '123') {

    window.location.href = 'dashboard.html'

}

else {
    alert ('Usuario incorrecto')
    window.location.href = 'index.html'
    console.log(username)
}