let button1 = document.querySelector(".button1 a");
let button2 = document.querySelector(".button2 a");
let button3 = document.querySelector(".button3 a");
let button4 = document.querySelector(".button4 a");
let button5 = document.querySelector(".button5 a");
let button6 = document.querySelector(".button6 a");
let button7 = document.querySelector(".button7 a");

let tl = gsap.timeline({
    repeat: "infinite",
    duration: 1,
    delay: 0.3
})

tl.to((".button7 p"), {
        delay: 1,
        scale: 1.1,
        background: "green",
        text: "I'm Green"
    })
    .to((".button7 p"), {
        scale: 1
    })
    .to((".button7 p"), {
        scale: 1.1,
        background: "blue",
        text: "I'm Blue"
    })
    .to((".button7 p"), {
        scale: 1
    })
    .to((".button7 p"), {
        scale: 1.1,
        background: "red",
        text: "I'm Red"
    })
    .to((".button7 p"), {
        scale: 1
    })
    .to((".button7 p"), {
        scale: 1.1,
        background: "purple",
        text: "I'm Purple"
    })
    .to((".button7 p"), {
        scale: 1
    })
    .to((".button7 p"), {
        scale: 1.1,
        background: "maroon",
        text: "And We're Back"
    })

button1.addEventListener("click", () => {
    gsap.to((".there1"), {
        text: "you get a button !",
        borderRight: "1px solid #fff",
        borderLeft: "0",
        borderBottom: "1px solid #fff",
        opacity: 1
    })
    gsap.to((".there2"), {
        text: "and you get a button !",
        delay: 1,
        borderRight: "0",
        borderLeft: "1px solid #fff",
        borderBottom: "1px solid #fff",
        opacity: 1
    })
    gsap.to((".there3"), {
        text: "everybody get buttons !!",
        delay: 2,
        borderTop: "1px solid #fff",
        borderBottom: "1px solid #fff",
        opacity: 1
    })
    gsap.to((".mystery"), {
        opacity: 0
    }, 1)
})

button2.addEventListener("click", () => {
    gsap.to((".there1"), {
        text: "now the button's yours !",
        borderRight: "0",
        borderLeft: "10px solid #fff",
        borderBottom: "10px solid #fff",
        opacity: 1
    })
    gsap.to((".there2"), {
        text: "and yours !",
        delay: 1,
        borderRight: "10px solid #fff",
        borderLeft: "0",
        borderBottom: "10px solid #fff",
        opacity: 1
    })
    gsap.to((".there3"), {
        text: "and yours too !",
        delay: 2,
        borderTop: "10px solid #fff",
        borderBottom: "10px solid #fff",
        opacity: 1
    })
    gsap.to((".mystery"), {
        opacity: 0
    })
})

button3.addEventListener("click", () => {
    gsap.to((".there1"), {
        opacity: 0
    })
    gsap.to((".there2"), {
        opacity: 0
    })
    gsap.to((".there3"), {
        opacity: 0
    })
    gsap.to((".mystery"), {
        text: "you should not have clicked me",
        fontSize: 50,
        duration: 2,
        opacity: 1
    })
})