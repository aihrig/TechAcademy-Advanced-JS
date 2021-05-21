let nasaApiUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
let nasaApiReq = new XMLHttpRequest();

nasaApiReq.open('GET', nasaApiUrl, true);
nasaApiReq.responseType = 'text';
nasaApiReq.send();

nasaApiReq.onload = () => {
    if (nasaApiReq.status == 200) {
        let jsonObj = JSON.parse(nasaApiReq.responseText);
        document.getElementById('nasaApi').innerHTML = jsonObj.explanation;
        let img = document.createElement('img');
        img.src = jsonObj.url;
        img.style.maxWidth = '50%';
        document.body.appendChild(img);
    }
};
