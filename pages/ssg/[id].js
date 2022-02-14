import React from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

// export async function getStaticPaths() {
//   const { data } = await axios.get(`http://localhost:5000/ssg`);

//   const paths = data.map((info) => {
//     return {
//       params: {
//         id: info.id.toString(),
//       },
//     };
//   });
//   return {
//     paths,
//     fallback: true, // false or 'blocking'
//   };
// }

// export async function getStaticProps(context) {
//   const params = context.params.id;
//   const { data: blog } = await axios.get(`http://localhost:5000/ssg/${params}`);

//   return {
//     props: { blog },
//   };
// }

function blogDetails({}) {
  // console.log("blog", blog);
  return (
    <div>
      {/* <Link href="/ssg">
        <a>back</a>
      </Link>
      <div className="text-center mt-20 ">
        <Image
          src={blog.img}
          height={400}
          width={800}
          className="rounded-lg shadow-md"
        />
      </div>
      <section className="text-center">
        <h1 className="text-2xl">{blog.title}</h1>
        <p>{blog.text}</p>
      </section> */}
    </div>
  );
}

export default blogDetails;
