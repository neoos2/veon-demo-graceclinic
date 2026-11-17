// Small progressive enhancements. Everything works without this file:
// the <details> menu opens natively, anchors scroll natively, the call bar stays visible.

// 1. Mobile menu: close after choosing an item, on Escape and on outside click.
const menu = document.querySelector<HTMLDetailsElement>("[data-menu]");
if (menu) {
  const summary = menu.querySelector("summary");
  const sync = () => summary?.setAttribute("aria-expanded", String(menu.open));
  sync();
  menu.addEventListener("toggle", sync);
  menu.addEventListener("click", (e) => {
    const a = (e.target as HTMLElement).closest("a");
    if (a) menu.open = false;
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.open) {
      menu.open = false;
      summary?.focus();
    }
  });
  document.addEventListener("click", (e) => {
    if (menu.open && !menu.contains(e.target as Node)) menu.open = false;
  });
  window.matchMedia("(min-width: 1180px)").addEventListener("change", (m) => {
    if (m.matches) menu.open = false;
  });
}

// 2. Sticky call bar (≤ 768 px): shown once the hero leaves the screen, hidden over the contacts block.
const bar = document.querySelector<HTMLElement>("[data-callbar]");
const hero = document.getElementById("hero");
const contacts = document.getElementById("contacts");
if (bar && hero && contacts && "IntersectionObserver" in window) {
  let heroVisible = true;
  let contactsVisible = false;
  const update = () => {
    const show = !heroVisible && !contactsVisible;
    bar.classList.toggle("is-shown", show);
    bar.toggleAttribute("inert", !show);
    bar.setAttribute("aria-hidden", String(!show));
  };
  bar.classList.add("is-managed");
  update();
  new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; update(); }, { threshold: 0 }).observe(hero);
  new IntersectionObserver(([e]) => { contactsVisible = e.isIntersecting; update(); }, { threshold: 0 }).observe(contacts);
}

// 3. Current section in the desktop nav (visual only; aria-current would be wrong for in-page anchors).
const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".site-nav a[href^='#']"));
if (links.length && "IntersectionObserver" in window) {
  const byId = new Map(links.map((a) => [a.hash.slice(1), a]));
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      const a = byId.get(e.target.id);
      if (a) a.classList.toggle("is-current", e.isIntersecting);
    }
  }, { rootMargin: "-45% 0px -50% 0px" });
  byId.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
}
