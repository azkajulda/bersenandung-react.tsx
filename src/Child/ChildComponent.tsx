import React from 'react'

interface Props {
  hasilKalori: string | null,
  nama?: string | null
}


const ChildComponent: React.FC<Props> = ({
  hasilKalori,
  nama
}) => {
  return (
    <div style={{ borderStyle: 'dotted' }}>
      <p>Hasil Perhitungan Kalori</p>
      <p>{hasilKalori ?? `Maaf ${nama ?? 'Anda'} Belum Menghutung Kalori`}</p>
      <h3>Container Child</h3>
    </div>
  )
}

export default ChildComponent