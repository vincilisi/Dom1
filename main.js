let botton = document.querySelector('.pri');

// guardare il calcolo in fondo pagina

botton.addEventListener('click', ()=>{
    document.querySelector('.primo').style.color=randomRgbColor();
    console.log(randomRgbColor())
});

botton.addEventListener('click', ()=>{
    document.querySelector('.secondo').style.color=randomRgbColor();
    console.log(randomRgbColor())
});

botton.addEventListener('click', ()=>{
    document.querySelector('.terzo').style.color=randomRgbColor();
    console.log(randomRgbColor())
});

let sec = document.querySelector('.sec');
 
sec.addEventListener('click', ()=>{
    document.querySelector('.primo').style.fontWeight='bold'
});
sec.addEventListener('click', ()=>{
    document.querySelector('.secondo').style.fontWeight='bold'
});

sec.addEventListener('click', ()=>{
    document.querySelector('.terzo').style.fontWeight='bold'
});

let ghost = document.querySelector('.ter');

ghost.addEventListener('click', ()=>{
    if(document.querySelector('.primo').style.display == 'none') {
        document.querySelector('.primo').style.display = 'block';
      }
  else {
        document.querySelector('.primo').style.display = 'none';
      }
})
ghost.addEventListener('click', ()=>{
    if(document.querySelector('.secondo').style.display == 'none') {
        document.querySelector('.secondo').style.display = 'block';
      }
  else {
        document.querySelector('.secondo').style.display = 'none';
      }
})
ghost.addEventListener('click', ()=>{
    if(document.querySelector('.terzo').style.display == 'none') {
        document.querySelector('.terzo').style.display = 'block';
      }
  else {
        document.querySelector('.terzo').style.display = 'none';
      }
})











// calcolo per la Generazione colori Random


const randomRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };