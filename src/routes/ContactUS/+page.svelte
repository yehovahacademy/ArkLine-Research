<script>
  import { onMount } from 'svelte';
   import {gsap} from 'gsap';
</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
<div class="ContactUs-paragraph">
 <h1><i class="fa-solid fa-users-rectangle"></i>
  Contact Us</h1>
 <p>At ARKLINE RESEARCH, we believe that better commercial decisions begin with the right insight.</p>
 <p>Whether you are looking for freight market intelligence, strategic commercial insight, bespoke research, or support in navigating complex freight market dynamics, we welcome the opportunity to connect.</p>
 <p>We work with shipping and energy professionals to provide practical, commercially relevant intelligence that helps improve visibility, strengthen decision-making, and support better outcomes in volatile freight markets.</p>
 <p>If you would like to discuss how ARKLINE RESEARCH can support your commercial objectives, we would be pleased to hear from you.</p>
</div>

<div class="GetinTouch">
<h1><i class="fa-solid fa-phone"></i>
  Get in Touch</h1>
<p>For enquiries related to our research, advisory support, or tailored intelligence services, please contact us at:</p>
<p>Email: C.Deepakchelladurai@gmail.com</p>
<p>Phone: +919619053895</p>
<p>We aim to respond promptly and ensure every conversation is focused, relevant, and commercially valuable.</p>
<p>You can also connect with me on my LinkedIn
<a href="https://www.linkedin.com/in/deepakchelladurai/" target="_blank" rel="noopener noreferrer" aria-label="linkedin-profile">
        <i class="fab fa-linkedin"></i>
     </a>
</p>
</div>

<div class="LetsStarttheConverstaion">
  <h1>
    <em>A closing word</em>
    <i class="fa-solid fa-comment"></i>
    Let's Start the Conversation
  </h1>
  <p>In fast-moving freight markets, clarity and timely intelligence can make a meaningful difference.</p>
  <p>If your business requires deeper market understanding, strategic freight insight, or customised research support, ARKLINE RESEARCH is here to help transform complexity into informed commercial action.</p>
  <p>We look forward to connecting with you.</p>
</div>


<br><br><br><br>

<div class="cta-wrap">
    <div class="cta-ring ring-a"></div>
    <div class="cta-ring ring-b"></div>
    <div class="cta-ring ring-c"></div>

    <div class="cta-content">
      <div class="cta-badge">
        <div class="cta-badge-dot"></div>
        Let's get started
      </div>

      <h1 class="cta-headline">Have a minute?<br><em>We'd love to help.</em></h1>
      <div class="cta-divider"></div>

      <p class="cta-para">Fill out our quick form to share your requirements. It takes just a minute or two — our team reviews every submission and gets back with clear next steps.</p>

      <button class="cta-btn">
        <a href="https://forms.gle/cgMXJMHmT6q8woZ78">Get in Touch</a>
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 8h10M9 4l4 4-4 4"/>
        </svg>
      </button>

      <div class="cta-steps">
        <div class="cta-step"><div class="cta-step-num">1</div>Fill the form</div>
        <div class="cta-step-line"></div>
        <div class="cta-step"><div class="cta-step-num">2</div>We review</div>
        <div class="cta-step-line"></div>
        <div class="cta-step"><div class="cta-step-num">3</div>We reach out</div>
      </div>

      <div class="cta-trust">
        <div class="cta-trust-item">
          <span class="cta-trust-val">48h</span>
          <span class="cta-trust-lbl">Response time</span>
        </div>
        <div class="cta-trust-sep"></div>
        <div class="cta-trust-item">
          <span class="cta-trust-val">100%</span>
          <span class="cta-trust-lbl">Confidential</span>
        </div>
        <div class="cta-trust-sep"></div>
        <div class="cta-trust-item">
          <span class="cta-trust-val">Strategic</span>
          <span class="cta-trust-lbl">Consultation</span>
        </div>
      </div>
    </div>
  </div>

<style>
/* ─── Classic Editorial · ContactUs-paragraph ───────────────── */


    * { margin: 0; padding: 0; box-sizing: border-box; }

.ContactUs-paragraph {
    max-width: 860px;
    margin: 32px auto 0;
    padding: 52px 80px 64px;
    position: relative;
    background: #faf8f3;
    border: 1px solid #c8bfa8;
    border-top: 4px solid #1a1a1a;
}

/* Bottom closing rule */
.ContactUs-paragraph::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 1px;
    background: #1a1a1a;
}

/* Printer's flower — signals end of document */
.ContactUs-paragraph::before {
    content: '✦';
    position: absolute;
    top: 20px; right: 32px;
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 0.9rem;
    color: #c8bfa8;
    letter-spacing: 0.1em;
}

/* ─── Heading ────────────────────────────────────────────────── */

.ContactUs-paragraph h1 {
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

.ContactUs-paragraph h1::before {
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

/* ─── Body copy ──────────────────────────────────────────────── */

.ContactUs-paragraph p {
    font-family: 'Crimson Pro', Georgia, serif;
    font-size: 1.125rem;
    line-height: 1.95;
    color: #2c2520;
    margin: 1.35rem 0 0;
    padding: 0;
    text-align: justify;
    hyphens: auto;
    -webkit-hyphens: auto;
    opacity: 1;
    transform: none;
    animation: none;
}

/* No drop-cap, no bullet */
.ContactUs-paragraph p::before,
.ContactUs-paragraph p::first-letter { all: unset; }

/* Ruled divider after every even paragraph */
.ContactUs-paragraph p:nth-of-type(2n)::after {
    content: '';
    display: block;
    width: 40px;
    height: 1px;
    background: #c8bfa8;
    margin: 1.35rem 0 0;
}

/* Final paragraph — slight tonal lift, reads as a sign-off */
.ContactUs-paragraph p:last-of-type {
    font-style: italic;
    color: #4a3f32;
    border-top: 1px solid #e8e0d0;
    padding-top: 1.35rem;
    margin-top: 1.75rem;
}

/* ─── Responsive ─────────────────────────────────────────────── */

@media (max-width: 768px) {
    .ContactUs-paragraph {
        padding: 40px 32px 48px;
        margin-top: 24px;
    }

    .ContactUs-paragraph h1 {
        font-size: clamp(1.4rem, 5vw, 2rem);
    }

    .ContactUs-paragraph p {
        font-size: 1.05rem;
        text-align: left;
        hyphens: none;
        -webkit-hyphens: none;
    }
}

@media (max-width: 480px) {
    .ContactUs-paragraph {
        padding: 32px 20px 40px;
        margin-top: 16px;
        border-left: none;
        border-right: none;
    }
}
/* ─── Classic Editorial · GetinTouch ────────────────────────── */

.GetinTouch {
    max-width: 860px;
    margin: 32px auto 0;
    padding: 52px 80px 64px;
    position: relative;
    background: #faf8f3;
    border: 1px solid #c8bfa8;
    border-top: 4px solid #1e2d3d;
}

/* Bottom closing rule */
.GetinTouch::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 1px;
    background: #1e2d3d;
}

/* Folio mark */
.GetinTouch::before {
    content: '✉';
    position: absolute;
    top: 20px; right: 32px;
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 0.9rem;
    color: #c8bfa8;
    letter-spacing: 0.1em;
}

/* ─── Heading ────────────────────────────────────────────────── */

.GetinTouch h1 {
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

.GetinTouch h1 em {
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

/* ─── Intro & closing paragraphs ─────────────────────────────── */

.GetinTouch p {
    font-family: 'Crimson Pro', Georgia, serif;
    font-size: 1.125rem;
    line-height: 1.9;
    color: #2c2520;
    margin: 1.25rem 0 0;
    padding: 0;
    text-align: left;
    hyphens: none;
    opacity: 1;
    transform: none;
    animation: none;
}

.GetinTouch p::before,
.GetinTouch p::first-letter { all: unset; }

/* ─── Contact detail lines ───────────────────────────────────── */

/* Email line */
.GetinTouch p:nth-child(3) {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #a89880;
    margin: 2rem 0 0;
    padding-bottom: 0.35rem;
    border-bottom: 1px solid #e8e0d0;
}

.GetinTouch p:nth-child(3)::after { display: none; }

/* Phone line */
.GetinTouch p:nth-child(4) {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #a89880;
    margin: 0.6rem 0 0;
    padding-bottom: 0.35rem;
    border-bottom: 1px solid #e8e0d0;
}

.GetinTouch p:nth-child(4)::after { display: none; }

/* Closing response-time line */
.GetinTouch p:nth-child(5) {
    margin-top: 2rem;
    padding-top: 1.25rem;
    border-top: 1px solid #e8e0d0;
    font-style: italic;
    color: #4a3f32;
}

/* LinkedIn line */
.GetinTouch p:last-of-type {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-top: 1.25rem;
    font-style: normal;
    color: #2c2520;
}

/* ─── LinkedIn seal ──────────────────────────────────────────── */

.GetinTouch a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #faf8f3;
    border: 1px solid #c8bfa8;
    box-shadow:
        0 0 0 3px #faf8f3,
        0 0 0 4px #c8bfa8;
    color: #1e2d3d;
    font-size: 0.85rem;
    text-decoration: none;
    flex-shrink: 0;
    transition: background 0.25s ease,
                border-color 0.25s ease,
                color 0.25s ease;
}

.GetinTouch a:hover {
    background: #1e2d3d;
    border-color: #1e2d3d;
    color: #faf8f3;
}

.GetinTouch a i {
    pointer-events: none;
    line-height: 1;
}

/* ─── Responsive ─────────────────────────────────────────────── */

@media (max-width: 768px) {
    .GetinTouch {
        padding: 40px 32px 48px;
        margin-top: 24px;
    }

    .GetinTouch h1 {
        font-size: clamp(1.4rem, 5vw, 2rem);
    }

    .GetinTouch p {
        font-size: 1.05rem;
    }

    .GetinTouch p:nth-child(3),
    .GetinTouch p:nth-child(4) {
        font-size: 0.68rem;
    }
}

@media (max-width: 480px) {
    .GetinTouch {
        padding: 32px 20px 40px;
        margin-top: 16px;
        border-left: none;
        border-right: none;
    }
}
/* ─── Classic Editorial · LetsStarttheConverstaion ──────────── */

.LetsStarttheConverstaion {
    max-width: 860px;
    margin: 32px auto 0;
    padding: 52px 80px 64px;
    position: relative;
    background: #1a1a1a;
    border: 1px solid #2e2e2e;
    border-top: 4px solid #c8bfa8;
}

/* Bottom closing rule — parchment on dark, mirroring the top */
.LetsStarttheConverstaion::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 1px;
    background: #c8bfa8;
}

/* Colophon mark — ❧ hedera, the classical end-of-text ornament */
.LetsStarttheConverstaion::before {
    content: '❧';
    position: absolute;
    top: 20px; right: 32px;
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 1rem;
    color: #4a3f32;
    letter-spacing: 0.1em;
}

/* ─── Heading ────────────────────────────────────────────────── */

.LetsStarttheConverstaion h1 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(1.6rem, 3.5vw, 2.5rem);
    font-weight: 600;
    color: #faf8f3;
    line-height: 1.2;
    letter-spacing: -0.01em;
    margin: 0 0 0.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #2e2e2e;
    background: none;
    -webkit-text-fill-color: unset;
}

.LetsStarttheConverstaion h1 em {
    display: block;
    font-family: 'Crimson Pro', Georgia, serif;
    font-size: 0.75rem;
    font-style: italic;
    font-weight: 400;
    color: #6b5f4e;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 0.4rem;
}

/* ─── Body copy ──────────────────────────────────────────────── */

.LetsStarttheConverstaion p {
    font-family: 'Crimson Pro', Georgia, serif;
    font-size: 1.175rem;
    line-height: 2;
    color: #c8bfa8;
    margin: 1.75rem 0 0;
    padding: 0 0 0 1.75rem;
    border-left: 1px solid #2e2e2e;
    text-align: left;
    hyphens: none;
    font-style: italic;
    opacity: 1;
    transform: none;
    animation: none;
}

.LetsStarttheConverstaion p::before,
.LetsStarttheConverstaion p::first-letter { all: unset; }

/* ─── Responsive ─────────────────────────────────────────────── */

@media (max-width: 768px) {
    .LetsStarttheConverstaion {
        padding: 40px 32px 48px;
        margin-top: 24px;
    }

    .LetsStarttheConverstaion h1 {
        font-size: clamp(1.4rem, 5vw, 2rem);
    }

    .LetsStarttheConverstaion p {
        font-size: 1.1rem;
        padding-left: 1.25rem;
        margin-top: 1.5rem;
    }
}

@media (max-width: 480px) {
    .LetsStarttheConverstaion {
        padding: 32px 20px 40px;
        margin-top: 16px;
        border-left: none;
        border-right: none;
    }

    .LetsStarttheConverstaion p {
        padding-left: 1rem;
        font-size: 1.05rem;
    }
}


.cta-wrap {
      font-family: 'DM Sans', sans-serif;
      padding: 5rem 2rem;
      text-align: center;
      position: relative;
      overflow: hidden;
      background: #fff;
      border-radius: 24px;
      border: 0.5px solid #e5e5e0;
      max-width: 680px;
      width: 100%;
      margin: 0 auto;
    }

    .cta-ring {
      position: absolute;
      border-radius: 50%;
      border: 1px solid #b8e8d4;
      pointer-events: none;
    }
    .ring-a { width: 500px; height: 500px; top: 50%; left: 50%; transform: translate(-50%,-50%); opacity: 0.25; }
    .ring-b { width: 340px; height: 340px; top: 50%; left: 50%; transform: translate(-50%,-50%); opacity: 0.35; }
    .ring-c { width: 180px; height: 180px; top: 50%; left: 50%; transform: translate(-50%,-50%); opacity: 0.45; background: #E1F5EE; border: none; }

    .cta-content { position: relative; z-index: 2; }

    .cta-badge {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      background: #E1F5EE;
      color: #085041;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 6px 16px;
      border-radius: 100px;
      margin-bottom: 2rem;
      border: 0.5px solid #9FE1CB;
    }

    .cta-badge-dot {
      width: 6px; height: 6px;
      background: #1D9E75;
      border-radius: 50%;
    }

    .cta-headline {
      font-family: 'DM Serif Display', serif;
      font-size: 44px;
      line-height: 1.15;
      color: #111;
      margin: 0 0 0.25rem;
      letter-spacing: -0.5px;
    }

    .cta-headline em { font-style: italic; color: #0F6E56; }

    .cta-divider {
      width: 36px; height: 2.5px;
      background: #1D9E75;
      border-radius: 2px;
      margin: 1.25rem auto 1.75rem;
    }

    .cta-para {
      font-size: 15px;
      line-height: 1.85;
      color: #777;
      max-width: 400px;
      margin: 0 auto 2.5rem;
    }

    .cta-btn {
     display: inline-flex;
  align-items: center;
  gap: 10px;

  /* Fix anchor tag color & underline */
  color: #fff;
  text-decoration: none;

  /* Unique styling */
  background: #1D9E75;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  padding: 16px 40px;
  border-radius: 100px;
  border: 2px solid #1D9E75;
  cursor: pointer;

  /* Subtle inner glow ring */
  outline: 3px solid #9FE1CB;
  outline-offset: 3px;

  transition: background 0.2s, color 0.2s, outline-color 0.2s, transform 0.15s;
  margin-bottom: 2.5rem;
    }

    .cta-btn:hover { background: #0F6E56; transform: translateY(-2px); }
    .cta-btn:active { transform: scale(0.97); }
    .cta-btn svg { width: 14px; height: 14px; stroke: #fff; fill: none; }

    .cta-steps {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 3rem;
    }

    .cta-step {
      display: flex; align-items: center; gap: 8px;
      font-size: 12px; color: #888;
    }

    .cta-step-num {
      width: 22px; height: 22px;
      border-radius: 50%;
      background: #E1F5EE;
      border: 0.5px solid #9FE1CB;
      display: flex; align-items: center; justify-content: center;
      font-size: 10px; font-weight: 500; color: #0F6E56;
      flex-shrink: 0;
    }

    .cta-step-line {
      width: 32px; height: 0.5px;
      background: #9FE1CB;
      margin: 0 6px;
    }

    .cta-trust {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 2rem;
      border-top: 0.5px solid #ebebeb;
    }

    .cta-trust-item {
      display: flex; flex-direction: column;
      align-items: center; gap: 3px;
      padding: 0 2rem;
    }

    .cta-trust-val {
      font-family: 'DM Serif Display', serif;
      font-size: 20px; color: #111;
    }

    .cta-trust-lbl { font-size: 11px; color: #aaa; letter-spacing: 0.04em; }

    .cta-trust-sep { width: 0.5px; height: 36px; background: #e5e5e0; }
</style>