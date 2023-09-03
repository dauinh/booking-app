import styled from 'styled-components';
import { Property } from '../types/property.type';

type Props = {
  data: Property;
};

const CardWrapper = styled.div`
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Detail = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const PropertyCard = ({ data }: Props) => {
  return (
    <CardWrapper>
      <Title>{data.name}</Title>
      <Detail>Address: {data.address}</Detail>
    </CardWrapper>
  );
};

export default PropertyCard;
