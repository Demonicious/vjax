### VJAX
Vanilla JavaScript AJAX but not as messy. 4KB File Size (Minified). 
Similar to jQuery AJAX.
Built as an educational project.

### CDN (jsDelivr)
```html
<script src="https://cdn.jsdelivr.net/gh/Demonicious/vjax@latest/lib/vjax.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/Demonicious/vjax@latest/lib/vjax.js"></script>
```

### Usage
```javascript
let request = vjax.request({
    url: 'somewhere.com',
    method: 'POST',
    data: {
        id: 5,
    },
    preProcess: () => {
        console.log('About to send request');
    },
    onSend: () => {
        console.log('Request Sent');
    },
    onProgress: () => {
        console.log('Request is being Processed.');
    },
    onResponse: (response) => {
        console.log('Plain Text: ', response.text);
        console.log('JSON: ', response.json);
    },
    onAbort: () => {
        console.log('Request Aborted');
    },
    onError: (e) => {
        console.error(e);
    }
});

// All Lifecycle Methods are Optional.

// Alternative Methods :-
// - Parameters, Same as Above excluding "method" Property
vjax.get();
vjax.post();
```

### Basic Example
```html
<html lang="en">
<head>
    <title>VJAX Test</title>
</head>
<body>
    <div class="container">
        <button id="call_api">Call API!</button>
        <pre id="response"></pre>
    </div>
    <footer>
        <script src="https://cdn.jsdelivr.net/gh/Demonicious/vjax@latest/lib/vjax.min.js"></script>
        <script type="text/javascript">
            const btn = document.getElementById('call_api');
            const resArea = document.getElementById('response');
            btn.onclick = () => {
                const request = vjax.request({
                    url: 'https://jsonplaceholder.typicode.com/todos/',
                    method: 'GET',
                    data: {
                        _limit: 5,
                    },
                    preProcess: () => {
                        console.log('About to send request!');
                    },
                    onSend: () => {
                        resArea.innerText = 'Sent Request!';
                    },
                    onProgress: () => {
                        resArea.innerText = 'Request is being processed...';
                    },
                    onResponse: (response) => {
                        resArea.innerText = response.text;
                        console.log(response.json);
                    }
                });
            }
        </script>
    </footer>
</body>
</html>
```
