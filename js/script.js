//HEADER
const fixedHeader = document.querySelectorAll('._anim-header')
const header = document.querySelectorAll('.header')

if(fixedHeader.length > 0){
    console.log('Hello')
    window.addEventListener('scroll', fixedOnScroll)
    function fixedOnScroll (params){
        for (let index = 0; index < fixedHeader.length; index++){
            const headerItem = fixedHeader[index];
            const headerItemOffset = offset(headerItem).top;

            const removeFixed = header[index];
            const removeFixedHeight = removeFixed.offsetHeight;
            const removeFixedOffset = offset(removeFixed).top;

            if (scrollY > headerItemOffset){
                headerItem.classList.add('_active')
            }else{
                if(scrollY < removeFixedHeight){
                    headerItem.classList.remove('_active')
                }
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.scrollX || document.documentElement.scrollLeft,
            scrollTop = window.scrollY || document.documentElement.scrollTop;
        return{top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
}
//=============================================================

//BURGER
const headerBurger = document.querySelector('.menu__burger');
if (headerBurger){
    const headerMenu = document.querySelector('.menu__body');
    headerBurger.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        headerBurger.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
    }) 
}