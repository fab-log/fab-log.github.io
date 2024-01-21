const balls = document.getElementsByClassName('ball');
// const balls = document.querySelectorAll('.ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for (i = 0; i < balls.length; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }

  // balls.forEach(e => {
  //   e.style.left = x;
  //   e.style.top = y;
  //   e.transform = 'translate(-' + x + ',-' + y + ')';
  // });
};
