document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.querySelector('.fediverse-username-input');
    const shareButton = document.querySelector('.share-button');

    // 如果 localStorage 中有保存的用戶名，則載入
    const savedUsername = localStorage.getItem('fediverseUsername');
    if (savedUsername) {
        usernameInput.value = savedUsername;
    }

    // 點擊分享按鈕的事件監聽器
    shareButton.addEventListener('click', () => {
        const fullUsername = usernameInput.value.trim(); // 獲取完整的用戶名字符串
        const currentPageUrl = encodeURIComponent(window.location.href); // 獲取當前頁面 URL 並進行編碼
        const pageTitle = encodeURIComponent(document.title || 'This page'); // 獲取頁面標題

        // 解析用戶名以提取實例名稱
        const parts = fullUsername.split('@');
        let instance = '';
        if (parts.length >= 2) { // 至少有 @instance.name 部分
            instance = parts[parts.length - 1]; // 最後一個部分是實例名稱
        }

        if (instance) {
            // 將完整的用戶名保存到 localStorage
            localStorage.setItem('fediverseUsername', fullUsername);
            
            // 嘗試構建撰寫頁面 URL，不帶預填文本
            const composePageUrl = `https://${instance}`;
            window.open(instanceHomePageUrl, '_blank', 'width=600,height=400'); // 打開一個新的小視窗
            
            // 彈出提示，讓用戶手動複製連結
            alert(`Your Fediverse instance (@${instanceHomePageUrl}) is opened.\nPlease manually copy the link to this page into your posting box:\n${currentPageUrl}`);

        } else {
            alert('Please enter a valid Fediverse username, for example: username@instance.name!');
        }
    });

    // 可選：點擊 fediverse 連結時的事件（如果 HTML 中有這個連結的話）
    const fediverseLink = document.querySelector('.fediverse-link');
    if (fediverseLink) { // 確保元素存在才添加監聽
        fediverseLink.addEventListener('click', (event) => {
            event.preventDefault();
            alert('Fediverse is a federated and decentralised social network consisting of many independent servers.');
        });
    }
});
