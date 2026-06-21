import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bellas Artes Bakery — Pan Dulce & Custom Cakes in Federal Way, WA" },
      {
        name: "description",
        content:
          "Bellas Artes Bakery in Federal Way, WA. Pan dulce, wedding & birthday cakes, tres leches, empanadas, conchas and traditional Mexican baked goods made fresh daily.",
      },
      { property: "og:title", content: "Bellas Artes Bakery" },
      {
        property: "og:description",
        content:
          "Traditional Mexican bakery in Federal Way, WA — pan dulce, custom cakes, tres leches and more, baked fresh every day.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,600;0,800;1,500&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: BakeryLanding,
});

type Item = { name: string; price?: string; desc?: string };
type Category = { title: string; items: Item[] };

const CATEGORIES: Category[] = [
  {
    title: "Pan Dulce",
    items: [
      { name: "White Concha", price: "$1.50" },
      { name: "Pink Concha", price: "$1.50" },
      { name: "Chocolate Concha", price: "$1.50" },
      { name: "Yellow Concha", price: "$1.50" },
      { name: "Mantecada", price: "$1.99" },
      { name: "Ojo De Buey", price: "$2.50" },
      { name: "Niño Embuelto", price: "$2.00" },
    ],
  },
  {
    title: "Puff Pastry Empanadas De Ojaldre",
    items: [
      { name: "Raspberry", price: "$2.99" },
      { name: "Lemon", price: "$2.99" },
      { name: "Apple", price: "$2.99" },
      { name: "Dulce De Leche", price: "$2.99" },
    ],
  },
  {
    title: "Empanadas",
    items: [
      { name: "Bavarian Cream with Sugar", price: "$1.99" },
      { name: "Strawberry", price: "$1.99" },
      { name: "Pineapple", price: "$1.99" },
    ],
  },
  {
    title: "Pan De Feite",
    items: [
      { name: "Almoada", price: "$1.99" },
      { name: "Laurel", price: "$1.99" },
      { name: "Bavarian Cream Cono", price: "$1.99" },
      { name: "Oreja", price: "$1.99" },
      { name: "Broca", price: "$1.99" },
      { name: "Strawberry Cuadro", price: "$1.99" },
      { name: "Pineapple Cuadro", price: "$1.99" },
    ],
  },
  {
    title: "Rosca de Reyes",
    items: [
      {
        name: "Rosca De Reyes — Small",
        price: "$27.00",
        desc: "Traditional crown-shaped sweet bread for Día de los Reyes Magos. Hidden figurine inside (not edible — remove before eating).",
      },
      {
        name: "Rosca De Reyes — Medium",
        price: "$45.00",
        desc: "Decorated with candied fruits. Finder of the figurine hosts a tamale party on Candlemas (Feb 2nd).",
      },
      {
        name: "Rosca De Reyes — Large",
        price: "$65.00",
        desc: "Our largest crown — perfect for big family gatherings on January 6th.",
      },
    ],
  },
  {
    title: "Cheesecake",
    items: [
      { name: "Mex Style Cheesecake Slice", price: "$3.99" },
      { name: "Chocolate / Strawberry Cheesecake Slice", price: "$3.99" },
    ],
  },
  {
    title: "Tres Leches Slice",
    items: [
      { name: "Walnuts", price: "$4.99" },
      { name: "Bavarian Cream", price: "$4.99" },
      { name: "Pineapple", price: "$4.99" },
      { name: "Guava", price: "$4.99" },
      { name: "Strawberry", price: "$4.99" },
      { name: "Dulce De Leche", price: "$4.99" },
      { name: "Raspberry", price: "$4.99" },
      { name: "Coconut", price: "$4.99" },
    ],
  },
  {
    title: "Galletas — Cookies",
    items: [
      { name: "Polvaron Sevellano Multicolor", price: "$1.50" },
      { name: "Tri Color Polvaron", price: "$1.50" },
      { name: "Yellow Polvaron", price: "$1.50" },
      { name: "Pink Polvaron", price: "$1.50" },
      { name: "Peanut Butter Polvaron", price: "$1.50" },
      { name: "Yellow Flower", price: "$1.50" },
      { name: "Pink Flower", price: "$1.50" },
      { name: "Blue Flower", price: "$1.50" },
      { name: "White Flower", price: "$1.50" },
      { name: "Happy Face Cookie", price: "$1.50" },
      { name: "Sprinkles Cookie", price: "$1.50" },
      { name: "Cinnamon Heart", price: "$1.50" },
    ],
  },
];

const HIGHLIGHTS = [
  { badge: "Popular", emoji: "🥖", title: "Pan", desc: "Daily-baked breads, warm from the oven.", color: "var(--pink)" },
  { badge: "Popular", emoji: "💍", title: "Wedding Cake", desc: "Tiered showstoppers designed with you.", color: "var(--butter)" },
  { badge: "Birthday", emoji: "🎉", title: "½ Sheet Birthday Cake", desc: "Custom flavors and themes for the big day.", color: "var(--mint)" },
  { badge: "Custom", emoji: "🎂", title: "2-Tier & Bridal Cakes", desc: "Elegant tiered cakes made to order.", color: "var(--lilac)" },
];

const REVIEWS = [
  {
    initial: "R",
    name: "Rarest Beauty",
    meta: "3 reviews · 10 months ago",
    text: "We are extremely happy with our wedding cake from here. Before going to this shop, we visited and researched many other cake places and were very disappointed by the prices. Other places charged a hefty price for a tiny cake.",
  },
  {
    initial: "D",
    name: "dzein kaeral",
    meta: "Local Guide · 1 year ago",
    text: "Went there for the 1st time for my birthday cake and the cake was perfect. So moist and yummy. My family and friends can't stop talking about it. Just the right amount of sweetness, and very affordable.",
  },
  {
    initial: "C",
    name: "Crysss",
    meta: "Local Guide · 8 months ago",
    text: "Great place for cakes and desserts! Been here for years! Wouldn't trust any other bakery — this is the best one for me.",
  },
  {
    initial: "A",
    name: "Angellina Medina",
    meta: "Local Guide · 2 years ago",
    text: "If you're looking for something sweet and cheap, I really recommend coming here and grabbing some pan dulce. So many to choose from and literally so good and so inexpensive.",
  },
  {
    initial: "V",
    name: "Vonda Walkama",
    meta: "6 reviews · 3 years ago",
    text: "They did an amazing job on this cake and it was delicious 😋 — it looks exactly like the picture we asked for and they are not overly priced. We will use this bakery again for future cakes.",
  },
];

const HOURS = [
  ["Sunday", "9 AM – 9 PM"],
  ["Monday", "9 AM – 9 PM"],
  ["Tuesday", "9 AM – 7 PM"],
  ["Wednesday", "9 AM – 7 PM"],
  ["Thursday", "9 AM – 8 PM"],
  ["Friday", "9 AM – 9 PM"],
  ["Saturday", "9 AM – 9 PM"],
] as const;

function BakeryLanding() {
  return (
    <>
      <style>{css}</style>
      <div className="bakery">
        <header className="nav">
          <div className="nav-inner">
            <div className="brand">
              <div className="brand-mark" />
              Bellas Artes Bakery
            </div>
            <ul>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#visit">Visit</a></li>
            </ul>
            <a className="btn btn-primary" href="tel:+12539460133">Call (253) 946-0133</a>
          </div>
        </header>

        <main>
          <section className="hero">
            <div className="container hero-grid">
              <div>
                <span className="eyebrow">Federal Way, WA · Family-owned</span>
                <h1>Pan dulce, cakes &amp; sweet little moments.</h1>
                <p className="lead">
                  Traditional Mexican baked goods, custom celebration cakes, and trays of warm
                  pan dulce baked fresh every day at Bellas Artes Bakery.
                </p>
                <div className="hero-cta">
                  <a className="btn btn-primary" href="#menu">See the menu</a>
                  <a className="btn btn-ghost" href="#visit">Visit the bakery</a>
                </div>
                <div className="hero-stats">
                  <div><span>★ 4.8</span><small>Loved on Google</small></div>
                  <div><span>40+</span><small>Items daily</small></div>
                  <div><span>9–9</span><small>Open late</small></div>
                </div>
              </div>
              <div className="hero-art" aria-hidden="true">
                <div className="hero-emoji">🎂</div>
              </div>
            </div>
          </section>

          <section id="highlights">
            <div className="container">
              <div className="section-head">
                <h2>Menu highlights</h2>
                <p>A few of our most-loved bakes — pulled straight off the trays.</p>
              </div>
              <div className="highlights">
                {HIGHLIGHTS.map((h, i) => (
                  <div className="hl" key={h.title} style={{ ["--hl-color" as never]: h.color } as React.CSSProperties}>
                    <span className="badge">{h.badge}</span>
                    <span className="emoji">{h.emoji}</span>
                    <h3>{h.title}</h3>
                    <p>{h.desc}</p>
                    <span className="hl-bar" aria-hidden="true" data-i={i} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="menu" style={{ paddingTop: 0 }}>
            <div className="container">
              <div className="section-head">
                <h2>Full menu</h2>
                <p>Pan dulce, specialties, cookies and more.</p>
              </div>
              <div className="menu-wrap">
                <div className="menu-source">Provided by DoorDash · updated less than a day ago</div>
                <div className="menu-grid">
                  {CATEGORIES.map((cat) => (
                    <div className="menu-cat" key={cat.title}>
                      <h3>{cat.title}</h3>
                      {cat.items.map((item) => (
                        <div className="menu-item" key={item.name}>
                          <div>
                            <span className="name">{item.name}</span>
                            {item.desc && <span className="desc">{item.desc}</span>}
                          </div>
                          {item.price && <span className="price">{item.price}</span>}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="reviews" className="reviews">
            <div className="container">
              <div className="section-head">
                <h2>What guests are saying</h2>
                <p>From wedding cakes to a quick concha on the way home.</p>
              </div>
              <div className="reviews-grid">
                {REVIEWS.map((r) => (
                  <div className="review" key={r.name}>
                    <div className="stars">★★★★★</div>
                    <p>"{r.text}"</p>
                    <div className="who">
                      <div className="avatar">{r.initial}</div>
                      <div>
                        <strong>{r.name}</strong>
                        <small>{r.meta}</small>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="review review-feature">
                  <div className="stars">★★★★★</div>
                  <p className="feature-quote">
                    "The best pan dulce in Federal Way — and the kindest people behind the counter."
                  </p>
                  <div className="who">
                    <div className="avatar avatar-rose">♡</div>
                    <div>
                      <strong>Neighborhood favorite</strong>
                      <small>Bellas Artes regulars</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="visit">
            <div className="container">
              <div className="section-head">
                <h2>Visit the bakery</h2>
                <p>Stop by for a tray of warm pan dulce or to talk about your next custom cake.</p>
              </div>
              <div className="visit-grid">
                <div className="info-card">
                  <h3>Find us</h3>
                  <div className="contact-line">
                    <div className="ic">📍</div>
                    <div>
                      <strong>Address</strong>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=29314+Pacific+Hwy+S+101A+Federal+Way+WA+98003"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        29314 Pacific Hwy S #101A
                        <br />
                        Federal Way, WA 98003
                      </a>
                    </div>
                  </div>
                  <div className="contact-line">
                    <div className="ic">📞</div>
                    <div>
                      <strong>Phone</strong>
                      <a href="tel:+12539460133">(253) 946-0133</a>
                    </div>
                  </div>
                  <div className="contact-line">
                    <div className="ic">🎂</div>
                    <div>
                      <strong>Custom cakes</strong>
                      Call ahead for wedding, birthday, and bridal cakes — we love a good project.
                    </div>
                  </div>
                </div>
                <div className="info-card">
                  <h3>Hours</h3>
                  <p>Open 7 days a week.</p>
                  <ul className="hours">
                    {HOURS.map(([day, time]) => (
                      <li key={day}>
                        <span>{day}</span>
                        <span>{time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <div className="container">
            <div className="brand brand-footer">
              <div className="brand-mark" /> Bellas Artes Bakery
            </div>
            <p>29314 Pacific Hwy S #101A, Federal Way, WA · (253) 946-0133</p>
            <p className="small">© Bellas Artes Bakery. Baked with love every day.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

const css = `
.bakery{
  --cream:#fff7ee;
  --blush:#fde2e4;
  --pink:#f7c5cc;
  --rose:#e8889a;
  --rose-deep:#b85c6f;
  --mint:#cdeac0;
  --butter:#ffe9b0;
  --lilac:#e2d4f0;
  --ink:#3b2a2f;
  --muted:#7a6b6f;
  --line:rgba(59,42,47,.10);
  --shadow:0 10px 30px rgba(184,92,111,.12);
  --radius:18px;
  font-family:'Inter',system-ui,sans-serif;
  color:var(--ink);
  background:var(--cream);
  line-height:1.55;
  -webkit-font-smoothing:antialiased;
}
.bakery *{box-sizing:border-box}
.bakery h1,.bakery h2,.bakery h3,.bakery h4{font-family:'Fraunces',Georgia,serif;font-weight:600;letter-spacing:-.01em;margin:0 0 .4em}
.bakery h1{font-size:clamp(2.4rem,5vw,4.2rem);line-height:1.05;font-weight:800}
.bakery h2{font-size:clamp(1.8rem,3vw,2.6rem)}
.bakery h3{font-size:1.25rem}
.bakery p{margin:0 0 1em}
.bakery a{color:var(--rose-deep);text-decoration:none}
.bakery a:hover{text-decoration:underline}
.bakery .container{max-width:1160px;margin:0 auto;padding:0 24px}

.bakery .nav{position:sticky;top:0;z-index:50;background:rgba(255,247,238,.85);backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
.bakery .nav-inner{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:16px 24px;max-width:1160px;margin:0 auto}
.bakery .brand{display:flex;align-items:center;gap:10px;font-family:'Fraunces',serif;font-weight:700;font-size:1.15rem}
.bakery .brand-mark{width:36px;height:36px;border-radius:50%;background:radial-gradient(circle at 30% 30%,#fff,var(--pink) 60%,var(--rose));box-shadow:var(--shadow)}
.bakery .nav ul{display:flex;gap:28px;list-style:none;margin:0;padding:0;font-size:.95rem}
.bakery .nav ul a{color:var(--ink)}
.bakery .btn{display:inline-block;padding:12px 22px;border-radius:999px;font-weight:600;font-size:.95rem;transition:transform .15s ease,box-shadow .15s ease;cursor:pointer}
.bakery .btn-primary{background:var(--rose-deep);color:#fff}
.bakery .btn-primary:hover{transform:translateY(-1px);box-shadow:var(--shadow);text-decoration:none}
.bakery .btn-ghost{background:#fff;color:var(--ink);border:1px solid var(--line)}
@media(max-width:780px){ .bakery .nav ul{display:none} }

.bakery .hero{padding:80px 0 90px;position:relative;overflow:hidden}
.bakery .hero-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:60px;align-items:center}
.bakery .eyebrow{display:inline-block;background:var(--lilac);color:#5a3f7a;padding:6px 14px;border-radius:999px;font-size:.8rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase;margin-bottom:20px}
.bakery .hero p.lead{font-size:1.15rem;color:var(--muted);max-width:46ch;margin-bottom:28px}
.bakery .hero-cta{display:flex;gap:12px;flex-wrap:wrap}
.bakery .hero-stats{display:flex;gap:32px;margin-top:42px;padding-top:28px;border-top:1px dashed var(--line);flex-wrap:wrap}
.bakery .hero-stats div span{display:block;font-family:'Fraunces',serif;font-size:1.6rem;color:var(--rose-deep);font-weight:700}
.bakery .hero-stats div small{color:var(--muted);font-size:.85rem}
.bakery .hero-art{position:relative;aspect-ratio:1/1;border-radius:50%;background:radial-gradient(circle at 30% 25%,#fff 0,var(--blush) 35%,var(--pink) 70%,var(--rose) 100%);box-shadow:0 30px 80px rgba(184,92,111,.25);display:flex;align-items:center;justify-content:center}
.bakery .hero-art::before,.bakery .hero-art::after{content:"";position:absolute;border-radius:50%}
.bakery .hero-art::before{width:120px;height:120px;background:var(--mint);top:-20px;right:30px;box-shadow:var(--shadow)}
.bakery .hero-art::after{width:90px;height:90px;background:var(--butter);bottom:10px;left:-10px;box-shadow:var(--shadow)}
.bakery .hero-emoji{font-size:8rem;filter:drop-shadow(0 8px 20px rgba(0,0,0,.15))}
@media(max-width:880px){ .bakery .hero-grid{grid-template-columns:1fr} .bakery .hero-art{max-width:360px;margin:0 auto} }

.bakery section{padding:80px 0}
.bakery .section-head{text-align:center;max-width:640px;margin:0 auto 50px}
.bakery .section-head p{color:var(--muted)}

.bakery .highlights{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.bakery .hl{background:#fff;border-radius:var(--radius);padding:24px;box-shadow:var(--shadow);position:relative;overflow:hidden}
.bakery .hl::before{content:"";position:absolute;inset:0 0 auto 0;height:6px;background:var(--hl-color,var(--pink))}
.bakery .hl .emoji{font-size:2.2rem;display:block;margin:8px 0 14px}
.bakery .badge{display:inline-block;background:var(--blush);color:var(--rose-deep);font-size:.72rem;font-weight:700;padding:3px 10px;border-radius:999px;letter-spacing:.04em;text-transform:uppercase}
.bakery .hl h3{margin:6px 0 4px;font-size:1.1rem}
.bakery .hl p{font-size:.9rem;color:var(--muted);margin:0}
@media(max-width:880px){ .bakery .highlights{grid-template-columns:repeat(2,1fr)} }

.bakery .menu-wrap{background:linear-gradient(180deg,#fff,var(--blush) 100%);border-radius:28px;padding:50px 40px;box-shadow:var(--shadow)}
.bakery .menu-source{text-align:center;color:var(--muted);font-size:.85rem;margin-bottom:30px}
.bakery .menu-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:40px}
.bakery .menu-cat h3{font-family:'Fraunces',serif;font-size:1.3rem;margin-bottom:14px;padding-bottom:10px;border-bottom:2px dotted var(--pink);color:var(--rose-deep)}
.bakery .menu-item{display:flex;justify-content:space-between;gap:16px;padding:10px 0;border-bottom:1px solid var(--line)}
.bakery .menu-item:last-child{border-bottom:none}
.bakery .menu-item .name{font-weight:500}
.bakery .menu-item .price{color:var(--rose-deep);font-weight:600;white-space:nowrap;font-variant-numeric:tabular-nums}
.bakery .menu-item .desc{display:block;font-size:.82rem;color:var(--muted);margin-top:4px;font-style:italic;max-width:46ch}
@media(max-width:780px){ .bakery .menu-grid{grid-template-columns:1fr} .bakery .menu-wrap{padding:30px 20px} }

.bakery .reviews{background:var(--lilac)}
.bakery .reviews-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.bakery .review{background:#fff;border-radius:var(--radius);padding:26px;box-shadow:0 6px 20px rgba(90,63,122,.08);display:flex;flex-direction:column}
.bakery .review-feature{background:var(--butter)}
.bakery .feature-quote{font-family:'Fraunces',serif;font-size:1.15rem;font-style:italic}
.bakery .stars{color:#e8a93a;letter-spacing:2px;margin-bottom:10px}
.bakery .review p{font-size:.95rem;color:#4a3a3f;flex:1}
.bakery .review .who{display:flex;align-items:center;gap:12px;margin-top:18px;padding-top:16px;border-top:1px solid var(--line)}
.bakery .avatar{width:40px;height:40px;border-radius:50%;background:var(--pink);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:600;font-family:'Fraunces',serif}
.bakery .avatar-rose{background:var(--rose-deep)}
.bakery .review .who small{display:block;color:var(--muted);font-size:.78rem}
@media(max-width:880px){ .bakery .reviews-grid{grid-template-columns:1fr} }

.bakery .visit-grid{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start}
.bakery .info-card{background:#fff;border-radius:var(--radius);padding:32px;box-shadow:var(--shadow)}
.bakery .info-card h3{color:var(--rose-deep);margin-bottom:6px}
.bakery .info-card p{margin:0 0 18px;color:var(--muted)}
.bakery .hours{list-style:none;padding:0;margin:0}
.bakery .hours li{display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px dashed var(--line);font-size:.95rem}
.bakery .hours li:last-child{border-bottom:none}
.bakery .hours li span:first-child{color:var(--ink);font-weight:500}
.bakery .contact-line{display:flex;align-items:flex-start;gap:14px;margin-bottom:18px}
.bakery .contact-line .ic{width:38px;height:38px;border-radius:10px;background:var(--blush);display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0}
.bakery .contact-line strong{display:block;margin-bottom:2px}
.bakery .contact-line a{color:var(--ink)}
@media(max-width:880px){ .bakery .visit-grid{grid-template-columns:1fr} }

.bakery footer{background:var(--ink);color:#f7e3e7;padding:50px 0 30px;text-align:center}
.bakery .brand-footer{justify-content:center;color:#fff;display:inline-flex}
.bakery footer p{color:#d6bfc4;font-size:.9rem;margin-top:12px}
.bakery footer .small{font-size:.78rem;color:#a7929a;margin-top:24px}
`;
