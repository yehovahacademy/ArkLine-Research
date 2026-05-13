<script>
  const tags = [
    'Vessel utilisation',
    'Route economics',
    'Cargo flows',
    'Fleet positioning',
    'Chartering risks',
  ];
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
/>


<div class="hero"></div>
<section class="tanker-para">
  <div class="badge">
    <span class="badge-dot"></span>
    <span class="badge-text">Market intelligence</span>
  </div>

  <h1>Tanker <em>Shipping</em></h1>
  <p class="sub">Commercial &amp; operational intelligence</p>

  <div class="rule-wrap">
    <span class="rule"></span>
    <i class="ti ti-ship" aria-hidden="true"></i>
    <span class="rule"></span>
  </div>

  <p class="body-text">
    ARKLINE RESEARCH delivers specialised tanker shipping intelligence focused on the
    commercial and operational factors that influence tanker freight performance. In tanker
    markets where freight exposure is shaped by operational disruptions, changing trade
    patterns, and shifting market sentiment, timely and accurate insight is critical for
    effective decision-making.
  </p>
  <p class="body-text">
    Our tanker shipping research analyses the variables that drive tanker market behaviour,
    including vessel utilisation, tonnage availability, cargo flow movements, route economics,
    market disruptions, chartering risks, and regional freight imbalances. We examine how
    these factors interact to influence tanker freight performance and what those movements
    mean from a commercial perspective.
  </p>
  <p class="body-text">
    Tanker freight markets are highly sensitive to changes in trade routes, geopolitical
    events, refinery demand patterns, weather disruptions, port congestion, and fleet
    positioning. ARKLINE RESEARCH provides the commercial context behind these changes,
    enabling market participants to better understand the drivers affecting freight performance.
  </p>
  <p class="body-text">
    Through practical analysis and focused market insight, ARKLINE RESEARCH enables more
    informed chartering decisions, improved exposure management, and stronger commercial
    performance across tanker operations.
  </p>

  <div class="tags">
    {#each tags as tag}
      <span class="tag">{tag}</span>
    {/each}
  </div>
</section>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;1,9..144,300&family=Instrument+Sans:wght@300;400;500&display=swap');

  .hero {
     height: 100vh;
    border-radius:35px;
     background-image:  linear-gradient(
      rgba(0,0,0,0.5),
      rgba(0,0,0,0.5)
    ), url('/Tanker.png');
     background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  }

  .tanker-para {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 3.5rem 2rem 3rem;
    max-width: 680px;
    margin: 0 auto;
  }

  /* Badge */
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #e1f5ee;
    border: 0.5px solid #5dcaa5;
    border-radius: 999px;
    padding: 5px 16px;
    margin-bottom: 2rem;
  }
  .badge-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #1d9e75;
    flex-shrink: 0;
  }
  .badge-text {
    font-family: 'Instrument Sans', sans-serif;
    font-size: 10.5px;
    font-weight: 500;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: #085041;
  }

  /* Heading */
  h1 {
      font-size:3.5rem;
    color:black;
    margin-bottom: 35px;
    padding-bottom: 15px;
    position: relative;
    letter-spacing: -0.02em;
    font-weight: 800;
    text-transform: uppercase;
  }
  h1 em {
    font-style:normal;
    color:black;
    font-weight: bold;
  }

  /* Subtitle */
  .sub {
    font-family: 'Instrument Sans', sans-serif;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #1d9e75;
    margin-bottom: 2rem;
  }

  /* Rule divider */
  .rule-wrap {
    display: flex;
    align-items: center;
    gap: 14px;
    width: 100%;
    max-width: 480px;
    margin-bottom: 2rem;
  }
  .rule {
    flex: 1;
    height: 0.5px;
    background: #d1d5db;
  }
  i {
    font-size: 16px;
    color: #5dcaa5;
  }

  /* Body */
  .body-text {
    font-family: 'Instrument Sans', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.85;
    color: black;
    max-width: 520px;
    margin-bottom: 1.25rem;
  }
  .body-text:last-of-type {
    margin-bottom: 2rem;
  }

  /* Tags */
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
  }
  .tag {
    font-family: 'Instrument Sans', sans-serif;
    font-size: 11.5px;
    font-weight: 400;
    color: #085041;
    background: #e1f5ee;
    border: 0.5px solid #5dcaa5;
    border-radius: 999px;
    padding: 5px 16px;
    transition: background 0.15s;
    cursor: default;
  }
  .tag:hover {
    background: #9fe1cb;
  }
</style>