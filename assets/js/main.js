const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

// NAVBAR ENDS 

// REMOVE FOR MOBILE ATART MANA HOME ,ABOUT AND OTHERS AY CLICK KORLA NAVBAR TA OPORA SCROLL HOYA JABA


const navLink = document.querySelectorAll('.navl')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// REMOVE MOBILE VERSION END


// SCROLL SECTION 

const sections = document.querySelectorAll('section[id]')
function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.navmnu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.navmnu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)


// DARK THEME 

const themeButton = document.getElementById('theme-button')
const darktheme = 'dark-theme'
const iconTheme = 'fa-sun'





// ACTV/DECTV 

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darktheme)
    themeButton.classList.toggle(iconTheme)
})
