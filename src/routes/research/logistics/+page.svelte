<script>
  const cards = [
    { icon: 'fa-solid fa-anchor',            label: 'Port congestion', desc: 'Berth delays & turnaround drag' },
    { icon: 'fa-solid fa-clock',             label: 'Laytime risk',    desc: 'Demurrage clock & NOR exposure' },
    { icon: 'fa-solid fa-triangle-exclamation', label: 'Bottlenecks',  desc: 'Cargo handling & operational drag' },
    { icon: 'fa-solid fa-chart-line',        label: 'Margin leakage',  desc: 'Cost overruns & P&L erosion' },
  ];

  const tags = [
    { icon: 'fa-solid fa-ship',          label: 'Port congestion' },
    { icon: 'fa-solid fa-hourglass-half',label: 'Berth delays' },
    { icon: 'fa-solid fa-file-contract', label: 'Laytime exposure' },
    { icon: 'fa-solid fa-link-slash',    label: 'Supply chain risk' },
  ];
</script>


<svelte:head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
</svelte:head>

<div class="hero"></div>

<section class="logistics-para">

  <div class="badge">
    <span class="badge-dot"></span>
    <span class="badge-text">
      <i class="fa-solid fa-truck-fast"></i> Logistics intelligence
    </span>
  </div>

  <h1>
    Logistics
  </h1>
  <p class="sub">Maritime logistics &amp; operational analysis</p>

  <div class="rule-wrap">
    <span class="rule"></span>
    <i class="fa-solid fa-route rule-icon"></i>
    <span class="rule"></span>
  </div>

  <p class="body-text">
    ARKLINE RESEARCH provides in-depth analysis of logistics challenges that influence
    freight efficiency, voyage execution, and operational performance across the maritime
    supply chain. In an environment where delays, congestion, and operational disruptions
    can significantly impact commercial outcomes, logistics intelligence plays a critical
    role in improving visibility and reducing uncertainty.
  </p>
  <p class="body-text">
    Our logistics research examines the operational factors that affect cargo movement and
    voyage performance, including port congestion, berth delays, cargo readiness issues,
    routing inefficiencies, infrastructure bottlenecks, and supply chain disruptions.
  </p>
  <p class="body-text">
    Operational disruptions across the logistics chain can quickly lead to increased costs,
    reduced efficiency, and greater exposure to commercial risks. ARKLINE RESEARCH helps
    bridge that gap by converting logistics complexity into commercially relevant intelligence.
  </p>
  <p class="body-text">
    Through practical logistics intelligence, ARKLINE RESEARCH supports better operational
    visibility, improved risk awareness, and stronger commercial outcomes across the maritime
    supply chain.
  </p>

  <div class="cards">
    {#each cards as c}
      <div class="card">
        <i class="{c.icon} card-icon"></i>
        <span class="card-label">{c.label}</span>
        <span class="card-desc">{c.desc}</span>
      </div>
    {/each}
  </div>

  <div class="alert-box">
    <i class="fa-solid fa-circle-info alert-icon"></i>
    <p class="alert-text">
      <strong>Research output:</strong> Actionable insights for commercial teams to improve
      logistics visibility, reduce delay exposure, and strengthen supply chain resilience.
    </p>
  </div>

  <div class="tags">
    {#each tags as t}
      <span class="tag">
        <i class="{t.icon}"></i> {t.label}
      </span>
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
    ), url('/Logistics.png');
     background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  }

  .logistics-para {
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
    background: #faece7;
    border: 0.5px solid #f0997b;
    border-radius: 999px;
    padding: 5px 16px;
    margin-bottom: 2rem;
  }
  .badge-dot {
    width: 5px; height: 5px;
    border-radius: 50%;
    background: #d85a30;
    flex-shrink: 0;
  }
  .badge-text {
    font-family: 'Instrument Sans', sans-serif;
    font-size: 10.5px; font-weight: 500;
    letter-spacing: 0.13em; text-transform: uppercase; color: #712b13;
    display: flex; align-items: center; gap: 5px;
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
    text-transform:uppercase;
  }

  /* Subtitle */
  .sub {
    font-family: 'Instrument Sans', sans-serif;
    font-size: 11px; font-weight: 400;
    letter-spacing: 0.18em; text-transform: uppercase;
    color: black; margin-bottom: 2rem;
  }

  /* Rule */
  .rule-wrap {
    display: flex; align-items: center;
    gap: 14px; width: 100%; max-width: 480px;
    margin-bottom: 2rem;
  }
  .rule { flex: 1; height: 0.5px; background: #d1d5db; }
  .rule-icon { font-size: 15px; color: #f0997b; }

  /* Body */
  .body-text {
    font-family: 'Instrument Sans', sans-serif;
    font-size: 16px; font-weight: 500;
    line-height: 1.85; color: black;
    max-width: 520px; margin-bottom: 1.25rem;
  }
  .body-text:last-of-type { margin-bottom: 2rem; }

  /* Cards */
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: 10px; width: 100%; margin-bottom: 2rem;
  }
  .card {
    background: #faece7; border: 0.5px solid #f0997b;
    border-radius: 12px; padding: 14px 16px;
    display: flex; flex-direction: column; gap: 6px;
    text-align: left; transition: background 0.15s; cursor: default;
  }
  .card:hover { background: #f5c4b3; }
  .card-icon { font-size: 17px; color:black; }
  .card-label {
    font-family: 'Instrument Sans', sans-serif;
    font-size: 11px; font-weight: 500;
    letter-spacing: 0.08em; text-transform: uppercase; color: #712b13;
  }
  .card-desc {
    font-family: 'Instrument Sans', sans-serif;
    font-size: 12px; font-weight: 300;
    color: black; line-height: 1.5;
  }

  /* Alert */
  .alert-box {
    display: flex; align-items: flex-start; gap: 12px;
    background: #faece7; border: 0.5px solid #f0997b;
    border-left: 3px solid #d85a30;
    border-radius: 0 8px 8px 0;
    padding: 14px 16px; margin-bottom: 2rem;
    width: 100%; text-align: left;
  }
  .alert-icon { font-size: 16px; color:black; flex-shrink: 0; margin-top: 2px; }
  .alert-text {
    font-family: 'Instrument Sans', sans-serif;
    font-size: 12.5px; font-weight: 400;
    color: black; line-height: 1.6;
  }
  .alert-text strong { font-weight: 500; }

  /* Tags */
  .tags { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
  .tag {
    display: inline-flex; align-items: center; gap: 5px;
    font-family: 'Instrument Sans', sans-serif;
    font-size: 11.5px; font-weight: 400;
    color: black; background: #faece7;
    border: 0.5px solid #f0997b;
    border-radius: 999px; padding: 5px 16px;
    transition: background 0.15s; cursor: default;
  }
  .tag:hover { background: #f5c4b3; }
  .tag i { font-size: 10px; }
</style>