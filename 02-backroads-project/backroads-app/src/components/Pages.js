import { pageLinks } from "./data";

import React from 'react'

const Pages = ({parentClass, itemClass}) => {
  return (
    <ul className={parentClass} id="nav-links">
    {pageLinks.map(({ id, href, text }) => {  
      return (
        <li key={id}>
          <a href={href} className={itemClass}>
            {text}
          </a>
        </li>
      );
    })}
  </ul>
  )
}

export default Pages