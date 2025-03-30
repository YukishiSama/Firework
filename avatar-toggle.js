const image = document.getElementById('avatar');

image.addEventListener('click', function () {
  if (image.src.match('assets/Untitled(40).png')) {
    image.src = 'assets/Untitled(41).png';
  } else if (image.src.match('assets/Untitled(41).png')) {
    image.src = 'assets/Untitled(43).png';
  } else if (image.src.match('assets/Untitled(43).png')) {
    image.src = 'assets/Untitled(44).png';
  } else if (image.src.match('assets/Untitled(44).png')) {
    image.src = 'assets/Untitled(45).png';
  } else {
    image.src = 'assets/Untitled(40).png';
  }
});