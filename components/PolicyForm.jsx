import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import Element from './Element';
import { FormContext } from './FormContext';
import formJSON from '../formJSON.json'

export default function FormGeneral(props) {
  const [elements, setElements] = useState(null);
  const [formType, setFormType] = useState('');
  const { fields, form_name } = elements ?? {}

  useEffect(() => {
    setElements(formJSON[props.index])
    console.log('Loading ', formJSON[props.index]['form_name']);
  }, [props])


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

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(`elements ==> ${elements}`);
    console.log('form_values vvv');
    console.log(elements);
    setFormType(elements['form_name']);
    submitData();
  }


  // storing document.cookie from browser

  const cookies = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((ac, [key, value]) => ({ ...ac, [key.trim()]: decodeURIComponent(value) }), {});
  const authCookie = 'auth' in cookies ? cookies['auth'] : '';
  // const userName = localStorage.getItem('user');
  const additionalSubmitInputs = {
    isDraft: false,
    submitted: true,
    formType: formType,
    // user: userName,
    // userId: 1,
  }


  const submitData = async () => {

    const formMetadata = fields.reduce((ac, { field_id, field_type, field_value }) => {
      let value;
      if (typeof field_value === 'boolean') {
        value = field_value;
      } else if (typeof field_value === 'number' && field_type === 'text') {
        value = String(field_value);
      } else if (!isNaN(Number(field_value))) {
        value = parseInt(field_value);
      } else {
        value = field_value
      }
      return ({ ...ac, [field_id]: value })
    }, {});



    // convert values using appropriate converter function


    try {
      const body = { formMetadata, authCookie, ...additionalSubmitInputs };

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
