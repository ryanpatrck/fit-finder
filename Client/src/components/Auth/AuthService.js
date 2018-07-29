import decode from 'jwt-decode';
export default class AuthService {

    login = (email, password) => {
        console.log("In login")
        return this.fetch('/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            })
        }).then(res => {
            console.log("setting token because we're awesome")
            this.setToken(res.token)
            return Promise.resolve(res);
        })
    }

    loggedIn = () => {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired = (token) => {
        try {
            const decoded = decode(token);
            if(decoded.exp < Date.now() / 1000) {
                return true;
            }
            else{
                return false;
            }
        }
        catch(err) {
            console.log(err)
            return false;
        }
    }

    setToken = (idToken) => {
        localStorage.setItem('id_token', idToken)
    }

    getToken = () => {
        return localStorage.getItem('id_token')
    }

    logout = () => {
        localStorage.removeItem('id_token')
    }

    getConfirm = () => {
        let answer = decode(this.getToken());
        return answer;
    }

    fetch = (url, options) => {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        if(this.loggedIn()) {
            headers['Authorization'] = 'Bearer' + this.getToken();
        }
        return this.fetch(url, {
            headers,
            ...options
        })
            .then(this._checkStatus)
            .then(response => response.json())
    }

    _checkStatus = (response) => {
        if(response.status >= 200 && response.status <300) {
            return response;
        }
        else {
            var error = new Error(response.statusText)
            error.response = response;
            throw error
        }
    }
}
