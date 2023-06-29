import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getHostProfile } from "../api/profile";
import { Host } from "../types/host.type";


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
};

export default HostPage;
