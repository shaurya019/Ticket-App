const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color;
    if (status) {
      switch (status.toLowerCase()) {
        case "done":
          color = "bg-green-200";
          return color;

        case "started":
          color = "bg-yellow-200";
          return color;

        case "not started":
          color = "bg-red-200";
          return color;
        default:
          color = "bg-slate-700";
      }
    } else {
      color = "bg-slate-700"; // Default color if status is undefined
    }
    return color;
  };
  return (
    <span
      className={`inline-block  rounded-full px-2 py-1 text-xs font-semibold text-gray-700 bg-green-200`}>
      Done
    </span>
  );
};

export default StatusDisplay;

    // ${getColor(
      //   status
      // )}`}
      // {status}