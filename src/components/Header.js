import { Fragment } from 'react/cjs/react.production.min';
import '../index.css';

const Header = () => {
  return (
    <Fragment>
      {/* <nav className='navigation'>
        <a><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" /></a> 
        <ul>
          <li>Home</li>
          <li>Bookmark</li>
        </ul>
      </nav> */}
      <main>
        <div className='header'>
          <h2>Search Repository</h2>
        </div>
      </main>
    </Fragment>
  )
};

export default Header;