let historyStack = [];
let historyIndex = -1;

function loadPage() {
    let url = document.getElementById("urlInput").value;

    if (!url.startsWith("http")) {
        url = "https://" + url;  // Add https:// if missing
    }
    
    let iframe = document.getElementById("browser");
    iframe.src = "https://api.allorigins.win/raw?url=" + encodeURIComponent(url);



    // Save to history
    historyStack = historyStack.slice(0, historyIndex + 1);
    historyStack.push(url);
    historyIndex++;
}

function goBack() {
    if (historyIndex > 0) {
        historyIndex--;
        document.getElementById("browser").src = historyStack[historyIndex];
        document.getElementById("urlInput").value = historyStack[historyIndex];
    }
}

function goForward() {
    if (historyIndex < historyStack.length - 1) {
        historyIndex++;
        document.getElementById("browser").src = historyStack[historyIndex];
        document.getElementById("urlInput").value = historyStack[historyIndex];
    }
}
