/**
 * ─── 1. MASTER BUSINESS CONFIGURATION ───
 */
const businessData = {
    "alco_roofing": {
name1: "ALCO", name2: "ROOFING",
        phone: "01204 706991",
        email: "info@alcoroofing.co.uk",
        color: "#d90429",
        colorDark: "#b00421",
        icon: "fa-hammer",
        locationName: "Bolton & Manchester",
        locationSub: "Family-run team, 30 years experience.",
        formServices: ["Emergency Leak Repair", "Full Re-Roof", "Flat Roofing", "Chimney Work", "Guttering"],
        heroTitle: "Manchester's Top Roofers.<br><span class='highlight'>Fixed Price Repairs.</span>",
        heroDesc: "Serving Bolton and Greater Manchester for 30 years. From tile repairs to full re-roofs, Alco is the name you trust.",
        heroBadge: "<i class='fas fa-shield-alt'></i> 10-Year Insurance Backed Guarantee",
        heroImg: "assets/roofing/roofing_service_img2.jpg",
        aboutQuote: "I treat every roof like it's my own. No shortcuts, just honest work at a fair price.",
        ctaText: "REQUEST QUOTE",
        secondaryBtn: "OUR ROOFING SERVICES",
        owner: "Chris",
        stat1Val: "30+",    stat1Label: "Years Experience",
        stat2Val: "5.0",    stat2Label: "Google Rating",
        stat3Val: "NFRC",   stat3Label: "Member",
        stat4Val: "10yr",   stat4Label: "Guarantee",
        servicesTitle: "Roofing Solutions",
        servicesDesc: "Expert roofing contractors serving Manchester. We handle everything from minor leaks to full structural re-roofs.",
        serviceMainImg: "assets/roofing/roofing_service_img_4.jpg",
        serviceOverlayImg: "assets/roofing/roofing_service_img_6.jpg",
        tree: [
            { category: "Repairs", items: ["Emergency Leak Fix", "Tile & Slate Replacement", "Chimney Repointing"] },
            { category: "Installations", items: ["New Build Roofing", "Flat Roof Systems", "Leadwork Specialists"] },
            { category: "Maintenance", items: ["Gutter Cleaning", "Roof Inspections", "Storm Damage Assessment"] }
        ], // Added missing comma here
        whyTitle: "Why Manchester Trusts Alco",
        whyCards: [
            { icon: "fa-shield-alt", title: "10-Year Guarantee", desc: "Every full re-roof comes with a decade of protection and insurance-backed peace of mind." },
            { icon: "fa-hard-hat", title: "NFRC Certified", desc: "Fully accredited members of the National Federation of Roofing Contractors." },
            { icon: "fa-pound-sign", title: "Fixed Quotes", desc: "We don't do hidden extras. The price we quote is the price you pay, guaranteed." },
            { icon: "fa-calendar-check", title: "30 Years Exp", desc: "A family-run business that has stood the test of time across Greater Manchester." }
        ],
        aboutTag: "A Message from Chris",
        aboutTitle: "Quality Roofing You Can Trust",
        ownerTitle: "Founder & Master Roofer, Alco Roofing",
        skills: [
            { name: "Full Re-Roofs", pct: "100", icon: "fa-home" },
            { name: "Emergency Repairs", pct: "98", icon: "fa-bolt" },
            { name: "Flat Roofing Specialist", pct: "95", icon: "fa-layer-group" },
            { name: "Customer Satisfaction", pct: "99", icon: "fa-smile" }
        ],
        reviews: [
            { name: "James R.", text: "Alco fixed my leak within hours. Professional and fair price.", loc: "Bolton" },
            { name: "Sarah M.", text: "Best roofing team in Manchester. Clean and tidy work.", loc: "Bury" }
        ],
        areas: ["Bolton", "Bury", "Wigan", "Manchester City Centre", "Salford"],
        footerBizName1: "ALCO",
        footerBizName2: "ROOFING",
        footerDesc: "Expert roofing services across Audenshaw and Greater Manchester. Family run, fully insured, and highly recommended.",
        mapsUrl: "https://google.com...",
        floatCta: "GET A QUOTE"        
    },
        "ci_group": {
        name1: "CI", name2: "GROUP",
        phone: "0800 180 4000",
        email: "hello@cigroup.co.uk",
        color: "#367588",
        colorDark: "#2a5c6e",
        icon: "fa-shield-alt",
        locationName: "Manchester & UK Wide",
        locationSub: "The UK's #1 Insulation Specialists.",
        formServices: ["Internal Insulation", "Thermal Panels", "Roof Conversions", "Free Home Survey"],
        heroTitle: "Conservatory Too Cold?<br><span class='highlight'>Insulate Today.</span>",
        heroDesc: "The UK's leading conservatory insulation specialists. Transform your room into a comfortable space you can use 365 days a year.",
        heroBadge: "<i class='fas fa-leaf'></i> Save up to 25% on Energy Bills",
        heroImg: "assets/images/conservatory-hero.jpg",
        aboutQuote: "We've helped thousands of homeowners reclaim their space. Our unique C.H.R.I.S® system ensures quality and satisfaction are our only priorities.",
        ctaText: "BOOK SURVEY",
        secondaryBtn: "SEE THE TECHNOLOGY",
        owner: "CI Team",
        stat1Val: "25%",    stat1Label: "Lower Energy Bills",
        stat2Val: "15k",    stat2Label: "Happy Clients",
        stat3Val: "DBS",    stat3Label: "Checked",
        stat4Val: "1 Day",  stat4Label: "Installation",
        servicesTitle: "Insulation Solutions",
        servicesDesc: "Our high-tech thermal insulation systems turn unusable conservatories into the most popular rooms in the house.",
        serviceMainImg: "assets/images/conservatory-main.jpg",
        serviceOverlayImg: "assets/images/insulation-detail.jpg",
        
        tree: [
          { category: "Insulation", items: ["Thermal Roof Quilting", "Internal Ceiling Finishes", "Vapour Barriers"] },
          { category: "Benefits", items: ["Heat Retention", "Glare Reduction", "Noise Dampening"] },
          { category: "Process", items: ["Free Technical Survey", "1-Day Installation", "10-Year Guarantee"] }
        ],
        
        whyTitle: "Why Homeowners Choose CI",
        whyCards: [
            { icon: "fa-sun", title: "Heat Control", desc: "Reflects 98% of radiant heat, keeping you cool in summer and warm in the winter." },
            { icon: "fa-leaf", title: "Eco Friendly", desc: "Significantly reduce your carbon footprint and save up to 25% on heating costs." },
            { icon: "fa-user-check", title: "DBS Checked", desc: "All our installers are fully vetted and professionally trained to the highest UK standards." },
            { icon: "fa-award", title: "10yr Warranty", desc: "Every installation is backed by our comprehensive 10-year insurance-backed guarantee." }
        ],
        
        aboutTag: "The CI Group Promise",
        aboutTitle: "Reclaim Your Living Space",
        ownerTitle: "Technical Director, CI Group Manchester",
        skills: [
            { name: "Thermal Insulation", pct: "100", icon: "fa-thermometer-half" },
            { name: "Energy Saving", pct: "98", icon: "fa-leaf" },
            { name: "Quick Install", pct: "95", icon: "fa-clock" },
            { name: "Customer Satisfaction", pct: "99", icon: "fa-smile" }
        ],
        
        reviews: [
            { name: "Paul K.", text: "The insulation made a massive difference instantly. We can finally sit in there in December! Great team.", loc: "Manchester" },
            { name: "Elena R.", text: "Professional from start to finish. The house is much quieter and warmer now.", loc: "Salford" }
        ],
        areas: ["Manchester", "Salford", "Stockport", "Oldham", "Trafford", "Cheshire"],
        footerBizName1: "CI",
        footerBizName2: "GROUP",
        footerDesc: "The UK's leading conservatory insulation specialists. Reclaim your conservatory with our 1-day high-tech installation.",
        mapsUrl: "https://google.com...",
        floatCta: "FREE SURVEY"
    },
    "manchester_roofs": {
      name1: "MANCHESTER", 
      name2: "ROOFS",
      phone: "0161 390 0436",
      email: "info@manchesterroofs.co.uk",
      color: "#1e3a8a",       // Deep Navy
      colorDark: "#172554",   
      icon: "fa-tools",
      locationName: "Greater Manchester",
      locationSub: "Available 24/7 for emergency repairs.",
      formServices: ["Emergency Repairs", "Roof Replacement", "Flat Roofs", "Guttering", "Dry Verge"],
      heroTitle: "Manchester's 24/7<br><span class='highlight'>Emergency Roofers.</span>",
      heroDesc: "The highest-rated roofing specialists in the city. Outstanding workmanship on full replacements and urgent repairs, day or night.",
      heroBadge: "<i class='fas fa-clock'></i> Open 24 Hours - Rapid Response",
      heroImg: "assets/roofing/roofing_service_img1.jpg", 
      aboutQuote: "We pride ourselves on an outstanding job, whether it's a small leak or a full roof replacement.",
      ctaText: "GET A QUOTE",
      secondaryBtn: "OUR SERVICES",
      owner: "Manchester Roofs Team",
      stat1Val: "100+",    stat1Label: "5-Star Reviews",
      stat2Val: "24/7",    stat2Label: "Availability",
      stat3Val: "Top",     stat3Label: "Rated Team",
      stat4Val: "Free",    stat4Label: "Estimates",
      servicesTitle: "Professional Services",
      servicesDesc: "From our base on Hill Lane, we provide the most reliable roofing coverage across all Manchester postcodes.",
      serviceMainImg: "assets/roofing/roofing_service_img_6.jpg",
      serviceOverlayImg: "assets/roofing/roofing_service_img_3.jpg",
      tree: [
          { category: "Roofing", items: ["Full Re-Roofs", "Emergency Patching", "Slate & Tile Work"] },
          { category: "External", items: ["Gutter Replacement", "Fascias & Soffits", "Chimney Removal"] },
          { category: "Specialist", items: ["Flat Roof Systems", "Dry Verge Systems", "Storm Damage"] }
         ],
      whyTitle: "Why Choose Manchester Roofs",
      whyCards: [
          { icon: "fa-star", title: "5.0 Rated", desc: "Over 100 verified customers have given us a perfect 5-star rating for our quality." },
          { icon: "fa-bolt", title: "Rapid Response", desc: "Leaking roof? We operate 24 hours a day to ensure your home stays dry and safe." },
          { icon: "fa-pound-sign", title: "Fair Pricing", desc: "Top-quality materials and expert labor at a price that remains competitive and transparent." },
          { icon: "fa-check-circle", title: "Neat & Efficient", desc: "Our team is known for being prompt, professional, and leaving every site spotless." }
          ],
       aboutTag: "About Our Service",
       aboutTitle: "Outstanding Local Workmanship",
       ownerTitle: "Lead Contractor, Manchester Roofs LTD",
       skills: [
           { name: "Roof Replacement", pct: "100", icon: "fa-home" },
           { name: "Emergency Fixes", pct: "100", icon: "fa-clock" },
           { name: "Guttering", pct: "95", icon: "fa-water" },
           { name: "Reliability", pct: "99", icon: "fa-user-shield" }
           ],
       reviews: [
           { name: "Sarah L.", text: "Manchester Roofs did an outstanding job on our roof replacement!", loc: "Manchester" },
           { name: "David W.", text: "The team was prompt, professional, and did a neat, efficient job.", loc: "Oldham" }
           ],
        areas: ["Manchester", "Salford", "Prestwich", "Middleton", "Stockport"],
        footerBizName1: "MANCHESTER",
        footerBizName2: "ROOFS",
        footerDesc: "Premium roofing contractors based in Manchester. Providing 24-hour emergency support and full roof installations across the region.",
         mapsUrl: "https://google.com...",
         floatCta: "CALL NOW"        
    }
};
function injectBusinessData() {
    const params = new URLSearchParams(window.location.search);
    const bizKey = params.get('biz') || "alco_roofing";
    const biz = businessData[bizKey];

    if (!biz) return;

    // ─── THEME & COLORS ───
    document.documentElement.style.setProperty('--gold', biz.color);
    document.documentElement.style.setProperty('--gold-dark', biz.colorDark || biz.color);

    // ─── LOGO & NAV ───
    if (document.getElementById('biz-name-1')) document.getElementById('biz-name-1').innerText = biz.name1;
    if (document.getElementById('biz-name-2')) document.getElementById('biz-name-2').innerText = biz.name2;
    const logoIcon = document.getElementById('logo-icon');
    if (logoIcon) logoIcon.innerHTML = `<i class="fas ${biz.icon}"></i>`;

    // ─── HERO SECTION ───
    if (document.getElementById('hero-title')) document.getElementById('hero-title').innerHTML = biz.heroTitle;
    if (document.getElementById('hero-desc')) document.getElementById('hero-desc').innerText = biz.heroDesc;
    if (document.getElementById('hero-badge')) document.getElementById('hero-badge').innerHTML = biz.heroBadge;
    if (document.getElementById('hero-img')) document.getElementById('hero-img').src = biz.heroImg;
    if (document.getElementById('hero-cta-text')) document.getElementById('hero-cta-text').innerText = biz.ctaText;
    if (document.getElementById('hero-secondary-btn')) document.getElementById('hero-secondary-btn').innerText = biz.secondaryBtn;

    // ─── STATS ───
    if (document.getElementById('stat-1-val')) document.getElementById('stat-1-val').innerText = biz.stat1Val;
    if (document.getElementById('stat-1-label')) document.getElementById('stat-1-label').innerText = biz.stat1Label;
    if (document.getElementById('stat-2-val')) document.getElementById('stat-2-val').innerHTML = biz.stat2Val;
    if (document.getElementById('stat-2-label')) document.getElementById('stat-2-label').innerText = biz.stat2Label;
    if (document.getElementById('stat-3-val')) document.getElementById('stat-3-val').innerText = biz.stat3Val;
    if (document.getElementById('stat-3-label')) document.getElementById('stat-3-label').innerText = biz.stat3Label;
    if (document.getElementById('stat-4-val')) document.getElementById('stat-4-val').innerText = biz.stat4Val;
    if (document.getElementById('stat-4-label')) document.getElementById('stat-4-label').innerText = biz.stat4Label;

    // ─── SERVICES TREE ───
    if (document.getElementById('services-title')) document.getElementById('services-title').innerText = biz.servicesTitle;
    if (document.getElementById('services-desc')) document.getElementById('services-desc').innerText = biz.servicesDesc;
    if (document.getElementById('service-img-main')) document.getElementById('service-img-main').src = biz.serviceMainImg;
    if (document.getElementById('service-img-overlay')) document.getElementById('service-img-overlay').src = biz.serviceOverlayImg;
    
    //footer
    if (document.getElementById('footer-biz-name-1')) document.getElementById('footer-biz-name-1').innerText = biz.footerBizName1;
    if (document.getElementById('footer-biz-name-2')) document.getElementById('footer-biz-name-2').innerText = biz.footerBizName2;

    const treeContainer = document.getElementById('services-list');
    if (treeContainer && biz.tree) {
        treeContainer.innerHTML = '';
        biz.tree.forEach(branch => {
            const li = document.createElement('li');
            li.innerHTML = `${branch.category}<ul></ul>`;
            const subUl = li.querySelector('ul');
            branch.items.forEach(item => { subUl.innerHTML += `<li>${item}</li>`; });
            treeContainer.appendChild(li);
        });
    }

    // ─── WHY CHOOSE US ───
    if (document.getElementById('why-title')) document.getElementById('why-title').innerText = biz.whyTitle;
    const whyContainer = document.getElementById('why-grid-container');
    if (whyContainer && biz.whyCards) {
        whyContainer.innerHTML = '';
        biz.whyCards.forEach(card => {
            whyContainer.innerHTML += `
                <div class="why-card">
                    <i class="fas ${card.icon}"></i>
                    <h4>${card.title}</h4>
                    <p>${card.desc}</p>
                </div>`;
        });
    }

    // ─── ABOUT SECTION ───
    if (document.getElementById('about-tag')) document.getElementById('about-tag').innerText = biz.aboutTag;
    if (document.getElementById('about-title')) document.getElementById('about-title').innerText = biz.aboutTitle;
    if (document.getElementById('about-quote')) document.getElementById('about-quote').innerText = `"${biz.aboutQuote}"`;
    if (document.getElementById('about-initial')) document.getElementById('about-initial').innerText = biz.owner.charAt(0);
    if (document.getElementById('owner-title')) document.getElementById('owner-title').innerText = biz.ownerTitle;
    
    document.documentElement.style.setProperty('--gold', biz.color);
    document.documentElement.style.setProperty('--gold-dark', biz.colorDark);
    if (biz.bgColor) {
       document.documentElement.style.setProperty('--white', biz.bgColor); 
    }

    if (biz.textColor) {
      document.documentElement.style.setProperty('--dark', biz.textColor);
    }
    
    const ownerContainer = document.getElementById('owner-name');
    if (ownerContainer && ownerContainer.querySelector('strong')) {
        ownerContainer.querySelector('strong').innerText = biz.owner;
    }

    // ─── SKILLS ───
    const skillsBox = document.getElementById('skills-container');
    if (skillsBox && biz.skills) {
        skillsBox.innerHTML = '<div class="skills-label"><i class="fas fa-chart-bar" style="margin-right:8px;"></i>Expertise & Standards</div>';
        biz.skills.forEach(skill => {
            skillsBox.innerHTML += `
                <div class="skill-item">
                    <div class="skill-header">
                        <span class="skill-name"><i class="fas ${skill.icon}"></i> ${skill.name}</span>
                        <span class="skill-pct">${skill.pct}%</span>
                    </div>
                    <div class="skill-track"><div class="skill-fill" style="--target:${skill.pct}%;"></div></div>
                </div>`;
        });
    }

    // ─── REVIEWS ───
    const reviewContainer = document.getElementById('reviews-container');
    if (reviewContainer && biz.reviews) {
        reviewContainer.innerHTML = '';
        biz.reviews.forEach(r => {
            reviewContainer.innerHTML += `
                <div class="testi-card">
                    <div class="stars">★★★★★</div>
                    <blockquote>"${r.text}"</blockquote>
                    <div class="t-author">
                        <div class="avatar" style="background:${biz.color};">${r.name.charAt(0)}</div>
                        <div><div class="t-name">${r.name}</div><div class="t-loc">${r.loc}</div></div>
                    </div>
                </div>`;
        });
    }

    // ─── AREAS ───
    const areaContainer = document.getElementById('areas-container');
    if (areaContainer && biz.areas) {
        areaContainer.innerHTML = biz.areas.map(a => `<div class="area-chip"><i class="fas fa-map-marker-alt"></i> ${a}</div>`).join('');
    }

    // ─── GLOBAL PHONE UPDATES ───
    document.querySelectorAll('.phone-text').forEach(el => el.innerText = biz.phone);
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.href = `tel:${biz.phone.replace(/\s/g, '')}`;
    });
    
        // ─── EMAIL INJECTION ───
    const footerEmail = document.getElementById('footer-email');
    if (footerEmail && biz.email) {
        footerEmail.innerText = biz.email;
        footerEmail.href = `mailto:${biz.email}`;
    }
}

// ─── UI LOGIC ───
document.addEventListener('DOMContentLoaded', () => {
    injectBusinessData();

    const ham = document.getElementById('ham');
    const drawer = document.getElementById('drawer');
    if (ham && drawer) {
        ham.addEventListener('click', () => {
            const open = drawer.classList.toggle('open');
            ham.classList.toggle('active', open);
            document.body.style.overflow = open ? 'hidden' : '';
        });
    }

    const skillObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target.querySelector('.skill-fill');
                if (fill) {
                    const target = fill.style.getPropertyValue('--target');
                    fill.style.width = target;
                    fill.classList.add('animate');
                }
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    document.querySelectorAll('.skill-item').forEach(f => skillObserver.observe(f));
});

function handleSubmit(e) {
    e.preventDefault();
    const successMsg = document.getElementById('fs');
    if (successMsg) successMsg.style.display = 'block';
    e.target.reset();
}
