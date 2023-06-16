import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllHosts } from '../api/hostRoutes';

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

const HostPage: React.FC = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
      const hosts = await getAllHosts();
      setData(hosts);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {data.map(host => (
          <listItem key={host.id}>{host.name}</listItem>
        ))}
      </ul>
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