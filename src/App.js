//import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import { useState } from 'react';



function App() {

 
  const [allContacts, setContacts] = useState(contacts.slice(0, 5))

  const addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * (contacts.length - 0) + 0)
    setContacts([...allContacts, contacts[randomIndex]])
  }

  const deleteContact = (id) => {
    const newArr = allContacts.filter((item) => {
      return id !== item.id
    })
    setContacts(newArr)
  }


  const sortByName = () => {
    allContacts.sort(function (a, b) {
      if (a.name < b.name) {
        return -1
      } else if (a.name > b.name) {
        return 1
      } else {
        return 0
      }
    })
    setContacts([...allContacts])
  }

  const sortByPopularity = () => {
    allContacts.sort(function (a, b) {
      if (a.popularity < b.popularity) {
        return -1
      } else if (a.popularity > b) {
        return 1
      } else {
        return 0
      }
    })
    setContacts([...allContacts])
  }



  return (
    <div className="md:container md:mx-auto">
    <h1 className="text-5xl p-5 font-bold justify-center">IronContacts</h1>

    <div className="flex flex-row">
      <button onClick={() => addRandomContact()} className="w-1/4 space-y-2 flex items-center justify-center border border-gray-300 font-bold">Add Random Contact</button>
      <button onClick={() => sortByName()} className="w-1/4 space-y-2 flex items-center justify-center border border-gray-300 font-bold">Sort by Name</button>
      <button onClick={() => sortByPopularity()} className="w-1/4 space-y-2 flex items-center justify-center border border-gray-300 font-bold">Sort by Popularity</button>
    </div>

      <table class="table-auto shadow-2xl">
        
          <tr>
            <th className="text-2xl p-2 font-bold w-1/4">Picture</th>
            <th className="text-2xl p-2 font-bold w-1/4">Name</th>
            <th className="text-2xl p-2 font-bold w-1/4">Popularity</th>
            <th className="text-2xl p-2 font-bold w-1/4">Action</th>
          </tr>

          {allContacts.map((elem) => {
            return(
              <tr>
                <img src={elem.pictureUrl} className="flex flex-column flex-wrap content-center object-cover md:w-28 p-5" alt="" />
                <td className="text-xl p-2 font-medium">{elem.name}</td>
                <td className="text-xl p-2 font-medium">{elem.popularity.toFixed(2)}</td>
                <td className="text-xl p-2 font-medium"><button onClick={() => deleteContact(elem.id)} className="w-1/2 flex items-center justify-center roudned-md border border-gray-300">Delete</button></td>
              </tr>
            )
          })}
        
        
      </table>
      
    </div>
  );
}

export default App;
