document.addEventListener('DOMContentLoaded', ()=>{
  const searchInput = document.querySelector('#search');
  const cards = document.querySelectorAll('.card');
  searchInput.addEventListener('input', e=>{
    const val = e.target.value.toLowerCase();
    cards.forEach(card=>{
      const title = card.querySelector('h3').textContent.toLowerCase();
      card.style.display = title.includes(val) ? 'block' : 'none';
    });
  });
});
