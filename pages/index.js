import Head from "next/head";
import Link from "next/link";

export async function getServerSideProps() {
  let res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  let data = await res.json();
  return { props: { data } };
}
export default function Home() {
  return (
    <div className="bg-red-300 h-screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="leading-7 font-bold text-[40px] py-10">
          examples for types of pages in next js
        </h1>
        <ul className="flex h-1/2 items-center justify-center">
          <li className="hover:text-pink-500 text-center">
            <Link href="/ssr-posts">
              <a className="flex items-center mb-3">
                <span className="rounded-full w-[150px] h-[150px] flex items-center justify-center bg-red-200 border-2 border-pink-500 text-pink-500 text-bold text-[15px] mr-5">
                  SSR
                </span>
              </a>
            </Link>
          </li>
          <li className="hover:text-pink-500 text-center">
            <Link href="/ssg-posts">
              <a className="flex items-center mb-3">
                <span className="rounded-full w-[150px] h-[150px] flex items-center justify-center bg-red-200 border-2 border-pink-500 text-pink-500 text-bold text-[15px] mr-5">
                  SSg
                </span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
