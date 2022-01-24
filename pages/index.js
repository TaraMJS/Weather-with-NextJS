import Layout from "../components/Layout";
import Heading from "../components/typography/Heading";
import Link from "next/link";

export default function Home() {
return (
    <Layout>
      <div className="container">
        <Heading size="2" content="Home" style="soft-blue" />
        <button className="button shadow">
          <Link href="/results">
            <a className="button-link">Check weather forecast in Barcelona, Spain!</a>
          </Link>
        </button>
      </div>
    </Layout>
  );
}