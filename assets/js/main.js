/* ==========================================================================
   Claris Dental — shared components + interactions
   The header and footer are injected here so all six pages stay identical.
   Edit them once, in this file.
   ========================================================================== */

/* --- CLINIC DETAILS -------------------------------------------------------
   PLACEHOLDERS. Replace these five values with the clinic's real details and
   they update everywhere on the site at once.                                */
const CLARIS = {
  /* Displayed number and click-to-call. Egypt: drop the leading 0, prefix +20 */
  phone:      "+20 10 2008 8944",
  phoneHref:  "+201020088944",
  /* WhatsApp: country code + number, no + and no spaces */
  whatsapp:   "201156223376",
  whatsappDisplay: "+20 11 5622 3376",
  /* No clinic email supplied yet — leave "" and the email rows stay hidden
     rather than publishing an address that bounces. */
  email:      "",
  address:    "Feda Mall, behind AUC, South Investors Area, New Cairo, Cairo, Egypt",
  addressAr:  "مول فيدا، خلف الجامعة الأمريكية، منطقة المستثمرين الجنوبية، القاهرة الجديدة، مصر",
  instagram:  "https://www.instagram.com/claris_dental_clinic",
  facebook:   "https://www.facebook.com/profile.php?id=61573920159400",
  mapsUrl:    "https://maps.app.goo.gl/VZRF8v6L4K2E1ky66",
  lat:        30.003539,
  lng:        31.500034
};
const WA_MSG = encodeURIComponent("Hello Claris Dental, I would like to book an appointment.");
const WA_LINK = `https://wa.me/${CLARIS.whatsapp}?text=${WA_MSG}`;


/* --- THE LOGO ------------------------------------------------------------
   The clinic's own logo, vectorised from the original artwork and stored in
   assets/img/. Nothing is a bitmap, so it stays sharp at any size.
     logo.svg               full lockup in gold - for dark backgrounds
     logo-wordmark.svg      CLARIS + tooth in ink - used in the header
     logo-wordmark-gold.svg the same wordmark in gold
     favicon.svg            the wordmark's C, for the browser tab          */

/* --- ICONS ---------------------------------------------------------------- */
const ICO = {
  arrow:'<svg class="icon-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  wa:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2z"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  ig:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="3.6"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>',
  fb:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12.5 5 5L20 6.5"/></svg>',
  camera:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h1.9l1.2-2h6.8l1.2 2h1.9A2.5 2.5 0 0 1 21 8.5v9A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5z"/><circle cx="12" cy="13" r="3.6"/></svg>',
  drag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 7-5 5 5 5M15 7l5 5-5 5"/></svg>',
  tooth:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c2.2 0 3-1 5-1s4 1.8 4 5c0 2.6-1.2 4-1.8 6.5-.5 2.2-.6 6.5-2.4 6.5-1.6 0-1.6-4.6-2.9-4.6h-3.8C8.8 15.4 8.8 20 7.2 20c-1.8 0-1.9-4.3-2.4-6.5C4.2 11 3 9.6 3 7c0-3.2 2-5 4-5s2.8 1 5 1z"/></svg>',
  implant:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3h8l-1 4H9z"/><path d="M10 7v3M14 7v3"/><path d="M9.5 10h5M9.8 13h4.4M10.2 16h3.6M11 19h2"/></svg>',
  align:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9c3.5-4 14.5-4 18 0M3 15c3.5 4 14.5 4 18 0"/><path d="M8 7.4v9.2M12 6.6v10.8M16 7.4v9.2"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5.5c0 4.4-3 8.1-7 9.5-4-1.4-7-5.1-7-9.5V6z"/><path d="m9 12 2 2 4-4"/></svg>',
  scan:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8V5a2 2 0 0 1 2-2h3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M21 16v3a2 2 0 0 1-2 2h-3"/><path d="M7 12h10"/></svg>',
  star:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 2.6 5.6 6 .8-4.4 4.2 1.1 6.1L12 16.9 6.7 19.7l1.1-6.1L3.4 9.4l6-.8z"/></svg>',
  money:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="6" width="19" height="12" rx="2.5"/><circle cx="12" cy="12" r="2.6"/><path d="M6 10v4M18 10v4"/></svg>',
  heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20.3 5.6a5 5 0 0 0-7.1 0L12 6.9l-1.2-1.3a5 5 0 1 0-7.1 7.1l8.3 8.4 8.3-8.4a5 5 0 0 0 0-7.1z"/></svg>',
  micro:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="6"/><path d="m20 20-4.5-4.5"/></svg>',
  guide:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/></svg>',
  xray:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="17" height="17" rx="3"/><path d="M12 6v12M8 8.5v7M16 8.5v7"/></svg>'
};

/* --- HEADER + FOOTER ------------------------------------------------------ */
function navLink(href,key,page){
  return `<a href="${href}" data-i18n="${key}" class="${page===href?'is-active':''}"></a>`;
}

function buildChrome(){
  const page=document.body.dataset.page||'index.html';
  const logo=`<a href="index.html" class="brand" aria-label="Claris Dental Clinic">
      <img src="assets/img/logo-wordmark-gold.svg" alt="Claris Dental Clinic" class="brand__mark" width="965" height="341">
    </a>`;

  const header=`
  <header class="header" id="siteHeader">
    <div class="header__inner">
      ${logo}
      <nav class="nav" id="siteNav">
        ${navLink('index.html','nav.home',page)}
        ${navLink('about.html','nav.about',page)}
        ${navLink('services.html','nav.services',page)}
        ${navLink('cases.html','nav.cases',page)}
        ${navLink('team.html','nav.team',page)}
        ${navLink('contact.html','nav.contact',page)}
        <a href="contact.html" class="btn nav__cta" data-i18n="cta.book"></a>
      </nav>
      <div class="header__actions">
        <div class="lang" role="group" aria-label="Language">
          <button type="button" data-lang-btn="en">EN</button>
          <button type="button" data-lang-btn="ar">ع</button>
        </div>
        <a href="contact.html" class="btn header__cta" data-i18n="cta.bookShort"></a>
        <button class="burger" id="burger" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
      </div>
    </div>
  </header>
  <div class="nav-scrim" id="navScrim"></div>`;

  const footer=`
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div>
          <a href="index.html" aria-label="Claris Dental Clinic"><img src="assets/img/logo.svg" alt="Claris Dental Clinic - Renew Your Smile With Us" class="lockup lockup--footer" width="965" height="589"></a>
          <p data-i18n="foot.tag"></p>
          <div class="social">
            <a href="${CLARIS.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ICO.ig}</a>
            <a href="${CLARIS.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${ICO.fb}</a>
            <a href="${WA_LINK}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICO.wa}</a>
          </div>
        </div>
        <div>
          <h4 data-i18n="foot.explore"></h4>
          <ul>
            <li><a href="index.html" data-i18n="nav.home"></a></li>
            <li><a href="about.html" data-i18n="nav.about"></a></li>
            <li><a href="cases.html" data-i18n="nav.cases"></a></li>
            <li><a href="team.html" data-i18n="nav.team"></a></li>
          </ul>
        </div>
        <div>
          <h4 data-i18n="foot.treat"></h4>
          <ul>
            <li><a href="services.html#cosmetic" data-i18n="svc.cos.name"></a></li>
            <li><a href="services.html#implants" data-i18n="svc.imp.name"></a></li>
            <li><a href="services.html#ortho" data-i18n="svc.ort.name"></a></li>
            <li><a href="services.html#general" data-i18n="svc.gen.name"></a></li>
          </ul>
        </div>
        <div>
          <h4 data-i18n="foot.visit"></h4>
          <ul>
            <li><a href="${CLARIS.mapsUrl}" target="_blank" rel="noopener" data-detail="address">${CLARIS.address}</a></li>
            <li><a href="tel:${CLARIS.phoneHref}" dir="ltr">${CLARIS.phone}</a></li>
            ${CLARIS.email ? `<li><a href="mailto:${CLARIS.email}" dir="ltr">${CLARIS.email}</a></li>` : ""}
            <li><span data-i18n="contact.hoursVal"></span></li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <span data-i18n="foot.rights"></span>
        <span data-i18n="foot.built"></span>
      </div>
    </div>
  </footer>
  <a class="wa" href="${WA_LINK}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICO.wa}</a>`;

  const h=document.getElementById('siteHeaderMount');
  const f=document.getElementById('siteFooterMount');
  if(h) h.outerHTML=header;
  if(f) f.outerHTML=footer;
}

/* --- INTERACTIONS --------------------------------------------------------- */
function initHeader(){
  const header=document.getElementById('siteHeader');
  const burger=document.getElementById('burger');
  const scrim=document.getElementById('navScrim');
  const onScroll=()=>header&&header.classList.toggle('is-solid',window.scrollY>24);
  onScroll(); window.addEventListener('scroll',onScroll,{passive:true});

  const close=()=>{document.body.classList.remove('nav-open');burger&&burger.setAttribute('aria-expanded','false');};
  burger&&burger.addEventListener('click',()=>{
    const open=document.body.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded',open);
  });
  scrim&&scrim.addEventListener('click',close);
  document.querySelectorAll('#siteNav a').forEach(a=>a.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
}

function initReveal(){
  const els=document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('is-in'));return;}
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(en=>{if(en.isIntersecting){en.target.classList.add('is-in');io.unobserve(en.target);}});
  },{threshold:.12,rootMargin:'0px 0px -8% 0px'});
  els.forEach(e=>io.observe(e));
}

function initCounters(){
  const nums=document.querySelectorAll('[data-count]');
  if(!nums.length||!('IntersectionObserver' in window))return;
  const io=new IntersectionObserver(entries=>{
    entries.forEach(en=>{
      if(!en.isIntersecting)return;
      io.unobserve(en.target);
      const el=en.target, raw=el.textContent.trim();
      const m=raw.match(/[\d,]+/); if(!m)return;
      const target=parseInt(m[0].replace(/,/g,''),10);
      const pre=raw.slice(0,m.index), post=raw.slice(m.index+m[0].length);
      const dur=1300, t0=performance.now();
      const step=t=>{
        const p=Math.min((t-t0)/dur,1);
        const e=1-Math.pow(1-p,3);
        el.textContent=pre+Math.round(target*e).toLocaleString()+post;
        if(p<1)requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  },{threshold:.6});
  nums.forEach(n=>io.observe(n));
}

/* Before / after comparison slider */
function initBA(){
  document.querySelectorAll('.ba').forEach(ba=>{
    if(ba.dataset.ready)return; ba.dataset.ready='1';
    const after=ba.querySelector('.ba__after');
    const handle=ba.querySelector('.ba__handle');
    const knob=ba.querySelector('.ba__knob');
    let active=false;
    const setPos=clientX=>{
      const r=ba.getBoundingClientRect();
      let p=((clientX-r.left)/r.width)*100;
      p=Math.max(2,Math.min(98,p));
      after.style.clipPath=`inset(0 0 0 ${p}%)`;
      handle.style.insetInlineStart='';
      handle.style.left=p+'%';
      knob.style.left=p+'%';
    };
    const down=e=>{active=true;setPos(e.touches?e.touches[0].clientX:e.clientX);};
    const move=e=>{if(!active)return;setPos(e.touches?e.touches[0].clientX:e.clientX);};
    const up=()=>active=false;
    ba.addEventListener('mousedown',down);
    ba.addEventListener('touchstart',down,{passive:true});
    window.addEventListener('mousemove',move);
    window.addEventListener('touchmove',move,{passive:true});
    window.addEventListener('mouseup',up);
    window.addEventListener('touchend',up);
    ba.addEventListener('click',e=>{if(!active)setPos(e.clientX);});
    /* keep handle centred on load */
    handle.style.left='50%'; knob.style.left='50%';
  });
}

/* Case gallery filtering */
function initFilters(){
  const bar=document.querySelector('.filters'); if(!bar)return;
  bar.addEventListener('click',e=>{
    const b=e.target.closest('button'); if(!b)return;
    bar.querySelectorAll('button').forEach(x=>x.classList.remove('is-on'));
    b.classList.add('is-on');
    const f=b.dataset.filter;
    document.querySelectorAll('[data-cat]').forEach(c=>{
      c.classList.toggle('is-hidden',f!=='all'&&c.dataset.cat!==f);
    });
  });
}

/* Appointment form — no backend yet, hands off to WhatsApp */
function initMap(){
  document.querySelectorAll('[data-map-tap]').forEach(btn=>{
    btn.addEventListener('click',()=>btn.closest('.map').classList.add('is-live'));
  });
}

function initForm(){
  const form=document.getElementById('bookingForm'); if(!form)return;
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const d=new FormData(form);
    const lines=[
      'Appointment request — Claris Dental',
      'Name: '+(d.get('name')||'-'),
      'Phone: '+(d.get('phone')||'-'),
      'Email: '+(d.get('email')||'-'),
      'Treatment: '+(d.get('service')||'-'),
      'Preferred day: '+(d.get('date')||'-'),
      'Notes: '+(d.get('message')||'-')
    ].join('\n');
    document.getElementById('formOk').classList.add('is-on');
    window.open(`https://wa.me/${CLARIS.whatsapp}?text=${encodeURIComponent(lines)}`,'_blank','noopener');
    form.reset();
  });
}

/* Push the clinic's details into every slot that shows them. Re-runs on a
   language change so the address can switch script with the rest of the page. */
function fillDetails(){
  const ar = document.documentElement.lang === 'ar';
  const map = {
    phone:   CLARIS.phone,
    email:   CLARIS.email,
    address: ar && CLARIS.addressAr ? CLARIS.addressAr : CLARIS.address,
    whatsapp: CLARIS.whatsappDisplay || ('+' + CLARIS.whatsapp)
  };
  document.querySelectorAll('[data-detail]').forEach(el=>{
    const v = map[el.dataset.detail];
    if(v) el.textContent = v;
  });
  document.querySelectorAll('[data-href="tel"]').forEach(a=>a.href='tel:'+CLARIS.phoneHref);
  document.querySelectorAll('[data-href="mail"]').forEach(a=>a.href='mailto:'+CLARIS.email);
  document.querySelectorAll('[data-href="wa"]').forEach(a=>{a.href=WA_LINK;a.target='_blank';a.rel='noopener';});
  document.querySelectorAll('[data-href="map"]').forEach(a=>{a.href=CLARIS.mapsUrl;a.target='_blank';a.rel='noopener';});
  document.querySelectorAll('[data-icon]').forEach(el=>{const i=ICO[el.dataset.icon]; if(i)el.innerHTML=i;});
  document.querySelectorAll('[data-map]').forEach(f=>{
    const src=`https://maps.google.com/maps?q=${CLARIS.lat},${CLARIS.lng}&z=16&hl=${ar?'ar':'en'}&output=embed`;
    if(f.getAttribute('src')!==src) f.setAttribute('src',src);
  });

  /* hide any row that has nothing to show — an empty label reads as broken */
  if(!CLARIS.email){
    document.querySelectorAll('[data-detail="email"]').forEach(el=>{
      const row = el.closest('.info'); if(row) row.hidden = true;
    });
  }
}
document.addEventListener('claris:lang', fillDetails);

/* The header and footer are injected after the browser has already jumped to
   any #anchor in the URL, and web fonts land later still — both shift the
   layout, leaving the reader thousands of pixels past the section they asked
   for. Re-aim at the anchor once the page has settled. */
function restoreHash(){
  if(!location.hash) return;
  let el; try{ el=document.querySelector(location.hash); }catch(e){ return; }
  if(!el) return;
  const go=()=>el.scrollIntoView({block:'start'});
  go();
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(()=>setTimeout(go,80));
  window.addEventListener('load',()=>setTimeout(go,80),{once:true});
}

function boot(){
  buildChrome();
  fillDetails();
  initHeader();
  initReveal();
  initCounters();
  initBA();
  initFilters();
  initMap();
  initForm();
  /* re-run translation after the header/footer were injected */
  if(window.CLARIS_APPLY_LANG) window.CLARIS_APPLY_LANG();
  restoreHash();
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot);
else boot();
