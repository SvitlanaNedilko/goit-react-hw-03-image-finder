import React from 'react'
import './imageGalleryItem.scss'

export default function ImageGalleryItem({ pictures, click }) {
  return pictures.map(({ id, tags, webformatURL }) => (
    <li key={id} className="ImageGalleryItem">
      <img
        onClick={() => click(webformatURL, tags)}
        src={webformatURL}
        width="800"
        height="600"
        alt={tags}
        className="ImageGalleryItem-image"
      />
    </li>
  ))
}
