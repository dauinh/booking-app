import { Host } from '../types/host.type';

type Props = {
  data: Host;
};

const HostCard = ({ data }: Props) => {
  return (
    <div key={data.id}>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
      <p>{data.phone}</p>
      <p>{data.address}</p>
    </div>
  );
};

export default HostCard;
