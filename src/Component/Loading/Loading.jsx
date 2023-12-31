import { BounceLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <BounceLoader color="#fc006a" />
    </div>
  );
};

export default Loading;
