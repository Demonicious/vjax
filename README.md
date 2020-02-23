### VJAX
Vanilla JavaScript AJAX but Quicker.
Similar to jQuery AJAX.
Built as an educational project.

### Usage
```javascript
let request = new vjax({
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
    }
})
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
        <script src="vjax.min.js" type="text/javascript"></script>
        <script type="text/javascript">
            const btn = document.getElementById('call_api');
            const resArea = document.getElementById('response');
            btn.onclick = () => {
                const request = new vjax({
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
                })
            }
        </script>
    </footer>
</body>
</html>
```
