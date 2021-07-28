// transpiled using babel
var dropdown = document.getElementById("dropdown");
var toggle = document.getElementById("toggle");
var backdrop = document.getElementById("backdrop");
var body = document.getElementsByTagName("body")[0];
var sections = document.getElementsByTagName("section");
var submitButton = document.getElementById("submit-button");
var flag = false;

function goTo(a) {
  var b = document.getElementById(a);

  if (b) {
    b.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    if (flag === true) {
      toggleNav();
    }
  }
}

var toggleNav = function toggleNav() {
  flag = !flag;

  if (flag) {
    backdrop.style.display = "inline-block";
    dropdown.style.display = "flex";
    body.style.overflow = "hidden";
    toggle.style.position = "fixed";
    toggle.classList = "btn-toggle show";
  } else {
    backdrop.style.display = "none";
    dropdown.style.display = "none";
    body.style.overflow = "";
    toggle.style.position = "";
    toggle.classList = "btn-toggle";
  }
};

window.addEventListener("resize", function () {
  backdrop.style.display = "none";
  dropdown.style.display = window.innerWidth > 900 ? "" : "none";
  body.style.overflow = "";
  toggle.style.position = "";
  toggle.classList = "btn-toggle";
  flag = false;
});
var mail = true;

var onSubmit = function onSubmit(a) {
  a.preventDefault();

  var b = function disableSubmit() {
    submitButton.innerHTML =
      '\n        <img src="./assets/images/loading.svg" height="30px" alt="">\n        ';
  };

  var c = function enableSubmit() {
    submitButton.innerHTML =
      '\n    <button class="btn"  type="submit">Send</button>\n    ';
  };

  var d = document.getElementById("first-name").value;
  var e = document.getElementById("last-name").value;
  var f = document.getElementById("email-input").value;
  var g = document.getElementById("subject-input").value;
  var h = document.getElementById("message-input").value;

  if (mail) {
    mail = false;
    b();
    var i = {
      firstname: d,
      lastname: e,
      email: f,
      subject: g,
      message: h
    };
    var j = {
      method: "POST",
      // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
      // no-cors, *cors, same-origin
      cache: "no-cache",
      // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin",
      // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json" // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow",
      // manual, *follow, error
      referrerPolicy: "no-referrer",
      // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({
        message: i
      }) // body data type must match "Content-Type" header
    };
    fetch("https://ecom-v2.vercel.app/api/mail", j)
      .then(function (a) {
        return a.json();
      })
      .then(function (a) {
        if (a.result) {
          window.location.href = "/aboutme/thankyou.html";
        } else {
          window.location.href = "/aboutme/error.html";
        }

        mail = true;
        c();
      });
  }
};

const onHover=(e)=>{
 e.currentTime=0
}