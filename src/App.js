import { useState } from "react";
import uuid from "react-uuid";
import AddressItem from "./AddressItem";

const App = () => {
  const [addresses, setAddresses] = useState([
    { id: uuid(), name: "sudhanshu soni", city: "bhilai" },
    { id: uuid(), name: "Pravesh vyas", city: "bhilai" },
  ]);
  const [showNewAddInput, setShowNewAddInput] = useState(false);

  const addNewAddress = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const city = e.target.city.value;
    setAddresses((prevAdd) => [
      ...prevAdd,
      { id: uuid(), name: name, city: city },
    ]);
  };

  return (
    <div className="App">
      {addresses.map((address) => (
        <li key={address.id}>
          <AddressItem
            address={address}
            setAddresses={setAddresses}
          ></AddressItem>
          ;
        </li>
      ))}

      {!showNewAddInput && (
        <button onClick={() => setShowNewAddInput(true)}>
          Add new Address
        </button>
      )}
      {showNewAddInput && (
        <div>
          <form action="" onSubmit={addNewAddress}>
            <input type="text" placeholder="Enter your name" name="name" />
            <input type="text" placeholder="Enter city name" name="city" />
            <button type="submit">Save</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
