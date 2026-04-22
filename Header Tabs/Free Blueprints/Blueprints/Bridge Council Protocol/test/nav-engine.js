document.addEventListener("DOMContentLoaded", function() {
  const shapes = {
    1: "●",
    2: "■",
    3: "▲",
    4: "◆",
    5: "⬟",
    6: "⬢",
    7: "–"
  };

  const container = document.getElementById("bcNavContainer");
  if (!container || !window.bcNavConfig) return;

  window.bcNavConfig.pages.forEach(page => {
    const isActive = page.slug === window.bcNavConfig.currentSlug;

    const link = document.createElement("a");
    link.href = page.slug;
    link.className = "bc-nav-item bc-level-" + page.level + (isActive ? " active" : "");

    link.innerHTML = `
      <span class="bc-nav-shape">${shapes[page.level] || shapes[7]}</span>
      <span class="bc-nav-title">${page.title}</span>
    `;
    
    container.appendChild(link);
  });
});
