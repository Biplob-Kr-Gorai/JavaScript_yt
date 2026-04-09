const User = {
    _email: 'sachin@email.com',
    _password : 'abc22',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

// Factory function

const tea = Object.create(User)
console.log(tea.email);
