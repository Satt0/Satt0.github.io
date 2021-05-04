
function goTo(id){
    const destination=document.getElementById(id)
    if(destination){
        destination.scrollIntoView({behavior:'smooth'})
    }
}