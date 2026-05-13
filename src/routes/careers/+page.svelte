
<div class="Hero"></div>
<section class="careers-section">
  <div class="careers-container">
    <div class="careers-content">
      <header class="careers-header">
        <span class="status-badge">Current Openings</span>
        <h1>ArkLine Careers</h1>
      </header>
      
      <div class="no-positions-box">
        <div class="icon-circle">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>
        <p>Currently, there are no open positions available.</p>
      </div>

      <footer class="talent-connection">
        <p>However, we are always interested in connecting with talented professionals passionate about <strong>Shipping</strong>, <strong>Freight Markets</strong>, and <strong>Maritime Intelligence</strong>.</p>
      </footer>
    </div>
  </div>
</section>
<style>
.Hero {
   height: 100vh;
    border-radius:35px;
     background-image:  linear-gradient(
      rgba(0,0,0,0.5),
      rgba(0,0,0,0.5)
    ), url('/careers.png');
     background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

}

  :root {
    --primary-navy: #1a2b3c;
    --accent-gold: #c5a059;
    --light-slate: #f1f5f9;
    --border-gray: #e2e8f0;
    --text-muted: #64748b;
  }

  .careers-section {
    padding: 80px 20px;
    font-family: 'Inter', -apple-system, sans-serif;
    background-color: #ffffff;
  }

  .careers-container {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
  }

  .status-badge {
    display: inline-block;
    background: var(--light-slate);
    color: var(--primary-navy);
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .careers-header h1 {
    font-size: 2.5rem;
    color: var(--primary-navy);
    margin-bottom: 2rem;
    font-weight: 800;
  }

  .no-positions-box {
    background: var(--light-slate);
    padding: 30px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-bottom: 2.5rem;
    border: 1px dashed var(--border-gray);
  }

  .icon-circle {
    background: white;
    color: var(--accent-gold);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  }

  .no-positions-box p {
    color: black;
    font-size: 1.1rem;
    margin: 0;
  }

  .talent-connection p {
    line-height: 1.8;
    color: black;
    margin-bottom: 2rem;
  }

  .talent-connection strong {
    color: black;
  }

  @media (max-width: 480px) {
    .careers-header h1 { font-size: 2rem; }
  }
</style>

