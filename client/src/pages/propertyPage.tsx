import React, { useEffect, useState } from 'react';
import { Property } from '../types/property.type';
import { HttpGet } from '../api';
import PropertyCard from '../components/PropertyCard';

const PropertyPage: React.FC = () => {
  const [data, setData] = useState<Property[]>();

  const fetchData = async () => {
    const properties = await HttpGet('/host/properties');
    setData(properties);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {data && data.map((property) => (
        <PropertyCard key={property.id} data={property} />
      ))}
    </>
  );
};

export default PropertyPage;
