function read(){
    const data = window.localStorage.getItem('ds-contscts');
    return data == null ? [] : JSON.parse(data);
}

function write(contacts) {
    const data = JSON.stringify(contacts);
    window.localStorage.setItem('contscts', data)
}

export function append(constact) {
    const contacts = read();
    contacts.push(contact);
    write(contacts);
}