import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Error</h1>
      <h1>{err.status}</h1>
      <h1>{err.statusText}</h1>
    </div>
  );
};

export default Error;
