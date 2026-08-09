import { formattedDate } from "./formattedDate";
import "./blogpost.css";
import icon from "../assets/icon.svg";

export default function BlogPost({ post }) {
  return (
   
    <div className="blog-post" 
    id={`post-${post.id}`}>
     
      

      <img 
        src={icon}
        className="icon" 
        alt="" 
      />



      <div className="post-info">
      <p className="blogtitle">
          {post.title}
      </p>


        <h3 className="date">
          {formattedDate(post.date)}
        </h3>

        <p className="content">
          {post.content}
        </p>
      </div>

    </div>
  );
}