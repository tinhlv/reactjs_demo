import React from 'react';

class Socials extends React.Component{
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
        <div>
        	<ul>
            <li>
              <a href="#" title>
                <i className="icon-facebook" />
              </a>
            </li>
            <li>
              <a href="#" title>
                <i className="icon-youtube" />
              </a>
            </li>
            <li>
              <a href="#" title>
                <i className="icon-twitter" />
              </a>
            </li>
            <li>
              <a href="#" title>
                <i className="icon-instagram" />
              </a>
            </li>
            <li>
              <span>
                <i className="icon-clock" />&nbsp; Mon - Sat 9am - 7pm,Sun 10am - 6pm
              </span>
            </li>
          </ul>
        </div>
    );
  }
}

export default Socials;