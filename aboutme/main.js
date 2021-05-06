const dropdown=document.getElementById('dropdown')
const toggle = document.getElementById('toggle')
const backdrop = document.getElementById('backdrop')
const body=document.getElementsByTagName('body')[0]
const sections=document.getElementsByTagName('section')
let flag=false;

function goTo(id){
    const destination=document.getElementById(id)
    if(destination){
        destination.scrollIntoView({behavior:'smooth',block:'start'})
       if(flag===true){
        toggleNav()
       }
    }
}

const toggleNav=()=>{
    flag=!flag
    if(flag){
        backdrop.style.display="inline-block"
        dropdown.style.display="flex"
        body.style.overflow="hidden"
        toggle.style.position="fixed"
        toggle.classList="btn-toggle show"
    }
    else{
        backdrop.style.display="none"
        dropdown.style.display="none"
        body.style.overflow=""
        toggle.style.position=""
        toggle.classList="btn-toggle"


    }
}
window.addEventListener('resize',()=>{
    
        backdrop.style.display="none"
        dropdown.style.display=window.innerWidth>900?"":"none"
        body.style.overflow=""
        toggle.style.position=""
        toggle.classList="btn-toggle"
        flag=false;
    
    
})
let mail=true
const onSubmit=(e)=>{
    e.preventDefault();
    const firstname=document.getElementById('first-name').value;
    const lastname=document.getElementById('last-name').value;
    const email=document.getElementById('email-input').value;
    const subject=document.getElementById('subject-input').value;
    const message=document.getElementById('message-input').value;
    if(mail){
        mail=false;
        const sending={
            firstname,lastname,email,subject,message
        }
        const header={
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({message:sending}) // body data type must match "Content-Type" header
          }
        fetch('https://ecom-v2.vercel.app/api/mail',header).then(res=>res.json()).then(res=>{
            if(res.result){
                window.location.href = "/aboutme/thankyou.html";
            }
        })
    }
}
