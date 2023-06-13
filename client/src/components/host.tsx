import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

const HostPage: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/hosts')
      .then(response => {
        const responseData = response.data;
        setData(responseData);
      })
      .catch(error => {
        console.error(error);
        // Handle the error case
      });
  }, []);

  return (
    <div>
      {/* Display the received data */}
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );

  // return (
  //   <Header>
  //     <Nav>
  //       <ul>
  //         <li>
  //           <a href="/">Home</a>
  //         </li>
  //         <li>
  //           <a href="/properties">Properties</a>
  //         </li>
  //         <li>
  //           <a href="/bookings">Bookings</a>
  //         </li>
  //       </ul>
  //     </Nav>
  //   </Header>
  // );
};

export default HostPage;