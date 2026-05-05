<script>
  import { onMount } from 'svelte';
   import {gsap} from 'gsap';
</script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>

<div class="Research-Para">
  <h1><i class="fa-solid fa-atom"></i>
    Research</h1>
  <p>ARKLINE RESEARCH delivers focused market intelligence and commercial analysis designed to help maritime professionals navigate freight market complexity with greater clarity.</p>
  <p>Our research examines the operational, contractual, and market dynamics that shape freight performance across the shipping value chain. From freight volatility and voyage economics to demurrage exposure and trade flow disruptions, we provide insights that help industry stakeholders understand risks, anticipate changes, and respond with confidence.</p>
  <p>We focus on the commercial impact behind market movements, translating complex shipping data into practical intelligence that supports smarter decision-making.</p>
</div>

<div class="Research-Categories">

  <div class="Research-Categories-header">
    <span class="Research-Categories-eyebrow">What we cover</span>
    <h1><i class="fa-solid fa-layer-group"></i>
      Research Categories</h1>
  </div>

  <div class="Research-Categories-grid">

    <div class="Research-Category-card">
      <span class="Research-Category-number">01</span>
      <h2><i class="fa-solid fa-magnifying-glass-chart"></i>
        Freight Markets</h2>
      <p>We provide in-depth analysis of freight rate movements, vessel supply-demand dynamics, market volatility, and the underlying factors shaping freight performance across key shipping segments. Our research helps maritime professionals understand market direction, identify emerging trends, and make better-informed commercial decisions in a rapidly changing freight environment.</p>
    </div>

    <div class="Research-Category-card">
      <span class="Research-Category-number">02</span>
      <h2><i class="fa-solid fa-anchor-circle-check"></i>
        Voyage Economics</h2>
      <p>Our voyage economics research focuses on the commercial drivers that impact voyage profitability, including bunker costs, port expenses, operational delays, and voyage performance metrics. By evaluating the economics behind freight operations, we help industry stakeholders assess cost exposure, improve margin visibility, and strengthen commercial planning.</p>
    </div>

    <div class="Research-Category-card">
      <span class="Research-Category-number">03</span>
      <h2><i class="fa-brands fa-periscope"></i>
        Demurrage & Operational Risk</h2>
      <p>We analyse the operational factors that contribute to delay exposure, demurrage costs, and margin leakage during voyage execution. From laytime risks and port inefficiencies to operational bottlenecks, our research provides actionable insights that help commercial teams improve risk visibility, protect margins, and respond more effectively to disruptions.</p>
    </div>

    <div class="Research-Category-card">
      <span class="Research-Category-number">04</span>
      <h2><i class="fa-solid fa-brain"></i>
        Trade Flow Intelligence</h2>
      <p>Our trade flow intelligence research examines how geopolitical developments, sanctions, cargo flow shifts, and macroeconomic events influence freight demand and global shipping patterns. By interpreting the commercial impact of external market forces, we help stakeholders anticipate disruptions and adapt strategies in an evolving trade environment.</p>
    </div>

    <div class="Research-Category-card">
      <span class="Research-Category-number">05</span>
      <h2><i class="fa-solid fa-at"></i>
        Commercial Strategy</h2>
      <p>We deliver strategic insights into chartering decisions, market positioning, freight risk management, and the commercial approaches required to navigate increasingly complex shipping markets. Our research supports smarter strategic planning by helping maritime professionals align market intelligence with commercial action.</p>
    </div>

    <div class="Research-Category-card Research-Category-card--closing">
      <p>At ARKLINE RESEARCH, the objective is not simply to track the market — but to provide commercially relevant intelligence that enables better decisions in an increasingly dynamic maritime environment.</p>
    </div>

  </div>

</div>

<style>
  /* ── Research Paragraph ── */
.Research-Para {
  margin-top: 1.5rem;
  padding: 4rem 3.5rem;
  background: var(--color-surface);
  border: 0.5px solid var(--color-line);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: background 0.25s ease, border-color 0.25s ease;

  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  column-gap: 4rem;
  row-gap: 0;
}

.Research-Para h1 {
  font-family: var(--ff-display);
  font-size: 48px;
  font-weight: 400;
  letter-spacing: 4px;
  color: var(--color-ink);
  line-height: 1;
  margin: 0;
  grid-column: 1;
  grid-row: 1;
  position: sticky;
  top: 6rem;
  align-self: start;
  transition: color 0.25s ease;
}

.Research-Para h1::after {
  content: '';
  display: block;
  width: 28px;
  height: 1px;
  background: var(--color-line-2);
  margin-top: 1.25rem;
}

/* First p — lead paragraph */
.Research-Para p:first-of-type {
  grid-column: 2;
  grid-row: 1;
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

/* Subsequent p — supporting paragraphs */
.Research-Para p:not(:first-of-type) {
  grid-column: 2;
  font-family: var(--ff-body);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.95;
  color: var(--color-ink-2);
  margin: 0;
  letter-spacing: 0.1px;
}

.Research-Para p:not(:first-of-type):not(:last-of-type) {
  padding-bottom: 1.4rem;
  margin-bottom: 1.4rem;
  border-bottom: 0.5px solid var(--color-line);
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .Research-Para {
    padding: 2rem 1.75rem;
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
  }

  .Research-Para h1 {
    font-size: 36px;
    grid-column: 1;
    grid-row: 1;
    position: static;
  }

  .Research-Para p:first-of-type {
    grid-column: 1;
    grid-row: 2;
    font-size: 15px;
  }

  .Research-Para p:not(:first-of-type) {
    grid-column: 1;
  }
}
/* ── Research Categories ── */
.Research-Categories {
  margin-top: 1.5rem;
  border: 0.5px solid var(--color-line);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  overflow: hidden;
  transition: background 0.25s ease, border-color 0.25s ease;
}

/* ── Header ── */
.Research-Categories-header {
  padding: 3rem 3.5rem 2.5rem;
  border-bottom: 0.5px solid var(--color-line);
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.Research-Categories-eyebrow {
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

.Research-Categories-eyebrow::before {
  content: '';
  display: inline-block;
  width: 24px;
  height: 0.5px;
  background: var(--color-line-2);
  flex-shrink: 0;
}

.Research-Categories-header h1 {
  font-family: var(--ff-display);
  font-size: 48px;
  font-weight: 400;
  letter-spacing: 4px;
  color: var(--color-ink);
  line-height: 1;
  margin: 0;
  transition: color 0.25s ease;
}

/* ── Grid ── */
.Research-Categories-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
}

/* ── Card ── */
.Research-Category-card {
  padding: 2.5rem 3rem;
  border-bottom: 0.5px solid var(--color-line);
  border-right: 0.5px solid var(--color-line);
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  transition: background 0.22s ease;
}

.Research-Category-card:hover {
  background: var(--color-raised);
}

/* Remove right border on every second card */
.Research-Category-card:nth-child(even) {
  border-right: none;
}

/* Remove bottom border on last two cards */
.Research-Category-card:nth-last-child(-n+2) {
  border-bottom: none;
}

/* ── Number ── */
.Research-Category-number {
  font-family: var(--ff-display);
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 3px;
  color: var(--color-ink-3);
}

/* ── Card heading ── */
.Research-Category-card h2 {
  font-family: var(--ff-display);
  font-size: 26px;
  font-weight: 400;
  letter-spacing: 2px;
  color: var(--color-ink);
  line-height: 1.1;
  margin: 0;
  transition: color 0.22s ease;
}

/* ── Card body ── */
.Research-Category-card p {
  font-family: var(--ff-body);
  font-size: 13.5px;
  font-weight: 400;
  line-height: 1.9;
  color: var(--color-ink-2);
  margin: 0;
  letter-spacing: 0.1px;
}

/* ── Closing card ── */
.Research-Category-card--closing {
  background: var(--color-raised);
  border-right: none;
  justify-content: center;
}

.Research-Category-card--closing p {
  font-family: var(--ff-body);
  font-size: 15px;
  font-weight: 400;
  font-style: italic;
  line-height: 1.85;
  color: var(--color-ink);
  letter-spacing: 0.1px;
}

.Research-Category-card--closing:hover {
  background: var(--color-line);
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .Research-Categories-header {
    padding: 2rem 1.75rem 1.75rem;
  }

  .Research-Categories-header h1 {
    font-size: 36px;
  }

  .Research-Categories-grid {
    grid-template-columns: 1fr;
  }

  .Research-Category-card {
    border-right: none;
    padding: 2rem 1.75rem;
  }

  .Research-Category-card:nth-last-child(-n+2) {
    border-bottom: 0.5px solid var(--color-line);
  }

  .Research-Category-card:last-child {
    border-bottom: none;
  }
}

</style>