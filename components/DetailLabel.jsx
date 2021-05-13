const DetailLabel = ({ label, value }) => {
  return (
    <p className="font-semibold pb-2">
      {label} <span className="font-light">{value}</span>
    </p>
  );
};

export default DetailLabel;
