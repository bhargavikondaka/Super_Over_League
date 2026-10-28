import './style.css'


document.querySelector('#app').innerHTML = `
<section id="center">

  
     <div className='background'>
    <h1 className='heading'> Super Over League</h1>
    <div className='img-cont'>
      <img
        className='image'
        src='https://assets.ccbp.in/frontend/react-js/rcb-img.png'
        alt='rcb'
      />
      <img
        className='image'
        src='https://assets.ccbp.in/frontend/react-js/csk-img.png'
        alt='rcb'
      />
    </div>
  </div>
  


  
</section>



`

setupCounter(document.querySelector('#counter'))
