import Head from "next/head";
import Link from "next/link";

export async function getServerSideProps() {
  let res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  let data = await res.json();
  return { props: { data } };
}
export default function Ssr({ data }) {
  return (
    <div className="bg-red-100">
      <Head>
        <title>ssr posts</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="flex flex-col justify-center items-center">
        <h1 className="leading-7 font-bold text-[40px] py-10">SSR page example : post list</h1>
        <ul>
          {data?.map((p) => (
            <li className="hover:text-pink-500 text-center">
              <Link href="/ssr-posts/[id]" as={`/ssr-posts/${p.id}`}>
                <a className="flex"><span className="mr-4 bg-white rounded-full h-8 w-8 mb-3">{p?.id}</span>{p?.title}</a>
              </Link> 
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}