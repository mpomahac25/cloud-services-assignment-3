const tabs = document.querySelectorAll(".main-tab");
const panels = document.querySelectorAll(".tab-panel");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const selectedTab = tab.dataset.tab;

        tabs.forEach(button => {
            button.classList.remove("active");
            button.setAttribute("aria-selected", "false");
        });

        panels.forEach(panel => {
            panel.classList.add("hidden");
        });

        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");

        document
            .getElementById(`tab-${selectedTab}`)
            .classList.remove("hidden");
    });
});