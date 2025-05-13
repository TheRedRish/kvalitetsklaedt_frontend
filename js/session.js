function getSessionToken() {
    let token = sessionStorage.getItem('session_token');
    if (!token) {
        token = crypto.randomUUID();
        sessionStorage.setItem('session_token', token);
    }
    return token;
}

export { getSessionToken };