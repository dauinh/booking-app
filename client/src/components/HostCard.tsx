
type Props = {
    data: {
        id: string
        email: string
        name: string
    }
}

const HostCard = ({ data }: Props) => {
  return (
    <div key={data.id}>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
    </div>
  );
};

export default HostCard;
