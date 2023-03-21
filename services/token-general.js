function setTokenGen(user, token)
{
    localStorage.setItem(user, token);
}
function getTokenGen(user)
{
    return localStorage.getItem(user);
}
function clearTokenGen(user)
{
    localStorage.removeItem(user);
}

module.exports = { setTokenGen, getTokenGen, clearTokenGen };