/* まとめる時用タグ↓ */
// #region ===== 省略 ここから =====
// #endregion ===== 省略 ここまで =====



// #region ===== 開閉コマンド（共通） ここから =====
document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll(".toggle-title");

    toggles.forEach(title => {
        const content = title.nextElementSibling;
        const btn = title.querySelector(".toggle-btn");

        title.addEventListener("click", () => {
            const isHidden = window.getComputedStyle(content).display === "none";
            content.style.display = isHidden ? "block" : "none";
            btn.textContent = isHidden ? "ー" : "▼";
        });
    });
});
// #endregion ===== 開閉コマンド（共通） ここまで =====


// #region ===== ヘッダー更新日 ここから =====
document.addEventListener("DOMContentLoaded", () => {
    const firstNews = document.querySelector(".news-content p");

    if (firstNews) {
        const text = firstNews.textContent.trim();
        const dateMatch = text.match(/^\d{4}\/\d{2}\/\d{2}/);

        if (dateMatch) {
            const lastUpdateDate = dateMatch[0];
            const headerSpan = document.getElementById("last-update");

            if (headerSpan) {
                headerSpan.textContent = `最終更新日：${lastUpdateDate}`;
            }
        }
    }
});
// #endregion ===== ヘッダー更新日 ここまで =====

// #region ===== 画面全体でクリック検知 ここから =====

document.addEventListener("click", function(e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple-global");

    // クリック位置に配置
    ripple.style.left = e.pageX - 10 + "px"; // 半径10pxで調整
    ripple.style.top = e.pageY - 10 + "px";

    document.body.appendChild(ripple);

    ripple.addEventListener("animationend", () => ripple.remove());
});


// #endregion ===== 画面全体でクリック検知 ここまで =====

// #region ===== クリック演出候補 ここから =====
document.addEventListener("click", e => {
    createArcFallingImage(e);
});

function createArcFallingImage(e) {
    const img = document.createElement("img");
    img.src="img/leaf.png";
    img.style.position = "absolute";
    img.style.width = "30px";
    img.style.height = "30px";
    img.style.pointerEvents = "none";
    img.style.transition = "transform 3s ease-out, opacity 1s";

    // ページ全体座標に変換
    const x = e.pageX;
    const y = e.pageY;
    img.style.left = x + "px";
    img.style.top = y + "px";
    img.style.transform = "translate(0,0)";
    document.body.appendChild(img);

    setTimeout(() => {
        const arc = (Math.random() - 0.5) * 200; // 左右の揺れ
        const fall = 300; // 下方向に移動する距離
        const rotate = Math.random() * 360;
        img.style.transform = `translate(${arc}px, ${fall}px) rotate(${rotate}deg)`;
        img.style.opacity = "0";
    }, 10);

    setTimeout(() => img.remove(), 1010);
}




// #endregion ===== クリック演出候補 ここまで =====

// #region ===== タイトル文字を1文字ずつ <span> で囲む ここから =====
document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".title");
    if (!title) return;

    const text = title.textContent.trim();
    title.textContent = "";

    [...text].forEach(char => {
        const span = document.createElement("span");
        span.textContent = char;
        title.appendChild(span);
    });
});
// #endregion ===== タイトル文字を1文字ずつ <span> で囲む ここまで =====

// #region ===== スクロールしたら表示 ここから =====
document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".scroll-fade");

    const fadeInOnScroll = () => {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // 初期表示もチェック
});
// #endregion ===== スクロールしたら表示 ここまで =====


// #region ===== 先頭に戻るボタン ここから =====
document.addEventListener("scroll", () => {
    const toTopBtn = document.querySelector(".to-top");
    if (!toTopBtn) return;

    if (window.scrollY > 30) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
});
// #endregion ===== 先頭に戻るボタン ここまで =====
