import React, { useEffect, useState } from 'react';
import { Property } from '../types/property.type';
import { getProperty } from '../api/property';
import PropertyCard from '../components/PropertyCard';

const PropertyPage: React.FC = () => {
  const [data, setData] = useState<Property>();

  const fetchData = async () => {
    const guest = await getProperty();
    setData(guest);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <PropertyCard data={data} />
    </>
  );
};

export default PropertyPage;
