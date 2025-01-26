class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const header = document.createElement("header");
    header.classList.add("header");

    const container = document.createElement("section");
    container.classList.add("header__container");

    const title = document.createElement("h1");
    title.classList.add("header__title");
    const titleLink = document.createElement("a");
    titleLink.href = "/";
    titleLink.textContent = "Xablau Varejo";
    title.appendChild(titleLink);

    const links = [
      { href: "/", text: "Página Inicial" },
      { href: "/pages/about/index.html", text: "Sobre" },
      { href: "/pages/auth/login/index.html", text: "Entrar" },
      { href: "/pages/auth/register/index.html", text: "Registrar" },
    ];

    const mobileNav = document.createElement("nav");
    mobileNav.classList.add("header__mobile-nav");

    const hamburgerIcon = document.createElement("div");
    hamburgerIcon.classList.add("header__hamburger-icon");
    hamburgerIcon.addEventListener("click", this.toggleMobileMenu);
    const hamburgerBar1 = document.createElement("div");
    hamburgerBar1.classList.add("header__hamburger-bar1");
    const hamburgerBar2 = document.createElement("div");
    hamburgerBar2.classList.add("header__hamburger-bar2");
    const hamburgerBar3 = document.createElement("div");
    hamburgerBar3.classList.add("header__hamburger-bar3");
    hamburgerIcon.appendChild(hamburgerBar1);
    hamburgerIcon.appendChild(hamburgerBar2);
    hamburgerIcon.appendChild(hamburgerBar3);

    const mobileMenu = document.createElement("ul");
    mobileMenu.classList.add("header__mobile-menu");
    links.forEach((linkInfo) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = linkInfo.href;
      a.textContent = linkInfo.text;
      li.appendChild(a);
      mobileMenu.appendChild(li);
    });

    const defaultNav = document.createElement("nav");
    defaultNav.classList.add("header__default-nav");
    const defaultMenu = document.createElement("ul");
    defaultMenu.classList.add("header__default-menu");
    links.forEach((linkInfo) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.classList.add("header__menu-link");
      a.href = linkInfo.href;
      a.textContent = linkInfo.text;
      li.appendChild(a);
      defaultMenu.appendChild(li);
    });

    hamburgerIcon.appendChild(mobileMenu);
    mobileNav.appendChild(hamburgerIcon);
    container.appendChild(title);
    container.appendChild(mobileNav);
    defaultNav.appendChild(defaultMenu);
    container.appendChild(defaultNav);
    header.appendChild(container);

    this.append(header);

    this.activeDefaultHeaderLink();
  }

  toggleMobileMenu() {
    this.classList.toggle("open");
  }

  activeDefaultHeaderLink() {
    const activeClass = "header__menu-link--active";
    const currentUrl = window.location.pathname;

    const headerLinks = this.querySelectorAll(".header__menu-link");
    headerLinks.forEach((link) => link.classList.remove(activeClass));
    headerLinks.forEach((link) => {
      if (link.getAttribute("href") === currentUrl) {
        link.classList.add(activeClass);
      }
    });
  }
}

customElements.define("layout-header", Header);
