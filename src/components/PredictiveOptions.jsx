const PredictiveOptions = ({ data }) => {
  return (
    <>
      {data.map((location) => {
        <div
          id={location.id}
          className="border-2 bg-neutral-200 rounded p-2 text-lg"
        >
          {location.name}, {location.region}, {location.country}
        </div>;
      })}
    </>
  );
};

export default PredictiveOptions;
