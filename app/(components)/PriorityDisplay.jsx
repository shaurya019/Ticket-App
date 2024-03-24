
const PriorityDisplay = ({ priority }) => {
  return (
    <div className="flex justify-start align-baseline">
       <div className={` pr-1 ${
          priority > 0 ? " text-red-400" : " text-slate-400"
        }`}>Zero</div>
      <div className={` pr-1 ${
          priority > 1 ? " text-red-400" : " text-slate-400"
        }`}>One</div>
       <div className={` pr-1 ${
          priority > 2 ? " text-red-400" : " text-slate-400"
        }`}>Two</div>
      <div className={` pr-1 ${
          priority > 3 ? " text-red-400" : " text-slate-400"
        }`}>Three</div><div className={` pr-1 ${
          priority > 4 ? " text-red-400" : " text-slate-400"
        }`}>Four</div>
    </div>
  );
};

export default PriorityDisplay;