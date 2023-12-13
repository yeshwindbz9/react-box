const Shimmer = () => {
  return (
    <div
      className="flex flex-col gap-2 m-1 rounded-md p-1 w-[200px] h-[500px] hover:border hover:border-black hover:cursor-pointer hover:shadow-2xl"
      style={{ backgroundColor: "lightgray" }}
    >
      <div
        className="w-full h-40 rounded-md"
        width="94"
        height="94"
        style={{ backgroundColor: "darkgray" }}
      ></div>
      <h3 style={{ backgroundColor: "darkgray", borderRadius: "9px" }}>
        &nbsp;
      </h3>
      <h4 style={{ backgroundColor: "darkgray", borderRadius: "9px" }}>
        &nbsp;
      </h4>
      <h4 style={{ backgroundColor: "darkgray", borderRadius: "9px" }}>
        &nbsp;
      </h4>
      <h4 style={{ backgroundColor: "darkgray", borderRadius: "9px" }}>
        &nbsp;
      </h4>
    </div>
  );
};

export default Shimmer;
