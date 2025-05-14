// Gets session token from session storage, or generates a new one if not found
function getSessionToken() {
    let token = sessionStorage.getItem('session_token');
    if (!token) {
        token = crypto.randomUUID(); // A string containing a randomly generated, 36 character long UUID
        sessionStorage.setItem('session_token', token);
    }
    return token;
}

export { getSessionToken };