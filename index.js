let head = document.head;
let body = document.body;
let link = document.createElement("link");
link.href = "https://play-lh.googleusercontent.com/92xIZAW-mdwucFX1v8kyTXlLVgZfLczHv8XCVOH1tFc0M3cTRI4q9qJLUM96PqCrgWjc";
link.type = "icon/x-image";
link.rel = "icon";

head.appendChild(link);

let adbtn = document.querySelector(".addBtn") // add button

adbtn.addEventListener('mouseover', () => {
    adbtn.style.backgroundColor = "#58A399";
    adbtn.style.color = "white";
});

adbtn.addEventListener('mouseout', () => {
    adbtn.style.backgroundColor = "transparent"
    adbtn.style.color = "black"
});

let debtn = document.querySelector(".delBtn") // delete button

debtn.addEventListener('mouseover', () => {
    debtn.style.backgroundColor = "#A0153E";
    debtn.style.color = "white";
});

debtn.addEventListener('mouseout', () => {
    debtn.style.backgroundColor = "transparent"
    debtn.style.color = "black"
});

let list = document.querySelector(".list");

let box = document.querySelector("#words");

box.addEventListener('keyup', function () {
    adbtn.addEventListener('click', function () {
        let inText = box.value.trim();
        if (inText != '') {
            let lis = document.createElement('li');
            lis.setAttribute('class', 'delList');
            lis.style.display = 'flex';
            lis.style.flexDirection = 'row';
            lis.style.justifyContent = 'space-between';
            lis.style.borderStyle = 'solid';
            lis.style.padding = '7%';
            lis.style.margin = '1%';
            let xBtn = document.createElement('button');
            xBtn.innerText = 'Delete';
            xBtn.setAttribute('class', "xBtn");
            let edBtn = document.createElement('button');
            edBtn.innerText = 'Edit';
            edBtn.setAttribute('class', "eBtn");
            xBtn.addEventListener('click', function () {
                lis.remove();
            });
            xBtn.addEventListener('mouseover', function () {
                xBtn.style.backgroundColor = "#A0153E";
                xBtn.style.color = "white";
            });
            xBtn.addEventListener('mouseout', function () {
                xBtn.style.backgroundColor = 'transparent';
                xBtn.style.color = 'black';
            });
            edBtn.addEventListener('click', function () {
                let newText = prompt("Enter new text:");
                if (newText !== null && newText.trim() !== "") {
                    lis.querySelector('.item-text').textContent = newText.trim();
                }
            });
            edBtn.addEventListener('mouseover', function () {
                edBtn.style.backgroundColor = '#251F44';
                edBtn.style.color = 'white';
            });
            edBtn.addEventListener('mouseout', function () {
                edBtn.style.backgroundColor = 'transparent';
                edBtn.style.color = 'black';
            });
            let itemText = document.createElement('span');
            itemText.textContent = inText;
            itemText.classList.add('item-text');
            lis.appendChild(itemText);
            lis.append(xBtn, edBtn);
            list.appendChild(lis);
            box.value = '';
        }
    });

    debtn.addEventListener('click', function () {
        list.innerHTML = '';
    });
});

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('xBtn')) {
        event.target.parentElement.remove();
    }
});
