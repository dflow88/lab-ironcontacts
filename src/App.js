
import './App.css';
import contactList from "./contacts.json";
import { useState } from 'react'

function App() {



  let [contacts, setContacts] = useState(contactList.slice(0,5))
console.log(contacts)

  const addRandomContact = () => {
      const randomNumber = Math.floor(Math.random() * (contactList.length - contacts.length) ) + contacts.length;
      console.log(randomNumber)
      const newContact = contactList[randomNumber]
      console.log(newContact)
      return (setContacts([
          ...contacts,
          newContact
      ]))
  }

  const sortName = () => {
    const compare = ( a, b ) => {
      if ( a.name < b.name ){
        return -1;
      }
      if ( a.name > b.name ){
        return 1;
      }
      return 0;
    }
    contacts.sort( compare );
    return (setContacts([
      ...contacts
    ]))
  }

  const sortPop = () => {
    const compare = ( a, b ) => {
      if ( a.popularity < b.popularity ){
        return 1;
      }
      if ( a.popularity > b.popularity ){
        return -1;
      }
      return 0;
    }
    contacts.sort( compare );
    return (setContacts([
      ...contacts
    ]))
  }

  const deleteActor = (event, selectedComment) => {
    event.preventDefault()
    const filteredArray = contacts.filter((contactListed) => {
      return contactListed.id !== selectedComment.id
    })
    setContacts(filteredArray)
  }

  return (
    <>
          <>
                <button
                  onClick ={() => {
                    addRandomContact()
                  }}
                >
                    Add Random Contact
                </button> 

                <button
                  onClick ={() => {
                    sortName()
                  }}
                >
                    Sort by Name
                </button> 

                <button
                  onClick ={() => {
                    sortPop()
                  }}
                >
                    Sort by Popularity
                </button> 
          </>

        <div>
          <table style={{float: 'center'}}>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
            </tr>
          </table>
            {
                contacts.map((element) => {
                    return(
                        <table>
                            <tr>
                                <td><img style={{ height:"75px" }}src={element.pictureUrl} alt=""/></td>
                                <td><p>{element.name}</p></td>
                                <td><p>{element.popularity}</p></td>
                                <td><button onClick={ (e) => { deleteActor(e, element) }} > Delete </button></td>
                            </tr>
                        </table>
                    )
                })

            }
        </div>
    )
    </>
  );
}

export default App;
