function mouvement() {
    document.querySelector('.logo').classList.add('mouvement')
}

function resetMouv() {
    document.querySelector('.logo').classList.remove('mouvement')
}

function openMenu() {
    menu = document.querySelector('#menu')
    if (menu.style.visibility == "visible") {
        document.querySelector('#menu').style.visibility='hidden'
    }
    else {
        document.querySelector('#menu').style.visibility='visible'
    }
}

function shadowSearch() {
    search = document.querySelector('#searchPlace')
    search.style.width='40em'

}

function onmouseSearch() {
    document.querySelector('#searchPlace').style.borderWidth = "0px 10px 0px 10px"
    console.log('ok')
}

function resetSearch() {
    search = document.querySelector('#searchPlace')
    search.style.width='11em'
    search.style.borderWidth="0px 0px 0px 0px"
    console.log('reset, ok')
}
