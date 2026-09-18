const newsletterForm = document.getElementById('newsletter-form');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = newsletterForm.querySelector('.newsletter__input').value;
    alert(`Merci ! Nous vous tiendrons informé(e) à l'adresse ${email}.`);
    newsletterForm.reset();
  });
}
