import axios from "axios";
import React from "react";
import BlogList from "../../components/blog_list/BlogList";

// export async function getStaticProps() {
//   const { data: blogs } = await axios.get(`http://localhost:5000/ssg`);
//   return {
//     props: {
//       blogs,
//     },
//   };
// }

export default function index({ blogs }) {
  console.log("blogs", blogs);
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:basis-3/4">{/* <BlogList blogs={blogs} /> */}</div>
      <div className="lg:basis-1/4">2</div>
    </div>
  );
}
