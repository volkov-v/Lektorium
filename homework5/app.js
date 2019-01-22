var data = JSON.parse(localStorage.getItem("toDoData"));
data = data || {};
var myUl = document.getElementById("myUL"),
nodeList = document.getElementsByTagName("LI"),
btn = document.querySelector(".addBtn"),
input = document.getElementById("myInput");
let countDone = document.querySelector('.countDone');
let countDoneValue = 0;


//  function to add data to localStorage
var addToLS = obj => {
    localStorage.setItem("toDoData", JSON.stringify(obj));
};

//  function to create a new LI element
var createNewLi = (name, identity, cls) => {
    var t = document.createTextNode(name),
    listItem = document.createElement("LI");
    listItem.id = identity;
    listItem.className = cls;
    listItem.appendChild(t);
    myUl.appendChild(listItem);
    input.value = '';
    createSpan();
};

//  function that will add data to localStorage and create a LI element at the same time
var addItem = () => {
    if(input.value == "") alert("Please input a valid value");
    else{
        let id = new Date().getTime(),
        title = input.value,
        className = "";
        tempData = {
            class: className,
            id: id,
            title: title
        };
        data[id] = tempData;
        createNewLi(title, id, className);
        addToLS(data);
    }
};


//  function to add a small close button in front of every LI element
var createSpan = () => {
    for (var i = 0; i < nodeList.length; i++){
        var count = nodeList[i].childElementCount;
        if (count === 0) {
            var span = document.createElement("SPAN");
            txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            nodeList[i].appendChild(span);
        }
    }
};
createSpan();

// IIFE which will add event listener to UL element, to delete data from DOM and locaStorage when the close button will be clicked
(() => {
    myUl.addEventListener("click", (event) => {
        var target = event.target;
        if (target.tagName === "SPAN"){
            var li = target.parentElement,
            id = li.id;
            if (li.className === "checked") {
                countDoneValue--;
                changeCount();
            }
            var ul = li.parentElement;
            ul.removeChild(li);
            delete data[id];
            addToLS(data);

        }
    });
})();

//  IIFE which will get the data from localStorage and will restore elements
(() => {
    countDoneValue = 0;
    for (let prop in data){
        prop = data[prop];
        var title = prop.title,
        id = prop.id,
        className = prop.class;
        if (className === "checked") {
          countDoneValue++;
        }
        createNewLi(title, id, className);
    }
    changeCount();
})();

// IIFE to toggle "checked" class and to update localStorage
(() => {
    myUl.addEventListener("click", (event) => {
        var target = event.target;
        if(target.tagName === "LI") {
            var id = target.id;
            if(target.className === "checked"){
                target.className = "";
                data[id].class = "";
                countDoneValue--;
                changeCount();
                addToLS(data);
            }
            else if(target.className === ""){
                target.className = "checked";
                data[id].class = "checked";
                countDoneValue++;
                changeCount();
                addToLS(data);
            }
        }
    });
})();

function changeCount () {
    countDone.innerHTML = countDoneValue;
}

btn.addEventListener("click", addItem);
input.addEventListener("keypress", () => {
    if(event.which == 13) addItem();
});
