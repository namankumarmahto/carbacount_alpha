const supportData = {
  science: {
    title: 'Guidance. Tools. Success.',
    text: 'Decarbonization is a journey. We provide implementation frameworks, role-based learning modules, and scientific methodologies to keep your program aligned with verified climate goals.',
    image: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=900&q=80',
  },
  saving: {
    title: 'Automate. Save. Transform.',
    text: 'Sustainability teams are often stretched across spreadsheets and disconnected systems. CarbaCount automates emissions tracking, reporting, and analysis so your team can focus on decisions, not manual reconciliation.',
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=900&q=80',
  },
  support: {
    title: 'Support that scales with your roadmap.',
    text: 'From onboarding and regulatory mapping to data quality reviews and board-ready exports, our experts partner with your team throughout the net-zero lifecycle.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
  },
};

const solutionData = [
  {
    title: 'ESG Reporting',
    intro: 'Track. Report. Improve.',
    text: 'Create audit-ready reports aligned with BRSR, GRI, and stakeholder expectations.',
    bullets: ['Framework mapping', 'Automated report generation', 'Assurance-ready data trails'],
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Carbon Accounting',
    intro: 'Measure with precision.',
    text: 'Capture Scope 1, 2, and 3 emissions in a single source of truth with actionable hotspots.',
    bullets: ['Source-level tracking', 'Category intelligence', 'Reduction opportunity scoring'],
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Net Zero Strategy',
    intro: 'Plan with confidence.',
    text: 'Model reduction pathways, prioritize projects, and monitor strategic progress over time.',
    bullets: ['Scenario modelling', 'CAPEX-aware roadmaps', 'Quarterly progress dashboards'],
    image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=900&q=80',
  },
];

const pills = document.querySelectorAll('.pill');
const supportCopy = document.getElementById('support-copy');
const supportImage = document.getElementById('support-image');

pills.forEach((pill) => {
  pill.addEventListener('click', () => {
    pills.forEach((p) => p.classList.remove('active'));
    pill.classList.add('active');
    const key = pill.dataset.content;
    supportCopy.innerHTML = `<h3>${supportData[key].title}</h3><p>${supportData[key].text}</p>`;
    supportImage.src = supportData[key].image;
  });
});

const panel = document.getElementById('solution-panel');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let idx = 0;

function renderSolution() {
  const item = solutionData[idx];
  panel.innerHTML = `
    <img src="${item.image}" alt="${item.title}" />
    <div>
      <h3>${item.title}</h3>
      <p><strong>${item.intro}</strong> ${item.text}</p>
      <ul>${item.bullets.map((b) => `<li>${b}</li>`).join('')}</ul>
    </div>
  `;
}

prevBtn?.addEventListener('click', () => {
  idx = (idx - 1 + solutionData.length) % solutionData.length;
  renderSolution();
});

nextBtn?.addEventListener('click', () => {
  idx = (idx + 1) % solutionData.length;
  renderSolution();
});

renderSolution();

document.getElementById('backToTop')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
