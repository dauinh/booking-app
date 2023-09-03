import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
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
            <Link to="properties">Properties</Link>
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
