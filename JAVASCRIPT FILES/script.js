// Toggle Menu Coded Here

var toggleIcon = document.querySelector("nav #toggle-icon img")
var toggleMenu = document.querySelector(".toggle-container")

var countNo = 0;

toggleIcon.addEventListener("click",()=>{

    if (countNo == 0) {
        toggleMenu.style.right = "0%"
        countNo = 1
    }
    else{
        toggleMenu.style.right = "-50%"
        countNo = 0
    }
})












// Herobox and Navbar Animation Here

window.addEventListener("load", function () {

    var tl = gsap.timeline()

    tl.to(".white-box",{
        opacity : 0,
        duration : 0.5
    })
    tl.to("#herobox::after",{
        opacity : 1,
        duration : 0.5
    })
    tl.to("nav",{
        y : 100,
        duration : 0.8
    })
    tl.to("#herobox h1", {
        scale: 1,
        opacity: 1,
        duration: 1,
    })
    tl.to("#herobox a", {
        opacity: 1,
        duration: 1,
    })

})


// <!-- Section 1 Coded Here -->

gsap.from(".coloum-1", {
    y: 300,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".container",
        start: "top 60%"
    }
})
gsap.from(".coloum-2", {
    y: 300,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".container",
        start: "top 60%"
    }
})
gsap.from(".coloum-3", {
    y: 300,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".container",
        start: "top 60%"
    }
})

// <!-- Featured Collection -->

gsap.from("#featured-section h1", {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: "#featured-section h1",
        start: "top 50%"
    }
})

gsap.from("#featured-section p", {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: "#featured-section p",
        start: "top 60%"
    }
})

gsap.from(".video-box", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".video-box",
        start: "top 60%"
    }
})

// <!-- Secondary Content Collection -->

gsap.from(".blog-1", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".blog-1",
        start: "top 60%"
    }
})


gsap.from(".blog-2", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".blog-2",
        start: "top 60%"
    }
})

// <!-- Heard Section -->

gsap.from("#heard-section h1", {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: "#heard-section h1",
        start: "top 60%"
    }
})
gsap.from("#heard-section p", {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: "#heard-section p",
        start: "top 60%"
    }
})
gsap.from("#heard-section a", {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: "#heard-section a",
        start: "top 60%"
    }
})

// <!-- Footer Section -->


gsap.from(".heading-side p", {
    y: 20,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".heading-side p",
        start: "top 70%",
    }
})

gsap.from(".heading-side a.one", {
    y: 20,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".heading-side a.one",
        start: "top 70%",
    }
})
gsap.from(".heading-side a.two", {
    y: 20,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".heading-side a.two",
        start: "top 70%",
    }
})

gsap.from(".company-section-1", {
    y: 20,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".company-section-1",
        start: "top 70%",
    }
})
gsap.from(".company-section-2", {
    y: 20,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".company-section-2",
        start: "top 70%",
    }
})
gsap.from(".company-section-3", {
    y: 20,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".company-section-3",
        start: "top 70%",
    }
})

