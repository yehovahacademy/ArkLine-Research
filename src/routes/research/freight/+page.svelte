<script>
  const tags = ['Rate movements', 'Supply & demand', 'Market volatility', 'Emerging trends'];
</script>
<div class="hero"></div>
<section class="freight-market-intro">
  <div class="badge">
    <span class="badge-dot"></span>
    <span class="badge-text">Market intelligence</span>
  </div>

 <section class="research-feature">
  <div class="container">
    <header class="feature-header">
      <h2 class="title">Freight Market Intelligence</h2>
      <p class="lead-text">
        ARKLINE RESEARCH provides focused, commercially relevant analysis of freight market movements, rate volatility, and supply-demand dynamics across key shipping segments.
      </p>
    </header>

    <div class="feature-grid">
      <div class="feature-card">
        <h3>Actionable Insight</h3>
        <p>We go beyond tracking rate changes to analyze underlying drivers like vessel positioning, cargo demand shifts, and regional imbalances.</p>
      </div>

      <div class="feature-card">
        <h3>Strategic Planning</h3>
        <p>Convert market complexity into practical understanding to support clearer visibility and stronger strategic planning in fast-moving environments.</p>
      </div>

      <div class="feature-card">
        <h3>Decision Support</h3>
        <p>Empowering traders, shipowners, and charterers to identify emerging trends, assess risks, and respond effectively to market volatility.</p>
      </div>
    </div>

    <footer class="feature-footer">
      <p>Strengthen your chartering strategies with timely, practical market intelligence.</p>
    </footer>
  </div>
</section>
  


  <div class="tags">
    {#each tags as tag}
      <span class="tag">{tag}</span>
    {/each}
  </div>
</section>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,400;1,300;1,400&family=Instrument+Sans:wght@300;400;500&display=swap');


  .hero {
    height: 100vh;
    border-radius:35px;
     background-image:  linear-gradient(
      rgba(0,0,0,0.5),
      rgba(0,0,0,0.5)
    ), url('/article4.png');
     background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  }

  .freight-market-intro {
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

  :root {
    --primary-navy: #1a2b3c;
    --accent-blue: #3498db;
    --text-gray: #4a5568;
    --light-bg: #f8fafc;
  }

  .research-feature {
    font-family: 'Source Sans Pro', Arial, sans-serif;
    line-height: 1.6;
    color: var(--text-gray);
    padding: 40px 20px;
    background-color: white;
  }

  .container {
    max-width: 1000px;
    margin: 0 auto;
  }

  .feature-header {
    text-align: center;
    margin-bottom: 50px;
    border-bottom: 2px solid var(--light-bg);
    padding-bottom: 30px;
  }

  .title {
    color: black;
    font-size: 3.5rem;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight:800;
    font-style:normal;
    
  }

  .lead-text {
    font-size: 1.1rem;
    max-width: 800px;
    margin: 0 auto;
    font-weight: 500;
    color: black;
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
  }

  .feature-card {
    background: var(--light-bg);
    padding: 25px;
    border-left: 4px solid var(--accent-blue);
    transition: transform 0.3s ease;
    font-weight:500;
    color: black;
  }

  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  }

  .feature-card h3 {
    color: black;
    margin-top: 0;
    font-size: 1.25rem;
  }

  .feature-footer {
    margin-top: 40px;
    text-align: center;
    font-style: italic;
    color: var(--primary-navy);
  }

   
</style>