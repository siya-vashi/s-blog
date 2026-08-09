import { useEffect, useState } from "react";
import BlogPost from "./BlogPost";
import { supabase } from "../lib/supabase";
import "./blogsection.css";

function BlogSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("date", { ascending: false })
        .order("id", { ascending: false });
  
      console.log("data:", data);
      console.log("error:", error);
  
      if (error) {
        console.log(error);
      } else {
        setPosts(data);
      }
    }
  
    getPosts();
  }, []);

  return (
    <section className="blog-section">
      {posts.map((post) => (
        <BlogPost
          key={post.id}
          post={post}
        />
      ))}
    </section>
  );
}

export default BlogSection;