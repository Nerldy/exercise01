const names = document.querySelectorAll("input");


for (let i = 0; i < names.length; i++) {
    const checkName = names[i].value.toUpperCase();
    if (checkName !== "SUBMIT") {
        names[i].className = "testing";
        console.log(checkName);
        console.log(names[i]);
    }
}

for (let i = 0; i < 10; i++) {
    const createDivs = document.createElement('div');
    createDivs.className = "meeko";
    if (i >= 5) {
        createDivs.className = "the-fivers";
    }
    document.body.appendChild(createDivs);

}