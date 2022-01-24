import Link from "next/link";
import Head from "./Head";

export default function Layout({ children }) {
  return (
    <>
      <Head />
      <nav className="nav shadow">
        <Link href="/">
          <a className="nav-link">Home</a>
        </Link>
        <Link href="/results">
          <a className="nav-link">Results</a>
        </Link>
      </nav>
      <div className="container">{children}</div>
    </>
  );
}