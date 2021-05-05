const dropdown=document.getElementById('dropdown')
const toggle = document.getElementById('toggle')
const backdrop = document.getElementById('backdrop')
const body=document.getElementsByTagName('body')[0]
let flag=true;

function goTo(id){
    const destination=document.getElementById(id)
    if(destination){
        destination.scrollIntoView({behavior:'smooth'})
    }
}

const toggleNav=()=>{
    flag=!flag
    if(flag){
        backdrop.style.display=""
        dropdown.style.display=""
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