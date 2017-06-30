import React, { Component } from 'react';
import ListContacts from './ListContacts';



class App extends Component {

  state = {
     contacts :[
       {
        "id": "ruhul",
        "name": "Ruhul Amin",
        "email": "r_amin105@yahoo.com",
        "avatarURL": "http://localhost:5001/ruhul.jpg"
      },
      {
        "id": "ayesha",
        "name": "Ayesha Amin",
        "email": "avastamin@gmail.com",
        "avatarURL": "http://localhost:5001/ayesha.jpg"
      },
      {
        "id": "rodela",
        "name": "Rumaisa Amin",
        "email": "avastamin@gmail.com",
        "avatarURL": "http://localhost:5001/rodela.jpg"
      }
    ]
  }
  removeContact = (contact) => {
    this.setState((state) => ({
       contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
  }
  render() {
    return (
      <div>
        <ListContacts
           contacts= {this.state.contacts}
           onDeleteContacts={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
