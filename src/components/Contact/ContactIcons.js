import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const ContactIcons = (props) => {
  let icons = data;
  if (props.discardEmail) {
    icons = [];
    data.forEach((s) => {
      if (s.label !== 'Email') {
        icons.push(s);
      }
    });
  }
  return (
    <ul className="icons">
      {icons.map((s) => (
        <li key={s.label}>
          <a href={s.link}>
            <FontAwesomeIcon icon={s.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};

ContactIcons.propTypes = {
  discardEmail: PropTypes.bool,
};

ContactIcons.defaultProps = {
  discardEmail: false,
};
export default ContactIcons;
