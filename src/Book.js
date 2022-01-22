import React from 'react';
import './index.css'

function Book(props) {
  return <div className='book'>
        <img src={props.img} />
        <p>{props.title}</p>
        <p>{props.author}</p>
  </div>;
}

export default Book;
