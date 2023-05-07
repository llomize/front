function change(){
    alert(document.getElementById("inp").value);
}

window.onload = load;

function load(){
    const colorContainer = document.getElementById('colors');
    fetch('https://13.50.251.219/wrap/libs/colors', {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
                data.forEach(item => {
                    const gridItem = document.createElement('div');
                    gridItem.classList.add('grid-item');
                    const input = document.createElement('input');
                    input.setAttribute('type','checkbox');
                    input.setAttribute('id',"color"+item.id);
                    input.classList.add('filter-check');
                    input.addEventListener('click',colorClick);
                    gridItem.appendChild(input);

                    const label = document.createElement('label');
                    label.setAttribute('for', "color"+item.id);
                    label.textContent = item.name;
                    gridItem.appendChild(label);

                    //gridItem.textContent = item.name + ' - ' + item.wrapType.typeName;
                    colorContainer.appendChild(gridItem);
                });
            }
        )
        .catch(error => console.error(error));

    const typesCont = document.getElementById('types');

    fetch('https://13.50.251.219/wrap/libs/types', {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
                data.forEach(item => {
                    const gridItem = document.createElement('div');
                    gridItem.classList.add('grid-item');
                    const input = document.createElement('input');
                    input.setAttribute('type','checkbox');
                    input.setAttribute('id',"type"+item.id);
                    input.classList.add('filter-check');
                    input.addEventListener('click',colorClick);
                    gridItem.appendChild(input);

                    const label = document.createElement('label');
                    label.setAttribute('for', "type"+item.id);
                    label.textContent = item.name;
                    gridItem.appendChild(label);

                    //gridItem.textContent = item.name + ' - ' + item.wrapType.typeName;
                    typesCont.appendChild(gridItem);
                });
            }
        )
        .catch(error => console.error(error));

    getWraps();
}

function colorClick(event){

}

function getWraps(){
    const cardsCont = document.getElementById('cards');
    fetch('https://13.50.251.219/wrap/wrap/all', {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
                data.forEach(item => {
                    const gridItem = document.createElement('div');
                    gridItem.classList.add('card');

                    const img = document.createElement('img');
                    img.setAttribute('src',"");
                    img.classList.add('card-img');
                    gridItem.appendChild(img);

                    const pDiv = document.createElement('div');
                    pDiv.classList.add("card-p-div");
                    addP(pDiv,"Name",'card-p-header');
                    addP(pDiv,item.name,'card-p');
                    gridItem.appendChild(pDiv);

                    const pDiv1 = document.createElement('div');
                    pDiv1.classList.add("card-p-div");
                    addP(pDiv1,"Color",'card-p-header');
                    addP(pDiv1,item.wrapColor.color,'card-p');
                    gridItem.appendChild(pDiv1);



                    const pDiv2 = document.createElement('div');
                    pDiv2.classList.add("card-p-div");
                    addP(pDiv2,"type",'card-p-header');
                    addP(pDiv2,item.wrapType.typeName,'card-p');
                    gridItem.appendChild(pDiv2);


                    const pDiv3 = document.createElement('div');
                    pDiv3.classList.add("card-p-div");
                    addP(pDiv3,"price",'card-p-header');
                    addP(pDiv3,item.price+"$",'card-p');
                    gridItem.appendChild(pDiv3);


                    const button = document.createElement('button');
                    button.classList.add('card-button');
                    button.textContent = "more...";
                    gridItem.appendChild(button);

                    cardsCont.appendChild(gridItem);
                });
            }
        )
        .catch(error => console.error(error));
}

function addP(gridItem,value,className){
    const pName = document.createElement('p');
    pName.classList.add(className);
    pName.textContent = value;
    gridItem.appendChild(pName);
}

// test change