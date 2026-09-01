const params = new URLSearchParams(window.location.search);
const businessKey =
  params.get("biz") || "demo_roofing";
const business =
  businessData[businessKey] ||
  businessData.demo_roofing;


function setText(id, value) {
  const element = document.getElementById(id);

  if (
    element &&
    value !== undefined &&
    value !== null
  ) {
    element.innerHTML = value;
  }
}

function setAttr(id, attr, value) {
  const element = document.getElementById(id);
  if (
    element &&
    value !== undefined &&
    value !== null
  ) {
    element.setAttribute(attr, value);
  }
}


function applyBusinessTheme() {
  if (!business) return;
  const root = document.documentElement;
  if (business.theme) {
    const cssVarMap = {
      accent: "--accent",
      accentDark: "--accent-dark",
      accentLight: "--accent-light",
      textThemeMuted: "--text-theme-muted",
      borderThemeMuted: "--border-theme-muted",
      textThemeHighlight: "--text-theme-highlight",
      iconMutedBg: "--icon-muted-bg",
      iconMutedText: "--icon-muted-text"
    };
    Object.keys(cssVarMap).forEach(key => {
      const value = business.theme[key];
      if (value) {
        root.style.setProperty(cssVarMap[key], value);
      }
    });
  }

  setText(
    "biz-name-1",
    business.name1
  );
  setText(
    "biz-name-2",
    business.name2
  );

  setText(
    "top-location",
    business.topLocation
  );

  setText(
    "top-availability",
    business.topAvailability
  );

  setText(
    "hero-badge",
    business.heroBadge
  );

  setText(
    "hero-title",
    business.heroTitle
  );

  setText(
    "hero-desc",
    business.heroDesc
  );

  setText(
    "hero-cta-text",
    business.ctaText
  );

  setText(
    "hero-location",
    business.locationName
  );

  const heroVideoEl =
    document.getElementById("hero-video");
  if (heroVideoEl) {
    if (business.heroPoster) {
      heroVideoEl.setAttribute(
        "poster",
        business.heroPoster
      );
    }

    const source =
      heroVideoEl.querySelector("source");

    if (
      source &&
      business.heroVideo
    ) {
      source.src =
        business.heroVideo;
      heroVideoEl.load();
    }
  }

  if (business.about) {
    setText(
      "about-tag",
      business.about.tag
    );
    setText(
      "about-title",
      business.about.title
    );
    setText(
      "about-lead",
      business.about.lead
    );
    setText(
      "owner-name",
      business.about.ownerName
    );
    setText(
      "owner-title",
      business.about.ownerTitle
    );
    setText(
      "about-quote",
      business.about.quote
    );
    setText(
      "about-desc",
      business.about.description
    );
  }

  setText(
    "footer-biz-name-1",
    business.footerBizName1
  );

  setText(
    "footer-biz-name-2",
    business.footerBizName2
  );

  setText(
    "footer-desc",
    business.footerDesc
  );

  if (business.phone) {
    const safePhone =
      business.phone.replace(/\s+/g, "");
    document
      .querySelectorAll(".biz-phone-link")
      .forEach(link => {
        link.href =
          `tel:${safePhone}`;
      });

    const navPhone =
      document.getElementById(
        "nav-phone-btn"
      );
    if (navPhone) {
      navPhone.href =
        `tel:${safePhone}`;
    }

    document
      .querySelectorAll(".phone-text")
      .forEach(element => {
        element.textContent =
          business.phone;
      });
  }

  const email =
    business.footerEmail ||
    business.email;

  if (email) {
    document
      .querySelectorAll(".biz-email-link")
      .forEach(link => {
        link.href =
          `mailto:${email}`;
      });

    document
      .querySelectorAll(".email-text")
      .forEach(element => {
        element.textContent =
          email;
      });
  }
}


const hamburger =
  document.getElementById("ham");
const drawer =
  document.getElementById("drawer");
function openDrawer() {
  if (!hamburger || !drawer) return;
  hamburger.classList.add("active");
  drawer.classList.add("open");
  document.body.style.overflow =
    "hidden";
}

function closeDrawer() {
  if (!hamburger || !drawer) return;
  hamburger.classList.remove("active");
  drawer.classList.remove("open");
  document.body.style.overflow =
    "";
}

if (hamburger) {
  hamburger.addEventListener(
    "click",
    () => {
      const isOpen =
        drawer &&
        drawer.classList.contains("open");
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    }
  );
}


const navLinks =
  document.querySelectorAll(
    ".main-nav a[data-section]"
  );
const sections =
  document.querySelectorAll(
    "section[id]"
  );
if ("IntersectionObserver" in window) {
  const sectionObserver =
    new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting)
            return;
          const id =
            entry.target.id;
          navLinks.forEach(link => {
            link.classList.toggle(
              "active",
              link.dataset.section === id
            );
          });
        });
      },
      {
        rootMargin:
          "-35% 0px -55% 0px"
      }
    );
  sections.forEach(section => {
    sectionObserver.observe(section);
  });
}


const heroVideo =
  document.getElementById(
    "hero-video"
  );
if (heroVideo) {
  heroVideo.muted = true;
  heroVideo.playsInline = true;
  const playPromise =
    heroVideo.play();
  if (
    playPromise !== undefined
  ) {
    playPromise.catch(() => {
      console.log(
        "Hero video autoplay was blocked."
      );
    });
  }
}


const heroElements = [
  document.querySelector(
    ".hero-eyebrow"
  ),
  document.querySelector(
    ".hero-content h1"
  ),
  document.querySelector(
    ".hero-content > p"
  ),

  document.querySelector(
    ".hero-actions"
  ),

  document.querySelector(
    ".hero-meta"
  )

];


heroElements.forEach(
  (element, index) => {
    if (!element) return;
    element.style.opacity = "0";
    element.style.transform =
      "translateY(24px)";
    setTimeout(() => {
      element.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";
      element.style.opacity = "1";

      element.style.transform =
        "translateY(0)";

    }, 180 + index * 140);

  }
);


function renderStandard() {

  if (
    !business ||
    !business.standard
  ) return;


  setText(
    "standard-kicker-text",
    business.standard.kicker
  );


  setText(
    "standard-title",
    business.standard.title
  );


  setText(
    "standard-description-text",
    business.standard.description
  );


  (
    business.standard.cards || []
  ).forEach((card, index) => {

    const n = index + 1;


    if (
      !document.getElementById(
        `standard-number-${n}`
      )
    ) return;


    setText(
      `standard-number-${n}`,
      card.number
    );


    setAttr(
      `standard-icon-${n}`,
      "class",
      `fas ${card.icon}`
    );


    setText(
      `standard-stat-${n}`,
      card.value
    );


    setText(
      `standard-label-${n}`,
      card.label
    );


    setText(
      `standard-desc-${n}`,
      card.description
    );

  });

}


function renderServices() {

  if (
    !business ||
    !business.services
  ) return;


  setText(
    "services-title",
    business.servicesTitle
  );


  setText(
    "services-desc",
    business.servicesDesc
  );


  const main =
    business.services.main;


  // ---------------------------------------------
  // FEATURED SERVICE
  // ---------------------------------------------

  if (main) {

    setAttr(
      "service-main-image",
      "src",
      main.image
    );


    setText(
      "service-main-number",
      main.number
    );


    setText(
      "service-main-label",
      main.label
    );


    const totalCards =
      (business.services.cards || [])
        .length + 1;


    setText(
      "service-main-index",
      `${main.number} / ${String(totalCards).padStart(2, "0")}`
    );


    setAttr(
      "service-main-icon",
      "class",
      `fas ${main.icon}`
    );


    setText(
      "service-main-title",
      main.title
    );


    setText(
      "service-main-desc",
      main.description
    );


    setText(
      "service-main-cta",
      main.cta
    );


    const pointsList =
      document.getElementById(
        "service-main-points"
      );


    if (
      pointsList &&
      main.points
    ) {

      pointsList.innerHTML =
        main.points
          .map(point => `
            <li>
              <i class="fas fa-check"></i>
              ${point}
            </li>
          `)
          .join("");

    }

  }


  // ---------------------------------------------
  // SERVICE CARDS
  // ---------------------------------------------

  (
    business.services.cards || []
  ).forEach((card, index) => {

    const n = index + 1;


    setAttr(
      `service-card-${n}-image`,
      "src",
      card.image
    );


    setText(
      `service-card-${n}-number`,
      card.number
    );


    setAttr(
      `service-card-${n}-icon`,
      "class",
      `fas ${card.icon}`
    );


    setText(
      `service-card-${n}-title`,
      card.title
    );


    setText(
      `service-card-${n}-desc`,
      card.description
    );

  });

}


function renderWhy() {
  if (
    !business ||
    !business.why
  ) return;

  const why =
    business.why;

  setAttr(
    "why-image-main",
    "src",
    why.imageMain
  );

  setAttr(
    "why-image-small",
    "src",
    why.imageSmall
  );

  setText(
    "why-experience-value",
    why.experience
  );

  setText(
    "why-location-text",
    why.location
  );

  setText(
    "why-tag",
    why.tag
  );

  setText(
    "why-section-title",
    why.title
  );

  setText(
    "why-intro-text",
    why.intro
  );

  const container =
    document.getElementById(
      "why-points-container"
    );
  if (
    !container ||
    !why.points
  ) return;
  container.innerHTML = "";
  
  why.points.forEach(point => {

    const item =
      document.createElement("div");


    item.className =
      "why-point";

    item.innerHTML = `
      <div class="why-point-number">
        ${point.number}
      </div>

      <div class="why-point-icon">
        <i class="fas ${point.icon}"></i>
      </div>

      <div>
        <h3>${point.title}</h3>

        <p>
          ${point.description}
        </p>
      </div>
    `;


    container.appendChild(item);

  });

}


function renderReviews() {
  if (
    !business ||
    !business.reviews
  ) return;
  const container =
    document.getElementById(
      "reviews-container"
    );
  if (!container) return;

  container.innerHTML = "";
  const total =
    business.reviews.length;
  business.reviews.forEach(
    (review, index) => {
      const initials =
        review.name
          ? review.name
              .split(" ")
              .map(word => word[0])
              .join("")
              .substring(0, 2)
              .toUpperCase()
          : "";

      const card =
        document.createElement(
          "article"
        );

      card.className =
        index === 0
          ? "review-card review-featured"
          : "review-card";

      const indexLabel =
        `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

      card.innerHTML = `
        <div class="review-top">
          <span class="review-index">
            ${indexLabel}
          </span>
          <div class="review-stars">
            ★★★★★
          </div>
        </div>

        <blockquote>
          "${review.text || ""}"
        </blockquote>

        <div class="review-author">
          <div class="review-avatar">
            ${initials}
          </div>
          <div>
            <strong>
              ${review.name || ""}
            </strong>
            <span>
              ${review.loc || ""}
            </span>
          </div>
        </div>
      `;

      container.appendChild(card);
    }
  );
}


function renderAreas() {
  if (
    !business ||
    !business.areas
  ) return;

  const container =
    document.getElementById(
      "areas-container"
    );

  if (!container) return;

  container.innerHTML = "";

  business.areas.forEach(
    (area, index) => {
      const item =
        document.createElement(
          "div"
        );
      item.className =
        "area-item";
      item.innerHTML = `
        <span class="area-number">
          ${String(index + 1).padStart(2, "0")}
        </span>
        <i class="fas fa-location-dot"></i>
        <span>
          ${area}
        </span>
      `;
      container.appendChild(item);
    }
  );
}

const faqItems =
  document.querySelectorAll(
    ".faq-item"
  );

faqItems.forEach(item => {
  const button =
    item.querySelector(
      ".faq-question"
    );
  if (!button) return;
  button.addEventListener(
    "click",
    () => {
      const wasActive =
        item.classList.contains(
          "active"
        );
      faqItems.forEach(
        otherItem => {
          otherItem.classList.remove(
            "active"
          );
        }
      );

      if (!wasActive) {
        item.classList.add(
          "active"
        );
      }
    }
  );
});


function initializeWebsite() {
  applyBusinessTheme();
  renderStandard();
  renderServices();
  renderWhy();
  renderReviews();
  renderAreas();
}

document.addEventListener(
  "DOMContentLoaded",
  initializeWebsite
);