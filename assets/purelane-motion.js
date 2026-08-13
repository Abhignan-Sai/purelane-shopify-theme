/**
 * purelane-motion.js
 * Centralized motion controller for Purelane cinematic layers.
 */
class PurelaneMotionController {
  constructor() {
    this.cinematicLayer = document.getElementById('PurelaneCinematicLayer');
    this.sections = [];
    this.observer = null;
    this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!this.cinematicLayer) return;

    this.initObserver();
    this.bindEvents();
    this.observeAll();
  }

  initObserver() {
    // We use a threshold of 0.3 to trigger early as sections come into view
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    this.observer = new IntersectionObserver(this.handleIntersect.bind(this), options);
  }

  handleIntersect(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const scene = entry.target.getAttribute('data-purelane-scene');
        if (scene) {
          this.cinematicLayer.setAttribute('data-active-scene', scene);
        }
      }
    });
  }

  observeAll() {
    this.sections = Array.from(document.querySelectorAll('[data-purelane-scene]'));
    this.sections.forEach(section => {
      this.observer.observe(section);
    });
  }

  refresh() {
    if (this.observer) {
      this.observer.disconnect();
    }
    this.observeAll();
  }

  bindEvents() {
    // Handle Shopify Theme Editor lifecycle events
    document.addEventListener('shopify:section:load', this.refresh.bind(this));
    document.addEventListener('shopify:section:unload', this.refresh.bind(this));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.PurelaneMotion = new PurelaneMotionController();
});
