import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/Home.module.css'
import Header2 from '../components/Header2'
import { useState } from 'react'
import PolicyForm from '../components/PolicyForm';

export default function Drafts() {

  const [index, setIndex] = useState(1);
  const [formOn, setFormOn] = useState(false);
  const handleGeneral = () => {
    // setForm(formGeneral);
    setIndex(0)
    setFormOn(true);
  }
  const handleUmbrella = () => {
    // setForm(formUmbrella);
    setIndex(1)
    setFormOn(true);
  }

  return (
    <div >
      <div className="page">
        <Header2 />
        <div >
        </div>
        {!formOn && (
          <div>
            <h1 className={styles.subtitle} style={{ marginLeft: 180 }}>Select Policy</h1>
            <div className={styles.grid}>
              <a className={styles.card} onClick={handleGeneral} >
                <h2>General Liability Insurance</h2>
                <p>Damages, MED, ADV Injury</p>
              </a>
              <a className={styles.card} onClick={handleUmbrella}>
                <h2>Umberrla Policy</h2>
                <p>Coverage for small business needs.</p>
              </a>
            </div>
          </div>
        )}
        {formOn && (
          <div className={styles.grid}>
            <a className={styles.subtitle} onClick={handleGeneral} >
              <p>General</p>
            </a>
            <a className={styles.subtitle} onClick={handleUmbrella}>
              <p>Umberrla</p>
            </a>
          </div>
        )}
        {formOn && (
          <PolicyForm index={index} />
        )}
      </div>
    </div>

  )
}


