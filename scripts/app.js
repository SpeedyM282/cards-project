const slides = document.querySelectorAll('.slide');

const mersedesBenzImg = 'https://images.unsplash.com/photo-1609326005487-361f2e1c2640?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80';

const lamborghiniImg = 'https://images.unsplash.com/photo-1526297293668-36b3f33a373b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1228&q=80';

const mustangImg = 'https://images.unsplash.com/photo-1547744152-14d985cb937f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80';

const audiImg = 'https://images.unsplash.com/photo-1605515121761-e2bb7b5e3744?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=706&q=80';

const bmwImg = 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80';

const rollsRoyceImg = 'https://images.unsplash.com/photo-1624804269473-828dcc30a210?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80';

for(const slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses(slide);

    slide.classList.add('active');
  })
}


function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  })
}
