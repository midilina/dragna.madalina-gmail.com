

    users: [],
    error: '',

    async init() {
        console.log('hello', document.getElementById('lis'))
        const users = await this.fetchUsers();
        if (users) {
            this.users = users;
            this.render();
        }
        else{
            this.error = 'An error has accoured'
        }
    }

    async fetchUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (response.ok){
            const data = await response.json();
        }
        return null;
    },

    render(){
        consile.log(this.users);
        if (this.error){
            document.getElementById('error').textContent = this.error;
        } else {
            const items =  this.users.map(user => `<li>${user.name} ${user.email}</li>`);
            const list = document.getElementById('list');
            list.innerHTML = items.join('');
        }
    },


};
main.init();
