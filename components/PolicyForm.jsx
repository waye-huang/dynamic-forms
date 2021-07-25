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

  const submitData = async (data) => {
    const inners = [...data.fields];
    const submitted = true;
    const companyName = inners[0].field_value;
    const email = inners[1].field_value;
    const companyWebsite = inners[2].field_value;
    const yearsInBusiness = inners[3].field_value;
    const principalOperation = inners[4].field_value;
    const contractorsLicense = inners[5].field_value;
    const federalTaxIdNumber = inners[6].field_value;

    try {
      const body = {
        submitted,
        companyName, email, companyWebsite, yearsInBusiness, principalOperation, contractorsLicense, federalTaxIdNumber,
      }
      await fetch(`http://localhost:3000/api/post`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      // await Router.push('/drafts') // printing
    } catch (error) {
      console.error(error)
    }
  }



  return (
    <div>
      <FormContext.Provider value={{ handleChange }}>
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
