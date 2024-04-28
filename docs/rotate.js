var rotationAngle = 0;

window.addEventListener('wheel', function(event) {
  // Modifica l'angolo di rotazione in base al movimento dello scroll
  rotationAngle += event.deltaY * 0.1; // Modifica il fattore di moltiplicazione per regolare la velocità di rotazione
  
  var image = document.getElementById('part1');
  image.style.transform = 'rotate(' + rotationAngle + 'deg)';

  var image = document.getElementById('part2');
  image.style.transform = 'rotate(' + rotationAngle + 'deg)';
});
