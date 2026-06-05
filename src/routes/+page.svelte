<script>
  // State variables for the UI
  // Set this to the number of slides/pages you have
  let translateX = 0;
  let currentStep = 0;
  let active = false;


    let currentPage = 0;
  let totalPages = 5;

  function goTo(page) {
    if (page >= 0 && page < totalPages) {
      currentPage = page;
    }
  }
  
  // Add any other variables you think the HTML might be using
</script>

<!-- ══ HERO ══ -->
<div class="paragraph">
  <h1>Welcome to ARKLINE!</h1>
  <h2>Strategic Intelligence for Maritime Excellence.</h2>
</div>

<!-- ══ INTRO ══ -->
<section class="Introduction">

  <!-- Left col: logo lockup -->
  <div class="Introduction-logo-wrap">
    <span class="Introduction-eyebrow">Est. Research Division</span>
    <img
      class="Introduction-logo"
      src="arkline-logo.jpg"
      alt="ARKLINE logo"
    />
    <span class="Introduction-wordmark"></span>
  </div>

  <!-- Right col: text -->
  <div class="Introduction-body">
    <p class="Introduction-label">Introduction</p>

    <h1 class="Introduction-heading">
        Intelligence for<br/>Global Maritime Trade
    </h1>

    <p class="Introduction-lead">
      ARKLINE Research is the market intelligence and strategic insights division of ARKLINE, focused on decoding the complexities of global maritime trade, freight markets, and energy-linked shipping dynamics. We deliver high-conviction, data-driven insights across tanker shipping, crude and refined product flows, freight volatility, port and logistics developments, trade dislocations, and emerging structural shifts shaping global shipping markets. Our research is built to cut through market noise and identify the deeper commercial drivers influencing freight behavior, vessel demand, trade routes, and market sentiment. At ARKLINE Research, we believe the maritime industry is entering a new era, one increasingly shaped by data, digitalization, geopolitical shifts, energy transition, and real-time market intelligence. Our goal is to bridge the gap between traditional shipping knowledge and modern analytical thinking by producing research that is commercially relevant, practical, and forward-looking. Through market commentary, strategic analysis, and industry intelligence, we aim to support traders, shipowners, operators, charterers, investors, and maritime professionals in making more informed decisions in an increasingly complex global environment. ARKLINE Research serves as the intelligence engine behind ARKLINE’s broader vision of building a more transparent, efficient, and digitally enabled maritime ecosystem.
    </p>

  

    <div class="Introduction-rule" aria-hidden="true"></div>
  </div>

</section>

<br /><br />

<!-- ══ ARTICLES ══ -->
<div class="articles-container">

  <div class="article-introduction">
    <span class="intro-badge">Latest Insights</span>
    <h1>Our Articles</h1>
    <p>
      Discover ARKLINE RESEARCH's latest insights and analysis, delivering practical freight
      intelligence on market movements, tanker shipping dynamics, operational risks, and strategic
      trends that shape commercial decision-making across global maritime and energy markets.
    </p>
  </div>

  <div class="articles-slider-wrapper">

   <!-- Previous -->
<button
  class="arrow-btn"
  aria-label="Previous Page"
  disabled={currentPage === 0}
  onclick={() => goTo(currentPage - 1)}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
</button>
    <!-- Viewport -->
    <div class="articles-slider-viewport">
      <div
        class="articles-slider-track"
        bind:this={track}
        style="transform: translateX(-{currentPage*100}%);"
      >

        <!-- Card 1 -->
        <div class="article-card" style="--accent:#1a4d8f; --cta:#1a4d8f">
          <div class="card-accent"></div>
          <div class="card-image-wrap">
            <img src="/article1.png" alt="Optionality in shipping" loading="lazy" />
            <span class="card-category">Market Commentary</span>
          </div>
          <div class="card-content">
            <h2>Optionality is Becoming the Most Valuable Asset in Shipping</h2>
            <p>In today's unpredictable shipping market, flexibility has become more important than ever.</p>
            <a href="https://www.linkedin.com/pulse/optionality-becoming-most-valuable-asset-shipping-arklineresearch-qmxdf/"
              target="_blank" rel="noopener noreferrer" class="card-cta">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="article-card" style="--accent:#2d7a3a; --cta:#2d7a3a">
          <div class="card-accent"></div>
          <div class="card-image-wrap">
            <img src="/article2.png" alt="Chartering and Trading" loading="lazy" />
            <span class="card-category">Market Commentary</span>
          </div>
          <div class="card-content">
            <h2>Chartering and Trading: The Growing Interdependence in Shipping</h2>
            <p>Chartering decisions are no longer just operational choices—they directly influence trading outcomes.</p>
            <a href="https://www.linkedin.com/pulse/why-chartering-decisions-now-carry-trading-consequences-lnh0f/"
              target="_blank" rel="noopener noreferrer" class="card-cta">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="article-card" style="--accent:#5a3d9e; --cta:#5a3d9e">
          <div class="card-accent"></div>
          <div class="card-image-wrap">
            <img src="/article3.png" alt="Adaptive operators" loading="lazy" />
            <span class="card-category">Market Commentary</span>
          </div>
          <div class="card-content">
            <h2>The Best Operators Are No Longer Efficient, They're Adaptive</h2>
            <p>Efficiency alone is no longer enough. Market volatility demands a new kind of strength.</p>
            <a href="https://www.linkedin.com/pulse/best-operators-longer-most-efficient-theyre-adaptive-87z1f/"
              target="_blank" rel="noopener noreferrer" class="card-cta">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="article-card" style="--accent:#c97d10; --cta:#c97d10">
          <div class="card-accent"></div>
          <div class="card-image-wrap">
            <img src="/article5.png" alt="Disappearance of Normal" loading="lazy" />
            <span class="card-category">Market Commentary</span>
          </div>
          <div class="card-content">
            <h2>The Disappearance of 'Normal' in Tanker Markets</h2>
            <p>Once predictable cycles of supply, demand, and freight rates are now disrupted by geopolitical tensions, changing trade routes, and evolving regulations.</p>
            <a href="https://www.linkedin.com/pulse/disappearance-normal-tanker-markets-arklineresearch-zr7nf/"
              target="_blank" rel="noopener noreferrer" class="card-cta">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Card 5 -->
        <div class="article-card" style="--accent:#0d7a6e; --cta:#0d7a6e">
          <div class="card-accent"></div>
          <div class="card-image-wrap">
            <img src="/article4.png" alt="Freight and Confidence" loading="lazy" />
            <span class="card-category">Market Commentary</span>
          </div>
          <div class="card-content">
            <h2>Freight Is Becoming a Function of Confidence, Not Just Demand</h2>
            <p>Freight rates are no longer driven purely by supply and demand—they are increasingly shaped by market confidence and geopolitical sentiment.</p>
            <a href="https://www.linkedin.com/pulse/freight-becoming-function-confidence-just-demand-arklineresearch-fxc1f/"
              target="_blank" rel="noopener noreferrer" class="card-cta">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Card 6 -->
        <div class="article-card" style="--accent:#c94030; --cta:#c94030">
          <div class="card-accent"></div>
          <div class="card-image-wrap">
            <img src="/article6.png" alt="Efficiency to Resilience" loading="lazy" />
            <span class="card-category">Market Commentary</span>
          </div>
          <div class="card-content">
            <h2>From Efficiency to Resilience: The New Priority in Shipping</h2>
            <p>The shipping industry is shifting from efficiency to resilience. Rising geopolitical risks and supply chain disruptions have shown that efficiency alone isn't enough.</p>
            <a href="https://www.linkedin.com/pulse/from-efficiency-resilience-new-priority-shipping-arklineresearch-e1pff/?trackingId=7T0EkcTp8vSztrLDy2SSIA%3D%3D"
              target="_blank" rel="noopener noreferrer" class="card-cta">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Card 7 -->
        <div class="article-card" style="--accent:#0d2d5a; --cta:#0d2d5a">
          <div class="card-accent"></div>
          <div class="card-image-wrap">
            <img src="/article7.png" alt="Structural Tightness" loading="lazy" />
            <span class="card-category">Market Commentary</span>
          </div>
          <div class="card-content">
            <h2>Is the Market Underestimating Structural Tightness?</h2>
            <p>Limited fleet growth, aging vessels, and regulatory pressures continue to constrain supply, keeping the market tighter than it appears.</p>
            <a href="https://www.linkedin.com/pulse/market-underestimating-structural-tightness-arklineresearch-hwq9f/?trackingId=V2IJbyVfvibbrLNlCbNUOQ%3D%3D"
              target="_blank" rel="noopener noreferrer" class="card-cta">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Card 8 -->
        <div class="article-card" style="--accent:#1a4d8f; --cta:#1a4d8f">
          <div class="card-accent"></div>
          <div class="card-image-wrap">
            <img src="/article13.png" alt="Dark Fleet Dynamics" loading="lazy" />
            <span class="card-category">Market Commentary</span>
          </div>
          <div class="card-content">
            <h2>When Markets Have No Slack Left, Repricing Becomes Immediate</h2>
            <p>When markets have no slack left, repricing becomes immediate. With minimal buffer in supply, even small disruptions or demand shifts can trigger rapid changes in rates, leaving little time for gradual adjustment.</p>
            <a href="https://www.linkedin.com/pulse/when-markets-have-slack-left-repricing-becomes-immediate-wlfpf/?trackingId=5im1JHhDMdfrt1ciXhIUpg%3D%3D" class="card-cta">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Card 9 -->
        <div class="article-card" style="--accent:#2d7a3a; --cta:#2d7a3a">
          <div class="card-accent"></div>
          <div class="card-image-wrap">
            <img src="/article9.png" alt="Tanker Cycle" loading="lazy" />
            <span class="card-category">Market Commentary</span>
          </div>
          <div class="card-content">
            <h2>Why the Tanker Cycle Might Not Look Like Previous Cycles</h2>
            <p>The tanker cycle may differ from the past due to structural shifts. Geopolitics, changing trade routes, energy transitions, and regulations are making it less predictable.</p>
            <a href="https://www.linkedin.com/pulse/why-tanker-cycle-might-look-like-previous-cycles-arklineresearch-cdomf/?trackingId=DC62ElHdk8vT%2FbuM2AktTw%3D%3D"
              target="_blank" rel="noopener noreferrer" class="card-cta">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Card 10 -->
        <div class="article-card" style="--accent:#c97d10; --cta:#c97d10">
          <div class="card-accent"></div>
          <div class="card-image-wrap">
            <img src="/article10.png" alt="Frictional Era" loading="lazy" />
            <span class="card-category">Market Commentary</span>
          </div>
          <div class="card-content">
            <h2>The End of Efficient Shipping: Are We Entering a Frictional Era?</h2>
            <p>Rising geopolitical tensions, regulatory complexity, and shifting trade routes are increasing costs and operational challenges across the shipping market.</p>
            <a href="https://www.linkedin.com/pulse/end-efficient-shipping-we-entering-frictional-era-arklineresearch-w4wzf/?trackingId=ngIunQAdRbALPT90EgaJgg%3D%3D"
              target="_blank" rel="noopener noreferrer" class="card-cta">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Card 11 -->
        <div class="article-card" style="--accent:#0d7a6e; --cta:#0d7a6e">
          <div class="card-accent"></div>
          <div class="card-image-wrap">
            <img src="/article11.png" alt="Slow Steaming" loading="lazy" />
            <span class="card-category">Market Commentary</span>
          </div>
          <div class="card-content">
            <h2>Slow Steaming Is Quietly Tightening the Global Fleet</h2>
            <p>Slow steaming is quietly tightening the global fleet by reducing effective vessel capacity, subtly constraining supply and supporting firmer freight rates.</p>
            <a href="https://www.linkedin.com/pulse/slow-steaming-quietly-tightening-global-fleet-arklineresearch-1wewe/?trackingId=mvmjFFCmXiHEUi%2BB9MIn%2Bg%3D%3D"
              target="_blank" rel="noopener noreferrer" class="card-cta">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Card 12 -->
        <div class="article-card" style="--accent:#c94030; --cta:#c94030">
          <div class="card-accent"></div>
          <div class="card-image-wrap">
            <img src="/article12.png" alt="Demurrage as Market Signal" loading="lazy" />
            <span class="card-category">Market Commentary</span>
          </div>
          <div class="card-content">
            <h2>Demurrage Is No Longer a Cost — It's a Market Signal</h2>
            <p>Rising delays and port congestion reflect tightening conditions, offering real-time insight into supply constraints and operational stress across the shipping market.</p>
            <a href="https://www.linkedin.com/pulse/demurrage-longer-cost-its-market-signal-arklineresearch-qgzdf/?trackingId=40OCSB8v0fzEHTAvm8iQnA%3D%3D"
              target="_blank" rel="noopener noreferrer" class="card-cta">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
              </svg>
            </a>
          </div>
        </div>
        <!--Card 13-->
        <div class="article-card" style="--accent:#0d2d5a; --cta:#0d2d5a">
          <div class="card-accent"></div>
          <div class="card-image-wrap">
            <img src="/article14.png" alt="Tightening Tanker Markets" loading="lazy" />
            <span class="card-category">Market Commentary</span>
          </div>
          <div class="card-content">
            <h2>Shadow Fleet Economics: The Hidden Layer of Global Shipping</h2>
            <p>Shadow fleet economics reveals a hidden layer of global shipping where vessels operate outside mainstream regulatory and commercial frameworks. Driven by sanctions, opaque ownership, and alternative trade routes, this parallel market distorts supply visibility and pricing, making the true balance of the tanker market harder to assess.</p>
            <a href="https://www.linkedin.com/pulse/shadow-fleet-economics-hidden-layer-global-shipping-arklineresearch-iq2jf/"
              target="_blank" rel="noopener noreferrer" class="card-cta">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
              </svg>
            </a>
          </div>

        </div>

      </div><!-- /.articles-slider-track -->
    </div><!-- /.articles-slider-viewport -->

   <!-- Next -->
<button
  class="arrow-btn"
  aria-label="Next Page"
  disabled={currentPage === totalPages - 1}
  onclick={() => goTo(currentPage + 1)}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
</button>

  </div><!-- /.articles-slider-wrapper -->

  <!-- Dots -->
  <div class="slider-dots">
  {#each Array(totalPages) as _, i}
    <button
      type="button"
      class="dot"
      class:active={i === currentPage}
      aria-label="Go to page {i + 1}"
      onclick={() => goTo(i)}
    >
    </button>
  {/each}
</div>

</div><!-- /.articles-container -->


<style>
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  /* ══════════════════════════════════════
     DESIGN TOKENS
  ══════════════════════════════════════ */
  :root {
    --ff-display:  'Bebas Neue', sans-serif;
    --ff-body:     'DM Sans', sans-serif;
    --color-ink:   #111111;
    --color-ink-2: #444444;
    --color-surface: #ffffff;
    --color-raised:  #f7f7f5;
    --color-line:    #e8e8e8;
    --color-line-2:  #d0d0d0;
    --radius-md:  12px;
    --radius-lg:  16px;
    --ease:       cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* ══════════════════════════════════════
     HERO
  ══════════════════════════════════════ */
  .paragraph {
    position: relative;
    padding: 5.5rem 3.5rem;
    border-radius: var(--radius-lg);
    border: 0.5px solid #1a1a1a;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
    background-image: url('/image.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .paragraph::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0,0,0,0.82) 0%,
      rgba(0,0,0,0.45) 50%,
      rgba(0,0,0,0.18) 100%
    );
    z-index: 0;
  }

  .paragraph h1,
  .paragraph h2 {
    position: relative;
    z-index: 1;
  }

  .paragraph h1 {
    font-family: var(--ff-display);
    font-size: 62px;
    font-weight: 400;
    letter-spacing: 5px;
    color: #ffffff;
    line-height: 1;
    margin: 0 0 0.85rem 0;
  }

  .paragraph h2 {
    font-family: var(--ff-body);
    font-size: 14px;
    font-weight: 300;
    font-style: italic;
    line-height: 1.8;
    color: rgba(255,255,255,0.6);
    max-width: 460px;
    margin: 0;
    letter-spacing: 0.3px;
  }

  /* ══════════════════════════════════════
     INTRODUCTION
  ══════════════════════════════════════ */
  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     INTRODUCTION
     Two-column layout mirroring .Research-Para:
       left  → logo lockup (sticky)
       right → text content
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  .Introduction {
    margin-top: 1.5rem;
    padding: 4rem 3.5rem;
    background: var(--color-surface);
    border: 0.5px solid var(--color-line);
    border-radius: var(--radius-lg);
    overflow: hidden;
    transition:
      background 0.3s ease,
      border-color 0.3s ease;
 
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 4rem;
    align-items: start;
 
    /* Entrance animation */
    animation: intro-fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
  }
 
  @keyframes intro-fade-up {
    from {
      opacity: 0;
      transform: translateY(16px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
 
  /* ── Left: Logo lockup ── */
  .Introduction-logo-wrap {
    position: sticky;
    top: 6rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    animation: intro-fade-up 0.7s 0.1s cubic-bezier(0.22, 1, 0.36, 1) both;
  }
 
  .Introduction-eyebrow {
    font-family: var(--ff-body);
    font-size: var(--fs-xs);       /* 11px */
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--color-ink-3);
    display: flex;
    align-items: center;
    gap: 10px;
  }
 
  .Introduction-eyebrow::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 0.5px;
    background: var(--color-line-2);
    flex-shrink: 0;
  }
 
  .Introduction-logo {
    width: 100%;
    max-width: 200px;
    height: auto;
    aspect-ratio: 1 / 1;
    object-fit: contain;
    border-radius: 100%;
    border: 0.5px solid var(--color-line);
    padding: 1.5rem;
    background: var(--color-raised);
    transition:
      border-color 0.3s ease,
      background 0.3s ease,
      transform 0.3s ease;
  }
 
  .Introduction-logo:hover {
    transform: scale(1.02);
    border-color: var(--color-line-2);
  }
 
  .Introduction-wordmark {
    font-family: var(--ff-display);
    font-size: 16px;       /* 11px */
    font-weight: 400;
    letter-spacing: 6px;
    text-transform: uppercase;
    color: black;
    font-weight: 500;
    padding:24px;

  }
 
  /* ── Right: Text content ── */
  .Introduction-body {
    display: flex;
    flex-direction: column;
    gap: 0;
    animation: intro-fade-up 0.7s 0.2s cubic-bezier(0.22, 1, 0.36, 1) both;
  }
 
  /* "Introduction" label — mirrors .Research-Categories-eyebrow */
  .Introduction-label {
    font-family: var(--ff-body);
    font-size: var(--fs-xs);       /* 11px */
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--color-ink-3);
    margin: 0 0 1rem 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }
 
  .Introduction-label::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 0.5px;
    background: var(--color-line-2);
    flex-shrink: 0;
  }
 
  /* Main display heading */
  .Introduction-heading {
    font-family: var(--ff-display);
    font-size: 48px;      /* 48px */
    font-weight: 400;
    letter-spacing: 4px;
    color: var(--color-ink);
    line-height: 1.05;
    margin: 0 0 2rem 0;
    transition: color 0.3s ease;
  }
 
  .Introduction-heading::after {
    content: '';
    display: block;
    width: 28px;
    height: 0.5px;
    background: var(--color-line-2);
    margin-top: 1.25rem;
    transition: width 0.3s ease;
  }
 
  .Introduction:hover .Introduction-heading::after {
    width: 48px;
  }
 
  /* Lead paragraph — mirrors .Research-Para p:first-of-type */
  .Introduction-lead {
    font-family: var(--ff-body);
    font-size: 16px;     /* 16px */
    font-weight: 700;
    line-height: 1.85;
    color: var(--color-ink);
    margin: 0 0 1.5rem 0;
    padding-bottom: 1.5rem;
    border-bottom: 0.5px solid var(--color-line);
    letter-spacing: 0.15px;
  }
 
  /* Supporting paragraph — mirrors .Research-Para p:not(:first-of-type) */
  /* Bottom rule */
  .Introduction-rule {
    margin-top: 2rem;
    width: 28px;
    height: 0.5px;
    background: var(--color-line-2);
  }
 
  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     RESPONSIVE
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  @media (max-width: 768px) {
    .Introduction {
      padding: 2rem 1.75rem;
      grid-template-columns: 1fr;
      row-gap: 2rem;
    }
 
    .Introduction-logo-wrap {
      position: static;
      flex-direction: row;
      align-items: center;
      gap: 1.25rem;
    }
 
    .Introduction-logo {
      max-width: 72px;
      padding: 0.75rem;
    }
 
    .Introduction-eyebrow {
      display: none; /* hidden on mobile; wordmark takes over */
    }
 
    .Introduction-heading {
      font-size: var(--fs-xl);     /* 36px */
    }
  }

  /* ══════════════════════════════════════
     ARTICLES CONTAINER
  ══════════════════════════════════════ */
  .articles-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem 3rem;
    font-family: var(--ff-body);
  }

  /* ══════════════════════════════════════
     ARTICLE INTRODUCTION
  ══════════════════════════════════════ */
  .article-introduction {
    text-align: center;
    margin-bottom: 3rem;
  }

  .intro-badge {
    display: inline-block;
    background: #1a2e4a;
    color: #c9a84c;
    font-family: var(--ff-body);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    padding: 5px 16px;
    border-radius: 20px;
    margin-bottom: 1.1rem;
  }

  .article-introduction h1 {
    font-size: 2.4rem;
    font-weight: 700;
    color: #0d1b2a;
    line-height: 1.2;
    margin-bottom: 1rem;
    letter-spacing: -0.01em;
  }

  .article-introduction p {
    font-size: 15px;
    color: black;
    max-width: 720px;
    margin: 0 auto;
    line-height: 1.75;
    font-weight: 500;
  }

  /* ══════════════════════════════════════
     SLIDER
  ══════════════════════════════════════ */
  .articles-slider-wrapper {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .articles-slider-viewport {
    overflow: hidden;
    flex: 1;
    min-width: 0;
  }

  .articles-slider-track {
    display: flex;
    gap: 20px;
    transition: transform 0.42s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
  }

  /* ══════════════════════════════════════
     ARROW BUTTONS
  ══════════════════════════════════════ */
  .arrow-btn {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #ddd;
    background: #fff;
    color: #1a2e4a;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.18s, border-color 0.18s, color 0.18s;
  }

  .arrow-btn:hover:not(:disabled) {
    background: #1a2e4a;
    border-color: #1a2e4a;
    color: #fff;
  }

  .arrow-btn:disabled {
    opacity: 0.3;
    cursor: default;
  }

  /* ══════════════════════════════════════
     ARTICLE CARD
     Uses CSS custom properties set inline
     on each card to avoid Svelte scoping
     issues with child combinators.
  ══════════════════════════════════════ */
  .article-card {
    flex: 0 0 calc((100% - 40px) / 3);
    min-width: 0;
    background: #fff;
    border: 1px solid #e8e8e8;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: box-shadow 0.22s, transform 0.22s;
  }

  .article-card:hover {
    box-shadow: 0 8px 28px rgba(0,0,0,0.10);
    transform: translateY(-3px);
  }

  /* Accent strip — reads --accent from inline style on each card */
  .card-accent {
    height: 4px;
    width: 100%;
    flex-shrink: 0;
    background: var(--accent, #1a4d8f);
  }

  /* Image */
  .card-image-wrap {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: #1a2e4a;
    flex-shrink: 0;
  }

  .card-image-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.35s ease;
  }

  .article-card:hover .card-image-wrap img {
    transform: scale(1.04);
  }

  /* Category badge */
  .card-category {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background: rgba(0,0,0,0.62);
    color: #fff;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    padding: 3px 9px;
    border-radius: 4px;
    pointer-events: none;
  }

  /* Text content */
  .card-content {
    padding: 1.1rem 1.1rem 1.2rem;
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 10px;
  }

  .card-content h2 {
    font-size: 14px;
    font-weight: 700;
    color: #0d1b2a;
    line-height: 1.45;
  }

  .card-content p {
    font-size: 12.5px;
    color: #666;
    line-height: 1.65;
    flex: 1;
  }

  /* CTA — reads --cta from inline style on each card */
  .card-cta {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    text-decoration: none;
    margin-top: 2px;
    transition: opacity 0.18s;
    color: var(--cta, #1a4d8f);
  }

  .card-cta:hover {
    opacity: 0.7;
  }

  /* ══════════════════════════════════════
     DOTS
  ══════════════════════════════════════ */
  .slider-dots {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
    margin-top: 1.6rem;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: none;
    background: #ccc;
    cursor: pointer;
    padding: 0;
    transition: background 0.2s, width 0.2s, border-radius 0.2s;
  }

  .dot.active {
    background: #1a4d8f;
    width: 22px;
    border-radius: 4px;
  }

  /* ══════════════════════════════════════
     RESPONSIVE
  ══════════════════════════════════════ */
  @media (max-width: 900px) {
    .article-card {
      flex: 0 0 calc((100% - 20px) / 2);
    }
    .Introduction {
      grid-template-columns: 1fr;
      padding: 2.5rem 2rem;
    }
    .Introduction h1 {
      position: static;
    }
  }

  @media (max-width: 580px) {
    .articles-container {
      padding: 2.5rem 1rem 2rem;
    }
    .article-introduction h1 {
      font-size: 1.8rem;
    }
    .article-card {
      flex: 0 0 100%;
    }
    .arrow-btn {
      width: 34px;
      height: 34px;
    }
    .paragraph {
      padding: 3rem 1.5rem;
    }
    .paragraph h1 {
      font-size: 40px;
    }
  }
</style>