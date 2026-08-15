"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blockedSites = ["youtube.com", "twitter.com", "x.com"];
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // タブが更新された場合のみ実行 
    if (changeInfo.url) {
        // URLオブジェクトを作成して、ホスト名を取得
        const url = new URL(changeInfo.url);
        const hostname = url.hostname;
        // ホスト名がブロック対象のサイトに含まれているか確認
        if (blockedSites.some(site => hostname.includes(site))) {
            // ブロック対象のサイトの場合、block.htmlにリダイレクト
            chrome.tabs.update(tabId, { url: chrome.runtime.getURL("block.html") });
        }
    }
});
//# sourceMappingURL=background.js.map