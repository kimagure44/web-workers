const btn = document.querySelector('#btnCreate');
const value = document.querySelector('#objectsTotal');
const container = document.querySelector('.container');

btn.addEventListener('click', () => {
    const worker = new Worker('web-worker-fetch.js')
    
    const getRandomNumber = (min, max) => Math.floor(Math.random() * min) + max;

    worker.addEventListener('message', evt => {
      const img = document.createElement('img')
      const div = document.createElement('div');
      const size = getRandomNumber(300, 500);
      const left = getRandomNumber(10, window.innerWidth) - size * 1.5;
      const top = getRandomNumber(10, window.innerHeight) - size * 1.25;
      const rotate = (Math.floor(Math.random() * 2) + 1) === 1 ? -1 : 1;
      div.classList.add('photo');
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.left = `${left}px`;
      div.style.top = `${top}px`;
      div.style.transform = `rotateZ(${rotate * (Math.floor(Math.random() * 28))}deg)`;
      img.src = evt.data
      div.appendChild(img);
      container.appendChild(div)
    })

    worker.postMessage(value.value)
    
});

