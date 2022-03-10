import { useState } from "react";

const AddressItem = ({ address }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editCity, setEditCity] = useState(address.city);
  const [editName, setEditName] = useState(address.name);

  const saveHandler = (id) => {
    console.log(id);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing && (
        <div>
          <input
            type="text"
            placeholder="name"
            value={editName}
            onChange={(e) => {
              setEditName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="city"
            value={editCity}
            onChange={(e) => {
              setEditCity(e.target.value);
            }}
          />
          <button onClick={() => saveHandler(address.id)}>Save</button>
        </div>
      )}
      {!isEditing && (
        <div>
          <h2>{address.name}</h2>
          <h2>{address.city}</h2>
          <button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Edit
          </button>
          <button>Delete</button>
        </div>
      )}
    </div>
  );
};

export default AddressItem;
