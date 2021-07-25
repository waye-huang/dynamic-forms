import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import Element from './Element';
import { FormContext } from './FormContext';
import formJSON from '../formJSON.json'

export default function FormGeneral(props) {
  const [elements, setElements] = useState(null);
  const { fields, form_name } = elements ?? {}

  useEffect(() => {
    setElements(formJSON[props.index])
    console.log('Loading ', formJSON[props.index]['form_name']);
  }, [props])

  const handleSubmit = (event) => {
    event.preventDefault();
    HandleToggle();
    console.log(elements);
    submitData(elements);
  }

  const handleChange = (id, event) => {
    const newElements = { ...elements }
    newElements.fields.forEach(field => {
      const { field_type, field_id } = field;
      if (id === field_id) {
        switch (field_type) {
          case 'checkbox':
            field['field_value'] = event.target.checked;
            break;

          default:
            field['field_value'] = event.target.value;
            break;
        }
      }
      setElements(newElements)
    });
  }

  const [printing, setPrinting] = useState(false);
  const HandleToggle = () => {
    printing ? setPrinting(false) : setPrinting(true);
  }
  return (
    <div>
      <FormContext.Provider value={{ handleChange }}>
        {/* <Header2 /> */}
        <div className="App container w-50">
          <h2 style={{ marginTop: 50 }}>{form_name}</h2>
          <form style={{ marginTop: 50 }}>
            {fields ? fields.map((field, i) => <Element key={i} field={field} />) : null}
          </form>
          <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
        </div>

      </FormContext.Provider>
    </div>
  )
}
