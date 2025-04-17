import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen border flex flex-col justify-center items-center gap-2">
      <h1 className="text-8xl font-semibold">404</h1>
      <h2 className="text-3xl">Page Not Found</h2>
      <p className="">Opps! We can't find the page you were looking for</p>
      <Link className="bg-blue-950 text-white font-semibold py-2 px-8" to="/">Go to home page</Link>
    </div>
  )
}

export default NotFound;