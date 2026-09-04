/* ==========================================================================
   Claris Dental — Bilingual content dictionary (EN / AR)
   To change any text on the site, edit it HERE. Every string appears once.
   HTML uses:  <h1 data-i18n="home.hero.title"></h1>
               <input data-i18n-attr="placeholder:contact.form.namePh">
   ========================================================================== */

const CLARIS_I18N = {
en:{
  /* ---- brand + chrome ---- */
  "brand.name":"Claris",
  "brand.sub":"Dental Clinic",
  "brand.tagline":"Renew Your Smile With Us",
  "nav.home":"Home","nav.about":"About","nav.services":"Services",
  "nav.cases":"Case Gallery","nav.team":"Our Team","nav.contact":"Contact",
  "cta.book":"Book an appointment","cta.bookShort":"Book now",
  "cta.whatsapp":"Chat on WhatsApp","cta.call":"Call the clinic",
  "cta.viewCases":"See real results","cta.allServices":"Explore all treatments",
  "common.learnMore":"Learn more","common.before":"Before","common.after":"After",
  "common.drag":"Drag to compare",

  /* ---- home ---- */
  "home.title":"Claris Dental Clinic — Precision dentistry, beautifully done",
  "home.desc":"A modern dental clinic offering cosmetic dentistry, veneers, implants, orthodontics and general care. Book your consultation today.",
  "home.hero.eyebrow":"Dental excellence",
  "home.hero.title":"The smile you keep <em>meaning</em> to have.",
  "home.hero.lead":"Claris is a modern dental clinic built around one idea: careful, unhurried dentistry that looks natural and lasts. Digital planning, gentle treatment, and results we are proud to show you.",
  "home.hero.badgeTitle":"Rated by our patients",
  "home.hero.badgeSub":"Based on clinic reviews",
  "home.stat1n":"12+","home.stat1":"Years of practice",
  "home.stat2n":"4,000+","home.stat2":"Treatments completed",
  "home.stat3n":"100%","home.stat3":"Digitally planned cases",
  "home.hero.photo":"Clinic photo — reception or treatment room",

  "home.svc.eyebrow":"What we do",
  "home.svc.title":"Complete dental care, under one roof",
  "home.svc.lead":"From a routine cleaning to a full smile makeover, every treatment is planned digitally and explained to you before anything begins.",

  "home.why.eyebrow":"Why Claris",
  "home.why.title":"Dentistry that respects your time, your comfort and your face",
  "home.why.lead":"A beautiful result is not a set of white blocks. It is proportion, colour and function that suit you specifically — and a clinic calm enough that you actually come back.",
  "home.why.p1":"Digital smile design before we touch a tooth","home.why.p1d":"You see a preview of the result and approve it first.",
  "home.why.p2":"Sterilisation you can watch","home.why.p2d":"Sealed, single-use and autoclaved instruments, every visit.",
  "home.why.p3":"Honest treatment plans","home.why.p3d":"Written costs and stages. No surprises at the desk.",
  "home.why.p4":"Genuinely gentle","home.why.p4d":"Careful anaesthesia technique and time taken with anxious patients.",
  "home.why.photo":"Clinic photo — treatment room or equipment",

  "home.ba.eyebrow":"Before &amp; after",
  "home.ba.title":"Real cases, from this clinic",
  "home.ba.lead":"Drag the handle to compare. Every case shown here was treated by our team and published with the patient's permission.",
  "home.ba.case":"Smile makeover — porcelain veneers",

  "home.steps.eyebrow":"How it works",
  "home.steps.title":"Four steps, no guesswork",
  "home.steps.s1":"Consultation &amp; scan","home.steps.s1d":"We listen first, then examine, photograph and digitally scan. Nothing is decided in this visit except what is actually going on.",
  "home.steps.s2":"Your plan, in writing","home.steps.s2d":"You receive a staged plan with costs, timings and alternatives — including the option of doing nothing.",
  "home.steps.s3":"Treatment at your pace","home.steps.s3d":"Appointments scheduled around your life, with a preview or trial smile before anything permanent.",
  "home.steps.s4":"Aftercare that continues","home.steps.s4d":"Follow-up, hygiene recalls and a direct line to the clinic if anything feels off.",

  "home.testi.eyebrow":"Patient stories",
  "home.testi.title":"What our patients say",
  "home.testi.lead":"Placeholder reviews — we will replace these with real ones from Google and Instagram.",
  "home.testi.q1":"I had put off treatment for years because of anxiety. They explained every step and I did not feel a thing. My only regret is not coming sooner.",
  "home.testi.n1":"Patient review","home.testi.r1":"Veneers &amp; whitening",
  "home.testi.q2":"The digital preview sold me. I could see exactly what my smile would look like before agreeing to anything.",
  "home.testi.n2":"Patient review","home.testi.r2":"Smile design",
  "home.testi.q3":"Clean, calm and on time — three things I had never found in a dental clinic before.",
  "home.testi.n3":"Patient review","home.testi.r3":"Implant",

  "home.cta.title":"Ready when you are.","home.cta.lead":"Book a consultation and we will tell you honestly what you need — and what you do not.",

  /* ---- about ---- */
  "about.title":"About the clinic — Claris Dental",
  "about.desc":"Who we are, how we work, and the standards we hold ourselves to.",
  "about.eyebrow":"About us",
  "about.h1":"A small clinic, held to a high standard.",
  "about.lead":"Claris was built by clinicians who were tired of rushed appointments and results that looked obviously done. We kept the clinic small on purpose so that every case gets proper attention.",
  "about.story.title":"Our approach",
  "about.story.p1":"Good dentistry is mostly diagnosis. Before we recommend anything, we take the time to understand how you bite, how you smile, and what has happened in your mouth over the years. Treatment that ignores that is treatment that fails early.",
  "about.story.p2":"We plan digitally — intraoral scanning, photography and smile design — so you can see and approve the result before it exists. It also means our lab work is precise, and fewer appointments are wasted on adjustments.",
  "about.story.p3":"And we are honest about limits. If a simpler, cheaper option gives you 90% of the result, we will tell you. If something should be left alone, we will say so.",
  "about.photo1":"Clinic photo — reception / waiting area",
  "about.photo2":"Clinic photo — exterior or signage",

  "about.values.eyebrow":"What we hold to",
  "about.values.title":"Four things we will not compromise on",
  "about.v1":"Sterilisation","about.v1d":"Full autoclave protocol, single-use where it matters, and instrument tracking. Ask to see it — we will show you.",
  "about.v2":"Diagnosis before treatment","about.v2d":"No drilling on a hunch. Radiographs, scans and photographs come first, every time.",
  "about.v3":"Transparent pricing","about.v3d":"Written estimates before we start, and no item on the bill you have not agreed to.",
  "about.v4":"Materials we would use ourselves","about.v4d":"Named brands for implants, ceramics and composites — and we tell you which ones.",

  "about.tech.eyebrow":"Technology",
  "about.tech.title":"Equipment that earns its place",
  "about.tech.lead":"We invest in tools that change the outcome for the patient, not tools that look good in a brochure.",
  "about.t1":"Intraoral scanning","about.t1d":"Digital impressions instead of trays and putty.",
  "about.t2":"Digital radiography","about.t2d":"Lower dose imaging, viewed with you on screen.",
  "about.t3":"Digital smile design","about.t3d":"A preview of the result before treatment starts.",
  "about.t4":"Magnification","about.t4d":"Loupes and lighting for precision at the margins.",
  "about.t5":"Rotary endodontics","about.t5d":"Faster, more comfortable root canal treatment.",
  "about.t6":"Guided implantology","about.t6d":"Implants placed to a plan, not by eye.",

  /* ---- services ---- */
  "svc.title":"Treatments — Claris Dental Clinic",
  "svc.desc":"Cosmetic dentistry, veneers, implants, orthodontics, root canals, crowns and general dental care.",
  "svc.eyebrow":"Treatments",
  "svc.h1":"Every treatment, explained in plain language.",
  "svc.lead":"No jargon and no pressure. Here is what we do, what it is actually for, and roughly what to expect.",

  "svc.cos.name":"Cosmetic &amp; smile design",
  "svc.cos.desc":"Porcelain veneers, composite bonding, whitening and full smile makeovers — designed digitally and previewed before anything is prepared.",
  "svc.cos.l1":"Porcelain veneers","svc.cos.l2":"Composite bonding","svc.cos.l3":"Professional whitening","svc.cos.l4":"Smile design","svc.cos.l5":"Gum contouring",
  "svc.cos.long":"A smile makeover is an exercise in restraint. The goal is teeth that look like they were always yours — right proportion, right colour, right edge for your face and age. We start with photographs and a digital design, then a trial smile you can wear and live with before we commit to porcelain.",

  "svc.imp.name":"Implants &amp; oral surgery",
  "svc.imp.desc":"Replacing missing teeth with implants planned on a 3D scan, plus extractions, wisdom teeth and bone grafting.",
  "svc.imp.l1":"Single implants","svc.imp.l2":"Multiple &amp; full arch","svc.imp.l3":"Bone grafting","svc.imp.l4":"Wisdom teeth","svc.imp.l5":"Extractions",
  "svc.imp.long":"An implant is a titanium root that fuses with your bone and carries a crown. Placed correctly it is the closest thing to the tooth you lost. We plan the position digitally before surgery so the final crown sits where a tooth should — not where the bone happened to allow.",

  "svc.ort.name":"Orthodontics &amp; aligners",
  "svc.ort.desc":"Fixed braces and clear aligners for adults and teenagers, with a plan you can see from the first appointment.",
  "svc.ort.l1":"Clear aligners","svc.ort.l2":"Fixed braces","svc.ort.l3":"Ceramic brackets","svc.ort.l4":"Retainers","svc.ort.l5":"Bite correction",
  "svc.ort.long":"Straightening is not only cosmetic — crowded teeth are harder to clean and wear unevenly. Clear aligners suit most adult cases and are removable; fixed braces remain the more predictable choice for complex movements. We will tell you frankly which one your case needs.",

  "svc.gen.name":"General &amp; restorative",
  "svc.gen.desc":"Fillings, root canal treatment, crowns and bridges, hygiene, gum treatment and children's dentistry.",
  "svc.gen.l1":"Tooth-coloured fillings","svc.gen.l2":"Root canal treatment","svc.gen.l3":"Crowns &amp; bridges","svc.gen.l4":"Hygiene &amp; cleaning","svc.gen.l5":"Gum treatment","svc.gen.l6":"Children's dentistry",
  "svc.gen.long":"The unglamorous work that keeps everything else standing. Modern root canal treatment under magnification is routine and comfortable; a well-made crown lasts for many years; and a hygiene appointment every six months prevents most of what we would otherwise have to treat.",

  "svc.faq.title":"Common questions",
  "svc.faq.q1":"Does it hurt?","svc.faq.a1":"Almost nothing we do should hurt. Anaesthesia is given slowly with a topical gel first, and we check that you are numb before starting. If you feel anything at any point, you raise a hand and we stop.",
  "svc.faq.q2":"How much will it cost?","svc.faq.a2":"It depends entirely on what you need, which is why we do not quote before examining you. After your first visit you receive a written, itemised plan — and you are free to take it away and think about it.",
  "svc.faq.q3":"How long do veneers last?","svc.faq.a3":"Well-made porcelain veneers, looked after and protected from grinding, commonly last ten years or more. Composite bonding is cheaper and more conservative but needs refreshing sooner.",
  "svc.faq.q4":"I am very anxious about dentists. Can you help?","svc.faq.a4":"Yes, and you are not unusual. Tell us when you book. We schedule longer appointments for anxious patients, explain everything before it happens, and never start until you say you are ready.",
  "svc.faq.q5":"Do you treat children?","svc.faq.a5":"We do. Early visits are short, friendly and often involve no treatment at all — the aim is that a dental chair never becomes a frightening place.",

  /* ---- cases ---- */
  "cases.title":"Case gallery — Claris Dental Clinic",
  "cases.desc":"Before and after photographs of real treatments carried out at Claris Dental Clinic.",
  "cases.eyebrow":"Case gallery",
  "cases.h1":"Results, not promises.",
  "cases.lead":"Every case below was treated at Claris and published with the patient's consent. Drag any image to compare before and after.",
  "cases.f.all":"All cases","cases.f.cos":"Cosmetic","cases.f.imp":"Implants","cases.f.ort":"Orthodontics","cases.f.gen":"Restorative",
  "cases.c1":"Porcelain veneers — upper arch","cases.c1d":"Worn and discoloured front teeth restored with eight veneers over three visits.",
  "cases.c2":"Composite bonding — edge repair","cases.c2d":"Chipped incisal edges rebuilt in a single appointment, no drilling required.",
  "cases.c3":"Single implant — upper premolar","cases.c3d":"Implant placed to a digital plan and restored with a ceramic crown.",
  "cases.c4":"Clear aligners — 9 months","cases.c4d":"Mild crowding of the lower arch corrected without fixed braces.",
  "cases.c5":"Full smile makeover","cases.c5d":"Combined whitening, gum contouring and veneers over eight weeks.",
  "cases.c6":"Crown &amp; root canal","cases.c6d":"A heavily broken molar saved with endodontic treatment and a ceramic crown.",
  "cases.note":"Placeholder images. Every slot below is ready for the clinic's real photographs — swap the file, keep the name.",

  /* ---- team ---- */
  "team.title":"Our team — Claris Dental Clinic",
  "team.desc":"Meet the dentists and clinical team at Claris Dental Clinic.",
  "team.eyebrow":"Our team",
  "team.h1":"The people who will actually treat you.",
  "team.lead":"A small clinical team, each with a defined area — so your case is handled by the person who does it most often.",
  "team.role1":"Founder &amp; Cosmetic Dentist","team.role2":"Implantologist &amp; Oral Surgeon",
  "team.role3":"Orthodontist","team.role4":"Restorative &amp; Endodontics",
  "team.role5":"Dental Hygienist","team.role6":"Clinic Manager",
  "team.bio":"Short biography goes here — qualifications, years of experience, and the treatments this member focuses on.",
  "team.photo":"Photo of team member",
  "team.join.title":"Working with us","team.join.lead":"We occasionally have room for another dentist or hygienist who cares about doing this properly. If that is you, we would like to hear from you.",
  "team.join.btn":"Get in touch",

  /* ---- contact ---- */
  "contact.title":"Contact &amp; booking — Claris Dental Clinic",
  "contact.desc":"Book an appointment at Claris Dental Clinic, or send us a message.",
  "contact.eyebrow":"Contact",
  "contact.h1":"Book a visit.",
  "contact.lead":"Send the form and we will call you back to confirm a time, or message us directly on WhatsApp — usually the fastest way to reach us.",
  "contact.form.title":"Request an appointment",
  "contact.form.name":"Full name","contact.form.namePh":"Your name",
  "contact.form.phone":"Phone number","contact.form.phonePh":"+20 1XX XXX XXXX",
  "contact.form.email":"Email (optional)","contact.form.emailPh":"you@example.com",
  "contact.form.service":"What do you need?",
  "contact.form.s0":"Select a treatment","contact.form.s1":"Consultation / check-up","contact.form.s2":"Cosmetic &amp; veneers",
  "contact.form.s3":"Implants &amp; surgery","contact.form.s4":"Braces &amp; aligners","contact.form.s5":"Fillings, root canal or crown",
  "contact.form.s6":"Cleaning &amp; hygiene","contact.form.s7":"Children's dentistry","contact.form.s8":"Something else",
  "contact.form.date":"Preferred day","contact.form.msg":"Anything we should know?",
  "contact.form.msgPh":"Tell us briefly what is bothering you, or if you are anxious about treatment.",
  "contact.form.submit":"Send request",
  "contact.form.note":"We reply within one working day. Your details are never shared.",
  "contact.form.ok":"Thank you — your request has been noted. Please also send it to us on WhatsApp so we can confirm your time straight away.",
  "contact.info.title":"Clinic details",
  "contact.addr":"Address","contact.phone":"Phone","contact.wa":"WhatsApp","contact.email":"Email","contact.hours":"Opening hours",
  "contact.hoursVal":"Saturday – Thursday: 11:00 – 21:00<br>Friday: closed",
  "contact.map":"Map — the clinic location will be embedded here",
  "contact.parking.title":"Getting here","contact.parking.lead":"Placeholder directions — landmark, parking and the nearest metro or main road will go here once confirmed.",

  /* ---- footer ---- */
  "foot.tag":"A modern dental clinic focused on careful diagnosis, digital planning and results that look like they were always yours.",
  "foot.explore":"Explore","foot.treat":"Treatments","foot.visit":"Visit us",
  "foot.rights":"© 2026 Claris Dental Clinic. All rights reserved.",
  "foot.built":"Placeholder content — final text and photographs to be supplied by the clinic.",
  "foot.privacy":"Privacy","foot.terms":"Terms"
},

ar:{
  "brand.name":"كلاريس",
  "brand.sub":"عيادة الأسنان",
  "brand.tagline":"جدّد ابتسامتك معنا",
  "nav.home":"الرئيسية","nav.about":"عن العيادة","nav.services":"الخدمات",
  "nav.cases":"معرض الحالات","nav.team":"فريق العمل","nav.contact":"تواصل معنا",
  "cta.book":"احجز موعدك","cta.bookShort":"احجز الآن",
  "cta.whatsapp":"تواصل عبر واتساب","cta.call":"اتصل بالعيادة",
  "cta.viewCases":"شاهد نتائج حقيقية","cta.allServices":"تصفح كل العلاجات",
  "common.learnMore":"اعرف المزيد","common.before":"قبل","common.after":"بعد",
  "common.drag":"اسحب للمقارنة",

  "home.title":"عيادة كلاريس لطب الأسنان — دقة في العلاج وجمال في النتيجة",
  "home.desc":"عيادة أسنان حديثة تقدم تجميل الأسنان والفينير والزراعة والتقويم والعلاج العام. احجز استشارتك اليوم.",
  "home.hero.eyebrow":"تميّز في طب الأسنان",
  "home.hero.title":"الابتسامة التي <em>تنوي</em> الحصول عليها دائماً.",
  "home.hero.lead":"كلاريس عيادة أسنان حديثة قامت على فكرة واحدة: علاج دقيق وغير مستعجل، نتيجته طبيعية وتدوم طويلاً. تخطيط رقمي، علاج لطيف، ونتائج نفخر بعرضها عليك.",
  "home.hero.badgeTitle":"تقييم مرضانا",
  "home.hero.badgeSub":"بناءً على تقييمات العيادة",
  "home.stat1n":"+12","home.stat1":"سنة من الخبرة",
  "home.stat2n":"+4000","home.stat2":"حالة تم علاجها",
  "home.stat3n":"100%","home.stat3":"من الحالات مخططة رقمياً",
  "home.hero.photo":"صورة من العيادة — الاستقبال أو غرفة العلاج",

  "home.svc.eyebrow":"ما نقدمه",
  "home.svc.title":"رعاية متكاملة للأسنان تحت سقف واحد",
  "home.svc.lead":"من التنظيف الدوري إلى تجميل الابتسامة بالكامل، كل علاج يُخطط رقمياً ويُشرح لك بالتفصيل قبل أن نبدأ.",

  "home.why.eyebrow":"لماذا كلاريس",
  "home.why.title":"طب أسنان يحترم وقتك وراحتك وملامح وجهك",
  "home.why.lead":"النتيجة الجميلة ليست صفاً من الأسنان البيضاء المتشابهة، بل تناسق في المقاس واللون والوظيفة يناسبك أنت تحديداً — وعيادة هادئة تجعلك تعود إليها بارتياح.",
  "home.why.p1":"تصميم رقمي للابتسامة قبل لمس أي سن","home.why.p1d":"ترى النتيجة المتوقعة وتوافق عليها أولاً.",
  "home.why.p2":"تعقيم يمكنك رؤيته بنفسك","home.why.p2d":"أدوات معقمة ومغلفة وأخرى تُستخدم لمرة واحدة، في كل زيارة.",
  "home.why.p3":"خطة علاج واضحة وصادقة","home.why.p3d":"التكلفة والمراحل مكتوبة مسبقاً. لا مفاجآت عند الحساب.",
  "home.why.p4":"لطف حقيقي في التعامل","home.why.p4d":"تقنية تخدير دقيقة ووقت كافٍ للمرضى الذين يشعرون بالقلق.",
  "home.why.photo":"صورة من العيادة — غرفة العلاج أو الأجهزة",

  "home.ba.eyebrow":"قبل وبعد",
  "home.ba.title":"حالات حقيقية من داخل العيادة",
  "home.ba.lead":"اسحب المؤشر للمقارنة. كل حالة معروضة هنا عالجها فريقنا ونُشرت بموافقة المريض.",
  "home.ba.case":"تجميل الابتسامة — فينير بورسلين",

  "home.steps.eyebrow":"كيف نعمل",
  "home.steps.title":"أربع خطوات واضحة، بلا تخمين",
  "home.steps.s1":"الاستشارة والمسح الرقمي","home.steps.s1d":"نستمع إليك أولاً، ثم نفحص ونصوّر ونأخذ مسحاً رقمياً. لا يُتخذ أي قرار في هذه الزيارة سوى معرفة حالتك بدقة.",
  "home.steps.s2":"خطتك مكتوبة","home.steps.s2d":"تستلم خطة مقسمة إلى مراحل بتكاليفها وأوقاتها والبدائل المتاحة — بما فيها خيار عدم التدخل.",
  "home.steps.s3":"العلاج على راحتك","home.steps.s3d":"مواعيد تناسب جدولك، مع ابتسامة تجريبية تراها قبل أي خطوة دائمة.",
  "home.steps.s4":"متابعة لا تنتهي","home.steps.s4d":"مواعيد متابعة وتنظيف دوري، وتواصل مباشر مع العيادة إن شعرت بأي شيء غير مريح.",

  "home.testi.eyebrow":"آراء المرضى",
  "home.testi.title":"ماذا يقول مرضانا",
  "home.testi.lead":"آراء مبدئية سنستبدلها بتقييمات حقيقية من جوجل وإنستجرام.",
  "home.testi.q1":"أجّلت العلاج سنوات بسبب الخوف. شرحوا لي كل خطوة ولم أشعر بشيء. ندمي الوحيد أنني لم آتِ من قبل.",
  "home.testi.n1":"تقييم مريض","home.testi.r1":"فينير وتبييض",
  "home.testi.q2":"التصميم الرقمي هو ما أقنعني. رأيت شكل ابتسامتي بالضبط قبل الموافقة على أي شيء.",
  "home.testi.n2":"تقييم مريض","home.testi.r2":"تصميم ابتسامة",
  "home.testi.q3":"نظافة وهدوء والتزام بالمواعيد — ثلاثة أشياء لم أجدها معاً في عيادة أسنان من قبل.",
  "home.testi.n3":"تقييم مريض","home.testi.r3":"زراعة سن",

  "home.cta.title":"جاهزون حين تكون أنت جاهزاً.","home.cta.lead":"احجز استشارة وسنخبرك بصدق بما تحتاجه فعلاً — وبما لا تحتاجه.",

  "about.title":"عن العيادة — كلاريس لطب الأسنان",
  "about.desc":"من نحن، وكيف نعمل، والمعايير التي نلتزم بها.",
  "about.eyebrow":"عن العيادة",
  "about.h1":"عيادة صغيرة، بمعايير عالية.",
  "about.lead":"أسّس كلاريس أطباء سئموا من المواعيد المستعجلة والنتائج التي يظهر عليها التصنّع. أبقينا العيادة صغيرة عن قصد، لتأخذ كل حالة حقها من الاهتمام.",
  "about.story.title":"منهجنا في العلاج",
  "about.story.p1":"طب الأسنان الجيد تشخيص في المقام الأول. قبل أن نوصي بأي شيء، نأخذ وقتنا لفهم طريقة إطباقك وابتسامتك وما مرّ بفمك عبر السنين. العلاج الذي يتجاهل ذلك هو علاج يفشل مبكراً.",
  "about.story.p2":"نخطط رقمياً — مسح داخل الفم وتصوير وتصميم للابتسامة — لتتمكن من رؤية النتيجة والموافقة عليها قبل وجودها. هذا أيضاً يجعل عمل المعمل أدق ويوفر مواعيد كانت ستضيع في التعديلات.",
  "about.story.p3":"ونحن صادقون بشأن الحدود. إن كان هناك خيار أبسط وأقل تكلفة يمنحك 90% من النتيجة، سنخبرك به. وإن كان الأفضل ترك الأمر كما هو، سنقول ذلك.",
  "about.photo1":"صورة من العيادة — الاستقبال أو صالة الانتظار",
  "about.photo2":"صورة من العيادة — الواجهة أو اللافتة",

  "about.values.eyebrow":"ما نلتزم به",
  "about.values.title":"أربعة أمور لا نتهاون فيها",
  "about.v1":"التعقيم","about.v1d":"بروتوكول تعقيم كامل بالأوتوكلاف، وأدوات تُستخدم لمرة واحدة حيث يلزم، مع تتبّع للأدوات. اطلب أن ترى ذلك بنفسك.",
  "about.v2":"التشخيص قبل العلاج","about.v2d":"لا نبدأ العلاج بالتخمين. الأشعة والمسح والصور تأتي أولاً، في كل مرة.",
  "about.v3":"شفافية في الأسعار","about.v3d":"تقدير مكتوب قبل البدء، ولا بند في الفاتورة لم توافق عليه.",
  "about.v4":"مواد نستخدمها لأنفسنا","about.v4d":"ماركات معروفة في الزراعة والسيراميك والحشوات — ونخبرك باسم ما نستخدمه.",

  "about.tech.eyebrow":"التقنيات",
  "about.tech.title":"أجهزة تستحق وجودها",
  "about.tech.lead":"نستثمر في الأدوات التي تغيّر نتيجة المريض فعلاً، لا في الأدوات التي تبدو جيدة في الإعلانات.",
  "about.t1":"المسح داخل الفم","about.t1d":"طبعات رقمية بدلاً من القوالب والعجينة.",
  "about.t2":"الأشعة الرقمية","about.t2d":"جرعة إشعاع أقل، وصور نراجعها معك على الشاشة.",
  "about.t3":"تصميم الابتسامة رقمياً","about.t3d":"معاينة للنتيجة قبل بدء العلاج.",
  "about.t4":"التكبير البصري","about.t4d":"عدسات وإضاءة للدقة عند الحواف.",
  "about.t5":"علاج الجذور الآلي","about.t5d":"حشو عصب أسرع وأكثر راحة.",
  "about.t6":"الزراعة الموجّهة","about.t6d":"زراعة وفق خطة محسوبة، لا بالتقدير البصري.",

  "svc.title":"العلاجات — عيادة كلاريس لطب الأسنان",
  "svc.desc":"تجميل الأسنان والفينير والزراعة والتقويم وحشو العصب والتيجان والرعاية العامة.",
  "svc.eyebrow":"العلاجات",
  "svc.h1":"كل علاج، مشروح بلغة بسيطة.",
  "svc.lead":"بلا مصطلحات معقدة وبلا ضغط. هذا ما نقدمه، ولماذا نقدمه، وما الذي تتوقعه تقريباً.",

  "svc.cos.name":"التجميل وتصميم الابتسامة",
  "svc.cos.desc":"فينير البورسلين، والحشوات التجميلية، والتبييض، وتجميل الابتسامة كاملة — بتصميم رقمي ومعاينة قبل أي تحضير.",
  "svc.cos.l1":"فينير بورسلين","svc.cos.l2":"حشوات تجميلية","svc.cos.l3":"تبييض احترافي","svc.cos.l4":"تصميم ابتسامة","svc.cos.l5":"تحديد اللثة",
  "svc.cos.long":"تجميل الابتسامة فنّ ضبط النفس. الهدف أسنان تبدو وكأنها كانت لك دائماً — مقاس مناسب ولون مناسب وحافة تناسب وجهك وعمرك. نبدأ بالتصوير والتصميم الرقمي، ثم ابتسامة تجريبية تعيش بها وتجربها قبل أن نلتزم بالبورسلين.",

  "svc.imp.name":"الزراعة وجراحة الفم",
  "svc.imp.desc":"تعويض الأسنان المفقودة بزراعة مخططة على مسح ثلاثي الأبعاد، إضافة إلى الخلع وضروس العقل وترقيع العظم.",
  "svc.imp.l1":"زراعة سن واحد","svc.imp.l2":"زراعة متعددة وفك كامل","svc.imp.l3":"ترقيع العظم","svc.imp.l4":"ضروس العقل","svc.imp.l5":"الخلع الجراحي",
  "svc.imp.long":"الزرعة جذر من التيتانيوم يلتحم بعظمك ويحمل التاج. إن وُضعت بشكل صحيح فهي أقرب ما يكون للسن الذي فقدته. نخطط موضعها رقمياً قبل الجراحة ليجلس التاج النهائي حيث ينبغي أن يكون السن — لا حيث سمح العظم مصادفة.",

  "svc.ort.name":"التقويم والمصففات الشفافة",
  "svc.ort.desc":"تقويم ثابت ومصففات شفافة للبالغين والمراهقين، بخطة واضحة من الموعد الأول.",
  "svc.ort.l1":"مصففات شفافة","svc.ort.l2":"تقويم ثابت","svc.ort.l3":"براكيت سيراميك","svc.ort.l4":"مثبتات","svc.ort.l5":"تصحيح الإطباق",
  "svc.ort.long":"ترتيب الأسنان ليس تجميلاً فقط — الأسنان المزدحمة أصعب في التنظيف وتتآكل بشكل غير متساوٍ. المصففات الشفافة تناسب معظم حالات البالغين وقابلة للإزالة، بينما يبقى التقويم الثابت الخيار الأدق في الحركات المعقدة. وسنخبرك بصراحة أيهما تحتاج حالتك.",

  "svc.gen.name":"العلاج العام والترميمي",
  "svc.gen.desc":"الحشوات وعلاج الجذور والتيجان والجسور والتنظيف وعلاج اللثة وطب أسنان الأطفال.",
  "svc.gen.l1":"حشوات بلون السن","svc.gen.l2":"حشو العصب","svc.gen.l3":"تيجان وجسور","svc.gen.l4":"تنظيف وتلميع","svc.gen.l5":"علاج اللثة","svc.gen.l6":"أسنان الأطفال",
  "svc.gen.long":"العمل غير اللامع الذي يُبقي كل شيء آخر قائماً. حشو العصب الحديث تحت التكبير إجراء روتيني ومريح؛ والتاج المصنوع جيداً يدوم سنوات طويلة؛ وموعد تنظيف كل ستة أشهر يمنع معظم ما كنا سنضطر لعلاجه لاحقاً.",

  "svc.faq.title":"أسئلة متكررة",
  "svc.faq.q1":"هل العلاج مؤلم؟","svc.faq.a1":"لا شيء نفعله تقريباً ينبغي أن يؤلم. يُعطى التخدير ببطء بعد جل موضعي، ونتأكد من تخدّرك تماماً قبل البدء. وإن شعرت بأي شيء في أي لحظة، ترفع يدك ونتوقف.",
  "svc.faq.q2":"كم ستكون التكلفة؟","svc.faq.a2":"تعتمد كلياً على ما تحتاجه، ولهذا لا نحدد سعراً قبل الفحص. بعد زيارتك الأولى تستلم خطة مكتوبة ومفصّلة، ولك أن تأخذها وتفكر فيها براحتك.",
  "svc.faq.q3":"كم يدوم الفينير؟","svc.faq.a3":"فينير البورسلين المصنوع جيداً، مع العناية به وحمايته من الجز على الأسنان، يدوم عادة عشر سنوات أو أكثر. أما الحشوات التجميلية فأقل تكلفة وأكثر تحفظاً لكنها تحتاج تجديداً أسرع.",
  "svc.faq.q4":"أخاف كثيراً من طبيب الأسنان، هل يمكنكم مساعدتي؟","svc.faq.a4":"نعم، ولست استثناءً. أخبرنا عند الحجز. نخصص مواعيد أطول للمرضى القلقين، ونشرح كل خطوة قبل حدوثها، ولا نبدأ حتى تقول إنك مستعد.",
  "svc.faq.q5":"هل تعالجون الأطفال؟","svc.faq.a5":"نعم. الزيارات الأولى قصيرة وودّية وغالباً بلا أي علاج — الهدف ألا يصبح كرسي الأسنان مكاناً مخيفاً أبداً.",

  "cases.title":"معرض الحالات — عيادة كلاريس لطب الأسنان",
  "cases.desc":"صور قبل وبعد لحالات حقيقية عولجت في عيادة كلاريس لطب الأسنان.",
  "cases.eyebrow":"معرض الحالات",
  "cases.h1":"نتائج، لا وعود.",
  "cases.lead":"كل حالة أدناه عولجت في كلاريس ونُشرت بموافقة المريض. اسحب أي صورة للمقارنة بين قبل وبعد.",
  "cases.f.all":"كل الحالات","cases.f.cos":"تجميل","cases.f.imp":"زراعة","cases.f.ort":"تقويم","cases.f.gen":"ترميم",
  "cases.c1":"فينير بورسلين — الفك العلوي","cases.c1d":"أسنان أمامية متآكلة ومتغيرة اللون أُعيد بناؤها بثمانية فينير على ثلاث زيارات.",
  "cases.c2":"حشوات تجميلية — إصلاح الحواف","cases.c2d":"حواف مكسورة أُعيد بناؤها في موعد واحد، بدون أي برد للأسنان.",
  "cases.c3":"زراعة سن — ضاحك علوي","cases.c3d":"زرعة وُضعت وفق خطة رقمية ورُكّب عليها تاج سيراميك.",
  "cases.c4":"مصففات شفافة — 9 أشهر","cases.c4d":"ازدحام بسيط في الفك السفلي صُحّح دون تقويم ثابت.",
  "cases.c5":"تجميل ابتسامة كامل","cases.c5d":"تبييض وتحديد لثة وفينير على مدى ثمانية أسابيع.",
  "cases.c6":"تاج بعد حشو عصب","cases.c6d":"ضرس متهدم أُنقذ بعلاج الجذور وتاج سيراميك.",
  "cases.note":"صور مبدئية. كل مكان هنا جاهز لصور العيادة الحقيقية — استبدل الملف واحتفظ بالاسم نفسه.",

  "team.title":"فريق العمل — عيادة كلاريس لطب الأسنان",
  "team.desc":"تعرّف على أطباء وفريق عيادة كلاريس لطب الأسنان.",
  "team.eyebrow":"فريق العمل",
  "team.h1":"من سيتولى علاجك فعلاً.",
  "team.lead":"فريق طبي صغير، لكل عضو فيه تخصص واضح — لتُعالج حالتك على يد من يمارسها أكثر من غيره.",
  "team.role1":"المؤسِّسة وطبيبة تجميل الأسنان","team.role2":"أخصائي الزراعة وجراحة الفم",
  "team.role3":"أخصائي التقويم","team.role4":"الترميم وعلاج الجذور",
  "team.role5":"أخصائية صحة الفم","team.role6":"مديرة العيادة",
  "team.bio":"نبذة قصيرة هنا — المؤهلات وسنوات الخبرة والعلاجات التي يتخصص فيها هذا العضو.",
  "team.photo":"صورة عضو الفريق",
  "team.join.title":"العمل معنا","team.join.lead":"أحياناً يكون لدينا مكان لطبيب أو أخصائية صحة فم يهتم بأداء هذا العمل كما ينبغي. إن كنت كذلك، يسعدنا أن نسمع منك.",
  "team.join.btn":"تواصل معنا",

  "contact.title":"تواصل واحجز — عيادة كلاريس لطب الأسنان",
  "contact.desc":"احجز موعدك في عيادة كلاريس لطب الأسنان، أو أرسل لنا رسالة.",
  "contact.eyebrow":"تواصل معنا",
  "contact.h1":"احجز زيارتك.",
  "contact.lead":"أرسل النموذج وسنعاود الاتصال بك لتأكيد الموعد، أو راسلنا مباشرة على واتساب — وهو عادة أسرع طريقة للوصول إلينا.",
  "contact.form.title":"طلب موعد",
  "contact.form.name":"الاسم بالكامل","contact.form.namePh":"اسمك",
  "contact.form.phone":"رقم الهاتف","contact.form.phonePh":"+20 1XX XXX XXXX",
  "contact.form.email":"البريد الإلكتروني (اختياري)","contact.form.emailPh":"you@example.com",
  "contact.form.service":"ما الذي تحتاجه؟",
  "contact.form.s0":"اختر العلاج","contact.form.s1":"استشارة / كشف","contact.form.s2":"تجميل وفينير",
  "contact.form.s3":"زراعة وجراحة","contact.form.s4":"تقويم ومصففات","contact.form.s5":"حشو أو عصب أو تاج",
  "contact.form.s6":"تنظيف وتلميع","contact.form.s7":"أسنان الأطفال","contact.form.s8":"شيء آخر",
  "contact.form.date":"اليوم المفضل","contact.form.msg":"هل هناك ما ينبغي أن نعرفه؟",
  "contact.form.msgPh":"أخبرنا باختصار بما يزعجك، أو إن كنت تشعر بالقلق من العلاج.",
  "contact.form.submit":"إرسال الطلب",
  "contact.form.note":"نرد خلال يوم عمل واحد. بياناتك لا تُشارك مع أي جهة.",
  "contact.form.ok":"شكراً لك — تم تسجيل طلبك. من فضلك أرسله لنا أيضاً على واتساب لنؤكد موعدك فوراً.",
  "contact.info.title":"بيانات العيادة",
  "contact.addr":"العنوان","contact.phone":"الهاتف","contact.wa":"واتساب","contact.email":"البريد الإلكتروني","contact.hours":"مواعيد العمل",
  "contact.hoursVal":"السبت إلى الخميس: من 11 صباحاً حتى 9 مساءً<br>الجمعة: مغلق",
  "contact.map":"الخريطة — سيتم تضمين موقع العيادة هنا",
  "contact.parking.title":"كيف تصل إلينا","contact.parking.lead":"وصف مبدئي للطريق — العلامة المميزة وأماكن الانتظار وأقرب مترو أو طريق رئيسي ستوضع هنا بعد التأكيد.",

  "foot.tag":"عيادة أسنان حديثة تركز على دقة التشخيص والتخطيط الرقمي ونتائج تبدو وكأنها كانت لك دائماً.",
  "foot.explore":"تصفح","foot.treat":"العلاجات","foot.visit":"زُرنا",
  "foot.rights":"© 2026 عيادة كلاريس لطب الأسنان. جميع الحقوق محفوظة.",
  "foot.built":"محتوى مبدئي — النصوص والصور النهائية ستوفرها العيادة.",
  "foot.privacy":"الخصوصية","foot.terms":"الشروط"
}
};

/* ==========================  ENGINE  ===================================== */
(function(){
  const STORE='claris-lang';
  const get=()=>{try{return localStorage.getItem(STORE)}catch(e){return null}};
  const set=v=>{try{localStorage.setItem(STORE,v)}catch(e){}};

  function apply(lang){
    const d=CLARIS_I18N[lang]||CLARIS_I18N.en;
    const html=document.documentElement;
    html.lang=lang;
    html.dir=(lang==='ar')?'rtl':'ltr';

    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const v=d[el.getAttribute('data-i18n')];
      if(v!==undefined) el.innerHTML=v;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(el=>{
      el.getAttribute('data-i18n-attr').split(';').forEach(pair=>{
        const [attr,key]=pair.split(':');
        if(!attr||!key) return;
        const v=d[key.trim()];
        if(v!==undefined) el.setAttribute(attr.trim(),v.replace(/&amp;/g,'&'));
      });
    });
    const t=document.querySelector('title[data-i18n]');
    if(t) document.title=t.textContent;

    document.querySelectorAll('[data-lang-btn]').forEach(b=>{
      b.classList.toggle('is-on',b.getAttribute('data-lang-btn')===lang);
      b.setAttribute('aria-pressed',b.getAttribute('data-lang-btn')===lang);
    });
    document.dispatchEvent(new CustomEvent('claris:lang',{detail:{lang}}));
  }

  function init(){
    let lang=get();
    if(!lang){
      lang=(navigator.language||'en').toLowerCase().startsWith('ar')?'ar':'en';
    }
    apply(lang);
    document.querySelectorAll('[data-lang-btn]').forEach(b=>{
      b.addEventListener('click',()=>{
        const l=b.getAttribute('data-lang-btn');
        set(l);apply(l);
      });
    });
  }

  window.CLARIS_APPLY_LANG=function(){apply(get()||document.documentElement.lang||'en');};

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init);
  else init();
})();
