const contacts = ['Chris:2232322', 'Sarah:3453456', 'John:3545345675', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975', 'Bob:12345678', 'Brighton:4758475497'];
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let searchName = input.value.toLowerCase();
    input.value = "";
    input.focus();

    for (i = 0; i < contacts.length; i++) {
        let contactSplit = contacts[i].split(':');
        if (contactSplit[0].toLowerCase() === searchName) {
            para.textContent = contactSplit[0] + "'s contact number is " + contactSplit[1] + '.';
            break;
        } else if (i === contacts.length - 1) {
            para.textContent = "contact not found";
        }
    }

});