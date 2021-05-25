const viewSection = document.querySelector(".view-section");
const contactsSection = document.querySelector(".contacts-section");

const state = {
  contacts: [],
  selectedContact: null
};

/* [START] NO NEED TO EDIT */

function getContacts() {
  fetch("http://localhost:3000/contacts")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      state.contacts = data;

      renderContactsList();
    });
}

function renderContactsList() {
  const listEl = document.createElement("ul");
  listEl.className = "contacts-list";

  for (let i = 0; i < state.contacts.length; i++) {
    const contact = state.contacts[i];
    const listItemEl = renderContactListItem(contact);

    listEl.append(listItemEl);
  }

  contactsSection.append(listEl);
}

function renderAddressSection(address) {
  const containerEl = document.createElement("section");

  const headingEl = document.createElement("h2");
  headingEl.innerText = "Address";

  containerEl.append(headingEl);

  const streetText = document.createElement("p");
  streetText.innerText = address.street;

  containerEl.append(streetText);

  const cityText = document.createElement("p");
  cityText.innerText = address.city;

  containerEl.append(cityText);

  const postCodeText = document.createElement("p");
  postCodeText.innerText = address.postCode;

  containerEl.append(postCodeText);

  return containerEl;
}

function renderContactView() {
  const contact = state.selectedContact;

  if (!contact) return;

  viewSection.innerHTML = "";

  const containerEl = document.createElement("article");
  containerEl.className = "center light-shadow address-card";

  const headingEl = document.createElement("h1");

  const fullName = `${contact.firstName} ${contact.lastName}`;
  headingEl.innerText = fullName;

  containerEl.append(headingEl);

  const addressSectionEl = renderAddressSection(contact.address);

  containerEl.append(addressSectionEl);

  viewSection.append(containerEl);
}

/* [END] NO NEED TO EDIT */

function renderContactListItem(contact) {
  const listItemEl = document.createElement("li");

  const headingEl = document.createElement("h3");

  const fullName = `${contact.firstName} ${contact.lastName}`;

  headingEl.innerText = fullName;

  listItemEl.append(headingEl);

  const viewBtn = document.createElement("button");
  viewBtn.className = "button grey";
  viewBtn.innerText = "View";

  viewBtn.addEventListener("click", function () {
    state.selectedContact = contact;

    renderContactView();
  });

  listItemEl.append(viewBtn);

  const editBtn = document.createElement("button");
  editBtn.className = "button blue";
  editBtn.innerText = "Edit";

  editBtn.addEventListener("click", function () {
    // [TODO] Write Code
  });

  listItemEl.append(editBtn);

  // CREATE EDIT BUTTEN LISTENER
  editBtn.addEventListener("click", function(){
      editContactForm(contact)
  })

  return listItemEl;
}

function editContactForm(contact){
  
  // FIND MAIN SECTION AND CLEAR IT
  const mainSection = document.querySelector("main");
  mainSection.innerHTML = ""
  
  // CREATE NEW CONTACT FORM
  const editContactForm = document.createElement("form")
  editContactForm.setAttribute("class","form-stack light-shadow center contact-form")
  mainSection.append(editContactForm)
  
  // CREATE "CREATE CONTACT" H1
  const editContactFormH1 = document.createElement("h1")
  editContactFormH1.innerText = "Edit Contact"
  editContactForm.append(editContactFormH1) 
  
  // CREATE LABEL FOR FIRST NAME 
  const editContactFormFirstNameLabel = document.createElement("label")
  editContactFormFirstNameLabel.setAttribute("for","first-name-input")
  editContactFormFirstNameLabel.innerText = "First Name:"
  editContactForm.append(editContactFormFirstNameLabel) 
  
  // CREATE INPUT FOR FIRST NAME
  const editContactFormFirstNameInput = document.createElement("input")
  editContactFormFirstNameInput.setAttribute("id","first-name-input")
  editContactFormFirstNameInput.setAttribute("name","first-name-input")
  editContactFormFirstNameInput.setAttribute("type","text")
  editContactFormFirstNameInput.setAttribute("required","true")
  editContactFormFirstNameInput.value = contact.firstName
  editContactForm.append(editContactFormFirstNameInput) 

  // CREATE LABEL FOR LAST NAME 
  const editContactFormLastNameLabel = document.createElement("label")
  editContactFormLastNameLabel.setAttribute("for","last-name-input")
  editContactFormLastNameLabel.innerText = "Last Name:"
  editContactForm.append(editContactFormLastNameLabel) 
  
  // CREATE INPUT FOR LAST NAME
  const editContactFormLastNameInput = document.createElement("input")
  editContactFormLastNameInput.setAttribute("id","last-name-input")
  editContactFormLastNameInput.setAttribute("name","last-name-input")
  editContactFormLastNameInput.setAttribute("type","text")
  editContactFormLastNameInput.setAttribute("required","true")
  editContactFormLastNameInput.value = contact.lastName
  editContactForm.append(editContactFormLastNameInput) 

  // CREATE LABEL FOR STREET INPUT
  const editContactFormStreetLabel = document.createElement("label")
  editContactFormStreetLabel.setAttribute("for","street-input")
  editContactFormStreetLabel.innerText = "Street:"
  editContactForm.append(editContactFormStreetLabel) 
  
  // CREATE INPUT FOR STREET 
  const editContactFormStreetInput = document.createElement("input")
  editContactFormStreetInput.setAttribute("id","street-input")
  editContactFormStreetInput.setAttribute("name","street-input")
  editContactFormStreetInput.setAttribute("type","text")
  editContactFormStreetInput.setAttribute("required","true")
  editContactFormStreetInput.value = contact.address.street
  editContactForm.append(editContactFormStreetInput) 

  // CREATE LABEL FOR CITY INPUT
  const editContactFormCityLabel = document.createElement("label")
  editContactFormCityLabel.setAttribute("for","city-input")
  editContactFormCityLabel.innerText = "City:"
  editContactForm.append(editContactFormCityLabel) 

  // CREATE INPUT FOR CITY
  const editContactFormCityInput = document.createElement("input")
  editContactFormCityInput.setAttribute("id","city-input")
  editContactFormCityInput.setAttribute("name","city-input")
  editContactFormCityInput.setAttribute("type","text")
  editContactFormCityInput.setAttribute("required","true")
  editContactFormCityInput.value = contact.address.city
  editContactForm.append(editContactFormCityInput) 

  // CREATE LABEL FOR POST CODE INPUT
  const editContactFormPostCodeLabel = document.createElement("label")
  editContactFormPostCodeLabel.setAttribute("for","post-code-input")
  editContactFormPostCodeLabel.innerText = "Post Code:"
  editContactForm.append(editContactFormPostCodeLabel) 

  // CREATE INPUT FOR POST CODE
  const editContactFormPostCodeInput = document.createElement("input")
  editContactFormPostCodeInput.setAttribute("id","post-code-input")
  editContactFormPostCodeInput.setAttribute("name","post-code-input")
  editContactFormPostCodeInput.setAttribute("type","text")
  editContactFormPostCodeInput.setAttribute("required","true")
  editContactFormPostCodeInput.value = contact.address.postCode
  editContactForm.append(editContactFormPostCodeInput) 

  // CREATE CHECK-BOX SECTION DIV
  const editContactFormCheckBoxDiv = document.createElement("div")
  editContactFormCheckBoxDiv.setAttribute("class","checkbox-section")
  editContactForm.append(editContactFormCheckBoxDiv ) 

  // CREATE BLOCK CHECKBOX INPUT
  const editContactFormCheckBoxDivInput = document.createElement("input")
  editContactFormCheckBoxDivInput.setAttribute("id","block-checkbox")
  editContactFormCheckBoxDivInput.setAttribute("name","block-checkbox")
  editContactFormCheckBoxDivInput.setAttribute("type","checkbox")
  editContactFormCheckBoxDivInput.value = contact.blockContact
  editContactFormCheckBoxDiv.append(editContactFormCheckBoxDivInput) 

  // CREATE LABEL FOR BLOCK CHECKBOX
  const editContactFormCheckBoxDivLabel = document.createElement("label")
  editContactFormCheckBoxDivLabel.setAttribute("for","block-checkbox")
  editContactFormCheckBoxDivLabel.innerText = "Block:"
  editContactFormCheckBoxDiv.append(editContactFormCheckBoxDivLabel) 

  // CREATE ACTIONS SECTION DIV
  const editContactFormActionsDiv = document.createElement("div")
  editContactFormActionsDiv.setAttribute("class","actions-section")
  editContactForm.append(editContactFormActionsDiv ) 

  // CREATE "UPDATE" SUBMIT BUTTON 
  const editContactFormSubmitButton = document.createElement("button")
  editContactFormSubmitButton.setAttribute("class","button blue")  
  //editContactFormSubmitButton.setAttribute("type","submit")
  editContactFormSubmitButton.innerText = "Update"
  editContactFormActionsDiv.append(editContactFormSubmitButton)

  editContactFormSubmitButton.addEventListener("click",function (event){
    event.preventDefault()
    updateContact(contact)
  })

  // CREATE "DELETE"  BUTTON 
  const editContactFormDeleteButton = document.createElement("button")
  editContactFormDeleteButton.setAttribute("class","button blue")  
  //editContactFormSubmitButton.setAttribute("type","submit")
  editContactFormDeleteButton.innerText = "Delete"
  editContactFormActionsDiv.append(editContactFormDeleteButton)

  editContactFormDeleteButton.addEventListener("click",function (event){
    event.preventDefault()
    deleteContact(contact)
  })
}

function deleteContact(contact){

fetch("http://localhost:3000/contacts/"+contact.id,{
    method:'DELETE'
})
fetch("http://localhost:3000/addresses/"+contact.addressId,{
    method:'DELETE'
})

// DELETE THE CONTACT FROM THE CONTACT ARRAY
newContacts = state.contacts.filter(function(arrayContact){
  return arrayContact.id !== contact.id
})
state.contacts = newContacts

// FIND MAIN SECTION AND CLEAR IT
const mainSection = document.querySelector("main");
mainSection.innerHTML = ""

// FIND THE EXISTING UNORDERED LIST AND DELETE IT
let unOrderedList = document.querySelector("ul")
unOrderedList.remove()

// RE-RENDER THE LIST
renderContactsList();    
}

function updateContact(contactToUpdate){
  let editContactForm = document.querySelector(".contact-form")
  let contact = {
      firstName: editContactForm['first-name-input'].value,
      lastName: editContactForm['last-name-input'].value,
      blockContact: editContactForm['block-checkbox'].value,
      addressId: contactToUpdate.address.id
  }
  let address = {
      street: editContactForm['street-input'].value,
      city: editContactForm['city-input'].value,
      postCode: editContactForm['post-code-input'].value
  }
  fetch("http://localhost:3000/addresses/"+contactToUpdate.address.id,{
      method:'PATCH',
      headers:{'Content-Type': 'Application/json'},
      body: JSON.stringify(address)
  })
  fetch("http://localhost:3000/contacts/"+contactToUpdate.id,{
      method:'PATCH',
      headers:{'Content-Type': 'Application/json'},
      body: JSON.stringify(contact)
  })

  // FIND THE OBJECTS ARRAY INDEX TO UPDATE 
  let contactIndex = state.contacts.findIndex(function(arrayContact){
      return arrayContact.id === contactToUpdate.id
  })

  // ADD THE ID TO THE CONTACT
  contact.id = contactToUpdate.id

  // ADD THE ADDRESS ID TO THE ADDRESS
  address.id = contactToUpdate.address.id

  // ADD THE ADDRESS TO THE CONTACT
  contact.address = address

  // UPDATE THE ARRAY
  state.contacts[contactIndex] = contact
  editContactForm.reset()

  // FIND THE EXISTING UNORDERED LIST AND DELETE IT
  let unOrderedList = document.querySelector("ul")
  unOrderedList.remove()
 
  state.selectedContact = contact
  renderContactView() 

  // RE-RENDER THE LIST
  renderContactsList();
}

function listenNewContactButton() {
  const btn = document.querySelector(".new-contact-btn");

  btn.addEventListener("click", function (event) {
    event.preventDefault()
    createNewContactForm()
  });
}

// [TODO] Write Code

function createNewContactForm(){

  // FIND MAIN SECTION AND CLEAR IT
  const mainSection = document.querySelector("main");
  mainSection.innerHTML = ""
  
  // CREATE NEW CONTACT FORM
  const newContactForm = document.createElement("form")
  newContactForm.setAttribute("class","form-stack light-shadow center contact-form")
  mainSection.append(newContactForm)
  
  // CREATE "CREATE CONTACT" H1
  const newContactFormH1 = document.createElement("h1")
  newContactFormH1.innerText = "Create Contact"
  newContactForm.append(newContactFormH1) 
  
  // CREATE LABEL FOR FIRST NAME 
  const newContactFormFirstNameLabel = document.createElement("label")
  newContactFormFirstNameLabel.setAttribute("for","first-name-input")
  newContactFormFirstNameLabel.innerText = "First Name:"
  newContactForm.append(newContactFormFirstNameLabel) 
  
  // CREATE INPUT FOR FIRST NAME
  const newContactFormFirstNameInput = document.createElement("input")
  newContactFormFirstNameInput.setAttribute("id","first-name-input")
  newContactFormFirstNameInput.setAttribute("name","first-name-input")
  newContactFormFirstNameInput.setAttribute("type","text")
  newContactFormFirstNameInput.setAttribute("required","true")
  newContactForm.append(newContactFormFirstNameInput) 

  // CREATE LABEL FOR LAST NAME 
  const newContactFormLastNameLabel = document.createElement("label")
  newContactFormLastNameLabel.setAttribute("for","last-name-input")
  newContactFormLastNameLabel.innerText = "Last Name:"
  newContactForm.append(newContactFormLastNameLabel) 
  
  // CREATE INPUT FOR LAST NAME
  const newContactFormLastNameInput = document.createElement("input")
  newContactFormLastNameInput.setAttribute("id","last-name-input")
  newContactFormLastNameInput.setAttribute("name","last-name-input")
  newContactFormLastNameInput.setAttribute("type","text")
  newContactFormLastNameInput.setAttribute("required","true")
  newContactForm.append(newContactFormLastNameInput) 

  // CREATE LABEL FOR STREET INPUT
  const newContactFormStreetLabel = document.createElement("label")
  newContactFormStreetLabel.setAttribute("for","street-input")
  newContactFormStreetLabel.innerText = "Street:"
  newContactForm.append(newContactFormStreetLabel) 
  
  // CREATE INPUT FOR STREET 
  const newContactFormStreetInput = document.createElement("input")
  newContactFormStreetInput.setAttribute("id","street-input")
  newContactFormStreetInput.setAttribute("name","street-input")
  newContactFormStreetInput.setAttribute("type","text")
  newContactFormStreetInput.setAttribute("required","true")
  newContactForm.append(newContactFormStreetInput) 

  // CREATE LABEL FOR CITY INPUT
  const newContactFormCityLabel = document.createElement("label")
  newContactFormCityLabel.setAttribute("for","city-input")
  newContactFormCityLabel.innerText = "City:"
  newContactForm.append(newContactFormCityLabel) 

  // CREATE INPUT FOR CITY
  const newContactFormCityInput = document.createElement("input")
  newContactFormCityInput.setAttribute("id","city-input")
  newContactFormCityInput.setAttribute("name","city-input")
  newContactFormCityInput.setAttribute("type","text")
  newContactFormCityInput.setAttribute("required","true")
  newContactForm.append(newContactFormCityInput) 

  // CREATE LABEL FOR POST CODE INPUT
  const newContactFormPostCodeLabel = document.createElement("label")
  newContactFormPostCodeLabel.setAttribute("for","post-code-input")
  newContactFormPostCodeLabel.innerText = "Post Code:"
  newContactForm.append(newContactFormPostCodeLabel) 

  // CREATE INPUT FOR POST CODE
  const newContactFormPostCodeInput = document.createElement("input")
  newContactFormPostCodeInput.setAttribute("id","post-code-input")
  newContactFormPostCodeInput.setAttribute("name","post-code-input")
  newContactFormPostCodeInput.setAttribute("type","text")
  newContactFormPostCodeInput.setAttribute("required","true")
  newContactForm.append(newContactFormPostCodeInput) 

  // CREATE CHECK-BOX SECTION DIV
  const newContactFormCheckBoxDiv = document.createElement("div")
  newContactFormCheckBoxDiv.setAttribute("class","checkbox-section")
  newContactForm.append(newContactFormCheckBoxDiv ) 

  // CREATE BLOCK CHECKBOX INPUT
  const newContactFormCheckBoxDivInput = document.createElement("input")
  newContactFormCheckBoxDivInput.setAttribute("id","block-checkbox")
  newContactFormCheckBoxDivInput.setAttribute("name","block-checkbox")
  newContactFormCheckBoxDivInput.setAttribute("type","checkbox")
  newContactFormCheckBoxDiv.append(newContactFormCheckBoxDivInput) 

  // CREATE LABEL FOR BLOCK CHECKBOX
  const newContactFormCheckBoxDivLabel = document.createElement("label")
  newContactFormCheckBoxDivLabel.setAttribute("for","block-checkbox")
  newContactFormCheckBoxDivLabel.innerText = "Block:"
  newContactFormCheckBoxDiv.append(newContactFormCheckBoxDivLabel) 

  // CREATE ACTION SECTION DIV
  const newContactFormActionsDiv = document.createElement("div")
  newContactFormActionsDiv.setAttribute("class","actions-section")
  newContactForm.append(newContactFormActionsDiv ) 

  // CREATE "CREATE" SUBMIT BUTTON 
  const newContactFormSubmitButton = document.createElement("button")
  newContactFormSubmitButton.setAttribute("class","button blue")  
  newContactFormSubmitButton.setAttribute("type","submit")
  newContactFormSubmitButton.innerText = "Create"
  newContactFormActionsDiv.append(newContactFormSubmitButton)

  newContactForm.addEventListener("submit",function (event){
    event.preventDefault()
    createNewContact()
  })  
}

function createNewContact(){
    let newAddressId = 0
    let newContactForm = document.querySelector(".contact-form")
    let contact = {
        firstName: newContactForm['first-name-input'].value,
        lastName: newContactForm['last-name-input'].value,
        blockContact: newContactForm['block-checkbox'].value,
        addressId: newAddressId 
    }
    let address = {
        street: newContactForm['street-input'].value,
        city: newContactForm['city-input'].value,
        postCode: newContactForm['post-code-input'].value
    }
    return fetch("http://localhost:3000/addresses",{
    method:'POST',
    headers:{'Content-Type': 'Application/json'},
    body: JSON.stringify(address)
    }).then(function(promise){
        return promise.json()
      }).then(function(jasonResponse){
        contact.addressId = jasonResponse.id
        fetch("http://localhost:3000/contacts",{
        method:'POST',
        headers:{'Content-Type': 'Application/json'},
        body: JSON.stringify(contact)
        })
        newContactForm.reset()

        // UPDATE THE ARRAY
        state.contacts.push({
            firstName: contact.firstName,
            lastName: contact.lastName,
            addressId: contact.addressId,
            blockContact: contact.blockContact,
            address: {
                street: address.street,
                city: address.city,
                postCode: address.postCode,
                id: contact.addressId
            }
        })
        
        // FIND THE EXISTING UNORDERED LIST AND DELETE IT
        let unOrderedList = document.querySelector("ul")
        unOrderedList.remove()

        // RE-RENDER THE LIST
        renderContactsList();
        })
}

function main() {
  listenNewContactButton();
  getContacts();
}

main();
