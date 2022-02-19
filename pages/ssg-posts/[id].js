import { useRouter } from "next/router";

export async function getStaticPaths() {
  let res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  let data = await res.json();
  let paths = data.map((p) => ({
    params: {
      id: p.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  let res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.id}`
  );
  let data = await res.json();
  return { props: { data } };
}

export default function Post(props) {
  const { data } = props;
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;
  return (
    <div className="bg-red-50 p-8  w-screen h-screen flex items-center justify-center">
      <div className="bg-gray-50 relative   rounded shadow-md  flex items-center justify-center flex-col">
        <span className="absolute bottom-5 right-5 opacity-25 rounded-full w-[50px] h-[50px] flex items-center justify-center bg-red-200 border-2 border-pink-500 text-pink-500 text-bold text-[35px]">
          {data?.id}
        </span>
        <h1 className="font-bold p-5 text-center text-[30px] mt-9 text-pink-500">
          {data?.title}
        </h1>
        <p className="p-14 text-center">{data?.body}</p>
      </div>
    </div>
  );
}
