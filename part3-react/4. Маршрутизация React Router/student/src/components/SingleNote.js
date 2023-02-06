import { useParams } from "react-router-dom";

const SingelNote = () => {
  const { id } = useParams();

  return <div>SingelNote {id}</div>;
};

export default SingelNote;
