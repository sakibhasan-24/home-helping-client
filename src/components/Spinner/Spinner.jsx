import { TailSpin } from "react-loader-spinner";

export default function Spinner() {
  return (
    <div className="flex items-center justify-center">
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
