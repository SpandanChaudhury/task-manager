import { getToken } from './token.js';

export const authenticate = () => {
    const user = getToken();
    if(user == null)
        return null;
    else
        return user;
}
// module.exports = { authenticate };