import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex h-screen justify-center content-center text-center items-center">
      <div className="space-y-3.5">
        <h1>404</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link className="btn btn-primary" href="/">
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
