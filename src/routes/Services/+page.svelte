<script>
  import { onMount } from 'svelte';
   import {gsap} from 'gsap';
</script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet"/>
<div class="Services-Para">
  <h1>
    <em>What we offer</em>
    <i class="fa-solid fa-screwdriver-wrench"></i>
    Our Services
  </h1>
  <p>At ARKLINE RESEARCH, we help shipping and energy stakeholders make better freight decisions through focused market intelligence, commercial insight, and practical analysis.</p>
  <p>In increasingly volatile freight markets, commercial decisions are influenced by changing supply-demand dynamics, operational disruptions, shifting trade flows, and geopolitical uncertainty. Our services are designed to help traders, shipowners, and operators navigate this complexity with greater clarity and confidence.</p>
  <p>Focused on tanker markets, we transform complex freight data and market disruptions into actionable intelligence that supports smarter commercial decisions across the shipping value chain.</p>
</div>

<div class="Services-Frieght-Intelligence">
  <h1><i class="fa-solid fa-brain"></i>
    Freight Market Intelligence</h1>
  <p>We provide targeted freight market intelligence to help shipping and energy players understand rate movements, market volatility, vessel positioning, and supply-demand dynamics across tanker markets.</p>
  <p>Our analysis identifies the drivers behind freight movements and interprets how market developments affect commercial exposure, enabling stakeholders to make better-informed chartering and trading decisions.</p>
  <p>By turning market signals into actionable insight, we help businesses improve visibility, strengthen market understanding, and respond effectively to changing freight conditions.</p>
</div>

<div class="Services-Freight-Advisory">
  <h1><i class="fa-solid fa-user-tie"></i>
    Freight Advisory</h1>
  <p>We offer practical freight advisory support to assist clients in evaluating market conditions, assessing freight risks, and improving commercial decision-making.
Our advisory approach combines market intelligence with industry insight to provide clear perspectives on freight exposure, voyage economics, and operational considerations.
This helps shipping and energy professionals navigate uncertainty, reduce decision risk, and strengthen commercial outcomes in dynamic market environments.
.</p>
</div>

<div class="Services-Bespoke-Research">
  	<h1><i class="fa-solid fa-search"></i>
    Bespoke Research</h1>
  <p>We deliver bespoke freight research tailored to the specific commercial needs of our clients.
Whether the requirement is market-specific analysis, trade flow assessment, operational risk evaluation, or strategic freight insight, our bespoke research is designed to provide relevant intelligence aligned with business objectives.
This allows stakeholders to access focused analysis that supports planning, improves market understanding, and enhances commercial strategy.
</p>
</div>

<div class="Services-Data-Interpretation">
<h1><i class="fa-solid fa-database"></i>
  Data Interpretation</h1>
<p>
We help clients interpret complex freight data by converting raw market information into meaningful commercial insight.
Freight markets generate large volumes of operational, market, and performance data, but data alone does not support decisions unless it is properly analysed in context.
Our data interpretation services help identify trends, highlight risks, and reveal the commercial implications behind market developments, enabling clients to make faster, clearer, and more confident decisions.</p>

<p><strong>Built for Volatile Freight Markets.</strong> ARKLINE RESEARCH is built to support traders, shipowners, and operators navigating uncertain and fast-changing freight environments.
By combining market intelligence with commercial insight, we help businesses reduce uncertainty, improve market visibility, and make better freight decisions where timing, clarity, and informed judgement are critical.
Our focus is simple: to transform freight complexity into actionable commercial intelligence.</p>
</div>

<style>
/* ─── Classic Editorial · Services-Para ─────────────────── */

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Crimson+Pro:ital,wght@0,400;0,600;1,400&display=swap');

/* ─── Services-Para ──────────────────────────────────────────── */

.Services-Para {
    max-width: 860px;
    margin: 0 auto;
    padding: 56px 80px 64px;
    position: relative;
    background: #faf8f3;
    border: 1px solid #c8bfa8;
    border-top: 4px solid #1a1a1a;
}

.Services-Para::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 1px;
    background: #1a1a1a;
}

.Services-Para::before {
    content: '§';
    position: absolute;
    top: 20px; right: 32px;
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 0.9rem;
    color: #c8bfa8;
    letter-spacing: 0.1em;
}

.Services-Para h1 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(1.6rem, 3.5vw, 2.5rem);
    font-weight: 600;
    color: #1a1a1a;
    line-height: 1.2;
    letter-spacing: -0.01em;
    margin: 0 0 0.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #c8bfa8;
    background: none;
    -webkit-text-fill-color: unset;
}

.Services-Para h1 em {
    display: block;
    font-family: 'Crimson Pro', Georgia, serif;
    font-size: 0.75rem;
    font-style: italic;
    font-weight: 400;
    color: #a89880;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 0.4rem;
}

.Services-Para p {
    font-family: 'Crimson Pro', Georgia, serif;
    font-size: 1.125rem;
    line-height: 1.9;
    color: #2c2520;
    margin: 1.25rem 0 0;
    padding: 0;
    text-align: justify;
    hyphens: auto;
    -webkit-hyphens: auto;
    opacity: 1;
    transform: none;
    animation: none;
}

.Services-Para p::before,
.Services-Para p::first-letter { all: unset; }

.Services-Para p:nth-of-type(2n)::after {
    content: '';
    display: block;
    width: 40px;
    height: 1px;
    background: #c8bfa8;
    margin: 1.25rem 0 0;
}

@media (max-width: 768px) {
    .Services-Para {
        padding: 40px 32px 48px;
    }
    .Services-Para h1 {
        font-size: clamp(1.4rem, 5vw, 2rem);
    }
    .Services-Para p {
        font-size: 1.05rem;
        text-align: left;
        hyphens: none;
        -webkit-hyphens: none;
    }
}

@media (max-width: 480px) {
    .Services-Para {
        padding: 32px 20px 40px;
        border-left: none;
        border-right: none;
    }
}

/* ─── Services-Freight-Intelligence ─────────────────────────── */

.Services-Frieght-Intelligence {
    max-width: 860px;
    margin: 32px auto 0;
    padding: 48px 80px 56px;
    position: relative;
    background: #faf8f3;
    border: 1px solid #c8bfa8;
    border-top: 4px solid #4a3f32;
}

.Services-Frieght-Intelligence::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 1px;
    background: #4a3f32;
}

.Services-Frieght-Intelligence::before {
    content: '※';
    position: absolute;
    top: 20px; right: 32px;
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 0.9rem;
    color: #c8bfa8;
    letter-spacing: 0.1em;
}

.Services-Frieght-Intelligence h1 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(1.4rem, 3vw, 2.1rem);
    font-weight: 600;
    color: #1a1a1a;
    line-height: 1.2;
    letter-spacing: -0.01em;
    margin: 0 0 0.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #c8bfa8;
    background: none;
    -webkit-text-fill-color: unset;
}

.Services-Frieght-Intelligence h1 em {
    display: block;
    font-family: 'Crimson Pro', Georgia, serif;
    font-size: 0.75rem;
    font-style: italic;
    font-weight: 400;
    color: #a89880;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 0.4rem;
}

.Services-Frieght-Intelligence p {
    font-family: 'Crimson Pro', Georgia, serif;
    font-size: 1.125rem;
    line-height: 1.9;
    color: #2c2520;
    margin: 1.25rem 0 0;
    padding: 0;
    text-align: justify;
    hyphens: auto;
    -webkit-hyphens: auto;
    opacity: 1;
    transform: none;
    animation: none;
}

.Services-Frieght-Intelligence p::before,
.Services-Frieght-Intelligence p::first-letter { all: unset; }

.Services-Frieght-Intelligence p:nth-of-type(2n)::after {
    content: '';
    display: block;
    width: 40px;
    height: 1px;
    background: #c8bfa8;
    margin: 1.25rem 0 0;
}

@media (max-width: 768px) {
    .Services-Frieght-Intelligence {
        padding: 36px 32px 44px;
        margin-top: 24px;
    }
    .Services-Frieght-Intelligence h1 {
        font-size: clamp(1.3rem, 5vw, 1.8rem);
    }
    .Services-Frieght-Intelligence p {
        font-size: 1.05rem;
        text-align: left;
        hyphens: none;
        -webkit-hyphens: none;
    }
}

@media (max-width: 480px) {
    .Services-Frieght-Intelligence {
        padding: 28px 20px 36px;
        margin-top: 16px;
        border-left: none;
        border-right: none;
    }
}

/* ─── Services-Freight-Advisory ─────────────────────────────── */

.Services-Freight-Advisory {
    max-width: 860px;
    margin: 32px auto 0;
    padding: 48px 80px 56px;
    position: relative;
    background: #faf8f3;
    border: 1px solid #c8bfa8;
    border-top: 4px solid #2c3e2d;
}

.Services-Freight-Advisory::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 1px;
    background: #2c3e2d;
}

.Services-Freight-Advisory::before {
    content: '¶';
    position: absolute;
    top: 20px; right: 32px;
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 0.9rem;
    color: #c8bfa8;
    letter-spacing: 0.1em;
}

.Services-Freight-Advisory h1 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(1.4rem, 3vw, 2.1rem);
    font-weight: 600;
    color: #1a1a1a;
    line-height: 1.2;
    letter-spacing: -0.01em;
    margin: 0 0 0.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #c8bfa8;
    background: none;
    -webkit-text-fill-color: unset;
}

.Services-Freight-Advisory h1 em {
    display: block;
    font-family: 'Crimson Pro', Georgia, serif;
    font-size: 0.75rem;
    font-style: italic;
    font-weight: 400;
    color: #a89880;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 0.4rem;
}

.Services-Freight-Advisory p {
    font-family: 'Crimson Pro', Georgia, serif;
    font-size: 1.125rem;
    line-height: 1.9;
    color: #2c2520;
    margin: 1.25rem 0 0;
    padding: 0;
    text-align: justify;
    hyphens: auto;
    -webkit-hyphens: auto;
    opacity: 1;
    transform: none;
    animation: none;
}

.Services-Freight-Advisory p::before,
.Services-Freight-Advisory p::first-letter { all: unset; }

.Services-Freight-Advisory p:nth-of-type(2n)::after {
    content: '';
    display: block;
    width: 40px;
    height: 1px;
    background: #c8bfa8;
    margin: 1.25rem 0 0;
}

@media (max-width: 768px) {
    .Services-Freight-Advisory {
        padding: 36px 32px 44px;
        margin-top: 24px;
    }
    .Services-Freight-Advisory h1 {
        font-size: clamp(1.3rem, 5vw, 1.8rem);
    }
    .Services-Freight-Advisory p {
        font-size: 1.05rem;
        text-align: left;
        hyphens: none;
        -webkit-hyphens: none;
    }
}

@media (max-width: 480px) {
    .Services-Freight-Advisory {
        padding: 28px 20px 36px;
        margin-top: 16px;
        border-left: none;
        border-right: none;
    }
}

/* ─── Services-Bespoke-Research ──────────────────────────────── */

.Services-Bespoke-Research {
    max-width: 860px;
    margin: 32px auto 0;
    padding: 48px 80px 56px;
    position: relative;
    background: #faf8f3;
    border: 1px solid #c8bfa8;
    border-top: 4px solid #3b2e1a;
}

.Services-Bespoke-Research::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 1px;
    background: #3b2e1a;
}

.Services-Bespoke-Research::before {
    content: '†';
    position: absolute;
    top: 20px; right: 32px;
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 0.9rem;
    color: #c8bfa8;
    letter-spacing: 0.1em;
}

.Services-Bespoke-Research h1 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(1.4rem, 3vw, 2.1rem);
    font-weight: 600;
    color: #1a1a1a;
    line-height: 1.2;
    letter-spacing: -0.01em;
    margin: 0 0 0.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #c8bfa8;
    background: none;
    -webkit-text-fill-color: unset;
}

.Services-Bespoke-Research h1 em {
    display: block;
    font-family: 'Crimson Pro', Georgia, serif;
    font-size: 0.75rem;
    font-style: italic;
    font-weight: 400;
    color: #a89880;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 0.4rem;
}

.Services-Bespoke-Research p {
    font-family: 'Crimson Pro', Georgia, serif;
    font-size: 1.125rem;
    line-height: 1.9;
    color: #2c2520;
    margin: 1.25rem 0 0;
    padding: 0;
    text-align: justify;
    hyphens: auto;
    -webkit-hyphens: auto;
    opacity: 1;
    transform: none;
    animation: none;
}

.Services-Bespoke-Research p::before,
.Services-Bespoke-Research p::first-letter { all: unset; }

.Services-Bespoke-Research p:nth-of-type(2n)::after {
    content: '';
    display: block;
    width: 40px;
    height: 1px;
    background: #c8bfa8;
    margin: 1.25rem 0 0;
}

@media (max-width: 768px) {
    .Services-Bespoke-Research {
        padding: 36px 32px 44px;
        margin-top: 24px;
    }
    .Services-Bespoke-Research h1 {
        font-size: clamp(1.3rem, 5vw, 1.8rem);
    }
    .Services-Bespoke-Research p {
        font-size: 1.05rem;
        text-align: left;
        hyphens: none;
        -webkit-hyphens: none;
    }
}

@media (max-width: 480px) {
    .Services-Bespoke-Research {
        padding: 28px 20px 36px;
        margin-top: 16px;
        border-left: none;
        border-right: none;
    }
}

/* ─── Services-Data-Interpretation ──────────────────────────── */

.Services-Data-Interpretation {
    max-width: 860px;
    margin: 32px auto 0;
    padding: 48px 80px 56px;
    position: relative;
    background: #faf8f3;
    border: 1px solid #c8bfa8;
    border-top: 4px solid #1e2d3d;
}

.Services-Data-Interpretation::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 1px;
    background: #1e2d3d;
}

.Services-Data-Interpretation::before {
    content: '‡';
    position: absolute;
    top: 20px; right: 32px;
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 0.9rem;
    color: #c8bfa8;
    letter-spacing: 0.1em;
}

.Services-Data-Interpretation h1 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(1.4rem, 3vw, 2.1rem);
    font-weight: 600;
    color: #1a1a1a;
    line-height: 1.2;
    letter-spacing: -0.01em;
    margin: 0 0 0.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #c8bfa8;
    background: none;
    -webkit-text-fill-color: unset;
}

.Services-Data-Interpretation h1 em {
    display: block;
    font-family: 'Crimson Pro', Georgia, serif;
    font-size: 0.75rem;
    font-style: italic;
    font-weight: 400;
    color: #a89880;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 0.4rem;
}

.Services-Data-Interpretation p {
    font-family: 'Crimson Pro', Georgia, serif;
    font-size: 1.125rem;
    line-height: 1.9;
    color: #2c2520;
    margin: 1.25rem 0 0;
    padding: 0;
    text-align: justify;
    hyphens: auto;
    -webkit-hyphens: auto;
    opacity: 1;
    transform: none;
    animation: none;
}

.Services-Data-Interpretation p::before,
.Services-Data-Interpretation p::first-letter { all: unset; }

.Services-Data-Interpretation p:nth-of-type(2n)::after {
    content: '';
    display: block;
    width: 40px;
    height: 1px;
    background: #c8bfa8;
    margin: 1.25rem 0 0;
}

.Services-Data-Interpretation p strong {
    display: block;
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 0.72rem;
    font-weight: 600;
    color: #1e2d3d;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    padding-bottom: 0.4rem;
    border-bottom: 1px solid #c8bfa8;
}

@media (max-width: 768px) {
    .Services-Data-Interpretation {
        padding: 36px 32px 44px;
        margin-top: 24px;
    }
    .Services-Data-Interpretation h1 {
        font-size: clamp(1.3rem, 5vw, 1.8rem);
    }
    .Services-Data-Interpretation p {
        font-size: 1.05rem;
        text-align: left;
        hyphens: none;
        -webkit-hyphens: none;
    }
}

@media (max-width: 480px) {
    .Services-Data-Interpretation {
        padding: 28px 20px 36px;
        margin-top: 16px;
        border-left: none;
        border-right: none;
    }
}
.svc-section {
      font-family: 'DM Sans', sans-serif;
      padding: 4rem 2rem;
      text-align: center;
      max-width: 600px;
      width: 100%;
      position: relative;
    }

    .svc-blob {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 320px;
      height: 320px;
      border-radius: 50%;
      background: #E1F5EE;
      opacity: 0.45;
      z-index: 0;
    }

    .svc-content { position: relative; z-index: 1; }

    .svc-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #E1F5EE;
      color: #0F6E56;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 6px 14px;
      border-radius: 100px;
      margin-bottom: 1.5rem;
    }

    .svc-badge-dot {
      width: 7px;
      height: 7px;
      background: #1D9E75;
      border-radius: 50%;
    }

    .svc-headline {
      font-family: 'DM Serif Display', serif;
      font-size: 36px;
      line-height: 1.2;
      color: #1a1a1a;
      margin: 0 0 0.5rem;
    }

    .svc-headline em {
      font-style: italic;
      color: #0F6E56;
    }

    .svc-divider {
      width: 48px;
      height: 3px;
      background: #1D9E75;
      border-radius: 2px;
      margin: 1.25rem auto 1.5rem;
    }

    .svc-para {
      font-size: 15px;
      line-height: 1.8;
      color: #666;
      max-width: 440px;
      margin: 0 auto 2rem;
    }

    .svc-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: #1D9E75;
      color: #fff;
      font-family: 'DM Sans', sans-serif;
      font-size: 15px;
      font-weight: 500;
      padding: 14px 32px;
      border-radius: 100px;
      border: none;
      cursor: pointer;
      transition: background 0.2s, transform 0.1s;
      margin-bottom: 2rem;
    }

    .svc-btn:hover { background: #0F6E56; }
    .svc-btn:active { transform: scale(0.97); }
    .svc-btn svg { width: 16px; height: 16px; stroke: #fff; fill: none; }

    .svc-steps {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0;
    }

    .svc-step-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      color: #888;
    }

    .svc-step-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #1D9E75;
    }

    .svc-step-line {
      width: 28px;
      height: 1px;
      background: #9FE1CB;
      margin: 0 6px;
    }

</style>