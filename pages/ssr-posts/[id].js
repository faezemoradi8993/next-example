import React from "react";

export async function getServerSideProps(context) {
  let res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.query?.id}`
  );
  let data = await res.json();
  return { props: { data } };
}

export default function Post(props) {
  const { data } = props;
  return (
    <div className="bg-red-100  w-screen h-screen flex items-center justify-center">
      <div className="bg-gray-50 relative p-5  rounded shadow-md h-72 w-2/3 flex items-center justify-center flex-col">
        <span className="absolute bottom-5 right-5 opacity-25 rounded-full w-[150px] h-[150px] flex items-center justify-center bg-red-200 border-2 border-pink-500 text-pink-500 text-bold text-[45px] mr-5">
          {data?.id}
        </span>

        <h1 className="font-bold text-[30px] mb-8">{data?.title}</h1>
        <p className="">{data?.body}</p>
      </div>
    </div>
  );
}
