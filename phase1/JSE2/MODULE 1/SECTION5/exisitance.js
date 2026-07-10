if(contact.notes) { // if different then undefined
    console.log(contact.notes);
}

if("notes" in contact) { // if true
    console.log(contact.notes);
}

let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};
for(x in contact) {
    // print property name
    console.log(x);
}

let keys = Object.keys(contact);
