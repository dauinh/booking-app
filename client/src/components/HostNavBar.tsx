import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #f1f1f1;
  padding: 10px;
`;

const Nav = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
  }

  li {
    margin-right: 10px;
  }

  a {
    color: #333;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const listItem = styled.li`
  color: black;
`;

const HostNavBar: React.FC = () => {
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="profile">Profile</Link>
          </li>
          <li>
            <Link to="property">Properties</Link>
          </li>
          {/* <li>
            <a href="/bookings">Bookings</a>
          </li> */}
        </ul>
      </Nav>
    </Header>
  );
};

export default HostNavBar;
