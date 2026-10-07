// Keep the first eight news entries visible, including any wrapped text.
document.querySelectorAll(".news-scroll").forEach(function (panel) {
    var list = panel.querySelector("ul");
    if (!list) return;

    function resizePanel() {
        var rows = list.children;
        var visibleRows = parseInt(panel.dataset.visibleRows, 10) || 8;
        if (rows.length <= visibleRows) {
            panel.style.setProperty("--news-max-height", "none");
            return;
        }

        var lastRow = rows[visibleRows - 1];
        var padding = getComputedStyle(panel);
        var height = lastRow.getBoundingClientRect().bottom - list.getBoundingClientRect().top
            + parseFloat(padding.paddingTop) + parseFloat(padding.paddingBottom);
        panel.style.setProperty("--news-max-height", Math.ceil(height) + "px");
    }

    resizePanel();
    if (typeof ResizeObserver !== "undefined") {
        new ResizeObserver(resizePanel).observe(list);
    } else {
        window.addEventListener("resize", resizePanel);
    }
});
