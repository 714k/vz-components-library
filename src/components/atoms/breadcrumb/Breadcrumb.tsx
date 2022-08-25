import React from 'react'

function Breadcrumb({links}) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb" data-testid="breadcrumb">
      <ol>
        {links.map((current, href, text) => {
          return (
            <li>
              <a href={href} ariaCurrent={current}>{text}</a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}