import "./admin.css";
import "./blogpost.css";
import { formattedDate } from "./formattedDate";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function Admin({ closeModal}) {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");

    
    useEffect(() => {
        async function getPosts() {
            const { data, error } = await supabase
                .from("posts")
                .select("id, title, date")
                .order("date", { ascending: false })
                .order("id", { ascending: false });
    
            if (error) {
                console.log(error);
            } else {
                setPosts(data);
            }
        }
    
        getPosts();
    }, []);

    const filteredPosts = posts.filter((post) => {
        const formatted = formattedDate(post.date).toLowerCase();
    
        return (
            post.title.toLowerCase().includes(search.toLowerCase()) ||
            formatted.includes(search.toLowerCase())
        );
    });

    function jumpToPost(id) {

        closeModal();
    
        setTimeout(() => {
            document
                .getElementById(`post-${id}`)
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
    
        }, 200);
    }
    console.log(filteredPosts);
    return (
        <div className="overlay">
            <div className="admin-modal">

                <h2 className="admin-modal-title">index</h2>

                <input
                    className="search"
                    type="text"
                    placeholder="search posts!"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <div className="post-index">
                    {filteredPosts.length === 0 ? (
                        <p>no posts found :c </p>
                    ) : (
                        filteredPosts.map((post) => (
                            <button
                                key={post.id}
                                className="post-item"
                                onClick={() => jumpToPost(post.id)}
                            >
                                {formattedDate(post.date)}: {post.title}
                            </button>
                        ))
                    )}
                </div>

                <button className="cancel" onClick={closeModal}>
                    close
                </button>

            </div>
        </div>
    );
}

export default Admin;