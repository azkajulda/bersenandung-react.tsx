import React, { useState } from 'react'

interface Props {
  hitungCalori: (
    gender: 'Pria' | 'Wanita' | null ,
    beratBadan: number, 
    tinggiBadan: number, 
    usia: number) => void,
  status: string
}

interface typeForm {
  gender: 'Pria' | 'Wanita' | null,
  beratBadan: number,
  tinggiBadan: number,
  usia: number
}

const ParentComponent: React.FC<Props> = ({hitungCalori, status}) => {
  const [form, setForm] = useState<typeForm>({
    gender: null,
    beratBadan: 0,
    tinggiBadan: 0,
    usia: 0,
  })

  const handleChangeData = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
      setForm({
        ...form,
        [name]: event.target.value
      })  
  }

  const handleClickKalukasi = () => {
    hitungCalori(form.gender, form.beratBadan, form.tinggiBadan, form.usia)
  }

  const radioButton = {
    choices:
      [
        { text: 'Pria', value: 'Pria' },
        { text: 'Wanita', value: 'Wanita' }
      ]
  }

  console.log(form)
  return (
    <div style={{height:'50%'}}>
      <label htmlFor="gender">Gender</label>
      {radioButton?.choices?.map((val, key) => {
        return (
          <div key={key} style={{ display: 'inline' }}>
            <input type="radio" name="gender" value={val.value} onChange={event => handleChangeData(event, 'gender')}/> {val.text}
          </div>
        )
      })}
      <br />
      <label htmlFor="usia">Usia</label>
      <input type="number" className="usia" onChange={event => handleChangeData(event, 'usia')}/><br />
      <label htmlFor="beratBadan">Berat Badan</label>
      <input type="number" className="beratBadan" onChange={event => handleChangeData(event, 'beratBadan')} /><br />
      <label htmlFor="tinggiBadan">Tinggi Badan</label>
      <input type="number" className="tinggiBadan" onChange={event => handleChangeData(event, 'tinggiBadan')}/><br />
      <button onClick={handleClickKalukasi}>Kalkulasi</button><br />
      <p>{status}</p>
    </div>
  )
}

export default ParentComponent