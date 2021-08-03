const vjax = {
    request: function(parameters) {
        this.xhr = null;
        this.xhr = new XMLHttpRequest;
        if (parameters.onProgress) {
            this.xhr.onprogress = () => {
                parameters.onProgress();
            };
        }
        if(!parameters.hasOwnProperty('method')) parameters.method = 'GET';
        parameters.method = parameters.method.toUpperCase();
        if (parameters.hasOwnProperty('onResponse')) {
            this.xhr.onload = () => {
                let response = {
                    url: this.xhr.responseURL,
                    status: this.xhr.status,
                    headers: this.xhr.getAllResponseHeaders(),
                    text: this.xhr.responseText,
                };
                if (this.xhr.getResponseHeader('content-type').includes('application/json'))
                    response.json = JSON.parse(response.text);
                parameters.onResponse(response);
            };
        }
        if (parameters.hasOwnProperty('onError')) {
            this.xhr.onerror = (e) => {
                parameters.onError(e);
            };
        }
        if (parameters.hasOwnProperty('onAbort')) {
            this.xhr.onabort = () => {
                parameters.onAbort();
            };
        }
        if (parameters.hasOwnProperty('preProcess'))
            parameters.preProcess();
        let fd = null;
        if (parameters.hasOwnProperty('data')) {
            if (parameters.method == 'POST') {
                fd = new FormData();
                let p;
                for (p in parameters.data) {
                    fd.append(p, parameters.data[p]);
                }
            } else {
                fd = '';
                let p;
                for (p in parameters.data) {
                    fd += `${p}=${parameters.data[p]}`;
                }
                let slice = parameters.url.slice(-1);
                if (slice == '/' || slice == '\\') parameters.url = parameters.url.substring(0, parameters.url.length - 1);
                parameters.url += `?${fd}`;
            }
        }
        this.xhr.open(parameters.method, parameters.url, true);
        this.xhr.send(fd);
        if (parameters.hasOwnProperty('onSend'))
            parameters.onSend();
        return this;
    },
    post: function(parameters) {
        this.xhr = null;
        this.xhr = new XMLHttpRequest;
        if (parameters.onProgress) {
            this.xhr.onprogress = () => {
                parameters.onProgress();
            };
        }
        if (parameters.hasOwnProperty('onResponse')) {
            this.xhr.onload = () => {
                let response = {
                    url: this.xhr.responseURL,
                    status: this.xhr.status,
                    headers: this.xhr.getAllResponseHeaders(),
                    text: this.xhr.responseText,
                };
                if (this.xhr.getResponseHeader('content-type').includes('application/json'))
                    response.json = JSON.parse(response.text);
                parameters.onResponse(response);
            };
        }
        if (parameters.hasOwnProperty('onError')) {
            this.xhr.onerror = (e) => {
                parameters.onError(e);
            };
        }
        if (parameters.hasOwnProperty('onAbort')) {
            this.xhr.onabort = () => {
                parameters.onAbort();
            };
        }
        if (parameters.hasOwnProperty('preProcess'))
            parameters.preProcess();
        let fd = null;
        if (parameters.hasOwnProperty('data')) {
            fd = new FormData();
            let p;
            for (p in parameters.data) {
                fd.append(p, parameters.data[p]);
            }
        }
        this.xhr.open('POST', parameters.url, true);
        this.xhr.send(fd);
        if (parameters.hasOwnProperty('onSend'))
            parameters.onSend();
        return this;
    },
    get: function(parameters) {
        this.xhr = null;
        this.xhr = new XMLHttpRequest;
        if (parameters.onProgress) {
            this.xhr.onprogress = () => {
                parameters.onProgress();
            };
        }
        if (parameters.hasOwnProperty('onResponse')) {
            this.xhr.onload = () => {
                let response = {
                    url: this.xhr.responseURL,
                    status: this.xhr.status,
                    headers: this.xhr.getAllResponseHeaders(),
                    text: this.xhr.responseText,
                };
                if (this.xhr.getResponseHeader('content-type').includes('application/json'))
                    response.json = JSON.parse(response.text);
                parameters.onResponse(response);
            };
        }
        if (parameters.hasOwnProperty('onError')) {
            this.xhr.onerror = (e) => {
                parameters.onError(e);
            };
        }
        if (parameters.hasOwnProperty('onAbort')) {
            this.xhr.onabort = () => {
                parameters.onAbort();
            };
        }
        if (parameters.hasOwnProperty('preProcess'))
            parameters.preProcess();
        let fd = null;
        if (parameters.hasOwnProperty('data')) {
            fd = '';
            let p;
            for (p in parameters.data) {
                fd += `${p}=${parameters.data[p]}`;
            }
            let slice = parameters.url.slice(-1);
            if (slice == '/' || slice == '\\') parameters.url = parameters.url.substring(0, parameters.url.length - 1);
            parameters.url += `?${fd}`;
        }
        this.xhr.open('GET', parameters.url, true);
        this.xhr.send();
        if (parameters.hasOwnProperty('onSend'))
            parameters.onSend();
        return this;
    }
}

const vjaxClass = function() {
    this.request = function(parameters) {
        this.xhr = null;
        this.xhr = new XMLHttpRequest;
        if (parameters.onProgress) {
            this.xhr.onprogress = () => {
                parameters.onProgress();
            };
        }
        if(!parameters.hasOwnProperty('method')) parameters.method = 'GET';
        parameters.method = parameters.method.toUpperCase();
        if (parameters.hasOwnProperty('onResponse')) {
            this.xhr.onload = () => {
                let response = {
                    url: this.xhr.responseURL,
                    status: this.xhr.status,
                    headers: this.xhr.getAllResponseHeaders(),
                    text: this.xhr.responseText,
                };
                if (this.xhr.getResponseHeader('content-type').includes('application/json'))
                    response.json = JSON.parse(response.text);
                parameters.onResponse(response);
            };
        }
        if (parameters.hasOwnProperty('onError')) {
            this.xhr.onerror = (e) => {
                parameters.onError(e);
            };
        }
        if (parameters.hasOwnProperty('onAbort')) {
            this.xhr.onabort = () => {
                parameters.onAbort();
            };
        }
        if (parameters.hasOwnProperty('preProcess'))
            parameters.preProcess();
        let fd = null;
        if (parameters.hasOwnProperty('data')) {
            if (parameters.method == 'POST') {
                fd = new FormData();
                let p;
                for (p in parameters.data) {
                    fd.append(p, parameters.data[p]);
                }
            } else {
                fd = '';
                let p;
                for (p in parameters.data) {
                    fd += `${p}=${parameters.data[p]}`;
                }
                let slice = parameters.url.slice(-1);
                if (slice == '/' || slice == '\\') parameters.url = parameters.url.substring(0, parameters.url.length - 1);
                parameters.url += `?${fd}`;
            }
        }
        this.xhr.open(parameters.method, parameters.url, true);
        this.xhr.send(fd);
        if (parameters.hasOwnProperty('onSend'))
            parameters.onSend();
        return this;
    }
    
    this.post = function(parameters) {
        this.xhr = null;
        this.xhr = new XMLHttpRequest;
        if (parameters.onProgress) {
            this.xhr.onprogress = () => {
                parameters.onProgress();
            };
        }
        if (parameters.hasOwnProperty('onResponse')) {
            this.xhr.onload = () => {
                let response = {
                    url: this.xhr.responseURL,
                    status: this.xhr.status,
                    headers: this.xhr.getAllResponseHeaders(),
                    text: this.xhr.responseText,
                };
                if (this.xhr.getResponseHeader('content-type').includes('application/json'))
                    response.json = JSON.parse(response.text);
                parameters.onResponse(response);
            };
        }
        if (parameters.hasOwnProperty('onError')) {
            this.xhr.onerror = (e) => {
                parameters.onError(e);
            };
        }
        if (parameters.hasOwnProperty('onAbort')) {
            this.xhr.onabort = () => {
                parameters.onAbort();
            };
        }
        if (parameters.hasOwnProperty('preProcess'))
            parameters.preProcess();
        let fd = null;
        if (parameters.hasOwnProperty('data')) {
            fd = new FormData();
            let p;
            for (p in parameters.data) {
                fd.append(p, parameters.data[p]);
            }
        }
        this.xhr.open('POST', parameters.url, true);
        this.xhr.send(fd);
        if (parameters.hasOwnProperty('onSend'))
            parameters.onSend();
        return this;
    }
    
    this.get = function(parameters) {
        this.xhr = null;
        this.xhr = new XMLHttpRequest;
        if (parameters.onProgress) {
            this.xhr.onprogress = () => {
                parameters.onProgress();
            };
        }
        if (parameters.hasOwnProperty('onResponse')) {
            this.xhr.onload = () => {
                let response = {
                    url: this.xhr.responseURL,
                    status: this.xhr.status,
                    headers: this.xhr.getAllResponseHeaders(),
                    text: this.xhr.responseText,
                };
                if (this.xhr.getResponseHeader('content-type').includes('application/json'))
                    response.json = JSON.parse(response.text);
                parameters.onResponse(response);
            };
        }
        if (parameters.hasOwnProperty('onError')) {
            this.xhr.onerror = (e) => {
                parameters.onError(e);
            };
        }
        if (parameters.hasOwnProperty('onAbort')) {
            this.xhr.onabort = () => {
                parameters.onAbort();
            };
        }
        if (parameters.hasOwnProperty('preProcess'))
            parameters.preProcess();
        let fd = null;
        if (parameters.hasOwnProperty('data')) {
            fd = '';
            let p;
            for (p in parameters.data) {
                fd += `${p}=${parameters.data[p]}`;
            }
            let slice = parameters.url.slice(-1);
            if (slice == '/' || slice == '\\') parameters.url = parameters.url.substring(0, parameters.url.length - 1);
            parameters.url += `?${fd}`;
        }
        this.xhr.open('GET', parameters.url, true);
        this.xhr.send();
        if (parameters.hasOwnProperty('onSend'))
            parameters.onSend();
        return this;
    }
}
