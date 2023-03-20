const user = 'user';

function setToken(token)
{
    localStorage.setItem(user, token);
}
function getToken(){
    return localStorage.getItem(user);
}
function clearToken() {
    localStorage.removeItem(user);
}
module.exports = { setToken, getToken, clearToken };