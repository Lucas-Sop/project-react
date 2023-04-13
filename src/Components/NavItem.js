import React from 'react';

function NavItem(props) {
  return (
    <li>
      <a className={props.className} href={props.href}>
        {props.children}
      </a>
    </li>
  );
}

export default NavItem;

