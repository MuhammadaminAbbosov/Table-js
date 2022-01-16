const nameInput = document.getElementById("input-firstname")
const lastNameInput = document.getElementById("input-lastname")
const adressInput = document.getElementById("input-adress")
const btn = document.getElementById("btn")
const male = document.getElementById("male")
const female = document.getElementById("female")
const gender = document.querySelector(".gender")
let gen = ""

function nameInputCheck(name) {
    if (name.trim() == "") {
        nameInput.style.border = "1px solid red"

        setTimeout(function () {
            nameInput.style.border = "1px solid black"
        }, 1500)
    }
}

function lastNameInputCheck(lastname) {
    if (lastname.trim() == "") {
        lastNameInput.style.border = "1px solid red"

        setTimeout(function () {
            lastNameInput.style.border = "1px solid black"
        }, 1500)
    }
}

function adressInputCheck(adress) {
    if (adress.trim() == "") {
        adressInput.style.border = "1px solid red"

        setTimeout(function () {
            adressInput.style.border = "1px solid black"
        }, 1500)
    }
}

function maleCheck() {
    if (male.checked)
        gen = male.value
    else if (female.checked)
        gen = female.value
    else {
        gender.style.color = "red"
        setTimeout(function () {
            gender.style.color = "black"
        }, 1500)
    }
}



function createDOM(name, lastname, gen, adress) {
    const tbody = document.getElementById("tbody")
    const tr = document.createElement("tr")
    const nameTd = document.createElement("td")
    const lastnameTd = document.createElement("td")
    const genTd = document.createElement("td")
    const adressTd = document.createElement("td")

    nameTd.textContent = name
    lastnameTd.textContent = lastname
    genTd.textContent = gen
    adressTd.textContent = adress

    tr.append(nameTd, lastnameTd, genTd, adressTd)
    tbody.appendChild(tr)

}



btn.addEventListener("click", function (e) {
    e.preventDefault()
    
    if (!(male.checked || female.checked) || (nameInput.value.trim() == "" || lastNameInput.value.trim() == "" || adressInput.value.trim() == "")) {
        nameInputCheck(nameInput.value)
        lastNameInputCheck(lastNameInput.value)
        adressInputCheck(adressInput.value)
        maleCheck()
    } 
    else{

        document.getElementById("thead").classList.remove("thead-none")
        document.getElementById("thead").classList.toggle("thead")
        maleCheck()

        createDOM(nameInput.value, lastNameInput.value, gen, adressInput.value)
        console.log(nameInput.value)
        console.log(lastNameInput.value)
        console.log(gen)
        console.log(adressInput.value)
    }




    nameInput.value = ""
    lastNameInput.value = ""
    male.checked = false
    female.checked = false
    adressInput.value = ""
})