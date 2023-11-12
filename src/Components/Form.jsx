import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";



const Form = () => {

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "inputChange":
        return { ...state, [action.field]: action.value };
      case "submitForm":
        return { ...state, submittedData: { ...state } };
      default:
        return state;
    }
  }, {
    name: "",
    email: "",
    age: "",
    gender: "",
    submittedData: null,
  }
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "inputChange", field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "submitForm" });
  };

  return (
    <div className="bg-secondary" style={{ height: "615px" }}>
      <div className="row">
        <div className="col-md-6" style={{ padding: "50px" }}>
          <form onSubmit={handleSubmit}>
            <h2 className="m-4 pt-4">Arslans Form</h2>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={state.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={state.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                Age:
              </label>
              <input
                type="number"
                className="form-control"
                id="age"
                name="age"
                value={state.age}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Gender:</label>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="male"
                  name="gender"
                  value="male"
                  checked={state.gender === "male"}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="female"
                  name="gender"
                  value="female"
                  checked={state.gender === "female"}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
            </div>

            <div className="pb-4">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-6 " style={{ padding: "150px" }}>
          {state.submittedData && (
            <div className="mt-3">
              <h3>Submitted Data:</h3>
              <p>Name: {state.submittedData.name}</p>
              <p>Email: {state.submittedData.email}</p>
              <p>Age: {state.submittedData.age}</p>
              <p>Gender: {state.submittedData.gender}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
