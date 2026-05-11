<script>
  import { onMount } from 'svelte';
   import {gsap} from 'gsap';
</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
</svelte:head>


<section class="AboutUs">

  <div class="AboutUs-header">
    <span class="AboutUs-eyebrow">Who we are</span>
    <h1>About <em>Us</em></h1>
    <div class="AboutUs-header-line"></div>
  </div>

  <div class="AboutUs-body">

    <div class="AboutUs-lead">
      <div class="AboutUs-lead-logo">
        <img src="arkline-logo.jpg" alt="Arkline Logo" />
      </div>
      <div class="AboutUs-lead-text">
        <p class="lead-main">ARKLINE RESEARCH is an independent maritime intelligence platform focused on delivering practical insights into freight markets, commercial shipping risk, and the forces shaping global trade.</p>
      </div>
      <div class="AboutUs-lead-accent"></div>
    </div>

    <div class="AboutUs-pillars">
      <div class="pillar-card">
        <div class="pillar-icon-wrap">
          <i class="fa-solid fa-magnifying-glass-dollar"></i>
        </div>
        <div class="pillar-body">
          <span class="pillar-label"><h1>Analysis</h1></span>
          <p>Beyond reporting freight movements — we examine commercial implications, voyage economics, demurrage exposure, and geopolitical impacts on trade flows.</p>
        </div>
        <div class="pillar-index">01</div>
      </div>

      <div class="pillar-card">
        <div class="pillar-icon-wrap">
          <i class="fa-solid fa-helmet-un"></i>
        </div>
        <div class="pillar-body">
          <span class="pillar-label"><h1>Mission</h1></span>
          <p>To deliver practical freight market intelligence and risk-focused analysis that helps professionals navigate volatility and improve commercial decision-making.</p>
        </div>
        <div class="pillar-index">02</div>
      </div>

      <div class="pillar-card">
        <div class="pillar-icon-wrap">
          <i class="fa-solid fa-bullseye"></i>
        </div>
        <div class="pillar-body">
          <span class="pillar-label"><h1>Goals</h1></span>
          <p>Research that interprets what market changes mean, where risks are emerging, and how businesses can respond with greater clarity.</p>
        </div>
        <div class="pillar-index">03</div>
      </div>

      <div class="pillar-card">
        <div class="pillar-icon-wrap">
          <i class="fa-solid fa-eye"></i>
        </div>
        <div class="pillar-body">
          <span class="pillar-label"><h1>Vision</h1></span>
          <p>To become the leading intelligence platform empowering maritime and commodity trading with insights for smarter, faster commercial decisions.</p>
        </div>
        <div class="pillar-index">04</div>
      </div>
    </div>

  </div>
</section>

<div class="section-divider">
  <span class="section-divider-dot"></span>
</div>

<section class="AboutFounder">

  <div class="AboutFounder-header">
    <span class="AboutFounder-eyebrow">The mind behind ARKLINE</span>
    <h1>About the <em>Founder</em></h1>
    <div class="AboutUs-header-line"></div>
  </div>

  <div class="AboutFounder-body">

    <div class="AboutFounder-sidebar">
      <div class="AboutFounder-avatar-wrap">
        <div class="AboutFounder-avatar">
          <img src="Deepak.jpeg" alt="Deepak Chelladurai" />
        </div>
        <div class="AboutFounder-avatar-badge">
        </div>
      </div>

      <div class="AboutFounder-meta">
        <span class="AboutFounder-name">Deepak Chelladurai</span>
        <span class="AboutFounder-title">Founder, ARKLINE RESEARCH</span>
      </div>

      <div class="AboutFounder-tags">
        <span class="tag"></span>
        <span class="tag"></span>
        <span class="tag"></span>
        <span class="tag"></span>
      </div>
    </div>

    <div class="AboutFounder-divider-v"></div>

    <div class="AboutFounder-content">
      <p class="AboutFounder-lead">ARKLINE RESEARCH was founded by Deepak Chelladurai, a commercial shipping professional with over a decade of experience across tanker chartering and operations, freight markets, demurrage, and maritime commercial strategy.</p>
      <p>Having worked closely with the commercial and operational realities of global shipping, Deepak has developed deep expertise where freight economics, operational execution, and market risk intersect.</p>
      <p>ARKLINE RESEARCH was created from the belief that the shipping industry needs more than data. It needs practical intelligence that helps commercial teams interpret risk, anticipate market movements, and make better decisions.</p>
      <p>His long-term vision is to build ARKLINE into a leading freight intelligence and maritime technology platform — helping the industry navigate complexity with greater visibility and confidence.</p>
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
  /* ─── Design Tokens ─────────────────────────────── */
  :root {
    --ark-accent:        #1D9E75;
    --ark-accent-dark:   #0F6E56;
    --ark-accent-mid:    #5DCAA5;
    --ark-accent-light:  #E1F5EE;
    --ark-accent-faint:  #f0faf6;

    --ark-ink:           #0d1117;
    --ark-ink-muted:     #44505e;
    --ark-ink-faint:     #8a96a3;

    --ark-surface:       #ffffff;
    --ark-surface-raised:#f7f9f8;
    --ark-border:        rgba(0,0,0,0.08);
    --ark-border-accent: rgba(29,158,117,0.25);

    --ark-radius-sm:     6px;
    --ark-radius-md:     10px;
    --ark-radius-lg:     16px;
    --ark-radius-xl:     22px;

    --ark-font-display:  'Playfair Display', Georgia, serif;
    --ark-font-body:     'DM Sans', 'Segoe UI', sans-serif;

    --ark-transition:    200ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* ─── Shared ────────────────────────────────────── */
  .AboutUs,
  .AboutFounder {
    max-width: 960px;
    margin: 0 auto;
    padding: 4rem 2rem;
    font-family: var(--ark-font-body);
  }

  .AboutUs-header,
  .AboutFounder-header {
    margin-bottom: 3rem;
  }

  .AboutUs-eyebrow,
  .AboutFounder-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--ark-font-body);
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--ark-accent);
    margin-bottom: 0.75rem;
  }

  .AboutUs-eyebrow::before,
  .AboutFounder-eyebrow::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 1.5px;
    background: var(--ark-accent);
    border-radius: 2px;
  }

  .AboutUs-header h1,
  .AboutFounder-header h1 {
    font-family: var(--ark-font-display);
    font-size: clamp(2rem, 4vw, 2.75rem);
    font-weight: 700;
    color: var(--ark-ink);
    margin: 0 0 1.25rem;
    line-height: 1.15;
    letter-spacing: -0.02em;
  }

  .AboutUs-header h1 em,
  .AboutFounder-header h1 em {
    font-style: italic;
    color: var(--ark-accent);
  }

  .AboutUs-header-line {
    width: 48px;
    height: 3px;
    background: linear-gradient(90deg, var(--ark-accent), var(--ark-accent-mid));
    border-radius: 2px;
  }

  /* Section divider */
  .section-divider {
    display: flex;
    align-items: center;
    gap: 1rem;
    max-width: 960px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section-divider::before,
  .section-divider::after {
    content: '';
    flex: 1;
    height: 0.5px;
    background: var(--ark-border);
  }

  .section-divider-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--ark-accent-mid);
    flex-shrink: 0;
  }

  /* ─── Lead Block ────────────────────────────────── */
  .AboutUs-lead {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    background: var(--ark-surface-raised);
    border: 0.5px solid var(--ark-border);
    border-left: 3px solid var(--ark-accent);
    border-radius: var(--ark-radius-lg);
    padding: 1.75rem 2rem;
    margin-bottom: 2.5rem;
    overflow: hidden;
  }

  .AboutUs-lead-accent {
    position: absolute;
    top: 0; right: 0;
    width: 160px;
    height: 160px;
    background: radial-gradient(circle at top right, var(--ark-accent-faint) 0%, transparent 70%);
    pointer-events: none;
  }

  .AboutUs-lead-logo {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: var(--ark-accent);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    overflow: hidden;
  }

  .AboutUs-lead-logo img {
    width: 55px;
    height: 55px;
    border-radius:50%;
    object-fit: contain;
    display: block;
  }

  .lead-main {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.8;
    color: black;
    margin: 0;
  }

  /* ─── Pillars Grid ──────────────────────────────── */
  .AboutUs-pillars {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
  }

  .pillar-card {
    position: relative;
    background: var(--ark-surface);
    border: 0.5px solid var(--ark-border);
    border-radius: var(--ark-radius-lg);
    padding: 1.5rem 1.25rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;
    transition: border-color var(--ark-transition), transform var(--ark-transition);
  }

  .pillar-card:hover {
    border-color: var(--ark-border-accent);
    transform: translateY(-2px);
  }

  .pillar-card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--ark-accent), var(--ark-accent-mid));
    opacity: 0;
    transition: opacity var(--ark-transition);
  }

  .pillar-card:hover::after {
    opacity: 1;
  }

  .pillar-icon-wrap {
    width: 38px;
    height: 38px;
    background: var(--ark-accent-faint);
    border: 0.5px solid var(--ark-border-accent);
    border-radius: var(--ark-radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .pillar-icon-wrap i {
    font-size: 16px;
    color: var(--ark-accent);
  }

  .pillar-body {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    flex: 1;
  }

  .pillar-label {
    font-family: var(--ark-font-body);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--ark-ink);
  }

  .pillar-card p {
    font-size: 13px;
    font-weight: 500;
    line-height: 1.7;
    color: black;
    margin: 0;
  }

  .pillar-index {
    position: absolute;
    top: 1rem;
    right: 1.1rem;
    font-family: var(--ark-font-display);
    font-size: 11px;
    font-weight: 700;
    color: var(--ark-border);
    letter-spacing: 0.05em;
    user-select: none;
  }

  /* ─── Founder Section ───────────────────────────── */
  .AboutFounder-body {
    display: grid;
    grid-template-columns: 220px 1px 1fr;
    gap: 2.5rem;
    align-items: start;
    margin-bottom: 3rem;
  }

  .AboutFounder-sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .AboutFounder-avatar-wrap {
    position: relative;
    display: inline-block;
  }

  .AboutFounder-avatar {
    width: 95%;
    height: 95%;
    border-radius:28px;
    overflow: hidden;
    border: 2px solid var(--ark-accent-light);
    box-shadow: 0 0 0 1px var(--ark-accent), 0 8px 24px rgba(29,158,117,0.12);
  }

  .AboutFounder-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
  }

  .AboutFounder-avatar-badge {
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--ark-accent);
    color: #fff;
    font-size: 11px;
    font-weight: 600;
    padding: 4px 14px;
    border-radius: 100px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 5px;
    letter-spacing: 0.03em;
    box-shadow: 0 2px 8px rgba(29,158,117,0.3);
  }

  .AboutFounder-avatar-badge i {
    font-size: 10px;
  }

  .AboutFounder-meta {
    margin-top: 0.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    text-align: center;
  }

  .AboutFounder-name {
    font-family: var(--ark-font-display);
    font-size: 17px;
    font-weight: 700;
    color: var(--ark-ink);
    letter-spacing: -0.01em;
  }

  .AboutFounder-title {
    font-size: 11px;
    font-weight: 500;
    color: var(--ark-ink-faint);
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .AboutFounder-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    justify-content: center;
    margin-top: 0.25rem;
  }

  .tag {
    background: var(--ark-accent-faint);
    border: 0.5px solid var(--ark-border-accent);
    border-radius: 100px;
    font-size: 11px;
    font-weight: 500;
    padding: 4px 11px;
    color: var(--ark-accent-dark);
    letter-spacing: 0.02em;
  }

  /* Vertical divider */
  .AboutFounder-divider-v {
    width: 0.5px;
    background: linear-gradient(to bottom, transparent, var(--ark-border) 20%, var(--ark-border) 80%, transparent);
    align-self: stretch;
  }

  /* Content */
  .AboutFounder-content {
    padding-top: 0.25rem;
  }

  .AboutFounder-content p {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.85;
    color: black;
    margin-bottom: 1.1rem;
    font-style: bold;
  }

  .AboutFounder-content p:last-child {
    margin-bottom: 0;
  }

  .AboutFounder-lead {
    font-size: 18px !important;
    font-weight: 500 !important;
    color: var(--ark-ink) !important;
    padding-bottom: 1.1rem;
    border-bottom: 0.5px solid var(--ark-border);
    margin-bottom: 1.25rem !important;
  
  }

  /* ─── Stats ─────────────────────────────────────── */
  .AboutUs-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
    border-top: 0.5px solid var(--ark-border);
    padding-top: 2.5rem;
  }

  .AboutUs-stat {
    position: relative;
    background: var(--ark-surface-raised);
    border: 0.5px solid var(--ark-border);
    border-radius: var(--ark-radius-lg);
    padding: 1.4rem 1rem;
    text-align: center;
    overflow: hidden;
    transition: border-color var(--ark-transition), transform var(--ark-transition);
  }

  .AboutUs-stat:hover {
    border-color: var(--ark-border-accent);
    transform: translateY(-2px);
  }

  .AboutUs-stat::before {
    content: '';
    position: absolute;
    top: 0; left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, var(--ark-accent), var(--ark-accent-mid));
    border-radius: 0 0 2px 2px;
  }

  .AboutUs-stat-number {
    display: block;
    font-family: var(--ark-font-display);
    font-size: 2rem;
    font-weight: 700;
    color: var(--ark-ink);
    margin-bottom: 5px;
    letter-spacing: -0.02em;
    line-height: 1;
  }

  .AboutUs-stat-label {
    display: block;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ark-ink-faint);
  }

  /* ─── Responsive ────────────────────────────────── */
  @media (max-width: 820px) {
    .AboutUs-pillars {
      grid-template-columns: 1fr 1fr;
    }
    .AboutFounder-body {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .AboutFounder-sidebar {
      flex-direction: row;
      align-items: flex-start;
      flex-wrap: wrap;
    }
    .AboutFounder-divider-v {
      display: none;
    }
    .AboutUs-stats {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 500px) {
    .AboutUs,
    .AboutFounder {
      padding: 2.5rem 1.25rem;
    }
    .AboutUs-pillars {
      grid-template-columns: 1fr;
    }
    .AboutUs-stats {
      grid-template-columns: 1fr 1fr;
    }
    .AboutFounder-sidebar {
      flex-direction: column;
      align-items: center;
    }
  }
</style>