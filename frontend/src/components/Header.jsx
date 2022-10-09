//rfc => TAB
//functional component statefull yoktur.
//function props this yazmıyoruz.
//functional component props vardır.
//functional component Render yoktur
//en tepede 1 tane div olmak zorundadır.

import React from 'react'

export default function Header(props) {
  return (
      // React.Fragment ister <></> yazabilirsin
    <React.Fragment>
      <header>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
          <div className="container">
            <a className="navbar-brand" href={props.url}>
              <i className={props.icon}></i>
            </a>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="#">{props.homepage} <span className="visually-hidden">(current)</span></a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">{props.contact}</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">{props.aboutme}</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">{props.otherprops}</a>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <a className="dropdown-item" href="#">Action 1</a>
                    <a className="dropdown-item" href="#">Action 2</a>
                  </div>
                </li>

              </ul>
            </div>
          </div>

        </nav>
      </header>
    </React.Fragment>
  )
}//end class

//Header.defaultProps: props default türü
//default class adıyla aynı olmalıdır. 
Header.defaultProps = {
  content: "blog projet",
  icon: "fa-brands fa-slack",
  homepage: "Ana Sayfa",
  aboutme: "Hakkımızda",
  contact: "İletişim",
}


//Header.propTypes: props türü
/*
Header.propTypes = {
  homepage: PropTypes.string.isRequired
};
*/