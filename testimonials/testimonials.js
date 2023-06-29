import testimonialsData from './data.js'



    function render(){
        const testimonialsContainer = document.getElementById('testimonials-container')
        testimonialsData.forEach(testimonial => {
            testimonialsContainer.innerHTML += testimonialTemplate(testimonial)
        })
        renderBullets(testimonialsData.length)
        setTimeout(addEventListenerToBullets, 50)
        setTimeout(slideTestimonials, 50)
    }
    
    function testimonialTemplate(testimonial){
        return `
        <div class="testimonial-card">
        <p>${testimonial.review}</p>
        <div class='testimonial-avatar'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" class="w-6 h-6">
            <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
        </svg>
        </div>
            <h4>${testimonial.userName}</h4>
        </div>`   
    }
    
    // o slide atual sai para a esquerda
    // o slide atual ele está na posição top 0 left 0
    // fazendo o transform nele, ele vai para a posição top 0 left -100%
    //
    // o proximo slide entre da direita
    // ele tem que estar na posição top 0 left 100%
    // fazendo o transform nele, ele vai para a posição top 0 left 0
    //
    // e os outros? 
    let currentTestimonial = 0
    let timer;
    
    function slideTestimonials() {
        const testimonialsList = document.querySelectorAll('.testimonial-card')
        
        let nextTestimonial = currentTestimonial + 1
        if (nextTestimonial > testimonialsList.length){
            nextTestimonial = 1
        }
    
        testimonialsList.forEach((testimonialCard, idx) => {
            // saindo
            if (idx === currentTestimonial-1) {
                testimonialCard.style.transform = `translateX(-120%)`
            }
            else if (idx === nextTestimonial-1 ) {
                // entrando
                testimonialCard.style.transform = `translateX(0)`
            }
            else {
                testimonialCard.style.display = 'none',
                testimonialCard.style.transform = `translateX(120%)`
                
            }
        }) 
    
        const bullets = document.querySelectorAll('.bullet')
        bullets.forEach(bullet => {
            if (bullet.id === `slide-${nextTestimonial}`) {
                bullet.classList.add('current-bullet')
            } else {
                bullet.classList.remove('current-bullet')
            }
        })
        setTimeout(()=>{
            testimonialsList.forEach(testimonialCard => {
                testimonialCard.style.display = 'block';
            })
        }, 1050);
        currentTestimonial = nextTestimonial
    
        timer = setTimeout(slideTestimonials, 5000);
    }
    
    function bulletsTemplate(index){
        return `
        <button id="slide-${index}" class="bullet" ></button>
        `
    }
    
    function renderBullets(count){
        const bulletsContainer = document.getElementById('bullets-container')
        for(let i = 1; i <= count; i++){
            bulletsContainer.innerHTML += bulletsTemplate(i)
        }
    }
    
    function addEventListenerToBullets(){
        const bulletsBtn = document.querySelectorAll('.bullet')
    
    
        bulletsBtn.forEach(bulletBtn => {
            bulletBtn.addEventListener('click', (event) => {
            clearTimeout(timer);
            const id= bulletBtn.id; // slide-1
    
            currentTestimonial = id.split('-')[1] - 1// ['slide', '1']
    
            console.log(currentTestimonial)
            // alterar o slide atual para o que foi clicado
            // reiniciar o timeout
            slideTestimonials()
            })
        })
    }
    
    const testimonials = {
        render
    }

    export default testimonials