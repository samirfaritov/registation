function getDate() {
    let user;
    user = JSON.parse(localStorage.getItem('user') || "{}")
    const hello = document.querySelector('.hello')
    
    hello.innerHTML = user.name 
}


module.exports = getDate()