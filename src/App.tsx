import React, { useState } from 'react'
import Parent from './Parent/ParentComponent'
import Child from './Child/ChildComponent'

const InputComponent: React.FC = () => {
  const [nama, setNama] = useState<string | null>(null)
  const [kalori, setKalori] = useState<string | null>(null)
  
  const hitungCalori = (gender: 'Pria' | 'Wanita' | null, beratBadan: number, tinggiBadan: number, usia: number) => {
    let hasil = 0
    if(gender === 'Pria'){
      hasil = 66 + (13.7 * beratBadan) + (5 * tinggiBadan) - (6.8 * usia)
    } else if (gender === 'Wanita'){
      hasil = 65.5 + (9.6 * beratBadan) + (1.8 * tinggiBadan) - (4.7 * usia)
    }
    setKalori(`${hasil} calories`)
    // return hasil
  }

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNama(event.target.value)
  }

  return (
    <div style={{ width: '100%', height: '100%', textAlign: 'center' }}>
      <label htmlFor="nama">Nama</label>
      <input type="text" className="nama" onChange={event => handleChangeName(event)}/><br />
      <Parent hitungCalori={hitungCalori} status="single"/><br/>
      <Child hasilKalori={kalori} nama={nama}/>
    </div>
  )
}

export default InputComponent