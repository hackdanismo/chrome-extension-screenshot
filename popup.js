// Find the HTML element with the ID and listen for a click event.
document.getElementById("screenshotButton").addEventListener("click", () => {
    // Capture the visible viewport only using Chrome's chrome.tabs.captureVisibleTab() API.
    chrome.tabs.captureVisibleTab(null, { format: "png" }, (dataUrl) => {
        // Check whether Chrome reported an error while trying to capture the screenshot.
        if (chrome.runtime.lastError) {
            // Print the Chrome error message to the browser's developer console.
            console.error(chrome.runtime.lastError);
            // Stop executing the code in this callback if an error occurred.
            return;
        }

        // Create a new HTML anchor element used to download the screenshot.
        const link = document.createElement("a");
        // Set the anchor's URL to the screenshot's image data returned by Chrome.
        link.href = dataUrl;
        // Set the filename that will be used when the screenshot is downloaded.
        link.download = "screenshot.png";
        // Programmatically click the anchor element to start the screenshot download.
        link.click();
    });
});