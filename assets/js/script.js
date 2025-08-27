
// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Simple client-side validation & fake submission
function handleForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = form.querySelector('.form-status');
    const errors = form.querySelectorAll('.error');
    errors.forEach(e => e.textContent = '');
    let valid = true;
    form.querySelectorAll('[required]').forEach((field) => {
      const input = field;
      const wrapper = input.closest('.field');
      const err = wrapper ? wrapper.querySelector('.error') : null;
      if (input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement || input instanceof HTMLSelectElement) {
        if (!input.value.trim()) {
          valid = false;
          if (err) err.textContent = 'This field is required.';
        } else if (input.type === 'email' && !/^\S+@\S+\.\S+$/.test(input.value)) {
          valid = false;
          if (err) err.textContent = 'Enter a valid email.';
        }
      }
    });
    if (!valid) {
      if (status) status.textContent = 'Please correct the highlighted fields.';
      return;
    }
    if (status) status.textContent = 'Submitted! (Replace with real backend or service.)';
    form.reset();
  });
}
['contact-form','volunteer-form','donation-form'].forEach(handleForm);
