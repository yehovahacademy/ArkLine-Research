<script></script>
  
<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
</svelte:head>

<!-- ── Intro ─────────────────────────────────── -->
<section class="Services-Para">
  <div class="svc-eyebrow">
    <span class="svc-eyebrow-line"></span>
    <em>What we offer</em>
    <span class="svc-eyebrow-line"></span>
  </div>
  <h1>Our Services <i class="fa-solid fa-screwdriver-wrench svc-title-icon"></i></h1>
  <div class="svc-lead-body">
    <p>At ARKLINE RESEARCH, we help shipping and energy stakeholders make better freight decisions through focused market intelligence, commercial insight, and practical analysis.</p>
    <p>In increasingly volatile freight markets, commercial decisions are influenced by changing supply-demand dynamics, operational disruptions, shifting trade flows, and geopolitical uncertainty. Our services are designed to help traders, shipowners, and operators navigate this complexity with greater clarity and confidence.</p>
    <p>Focused on tanker markets, we transform complex freight data and market disruptions into actionable intelligence that supports smarter commercial decisions across the shipping value chain.</p>
  </div>
</section>

<!-- ── Service Cards ──────────────────────────── -->
<div class="Services-Grid">

  <div class="svc-card">
    <div class="svc-card-header">
      <div class="svc-icon-wrap">
        <i class="fa-solid fa-brain"></i>
      </div>
      <div>
        <span class="svc-card-index"></span>
        <h2>Freight Market Intelligence</h2>
      </div>
    </div>
    <div class="svc-card-body">
      <p>We provide targeted freight market intelligence to help shipping and energy players understand rate movements, market volatility, vessel positioning, and supply-demand dynamics across tanker markets.</p>
      <p>Our analysis identifies the drivers behind freight movements and interprets how market developments affect commercial exposure, enabling stakeholders to make better-informed chartering and trading decisions.</p>
      <p>By turning market signals into actionable insight, we help businesses improve visibility, strengthen market understanding, and respond effectively to changing freight conditions.</p>
    </div>
  </div>

  <div class="svc-card">
    <div class="svc-card-header">
      <div class="svc-icon-wrap">
        <i class="fa-solid fa-user-tie"></i>
      </div>
      <div>
        <span class="svc-card-index"></span>
        <h2>Freight Advisory</h2>
      </div>
    </div>
    <div class="svc-card-body">
      <p>We offer practical freight advisory support to assist clients in evaluating market conditions, assessing freight risks, and improving commercial decision-making.</p>
      <p>Our advisory approach combines market intelligence with industry insight to provide clear perspectives on freight exposure, voyage economics, and operational considerations.</p>
      <p>This helps shipping and energy professionals navigate uncertainty, reduce decision risk, and strengthen commercial outcomes in dynamic market environments.</p>
    </div>
  </div>

  <div class="svc-card">
    <div class="svc-card-header">
      <div class="svc-icon-wrap">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div>
        <span class="svc-card-index"></span>
        <h2>Bespoke Research</h2>
      </div>
    </div>
    <div class="svc-card-body">
      <p>We deliver bespoke freight research tailored to the specific commercial needs of our clients.</p>
      <p>Whether the requirement is market-specific analysis, trade flow assessment, operational risk evaluation, or strategic freight insight, our bespoke research is designed to provide relevant intelligence aligned with business objectives.</p>
      <p>This allows stakeholders to access focused analysis that supports planning, improves market understanding, and enhances commercial strategy.</p>
    </div>
  </div>

  <div class="svc-card">
    <div class="svc-card-header">
      <div class="svc-icon-wrap">
        <i class="fa-solid fa-database"></i>
      </div>
      <div>
        <span class="svc-card-index"></span>
        <h2>Data Interpretation</h2>
      </div>
    </div>
    <div class="svc-card-body">
      <p>We help clients interpret complex freight data by converting raw market information into meaningful commercial insight.</p>
      <p>Freight markets generate large volumes of operational, market, and performance data, but data alone does not support decisions unless it is properly analysed in context.</p>
      <p>Our data interpretation services help identify trends, highlight risks, and reveal the commercial implications behind market developments — enabling clients to make faster, clearer, and more confident decisions.</p>
    </div>
  </div>

</div>

<!-- ── Closing CTA Banner ─────────────────────── -->
<div class="Services-Closing">
  <div class="Services-Closing-inner">
    <span class="svc-eyebrow-sm">Built for volatile freight markets</span>
    <p>ARKLINE RESEARCH combines market intelligence with commercial insight to help businesses reduce uncertainty, improve market visibility, and make better freight decisions where timing, clarity, and informed judgement are critical.</p>
    <p class="svc-closing-tagline">Transforming freight complexity into actionable commercial intelligence.</p>
  </div>
</div>

<style>
  /* ─── Tokens ───────────────────────────────── */
  :root {
    --ark-accent:         #1D9E75;
    --ark-accent-dark:    #0F6E56;
    --ark-accent-mid:     #5DCAA5;
    --ark-accent-light:   #E1F5EE;
    --ark-accent-faint:   #f0faf6;

    --ark-ink:            #0d1117;
    --ark-ink-muted:      #44505e;
    --ark-ink-faint:      #8a96a3;

    --ark-surface:        #ffffff;
    --ark-surface-raised: #f7f9f8;
    --ark-border:         rgba(0,0,0,0.08);
    --ark-border-accent:  rgba(29,158,117,0.25);

    --ark-radius-md:      10px;
    --ark-radius-lg:      16px;
    --ark-radius-xl:      22px;

    --ark-font-display:   'Playfair Display', Georgia, serif;
    --ark-font-body:      'DM Sans', 'Segoe UI', sans-serif;

    --ark-transition:     200ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* ─── Intro Section ────────────────────────── */
  .Services-Para {
    max-width: 960px;
    margin: 0 auto;
    padding: 4rem 2rem 3rem;
    font-family: var(--ark-font-body);
    text-align: center;
    font-weight: 500;
    color: var(--black);
  }

  .svc-eyebrow {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    margin-bottom: 1rem;
  }

  .svc-eyebrow em {
    font-family: var(--ark-font-body);
    font-style: normal;
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--ark-accent);
    white-space: nowrap;
  }

  .svc-eyebrow-line {
    flex: 1;
    max-width: 60px;
    height: 1.5px;
    background: var(--ark-accent);
    border-radius: 2px;
    opacity: 0.4;
  }

  .Services-Para h1 {
    font-family: var(--ark-font-display);
    font-size: clamp(2rem, 4vw, 2.75rem);
    font-weight: 700;
    color: var(--ark-ink);
    letter-spacing: -0.02em;
    line-height: 1.15;
    margin: 0 0 2rem;
  }

  .svc-title-icon {
    font-size: 1.4rem;
    color: var(--ark-accent);
    margin-left: 10px;
    vertical-align: middle;
  }

  .svc-lead-body {
    max-width: 720px;
    margin: 0 auto;
    border-top: 0.5px solid var(--ark-border);
    padding-top: 2rem;
  }

  .svc-lead-body p {
    font-size: 15.5px;
    font-weight: 500;
    line-height: 1.85;
    color: var(--black);
    margin-bottom: 1rem;
    text-align: left;
  }

  .svc-lead-body p:last-child {
    margin-bottom: 0;
  }

  /* ─── Services Grid ────────────────────────── */
  .Services-Grid {
    max-width: 960px;
    margin: 0 auto;
    padding: 1rem 2rem 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    font-family: var(--ark-font-body);
  }

  /* ─── Service Card ─────────────────────────── */
  .svc-card {
    background: var(--ark-surface);
    border: 0.5px solid var(--ark-border);
    border-radius: var(--ark-radius-lg);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: border-color var(--ark-transition), transform var(--ark-transition);
    position: relative;
  }

  .svc-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--ark-accent), var(--ark-accent-mid));
    opacity: 0;
    transition: opacity var(--ark-transition);
  }

  .svc-card:hover {
    border-color: var(--ark-border-accent);
    transform: translateY(-3px);
  }

  .svc-card:hover::before {
    opacity: 1;
  }

  .svc-card-header {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.5rem 1.5rem 1.25rem;
    border-bottom: 0.5px solid var(--ark-border);
    background: var(--ark-surface-raised);
  }

  .svc-icon-wrap {
    width: 42px;
    height: 42px;
    background: var(--ark-accent-faint);
    border: 0.5px solid var(--ark-border-accent);
    border-radius: var(--ark-radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .svc-icon-wrap i {
    font-size: 17px;
    color: var(--ark-accent);
  }

  .svc-card-index {
    display: block;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--ark-ink-faint);
    margin-bottom: 3px;
  }

  .svc-card-header h2 {
    font-family: var(--ark-font-display);
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--ark-ink);
    margin: 0;
    line-height: 1.2;
    letter-spacing: -0.01em;
  }

  .svc-card-body {
    padding: 1.25rem 1.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    flex: 1;
  }

  .svc-card-body p {
    font-size: 13.5px;
    font-weight: 500;
    line-height: 1.8;
    color: var(--black);
    margin: 0;
  }

  /* ─── Closing Banner ───────────────────────── */
  .Services-Closing {
    max-width: 960px;
    margin: 0 auto 4rem;
    padding: 0 2rem;
    font-family: var(--ark-font-body);
  }

  .Services-Closing-inner {
    background: var(--ark-accent-faint);
    border: 0.5px solid var(--ark-border-accent);
    border-left: 3px solid var(--ark-accent);
    border-radius: var(--ark-radius-lg);
    padding: 2rem 2.5rem;
  }

  .svc-eyebrow-sm {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--ark-accent-dark);
    margin-bottom: 1rem;
  }

  .svc-eyebrow-sm::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 1.5px;
    background: var(--ark-accent);
    border-radius: 2px;
  }

  .Services-Closing-inner p {
    font-size: 15px;
    font-weight: 500;
    line-height: 1.85;
    color: var(--black);
    margin: 0 0 0.75rem;
  }

  .Services-Closing-inner p:last-child {
    margin-bottom: 0;
  }

  .svc-closing-tagline {
    font-family: var(--ark-font-display) !important;
    font-size: 1rem !important;
    font-style: italic;
    font-weight: 700 !important;
    color: var(--ark-accent-dark) !important;
  }

  /* ─── Responsive ───────────────────────────── */
  @media (max-width: 720px) {
    .Services-Grid {
      grid-template-columns: 1fr;
      padding-bottom: 2.5rem;
    }
    .Services-Para,
    .Services-Closing {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    }
    .Services-Grid {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    }
  }

  @media (max-width: 480px) {
    .svc-eyebrow-line {
      display: none;
    }
    .Services-Closing-inner {
      padding: 1.5rem;
    }
  }
</style>