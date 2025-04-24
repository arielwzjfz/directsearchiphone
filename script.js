document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const youtubeButton = document.getElementById('youtubeButton');
    const xiaohongshuButton = document.getElementById('xiaohongshuButton');
    const bilibiliButton = document.getElementById('bilibiliButton');
    const tiktokButton = document.getElementById('tiktokButton');

    // Function to handle search
    const performSearch = (platform) => {
        const query = searchInput.value.trim();
        if (query) {
            // Encode the query for URL
            const encodedQuery = encodeURIComponent(query);
            
            // Check if user is on mobile
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            
            if (platform === 'youtube') {
                if (isMobile) {
                    // Try to open in YouTube app first
                    window.location.href = `vnd.youtube://search?query=${encodedQuery}`;
                    
                    // If app is not installed, fallback to web
                    setTimeout(() => {
                        window.location.href = `https://www.youtube.com/results?search_query=${encodedQuery}`;
                    }, 1000);
                } else {
                    // Desktop users go directly to web
                    window.location.href = `https://www.youtube.com/results?search_query=${encodedQuery}`;
                }
            } else if (platform === 'xiaohongshu') {
                if (isMobile) {
                    // Try to open in Xiaohongshu app first
                    window.location.href = `xiaohongshu://search?query=${encodedQuery}`;
                    
                    // If app is not installed, fallback to web
                    setTimeout(() => {
                        window.location.href = `https://www.xiaohongshu.com/search_result?keyword=${encodedQuery}`;
                    }, 1000);
                } else {
                    // Desktop users go directly to web
                    window.location.href = `https://www.xiaohongshu.com/search_result?keyword=${encodedQuery}`;
                }
            } else if (platform === 'bilibili') {
                if (isMobile) {
                    // Try to open in Bilibili app first
                    window.location.href = `bilibili://search?keyword=${encodedQuery}`;
                    
                    // If app is not installed, fallback to web
                    setTimeout(() => {
                        window.location.href = `https://search.bilibili.com/all?keyword=${encodedQuery}`;
                    }, 1000);
                } else {
                    // Desktop users go directly to web
                    window.location.href = `https://search.bilibili.com/all?keyword=${encodedQuery}`;
                }
            } else if (platform === 'tiktok') {
                if (isMobile) {
                    // Try to open in TikTok app first
                    window.location.href = `tiktok://search?q=${encodedQuery}`;
                    
                    // If app is not installed, fallback to web
                    setTimeout(() => {
                        window.location.href = `https://www.tiktok.com/search?q=${encodedQuery}`;
                    }, 1000);
                } else {
                    // Desktop users go directly to web
                    window.location.href = `https://www.tiktok.com/search?q=${encodedQuery}`;
                }
            }
        }
    };

    // Add click event listeners to the buttons
    youtubeButton.addEventListener('click', () => performSearch('youtube'));
    xiaohongshuButton.addEventListener('click', () => performSearch('xiaohongshu'));
    bilibiliButton.addEventListener('click', () => performSearch('bilibili'));
    tiktokButton.addEventListener('click', () => performSearch('tiktok'));

    // Add keypress event listener to the input field
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            // Default to YouTube search on Enter
            performSearch('youtube');
        }
    });
}); 