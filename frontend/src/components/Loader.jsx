import { PacmanLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="loader">
      <PacmanLoader color="#343A49" speedMultiplier={1} />
    </div>
  );
};

export default Loader;
