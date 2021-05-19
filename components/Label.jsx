const Label = ({ testId, label, value, isDetail }) => {
  if (!value || value === "0") return null;

  if (isDetail) {
    return (
      <p data-testid={testId} className="font-semibold pb-2">
        {label} <span className="font-light">{value}</span>
      </p>
    );
  }

  return (
    <p data-testid={testId}>
      <span className="font-semibold">{label}</span>
      {value}
    </p>
  );
};

export default Label;
