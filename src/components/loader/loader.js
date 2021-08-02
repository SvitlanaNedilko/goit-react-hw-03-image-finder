import React from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Spinner from 'react-loader-spinner'

export default function Loader() {
  return (
    <>
      <h1>Загружаем....</h1>
      <Spinner
        type="Puff"
        color="#00BFFF"
        height={50}
        width={50}
        timeout={5000}
      />
    </>
  )
}
