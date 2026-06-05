<script>
</script>

<div class="Navbar">
  <div class="Navbar-brand">
    <img src="/arkline-logo.jpg" alt="ARKLINE Logo" width="32" height="32" />
    <h1>ARKLINE</h1>
  </div>

  <nav class="Navbar-links">
    <a href="/">Home</a>
    <a href="/about">About Us</a>
    <a href="/research">Research</a>
    <a href="/Services">Services</a>
    <a href="/ContactUS" class="Navbar-cta">Contact Us</a>
  </nav>
</div>


<slot />







<footer class="Footer">

  <!-- Top row -->
  <div class="Footer-top">

    <div class="Footer-brand">
      <div class="Footer-brand-row">
        <img src="/arkline-logo.jpg" alt="ARKLINE Logo" width="28" height="28" />
        <span class="Footer-wordmark">ARKLINE</span>
      </div>
      <p class="Footer-tagline">
        Decoding the complexities of global maritime trade — one data point at a time.
      </p>

      <!-- Social links under tagline -->
      <div class="Footer-social">
        <a href="https://www.linkedin.com/company/arklineresearch/" target="_blank" rel="noopener" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        
        <a href="mailto:admin@arklineresearch.com" aria-label="Email">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </a>
      </div>
    </div>

    <div class="Footer-links">
      <div class="Footer-col">
        <span class="Footer-col-heading">Navigate</span>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/Services">Services</a>
      </div>
      <div class="Footer-col">
        <span class="Footer-col-heading">Research</span>
        <a href="/research/freight">Freight Markets</a>
        <a href="/research/Tanker">Tanker Shipping</a>
        <a href="/research/logistics">Logistics</a>
        <a href="/research/reports">Report</a>
      </div>
      <div class="Footer-col">
        <span class="Footer-col-heading">Company</span>
        <a href="/about">Our Mission</a>
        <a href="/careers">Careers</a>
        <a href="/ContactUS">Contact Us</a>
       
      </div>
    </div>

  </div>

  <div class="Footer-divider"></div>

  <div class="Footer-bottom">
    <span class="Footer-copy">© 2025 ARKLINE. All rights reserved.</span>
    <div class="Footer-legal">
      <a href="/privacy">Privacy Policy</a>
      <a href="/terms">Terms of Use</a>
    </div>
  </div>


</footer>


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

/* ══════════════════════════════════════
   NAVBAR
══════════════════════════════════════ */
/* ── Navbar ── */
.Navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.75rem;
  height: 64px;
  background: var(--color-surface);
  border: 0.5px solid var(--color-line);
  border-radius: var(--radius-md);
  position: sticky;
  top: 1rem;
  z-index: 100;
  margin-bottom: 1.5rem;
}

/* ── Brand: logo + wordmark ── */
.Navbar-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.Navbar-brand img {
  width: 45px;
  height: 45px;
  border-radius: 50px;
  object-fit: cover;
  display: block;
  border: 0.5px solid var(--color-line);
}

.Navbar-brand h1 {
  font-family: var(--ff-display);
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 3px;
  color: var(--color-ink);
  margin: 0;
  user-select: none;
}

/* ── Nav links ── */
.Navbar-links {
  display: flex;
  align-items: center;
  gap: 2px;
}

.Navbar-links a {
  font-family: var(--ff-body);
  font-size: 13.5px;
  font-weight: 400;
  color: var(--color-ink-3);
  text-decoration: none;
  padding: 6px 14px;
  border-radius: var(--radius-sm);
  border: 0.5px solid transparent;
  letter-spacing: 0.1px;
  transition:
    color var(--duration) var(--ease),
    background var(--duration) var(--ease),
    border-color var(--duration) var(--ease);
}

.Navbar-links a:hover {
  color: var(--color-ink);
  background: var(--color-raised);
  border-color: var(--color-line);
}

.Navbar-links a:active {
  transform: scale(0.97);
}

.Navbar-links a:active {
  color: var(--color-ink);
  font-weight: 500;
  background: var(--color-raised);
  border-color: var(--color-line-2);
}

/* ── CTA button ── */
.Navbar-cta {
  font-weight: 500 !important;
  color: var(--color-surface) !important;
  background: var(--color-accent) !important;
  border-color: var(--color-accent) !important;
  margin-left: 8px;
  letter-spacing: 0.2px;
  transition:
    background var(--duration) var(--ease),
    border-color var(--duration) var(--ease),
    transform 0.1s var(--ease) !important;
}

.Navbar-cta:hover {
  background: #2a2a2a !important;
  border-color: #2a2a2a !important;
}

.Navbar-cta:active {
  transform: scale(0.96) !important;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .Navbar-links a:not(.Navbar-cta) {
    display: none;
  }

  .Navbar-cta {
    margin-left: 0;
  }
}
.Footer {
  margin-top: 1.5rem;
  padding: 3.5rem 3rem 2rem;
  background: var(--color-surface);
  border: 0.5px solid var(--color-line);
  border-radius: var(--radius-lg);
}

/* ── Top row ── */
.Footer-top {
  display: grid;
  grid-template-columns: 1.4fr 2fr;
  gap: 4rem;
  align-items: start;
}

/* ── Brand ── */
.Footer-brand-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;
}

.Footer-brand-row img {
  width: 75px;
  height: 75px;
  border-radius: 50px;
  object-fit: cover;
  border: 0.5px solid var(--color-line);
  display: block;
}

.Footer-wordmark {
  font-family: var(--ff-display);
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 3px;
  color: var(--color-ink);
}

.Footer-tagline {
  font-family: var(--ff-body);
  font-size: 13.5px;
  font-weight: 500;
  font-style: italic;
  line-height: 1.75;
  color: var(--black);
  max-width: 260px;
  margin: 0;
}

/* ── Link columns ── */
.Footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.Footer-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.Footer-col-heading {
  font-family: var(--ff-body);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--color-ink);
  margin-bottom: 4px;
}

.Footer-col a {
  font-family: var(--ff-body);
  font-size: 13.5px;
  font-weight: 500;
  color: var(--black);
  text-decoration: none;
  letter-spacing: 0.1px;
  transition: color var(--duration) var(--ease);
  width: fit-content;
}

.Footer-col a:hover {
  color: var(--color-ink);
}

/* ── Divider ── */
.Footer-divider {
  width: 100%;
  height: 0.5px;
  background: var(--color-line);
  margin: 2.5rem 0 1.5rem;
}

/* ── Bottom row ── */
.Footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.Footer-copy {
  font-family: var(--ff-body);
  font-size: 12.5px;
  font-weight: 400;
  color: var(--color-ink-3);
  letter-spacing: 0.1px;
}

.Footer-legal {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.Footer-legal a {
  font-family: var(--ff-body);
  font-size: 12.5px;
  font-weight: 400;
  color: var(--color-ink-3);
  text-decoration: none;
  letter-spacing: 0.1px;
  transition: color var(--duration) var(--ease);
}

.Footer-legal a:hover {
  color: var(--color-ink);
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .Footer {
    padding: 2.5rem 1.5rem 1.5rem;
  }

  .Footer-top {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .Footer-tagline {
    max-width: 100%;
  }

  .Footer-links {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .Footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
/* ── Social links ── */
.Footer-social {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 1.5rem;
}

.Footer-social a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: var(--radius-sm);
  border: 0.5px solid var(--color-line);
  background: transparent;
  color: var(--color-ink-3);
  text-decoration: none;
  transition:
    color var(--duration) var(--ease),
    background var(--duration) var(--ease),
    border-color var(--duration) var(--ease),
    transform 0.1s var(--ease);
}

.Footer-social a:hover {
  color: var(--color-ink);
  background: var(--color-raised);
  border-color: var(--color-line-2);
  transform: translateY(-2px);
}

.Footer-social a:active {
  transform: translateY(0) scale(0.96);
}

.Footer-social a svg {
  width: 15px;
  height: 15px;
  display: block;
}

</style>


