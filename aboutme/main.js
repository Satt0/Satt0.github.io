const dropdown=document.getElementById('dropdown')
const toggle = document.getElementById('toggle')
const backdrop = document.getElementById('backdrop')
const body=document.getElementsByTagName('body')[0]
const sections=document.getElementsByTagName('section')
let flag=false;

function goTo(id){
    const destination=document.getElementById(id)
    if(destination){
        destination.scrollIntoView({behavior:'smooth',block:'end'})
    }
}

const toggleNav=()=>{
    flag=!flag
    if(flag){
        backdrop.style.display="inline-block"
        dropdown.style.display="flex"
        body.style.overflow="hidden"
        toggle.style.position="fixed"
    }
    else{
        backdrop.style.display="none"
        dropdown.style.display="none"
        body.style.overflow=""
        toggle.style.position=""


    }
}
window.addEventListener('resize',()=>{
    
        backdrop.style.display="none"
        dropdown.style.display=window.innerWidth>900?"":"none"
        body.style.overflow=""
        toggle.style.position=""
        flag=false;
    
    
})
// window.addEventListener('scroll',()=>{
//     const array=Array.from(sections)
//     for(let i=0;i<array.length;i++){
//        const element=array[i];
//        if(element.getBoundingClientRect().y <20){
//            element.style.opacity='.5'
//        }
//        else{
//         element.style.opacity='1'
//        }
//     }
// })