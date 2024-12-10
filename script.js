const mobileCapstone = document.getElementById('mobile_capstone');
mobileCapstone.addEventListener('click', () => {
  const desktopCapstone = document.getElementById('desktop_capstone');
  desktopCapstone.classList.toggle('active');
  mobileCapstone.classList.toggle('active');
});

const speakerHover = document.querySelectorAll('.speakers_card'); // Get all speaker cards
if (window.matchMedia('(max-width:768px)').matches) {
  const btn = document.getElementById('btn'); // Get button by ID
  let currentImg = 0;

  btn.addEventListener('click', (event) => {
    for (let i = currentImg; i < currentImg + 6; i + 1) {
      if (speakerHover[i]) {
        speakerHover[i].style.display = 'block'; // Show the next two speakers
      }
    }
    currentImg += 6;
    if (currentImg >= speakerHover.length) {
      event.target.style.display = 'none'; // Hide button if no more speakers
    }
  });
} else {
  for (let j = 0; j < 6; j + 1) {
    if (speakerHover[j]) {
      speakerHover[j].style.display = 'block';
    }
  }
}