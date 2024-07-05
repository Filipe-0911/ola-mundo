import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkDown from "react-markdown";
import "./Post.css"

export default function Post() {
    const parametros = useParams();
    const post = posts.find(post => post.id === +parametros.id);
    return (
        <PostModelo
            fotoCapa={`../../assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >
            <div className="post-markdown-container">
                <ReactMarkDown>
                    {post.texto}
                </ReactMarkDown>
            </div>
        </PostModelo>
    );
}