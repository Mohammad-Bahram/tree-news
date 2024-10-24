import Image from "next/image";

const SecondAd = () => {
  return (
    <div className="w-[91.5972222%] h-fit mx-auto bg-orange-500">
      <Image
        src={"/images/airplane.png"}
        width={1319}
        className="w-full object-cover"
        height={82}
        alt="advertisment"
      />
    </div>
  );
};
export default SecondAd;
