<script>
  import { onMount } from 'svelte';
   import {gsap} from 'gsap';
</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">


<section class="AboutUs">

  <div class="AboutUs-header">
    <span class="AboutUs-eyebrow">Who we are</span>
    <h1>About Us</h1>
  </div>

  <div class="AboutUs-body">

    <div class="AboutUs-lead">
    <img src="ARKLINE LOGO.jpg" alt="ARKLINE Logo" width="50" height="50" />
      <p>ARKLINE RESEARCH is an independent maritime intelligence platform focused on delivering practical insights into freight markets, commercial shipping risk, and the forces shaping global trade.</p>
    </div>

    <div class="AboutUs-divider-v"></div>

    <div class="AboutUs-paragraphs">
      <h1><i class="fa-solid fa-magnifying-glass-dollar"></i>
        Analysis</h1>
      <p>At ARKLINE RESEARCH, analysis goes beyond reporting freight market movements — it focuses on understanding the commercial implications behind them.
We examine the operational, contractual, and market forces that influence freight performance, helping maritime professionals identify risks, interpret market signals, and make informed commercial decisions.
Our analysis covers key areas including freight volatility, voyage economics, demurrage exposure, port inefficiencies, charter party risks, and the impact of geopolitical developments on trade flows.
By connecting market events with commercial outcomes, ARKLINE RESEARCH delivers practical intelligence that helps industry stakeholders respond with greater speed, clarity, and confidence.
In an industry where margins are sensitive to delays, disruptions, and shifting market conditions, meaningful analysis is essential for reducing uncertainty and improving decision quality.
ARKLINE RESEARCH exists to transform complex freight data into actionable commercial insight.
</p>
      <br>
      <h1><i class="fa-solid fa-helmet-un"></i>
        Mission</h1>
      <p>To deliver practical freight market intelligence, commercial shipping insights, and risk-focused analysis that help industry professionals navigate volatility, improve decision-making, and unlock greater operational and commercial efficiency.</p>
      <br>
      <h1><i class="fa-solid fa-bullseye"></i>
        Goals</h1>
      <p>Our goal is to provide decision-makers across the maritime and commodity trading ecosystem with research that goes beyond reporting events. We focus on interpreting what market changes mean, where commercial risks are emerging, and how businesses can respond with greater clarity.</p>
      <br>
      <h1><i class="fa-solid fa-eye"></i>
        Vision</h1>
      <p>To become the leading intelligence platform empowering the maritime and commodity trading industry with actionable insights for smarter, faster, and more confident commercial decisions.</p>
    </div>
    </div>
  </section>

  
   <section class="AboutFounder">

  <div class="AboutFounder-header">
    <span class="AboutFounder-eyebrow"><span>The mind behind ARKLINE</span></span>
    <h1>About the Founder</h1>
  </div>

  <div class="AboutFounder-body">

  <div class="AboutFounder-sidebar">

    <div class="AboutFounder-avatar">
      <img src="Deepak.jpeg" alt="Deepak Chelladurai" />
    </div>

    <div class="AboutFounder-meta">
      <span class="AboutFounder-name">Deepak Chelladurai</span>
      <span class="AboutFounder-title">Founder, ARKLINE RESEARCH</span>
    </div>

   

  </div>

  <div class="AboutFounder-divider-v"></div>

  <div class="AboutFounder-content">
    <p class="AboutFounder-lead">ARKLINE RESEARCH was founded by Deepak Chelladurai, a commercial shipping professional with over 14 years of experience across tanker chartering and operations, freight markets, demurrage, and maritime commercial strategy.</p>

    <p>Having worked closely with the commercial and operational realities of global shipping, Deepak has developed deep expertise in the areas where freight economics, operational execution, and market risk intersect. Throughout his career, he has seen how critical commercial decisions are often made in environments shaped by uncertainty — from port congestion and freight volatility to contractual exposure and shifting geopolitical trade patterns.</p>

    <p>ARKLINE RESEARCH was created from the belief that the shipping industry needs more than data. It needs practical intelligence that helps commercial teams interpret risk, anticipate market movements, and make better decisions.</p>

    <p>Through ARKLINE RESEARCH, Deepak combines industry experience with strategic analysis to deliver insights that are practical, commercially relevant, and aligned with the evolving needs of maritime and commodity markets. His long-term vision is to build ARKLINE into a leading freight intelligence and maritime technology platform that helps the industry navigate complexity with greater visibility and confidence.</p>
  </div>

</div>

  
  <div class="AboutUs-stats">
    <div class="AboutUs-stat">
      <span class="AboutUs-stat-number">3+</span>
      <span class="AboutUs-stat-label">Markets Covered</span>
    </div>
    <div class="AboutUs-stat">
      <span class="AboutUs-stat-number">100%</span>
      <span class="AboutUs-stat-label">Independent Research</span>
    </div>
    <div class="AboutUs-stat">
      <span class="AboutUs-stat-number">24/7</span>
      <span class="AboutUs-stat-label">Market Intelligence</span>
    </div>
    <div class="AboutUs-stat">
      <span class="AboutUs-stat-number">Global</span>
      <span class="AboutUs-stat-label">Trade Coverage</span>
    </div>
  </div>

</section>



<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

/* ══════════════════════════════════════
   DESIGN TOKENS
══════════════════════════════════════ */
:root {
  --ff-display:     'Bebas Neue', sans-serif;
  --ff-body:        'DM Sans', sans-serif;

  --color-ink:      #111111;
  --color-ink-2:    #444444;
  --color-ink-3:    #888888;
  --color-surface:  #ffffff;
  --color-raised:   #f7f7f5;
  --color-line:     #e8e8e8;
  --color-line-2:   #d0d0d0;
  --color-accent:   #111111;

  --radius-sm:      8px;
  --radius-md:      12px;
  --radius-lg:      16px;

  --ease:           cubic-bezier(0.4, 0, 0.2, 1);
  --duration:       0.22s;
  --color-line:     #ccc;
}

/* ── About Us ── */
.AboutUs {
  margin-top: 1.5rem;
  border: 0.5px solid var(--color-line);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  overflow: hidden;
  transition: background 0.25s ease, border-color 0.25s ease;
}

/* ── Header ── */
.AboutUs-header {
  padding: 3rem 3.5rem 2.5rem;
  border-bottom: 0.5px solid var(--color-line);
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.AboutUs-eyebrow {
  font-family: var(--ff-body);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--color-ink-3);
  display: flex;
  align-items: center;
  gap: 10px;
}

.AboutUs-eyebrow::before {
  content: '';
  display: inline-block;
  width: 24px;
  height: 0.5px;
  background: var(--color-line-2);
}

.AboutUs-header h1 {
  font-family: var(--ff-display);
  font-size: 52px;
  font-weight: 400;
  letter-spacing: 4px;
  color: var(--color-ink);
  line-height: 1;
  margin: 0;
}

/* ── Body ── */
.AboutUs-body {
  display: grid;
  grid-template-columns: 1fr 0.5px 1.6fr;
  gap: 0;
  padding: 3rem 0;
}

.AboutUs-lead {
  padding: 0 3.5rem;
  display: flex;
  align-items: flex-start;
}

.AboutUs-lead p {
  font-family: var(--ff-body);
  font-size: 17px;
  font-weight: 400;
  line-height: 1.85;
  color: var(--color-ink);
  margin: 0;
  letter-spacing: 0.1px;
}

.AboutUs-lead img {
  width: 50px;
  height: 50px;
  margin-right: 1.5rem;
  border-radius: 50px;
  object-fit: cover;
  border: 0.5px solid var(--color-line);
  display: block;
}

.AboutUs-divider-v {
  width: 0.5px;
  background: var(--color-line);
  align-self: stretch;
}

.AboutUs-paragraphs {
  padding: 0 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}

.AboutUs-paragraphs p {
  font-family: var(--ff-body);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.95;
  color: var(--color-ink-2);
  margin: 0;
  letter-spacing: 0.1px;
}

.AboutUs-paragraphs p:not(:last-child) {
  padding-bottom: 1.4rem;
  border-bottom: 0.5px solid var(--color-line);
}

/* ── Stats ── */
.AboutUs-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 0.5px solid var(--color-line);
}

.AboutUs-stat {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 2rem 2.5rem;
  transition: background 0.18s ease;
}

.AboutUs-stat:not(:last-child) {
  border-right: 0.5px solid var(--color-line);
}

.AboutUs-stat:hover {
  background: var(--color-raised);
}

.AboutUs-stat-number {
  font-family: var(--ff-display);
  font-size: 36px;
  font-weight: 400;
  letter-spacing: 2px;
  color: var(--color-ink);
  line-height: 1;
}

.AboutUs-stat-label {
  font-family: var(--ff-body);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: var(--color-ink-3);
  text-transform: uppercase;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .AboutUs-header {
    padding: 2rem 1.75rem 1.75rem;
  }

  .AboutUs-header h1 {
    font-size: 38px;
  }

  .AboutUs-body {
    grid-template-columns: 1fr;
    padding: 2rem 0;
    gap: 2rem;
  }

  .AboutUs-lead,
  .AboutUs-paragraphs {
    padding: 0 1.75rem;
  }

  .AboutUs-divider-v {
    display: none;
  }

  .AboutUs-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .AboutUs-stat:nth-child(2) {
    border-right: none;
  }

  .AboutUs-stat {
    padding: 1.5rem;
  }
}
/* ── Body layout ── */
.AboutFounder-body {
  display: grid;
  grid-template-columns: 320px 0.5px 1fr;
  gap: 0;
  align-items: start;
}

/* ── Sidebar ── */
.AboutFounder-sidebar {
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* ── Avatar — large portrait image ── */
.AboutFounder-avatar {
  width: 100%;
  aspect-ratio: 3 / 4;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 0.5px solid var(--color-line);
  background: var(--color-raised);
}

.AboutFounder-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  transition: transform 0.5s ease;
}

.AboutFounder-avatar:hover img {
  transform: scale(1.03);
}

/* ── Name + title ── */
.AboutFounder-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.AboutFounder-name {
  font-family: var(--ff-display);
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 2px;
  color: var(--color-ink);
}

.AboutFounder-title {
  font-family: var(--ff-body);
  font-size: 12.5px;
  font-weight: 400;
  color: var(--color-ink-3);
  font-style: italic;
  letter-spacing: 0.2px;
}


/* ── Vertical divider ── */
.AboutFounder-divider-v {
  width: 0.5px;
  background: var(--color-line);
  align-self: stretch;
}

/* ── Content ── */
.AboutFounder-content {
  padding: 3rem 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.AboutFounder-lead {
  font-family: var(--ff-body);
  font-size: 16.5px;
  font-weight: 400;
  line-height: 1.85;
  color: var(--color-ink);
  margin: 0 0 1.5rem 0;
  padding-bottom: 1.5rem;
  border-bottom: 0.5px solid var(--color-line);
  letter-spacing: 0.1px;
}

.AboutFounder-content p {
  font-family: var(--ff-body);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.95;
  color: var(--color-ink-2);
  margin: 0;
  letter-spacing: 0.1px;
}

.AboutFounder-content p:not(.AboutFounder-lead):not(:last-child) {
  padding-bottom: 1.4rem;
  margin-bottom: 1.4rem;
  border-bottom: 0.5px solid var(--color-line);
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .AboutFounder-body {
    grid-template-columns: 1fr;
  }

  .AboutFounder-sidebar {
    padding: 2rem 1.75rem;
    border-bottom: 0.5px solid var(--color-line);
  }

  .AboutFounder-avatar {
    aspect-ratio: 4 / 3;
  }

  .AboutFounder-tags {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .AboutFounder-divider-v {
    display: none;
  }

  .AboutFounder-content {
    padding: 2rem 1.75rem;
  }
}
/* ── About Founder Section ── */
.AboutFounder {
  margin-top: 1.5rem;
  border: 0.5px solid var(--color-line);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  overflow: hidden;
  transition: background 0.25s ease, border-color 0.25s ease;
}

/* ── Header ── */
.AboutFounder-header {
  padding: 3rem 3.5rem 2.5rem;
  border-bottom: 0.5px solid var(--color-line);
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

/* ── Eyebrow ── */
.AboutFounder-eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
}

.AboutFounder-eyebrow::before {
  content: '';
  display: inline-block;
  width: 24px;
  height: 0.5px;
  background: var(--color-line-2);
  flex-shrink: 0;
}

.AboutFounder-eyebrow span {
  font-family: var(--ff-body);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--color-ink-3);
}

/* ── Heading ── */
.AboutFounder-header h1 {
  font-family: var(--ff-display);
  font-size: 48px;
  font-weight: 400;
  letter-spacing: 4px;
  color: var(--color-ink);
  line-height: 1;
  margin: 0;
  transition: color 0.25s ease;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .AboutFounder-header {
    padding: 2rem 1.75rem 1.75rem;
  }

  .AboutFounder-header h1 {
    font-size: 34px;
    letter-spacing: 3px;
  }
}
</style>