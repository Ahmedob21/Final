    let form = document.getElementById("info");

    form.addEventListener("submit" , (event)=>{
            event.preventDefault();
            let firstName = event.target.first;
            let lastName = event.target.last;
            let email = event.target.email;
            let phoneNumber = event.target.Phonenumber;
            let dateOfBirth = event.target.datebirth;
            let gender = event.target.gender;
            let address = event.target.address;
            
            displayInfo(firstName.value, lastName.value , email.value, phoneNumber.value, dateOfBirth.value, gender.value, address.value)
            
            firstName.value ="";
            lastName.value ="" ;
            email.value ="" ;
            phoneNumber.value ="" ;
            dateOfBirth.value ="" ;
            gender.value ="" ;
            address.value ="" ;
    })


    const displayInfo = (firstName, lastName ,email,phoneNumber,dateOfBirth,gender,address)=>{
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card', 'm-3'); 
        const card = document.createElement('div');
         card.classList.add('card-body');

        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = 'personal.avif'; 
        img.style.width = '100%'; 
        img.style.height = '400px';

        card.appendChild(img);

        card.innerHTML += `
        <h5 class="card-title cards-h1">Personal Information</h5>
        <div class="info">
            <h5 class="st-h5">First Name: </h5>
            <p class="st-p">${firstName}</p>
        </div>
        <div class="info">
            <h5 class="st-h5">Last Name: </h5>
            <p class="st-p">${lastName}</p>
        </div>
        <div class="info">
            <h5 class="st-h5">Email: </h5>
            <p class="st-p">${email}</p>
        </div>
        <div class="info">
            <h5 class="st-h5">Phone Number: </h5>
            <p class="st-p">${phoneNumber}</p>
        </div>
        <div class="info">
            <h5 class="st-h5">Date Of Birth: </h5>
            <p class="st-p">${dateOfBirth}</p>
        </div>
        <div class="info">
            <h5 class="st-h5">Gender: </h5>
            <p class="st-p">${gender}</p>
        </div>
        <div class="info">
            <h5 class="st-h5">Address: </h5>
            <p class="st-p">${address}</p>
        </div>
    `;
    cardDiv.appendChild(card);
    document.getElementById("cardsContainer").appendChild(cardDiv);
    }
