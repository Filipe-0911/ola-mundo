import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkDown from "react-markdown";
import "./Post.css"
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import PostCard from "componentes/PostCard";

export default function Post() {
    const parametros = useParams();
    const post = posts.find(post => post.id === +parametros.id);
    const postsRecomendados = posts.filter(post => post.id !== + parametros.id)
        .sort(post => {
            return post.id > +parametros.id ? -1 : post.id < +parametros.id ? 1 : 0
        })
        .slice(3);
    
    if (!post) return <NaoEncontrada />
    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo
                        fotoCapa={`../../assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkDown>
                                {post.texto}
                            </ReactMarkDown>
                        </div>
                        <div className="div-posts-recomendados">
                            <h2 className="titulo-div-posts-recomendados">Posts recomendados</h2>
                            <div className="posts-recomendados">
                                {postsRecomendados.map((post, index) => <PostCard key={index} post={post} />)}
                            </div>
                        </div>
                    </PostModelo>
                } />
            </Route>
        </Routes>
    );
}