import { useReducer } from "react";

const AddressItem = ({ address, setAddresses }) => {
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "setIsEditing":
        return { ...state, isEditing: action.payLoad };
      case "setEditCity":
        return { ...state, editCity: action.payload };
      case "setEditName":
        return { ...state, editName: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    isEditing: false,
    editCity: address.city,
    editName: address.name,
  });

  const saveHandler = (id) => {
    dispatch({ type: "setIsEditing", payLoad: false });
    setAddresses((prevAdd) =>
      prevAdd.map((address) => {
        if (address.id === id) {
          return { id: address.id, name: state.editName, city: state.editCity };
        } else {
          return address;
        }
      })
    );
  };

  return (
    <div>
      {state.isEditing && (
        <div>
          <input
            type="text"
            placeholder="name"
            value={state.editName}
            onChange={(e) => {
              dispatch({ type: "setEditName", payload: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="city"
            value={state.editCity}
            onChange={(e) => {
              dispatch({ type: "setEditCity", payload: e.target.value });
            }}
          />
          <button onClick={() => saveHandler(address.id)}>Save</button>
        </div>
      )}
      {!state.isEditing && (
        <div>
          <h2>{address.name}</h2>
          <h2>{address.city}</h2>
          <button
            onClick={() => {
              dispatch({ type: "setIsEditing", payLoad: true });
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
