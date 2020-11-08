import React, { useState } from "react";
import App from "./App";

export default function AddEditPerson(props) {
  const [person, setPerson] = useState({ ...props.newPerson });

  /* Add the required changes to use Reacts "Controlled Component Pattern" 
     to handle inputs related to a person */

  const updatePerson = (person) => {
    setPerson(props.personToAddEdit);
    props.apiFacade.addEditPerson(person);
  };

  function handleChange(event) {
    const value = event.target.value;
    setPerson({
      ...person,
      [event.target.id]: value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (person.id) {
      updatePerson(person);
      props.apiFacade.getPersons(props.setPersons);
    } else {
      props.addEditPerson(person);
      props.apiFacade.getPersons(props.setPersons);
    }
  };

  return (
    <div>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="control-label col-sm-3">Id:</label>
          <div className="col-sm-9">
            <input className="form-control" readOnly id="id" />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="name">
            Name:
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              id="name"
              placeholder="Enter Name"
              value={person.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="age">
            Age:
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              id="age"
              placeholder="Enter age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="email">
            Email:
          </label>
          <div className="col-sm-9">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="pwd">
            Gender:
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              id="gender"
              placeholder="Enter Gender"
              value={person.gender}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-9">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
      <p>Please provide me with the ability to create new persons</p>
      <p>And update the backend when submitted</p>
    </div>
  );
}
