chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        var a = current_tab_info.url.substring(0, 24)
        if ("https://www.youtube.com/" == a) {
            let tabId = tab.tabId
            chrome.scripting.executeScript({ target: { tabId: tabId }, files: ['fn.js'] }, () => console.log("i injected"))
        }
    })
})
