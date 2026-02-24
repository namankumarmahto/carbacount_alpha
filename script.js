const panelContent = {
  science: {
    title: 'Guidance. Tools. Success.',
    text:
      'Decarbonization is a journey, not a one-time project. We provide data-backed guidance, sector-specific templates, and practical implementation frameworks from baseline to strategy execution.',
  },
  saving: {
    title: 'Automate. Save. Transform.',
    text:
      'Our software automates emissions tracking and reporting workflows, reducing manual work while improving speed and data quality. Teams get more done with fewer operational bottlenecks.',
  },
  support: {
    title: 'Support that scales with your goals.',
    text:
      'From onboarding and compliance setup to stakeholder reporting and continuous improvement, our experts stay with your team to ensure sustained net-zero progress.',
  },
};

const buttons = document.querySelectorAll('.pill');
const content = document.getElementById('support-content');
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('main-nav');
const scrollTopButton = document.getElementById('scroll-top');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    const key = button.dataset.panel;
    content.innerHTML = `<h3>${panelContent[key].title}</h3><p>${panelContent[key].text}</p>`;
  });
});

menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

scrollTopButton?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
