import { read, append, edit, remove } from './storage.js';

export function init() {
  document.getElementById('form-add').addEventListener('submit', onSubmitAdd);
  document.getElementById('form-edit').addEventListener('submit', onSubmitDelete);
  document.getElementById('form-edit').addEventListener('change', onChangeDelete);
  document.getElementById('form-edit').addEventListener('click', onChangeUpdate);
  document.getElementById('form-edit').addEventListener('cancel', onChangeCancel);
  
  render();
}

function onSubmitAdd(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  data.set('id', Date.now());
  const contact = Object.fromEntries(data);
  append(contact);
  render();
}

function onSubmitDelete(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const contacts = read();
  data.getAll('id').forEach(id => {
    const contact = contacts.find(contact => contact.id === id);
    if (contact) {
      remove(contact);
    }
  });
  form.reset();
  form.elements.delete.disabled = true;
  render();
}

function onChangeCancel(){}


function onChangeUpdate(event){

  document.getElementById(button.id){
    document.querySelectorAll('update').childNodes.forEach(element => {
      const contacts = read ();
      contacts.forEach(element => {
        if (element.id === buttonId) {
          const contact = new Object;
          contact.id = buttonId;
          contact.name = document.getElementById('update').childNodes.value;
          contact.email = document.getElementById('update').childNodes.value;
          contact.phone = document.getElementById('update').childNodes.value;
          edit(contact);
        }
      });
    }

  }
render();
}


function onChangeDelete(event) {
  const { form } = event.target;
  // const form = event.target.form;
  const data = new FormData(form);
  const hasChecked = data.getAll('id').length > 0;
  form.elements.delete.disabled = !hasChecked;
}
    document.getElementById('edit').onclick = function() {
      document.getElementById('name').removeAttribute('readonly')
    };
    document.getElementById('email').removeAttribute('readonly') ;
    document.getElementById('phone').removeAttribute('readonly')
    document.getElementById('update').hidden = false;
    document.getElementById('cancel').hidden = false;
  }




     

function render() {
  const contacts = read();
  const list = document.getElementById('list');
  const items = contacts.map(
    contact => `
    <li>
       <fieldset name ="fieldset">
        <input type="checkbox" name="id" value="${contact.id}"/>
        <input type="text" id="name" name="name" value="${contact.name}" readonly>
        <input type="email" id="email" name="email" value="${contact.email}" readonly>
        <input type="tel" id="phone" name="phone" value="${contact.phone}" readonly>
        <input type="button" id="edit" name="edit" value="Edit">
        <input type="button" id="update" name="update" value="Update" hidden>
        <input type="button" id="cancel" name="cancel" value="Cancel" hidden>

       </fielset>

    </li>`
  );
  list.innerHTML = items.join('');
  const formDelete = document.getElementById('form-edit');
  formDelete.hidden = contacts.length === 0;
}