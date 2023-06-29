import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getHostProfile } from "../api/profile";
import { Host } from "../types/host.type";

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
  const [data, setData] = useState<Host>();

  const fetchData = async () => {
    const host = await getHostProfile();
    setData(host);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p>{JSON.stringify(data, null, 2)}</p>
    </div>
  );
  // return (
  //   <div>
  //     {data.map((host) => (
  //       <HostCard key={host.id} data={host} />
  //     ))}
  //   </div>
  // );

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
