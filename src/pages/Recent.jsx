import "../components/recent.css";
import { formattedDate } from "../components/formattedDate";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Recent() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function getRecentPost() {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("id", { ascending: false })
        .limit(1)
        .single();

      if (error) {
        console.log(error);
        return;
      }

      setPost(data);
    }

    getRecentPost();
  }, []);


  return (
    <div className="recent-page">

      {post && (
        <div className="recent-post">
          <h2 className="recent-title">{post.title}</h2>

          <h2 className="recent-date">{formattedDate(post.date)}</h2>

          <p className="recent-content">{post.content}</p>

        </div>
      )}

    </div>
  );
}