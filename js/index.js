// Exemplo básico para rolar automaticamente para a próxima imagem
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.galeria-poster');

  let isMouseDown = false;
  let startX, scrollLeft;

// Evento para arrastar horizontalmente
container.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
  isMouseDown = false;
});

container.addEventListener('mouseup', () => {
  isMouseDown = false;
});

container.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 2; // Velocidade de rolagem
  container.scrollLeft = scrollLeft - walk;
  });
});