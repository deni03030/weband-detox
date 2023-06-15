const tabs = document.querySelectorAll(".tab-buttons");
const tabContent = document.querySelectorAll(".content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetTab = tab.dataset.tab;
    const targetContent = document.getElementById(targetTab);

    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    tabContent.forEach((content) => {
      content.classList.remove("active");
    });

    tab.classList.add("active");
    targetContent.classList.add("active");
  });
});
