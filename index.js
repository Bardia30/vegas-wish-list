const main = document.querySelector('main');

function createCardElement(type, className, inner,  parent){
    const element = document.createElement(type);
    element.classList.add(className);
    element.innerText = inner; 
    parent.appendChild(element);
    return element
}

function createImgElement(className, src,  parent) {
    const element = document.createElement("img");
    element.classList.add(className);
    element.src = src; 
    parent.appendChild(element);
    return element
}

function createAnchorElement(className, inner, href,  parent) {
    const element = document.createElement("a");
    element.classList.add(className);
    element.href = href;
    element.innerText = inner 
    parent.appendChild(element);
    return element
}


function createCard(obj) {
    const cardSection = createCardElement("section", "card", null,main);

    createCardElement("h3", "card__title", obj.cardTitle, cardSection)

    createImgElement("card__img", obj.cardImage , cardSection)

    const walkPeriod = createCardElement("p", "card__walk", "walking duration: ", cardSection)

    createCardElement("span", "card__walk-value", obj.walkValue, walkPeriod)

    const drivePeriod = createCardElement("p", "card__drive", "driving duration: ", cardSection)

    createCardElement("span", "card__drive-value", obj.driveValue, drivePeriod)

    createAnchorElement("card__location", "location on map", obj.mapLocation, cardSection)

    return cardSection;
}


// cardObj = {
//     cardTitle: "someplace",
//     cardImage: "./assets/linq.jfif",
//     walkValue: "20 mins",
//     driveValue: "10 mins",
//     mapLocation: "https://goo.gl/maps/oGREYHeP8LF25XNd7"
// }

function render() {
    axios.get("./data.json")
    .then(res => {
        const data = res.data;
        data.forEach(cardObj => {
            createCard(cardObj)
        })
    })
    .catch(err => {
        console.log(err.message)
    })
}


render();


const form = document.querySelector(".form");


form.addEventListener('submit',(e)=> {
    e.preventDefault();
    const locationName = form.elements.locationName.value;
    const imageURL = form.elements.imageUrl.value
    const walkValue = form.elements.walkValue.value
    const driveValue = form.elements.driveValue.value
    const mapLocation = form.elements.mapLocation.value

    newObj ={
        cardTitle: locationName,
        cardImage: imageURL,
        walkValue: walkValue,
        driveValue: driveValue,
        mapLocation: mapLocation
    }
    
    

    // axios.post('./data.json', newObj)
    //     .then(res => {
    //         console.log('New object added successfully:', res.data);
    //     })
    //     .catch(err => {
    //         console.log(err.message)
    //     })

    // render()
})







