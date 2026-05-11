<script>
  import { onMount } from 'svelte';
   import {gsap} from 'gsap';
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
</svelte:head>

<!-- ── Page Intro ─────────────────────────────── -->
<section class="ContactUs-paragraph">
  <div class="ct-eyebrow">
    <span class="ct-eyebrow-line"></span>
    <em>Reach out</em>
    <span class="ct-eyebrow-line"></span>
  </div>
  <h1>Contact Us <i class="fa-solid fa-users-rectangle ct-title-icon"></i></h1>
  <div class="ct-lead-body">
    <p>At ARKLINE RESEARCH, we believe that better commercial decisions begin with the right insight.</p>
    <p>Whether you are looking for freight market intelligence, strategic commercial insight, bespoke research, or support in navigating complex freight market dynamics, we welcome the opportunity to connect.</p>
    <p>We work with shipping and energy professionals to provide practical, commercially relevant intelligence that helps improve visibility, strengthen decision-making, and support better outcomes in volatile freight markets.</p>
    <p class="ct-signoff">If you would like to discuss how ARKLINE RESEARCH can support your commercial objectives, we would be pleased to hear from you.</p>
  </div>
</section>

<div class="ct-section-divider">
  <span class="ct-dot"></span>
</div>

<!-- ── Two-column: Get in Touch + Closing Word ── -->
<div class="ct-two-col">

  <!-- Get in Touch -->
  <div class="ct-card">
    <div class="ct-card-header">
      <div class="ct-icon-wrap">
        <i class="fa-solid fa-phone"></i>
      </div>
      <div>
        <span class="ct-card-index">01</span>
        <h2>Get in Touch</h2>
      </div>
    </div>

    <div class="ct-card-body">
      <p>For enquiries related to our research, advisory support, or tailored intelligence services, please reach us through the details below.</p>

      <div class="ct-contact-details">
        <div class="ct-contact-row">
          <div class="ct-contact-icon"><i class="fa-solid fa-envelope"></i></div>
          <div>
            <span class="ct-contact-label">Email</span>
            <a href="mailto:C.Deepakchelladurai@gmail.com" class="ct-contact-value">C.Deepakchelladurai@gmail.com</a>
          </div>
        </div>
        <div class="ct-contact-row">
          <div class="ct-contact-icon"><i class="fa-solid fa-phone"></i></div>
          <div>
            <span class="ct-contact-label">Phone</span>
            <a href="tel:+919619053895" class="ct-contact-value">+91 96190 53895</a>
          </div>
        </div>
        <div class="ct-contact-row">
          <div class="ct-contact-icon"><i class="fab fa-linkedin"></i></div>
          <div>
            <span class="ct-contact-label">LinkedIn</span>
            <a href="https://www.linkedin.com/in/deepakchelladurai/" target="_blank" rel="noopener noreferrer" class="ct-contact-value">Deepak Chelladurai</a>
          </div>
        </div>
      </div>

      <p class="ct-response-note"><i class="fa-regular fa-clock"></i> We aim to respond within 48 hours. Every conversation is focused, relevant, and commercially valuable.</p>
    </div>
  </div>

  <!-- Closing Word -->
  <div class="ct-card ct-card-dark">
    <div class="ct-card-header ct-card-header-dark">
      <div class="ct-icon-wrap ct-icon-wrap-dark">
        <i class="fa-solid fa-comment"></i>
      </div>
      <div>
        <span class="ct-card-index ct-index-dark">02</span>
        <h2 class="ct-h2-dark">A Closing Word</h2>
      </div>
    </div>

    <div class="ct-card-body">
      <em class="ct-closing-eyebrow">Let's start the conversation</em>
      <p class="ct-dark-p">In fast-moving freight markets, clarity and timely intelligence can make a meaningful difference.</p>
      <p class="ct-dark-p">If your business requires deeper market understanding, strategic freight insight, or customised research support, ARKLINE RESEARCH is here to help transform complexity into informed commercial action.</p>
      <p class="ct-dark-p ct-dark-signoff">We look forward to connecting with you.</p>
    </div>
  </div>

</div>

<!-- ── CTA Banner ─────────────────────────────── -->
<div class="ct-cta-wrap">
  <div class="ct-cta-inner">

    <div class="ct-cta-left">
      <span class="ct-cta-badge">
        <span class="ct-badge-dot"></span>
        Let's get started
      </span>
      <h2 class="ct-cta-headline">Have a minute?<br><em>We'd love to help.</em></h2>
      <p class="ct-cta-para">Fill out our quick form to share your requirements. It takes just a minute or two — our team reviews every submission and responds with clear next steps.</p>

      <div class="ct-steps">
        <div class="ct-step">
          <div class="ct-step-num">1</div>
          <span>Fill the form</span>
        </div>
        <div class="ct-step-line"></div>
        <div class="ct-step">
          <div class="ct-step-num">2</div>
          <span>We review</span>
        </div>
        <div class="ct-step-line"></div>
        <div class="ct-step">
          <div class="ct-step-num">3</div>
          <span>We reach out</span>
        </div>
      </div>
    </div>

    <div class="ct-cta-right">
      <div class="ct-trust-grid">
        <div class="ct-trust-item">
          <span class="ct-trust-val">48h</span>
          <span class="ct-trust-lbl">Response time</span>
        </div>
        <div class="ct-trust-item">
          <span class="ct-trust-val">100%</span>
          <span class="ct-trust-lbl">Confidential</span>
        </div>
        <div class="ct-trust-item">
          <span class="ct-trust-val">Global</span>
          <span class="ct-trust-lbl">Client base</span>
        </div>
        <div class="ct-trust-item">
          <span class="ct-trust-val">Strategic</span>
          <span class="ct-trust-lbl">Consultation</span>
        </div>
      </div>

      <a href="https://forms.gle/cgMXJMHmT6q8woZ78" target="_blank" rel="noopener noreferrer" class="ct-cta-btn">
        Get in Touch
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 8h10M9 4l4 4-4 4"/>
        </svg>
      </a>
    </div>

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

    --ark-dark-bg:        #0d1117;
    --ark-dark-surface:   #141b22;
    --ark-dark-border:    rgba(255,255,255,0.08);
    --ark-dark-text:      #c9d1d9;
    --ark-dark-muted:     #8a96a3;

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
  .ContactUs-paragraph {
    max-width: 960px;
    margin: 0 auto;
    padding: 4rem 2rem 3rem;
    font-family: var(--ark-font-body);
    text-align: center;
  }

  .ct-eyebrow {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    margin-bottom: 1rem;
  }

  .ct-eyebrow em {
    font-family: var(--ark-font-body);
    font-style: normal;
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--ark-accent);
    white-space: nowrap;
  }

  .ct-eyebrow-line {
    flex: 1;
    max-width: 60px;
    height: 1.5px;
    background: var(--ark-accent);
    border-radius: 2px;
    opacity: 0.4;
  }

  .ContactUs-paragraph h1 {
    font-family: var(--ark-font-display);
    font-size: clamp(2rem, 4vw, 2.75rem);
    font-weight: 700;
    color: var(--ark-ink);
    letter-spacing: -0.02em;
    line-height: 1.15;
    margin: 0 0 2rem;
  }

  .ct-title-icon {
    font-size: 1.4rem;
    color: var(--ark-accent);
    margin-left: 10px;
    vertical-align: middle;
  }

  .ct-lead-body {
    max-width: 680px;
    margin: 0 auto;
    border-top: 0.5px solid var(--ark-border);
    padding-top: 2rem;
    text-align: left;
  }

  .ct-lead-body p {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.85;
    color: black;
    margin-bottom: 1rem;
  }

  .ct-lead-body p:last-child { margin-bottom: 0; }

  .ct-signoff {
    font-style: italic;
    color: black !important;
    font-weight: 500 !important;
    padding-top: 1rem;
    border-top: 0.5px solid var(--ark-border);
    margin-top: 0.5rem !important;

  }

  /* ─── Section Divider ──────────────────────── */
  .ct-section-divider {
    display: flex;
    align-items: center;
    gap: 1rem;
    max-width: 960px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .ct-section-divider::before,
  .ct-section-divider::after {
    content: '';
    flex: 1;
    height: 0.5px;
    background: var(--ark-border);
  }

  .ct-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--ark-accent-mid);
    flex-shrink: 0;
  }

  /* ─── Two Column Layout ────────────────────── */
  .ct-two-col {
    max-width: 960px;
    margin: 0 auto;
    padding: 1rem 2rem 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    font-family: var(--ark-font-body);
    align-items: stretch;
  }

  /* ─── Cards ────────────────────────────────── */
  .ct-card {
    background: var(--ark-surface);
    border: 0.5px solid var(--ark-border);
    border-radius: var(--ark-radius-lg);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: border-color var(--ark-transition), transform var(--ark-transition);
    position: relative;
  }

  .ct-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--ark-accent), var(--ark-accent-mid));
    opacity: 0;
    transition: opacity var(--ark-transition);
  }

  .ct-card:hover { border-color: var(--ark-border-accent); transform: translateY(-2px); }
  .ct-card:hover::before { opacity: 1; }

  /* Dark card */
  .ct-card-dark {
    background: var(--ark-dark-bg);
    border-color: var(--ark-dark-border);
  }

  .ct-card-dark::before {
    background: linear-gradient(90deg, var(--ark-accent-mid), var(--ark-accent));
  }

  .ct-card-dark:hover { border-color: rgba(103, 223, 183, 0.3); }

  /* Card headers */
  .ct-card-header {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.5rem 1.5rem 1.25rem;
    border-bottom: 0.5px solid var(--ark-border);
    background: var(--ark-surface-raised);
  }

  .ct-card-header-dark {
    background: var(--ark-accent-faint);
    border-bottom-color: var(--ark-dark-border);
  }

  .ct-icon-wrap {
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

  .ct-icon-wrap i { font-size: 17px; color: var(--ark-accent); }

  .ct-icon-wrap-dark {
    background: rgba(5, 238, 121, 0.998);
    border-color: rgba(29,158,117,0.2);
  }

  .ct-card-index {
    display: block;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--ark-accent-faint);
    margin-bottom: 3px;
  }

  .ct-index-dark { color: var(--ark-dark-muted); }

  .ct-card-header h2 {
    font-family: var(--ark-font-display);
    font-size: 1.2rem;
    font-weight: 700;
    color:black;
    margin: 0;
    line-height: 1.2;
    letter-spacing: -0.01em;
    
  }

  .ct-h2-dark { 
    color: black;
    font-weight: 500;
    font-style:italic; 
}

  /* Card body */
  .ct-card-body {
    background:var(--ark-surface);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
    flex: 1;
  }

  .ct-card-body p {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.8;
    color: black;
    margin: 0;
  }

  /* Contact detail rows */
  .ct-contact-details {
    display: flex;
    flex-direction: column;
    gap: 0;
    border: 0.5px solid var(--ark-border);
    border-radius: var(--ark-radius-md);
    overflow: hidden;
  }

  .ct-contact-row {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.85rem 1rem;
    border-bottom: 0.5px solid var(--ark-border);
    transition: background var(--ark-transition);
  }

  .ct-contact-row:last-child { border-bottom: none; }
  .ct-contact-row:hover { background: var(--ark-surface-raised); }

  .ct-contact-icon {
    width: 32px;
    height: 32px;
    background: var(--ark-accent-faint);
    border-radius: var(--ark-radius-sm, 6px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .ct-contact-icon i { font-size: 13px; color: var(--ark-accent); }

  .ct-contact-label {
    display: block;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ark-ink-faint);
    margin-bottom: 1px;
  }

  .ct-contact-value {
    display: block;
    font-size: 13.5px;
    font-weight: 500;
    color: var(--ark-accent-dark);
    text-decoration: none;
    transition: color var(--ark-transition);
  }

  .ct-contact-value:hover { color: var(--ark-accent); }

  .ct-response-note {
    font-size: 12.5px !important;
    color: var(--ark-ink-faint) !important;
    display: flex;
    align-items: flex-start;
    gap: 6px;
    padding: 0.75rem 1rem;
    background: var(--ark-surface-raised);
    border-radius: var(--ark-radius-md);
    border: 0.5px solid var(--ark-border);
  }

  .ct-response-note i { color: var(--ark-accent); margin-top: 2px; flex-shrink: 0; }

  /* Dark card content */
  .ct-closing-eyebrow {
    font-family: var(--ark-font-display);
    font-size: 1.1rem;
    font-style: italic;
    color: black;
    display: block;
  }

  .ct-dark-p {
    font-size: 16px !important;
    line-height: 1.85 !important;
    color: black !important;
    font-weight: 500;
  }

  .ct-dark-signoff {
    font-style: italic;
    color: black !important;
    padding-top: 0.75rem;
    border-top: 0.5px solid var(--ark-dark-border);
    margin-top: 0.25rem;
    font-weight: 500;
  }

  /* ─── CTA Banner ───────────────────────────── */
  .ct-cta-wrap {
    max-width: 960px;
    margin: 0 auto 4rem;
    padding: 0 2rem;
    font-family: var(--ark-font-body);

  }

  .ct-cta-inner {
    background: var(--ark-accent-faint);
    border-radius: var(--ark-radius-xl);
    padding: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    position: relative;
    overflow: hidden;
  }

  .ct-cta-inner::before {
    content: '';
    position: absolute;
    top: -60px; right: -60px;
    width: 280px; height: 280px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(29,158,117,0.15) 0%, transparent 70%);
    pointer-events: none;
  }

  .ct-cta-inner::after {
    content: '';
    position: absolute;
    bottom: -40px; left: 40%;
    width: 180px; height: 180px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(93,202,165,0.08) 0%, transparent 70%);
    pointer-events: none;
  }

  /* Left side */
  .ct-cta-badge {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: rgba(29,158,117,0.15);
    color: var(black);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 6px 14px;
    border-radius: 100px;
    border: 0.5px solid rgba(29,158,117,0.3);
    margin-bottom: 1.25rem;
    display: inline-flex;
  }

  .ct-badge-dot {
    width: 6px; height: 6px;
    background: var(--ark-accent);
    border-radius: 50%;
  }

  .ct-cta-headline {
    font-family: var(--ark-font-display);
    font-size: clamp(1.6rem, 3vw, 2.25rem);
    font-weight: 700;
    color: black;
    margin: 0 0 1.25rem;
    line-height: 1.2;
    letter-spacing: -0.02em;
  }

  .ct-cta-headline em {
    font-style: italic;
    color: var(--ark-accent-mid);
  }

  .ct-cta-para {
    font-size: 14px;
    line-height: 1.8;
    color: black;
    margin: 0 0 1.75rem;
  }

  /* Steps */
  .ct-steps {
    display: flex;
    align-items: center;
    gap: 0;
  }

  .ct-step {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: black;
  }

  .ct-step-num {
    width: 22px; height: 22px;
    border-radius: 50%;
    background: rgba(29,158,117,0.15);
    border: 0.5px solid rgba(29,158,117,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 600;
    color: black;
    flex-shrink: 0;
  }

  .ct-step-line {
    width: 28px;
    height: 0.5px;
    background: rgba(255,255,255,0.1);
    margin: 0 8px;
  }

  /* Right side */
  .ct-cta-right {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: relative;
    z-index: 1;
  }

  .ct-trust-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: rgba(255,255,255,0.06);
    border-radius: var(--ark-radius-md);
    overflow: hidden;
    border: 0.5px solid rgba(255,255,255,0.06);
  }

  .ct-trust-item {
    background: rgba(255,255,255,0.03);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 4px;
    text-align: center;
  }

  .ct-trust-val {
    font-family: var(--ark-font-display);
    font-size: 1.4rem;
    font-weight: 700;
    color: black;
    line-height: 1;
  }

  .ct-trust-lbl {
    font-size: 10.5px;
    font-weight: 500;
    letter-spacing: 0.06em;
    color: var(--ark-dark-muted);
    text-transform: uppercase;
  }

  .ct-cta-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: var(--ark-accent);
    color: #fff;
    font-family: var(--ark-font-body);
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-decoration: none;
    padding: 15px 32px;
    border-radius: 100px;
    border: none;
    outline: 3px solid rgba(93,202,165,0.3);
    outline-offset: 3px;
    transition: background var(--ark-transition), transform var(--ark-transition);
    width: 50%;
  }

  .ct-cta-btn:hover { background: var(--ark-accent-dark); transform: translateY(-2px); }
  .ct-cta-btn:active { transform: scale(0.98); }

  .ct-cta-btn svg {
    width: 14px; height: 14px;
    stroke: #fff; fill: none;
    flex-shrink: 0;
  }

  /* ─── Responsive ───────────────────────────── */
  @media (max-width: 760px) {
    .ct-two-col,
    .ct-cta-inner {
      grid-template-columns: 1fr;
    }
    .ct-two-col,
    .ct-cta-wrap,
    .ContactUs-paragraph {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    }
    .ct-cta-inner {
      gap: 2rem;
      padding: 2rem 1.5rem;
    }
    .ct-eyebrow-line { display: none; }
  }

  @media (max-width: 480px) {
    .ct-trust-grid { grid-template-columns: 1fr 1fr; }
    .ct-steps { flex-wrap: wrap; gap: 8px; }
    .ct-step-line { display: none; }
  }
</style>