
class Contact
{
    static idCounter = 0; 
    constructor(name,email,phone)
    {
        this.id = Contact.idCounter++;
        this.name=name;
        this.email=email;
        this.phone=phone;
    }
}
class ManageContact
{
    static usersContacts=[];
    static deleteContact(id) 
    {
        let contactIndex = this.usersContacts.findIndex(contact => contact.id === id);
        this.usersContacts.splice(contactIndex, 1);
        this.displayContacts();
    }
    static updateContact(event) 
    {   
        //stop the reload on submit
        event.preventDefault();
        let id  = document.getElementById('idToUpdate').value;
        let name = document.getElementById('nameToUpdate').value;
        let email = document.getElementById('emailToUpdate').value;
        let phone = document.getElementById('phoneToUpdate').value;
        this.usersContacts[id].name = name;
        this.usersContacts[id].email = email;
        this.usersContacts[id].phone = phone;
        this.displayContacts();
    }
    static addNewContact(event) {
        //stop the reload on submit
        event.preventDefault();
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        if(name==''||email==''||phone=='')
        {
            alert('Pleas Enter a Valid Data..');
        }
        else{
            let newContact= new Contact(name,email, phone)
            this.usersContacts.push(newContact);
            
        }
        // clear the input
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';

        //display data
        console.log(this.usersContacts);
        this.displayContacts();
    }
    static displayContacts()
    {
        console.log('displayContacts just called!');
        let tableBodyData = document.getElementById('tableBodyData');
        tableBodyData.innerHTML = '';

        if(this.usersContacts.length > 0){
            this.usersContacts.forEach(contact => {
                tableBodyData.innerHTML += `<tr><td>${contact.id}</td><td>${contact.name}</td><td>${contact.email}</td><td>${contact.phone}</td> <td><button onclick="ManageContact.deleteContact(${contact.id})" class="btn btn-danger">Delete</button></td></tr>`;
            });
        }else
        { 
            console.log('There is no data!');
        }
    }
    static searchName(event)
    {
        //stop the reload on submit
        event.preventDefault()
        let nameToSearch = document.getElementById('nameToSearch').value;
        let foundContact = this.usersContacts.find(contact => contact.name.toLowerCase() === nameToSearch.toLowerCase());

        if (foundContact) {
            alert('Contact found: \' '+ nameToSearch+' \'');
        } else {
            alert('No contact found with the name:  \''+nameToSearch+'\'');
        }
    }
}