'use client';

import { useState, useEffect } from 'react';
import { IPost, IComment, ILike } from "@/interfaces";
import moment from "moment";
import 'moment/locale/pt-br';
import { useComments } from '@/hooks/useComments';
import { useLikes } from '@/hooks/useLikes';
import Comment from './Comment';
import { FaPaperPlane, FaRegComment, FaThumbsUp, FaShareAlt, FaFlag, FaEllipsisV } from "react-icons/fa";

interface PostProps {
  post: IPost;
}

function Post({ post }: PostProps) {
  const { id, profilePicture, author, description, image, video, file, createdPost } = post || {};
  const [comments, setComments] = useState<IComment[]>([]);
  const [likes, setLikes] = useState<ILike[]>([]);
  const [liked, setLiked] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [showComments, setShowComments] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { getComments } = useComments();
  const { getLikes, toggleLike } = useLikes();

  useEffect(() => {
    const fetchComments = async () => {
      if (id) {
        try {
          const postComments = await getComments(id);
          setComments((prevComments) => {
            // Só atualiza se os comentários forem diferentes
            if (JSON.stringify(prevComments) !== JSON.stringify(postComments)) {
              return postComments;
            }
            return prevComments;
          });
        } catch (error) {
          console.error('Error fetching comments:', error);
        }
      }
    };
  
    const fetchLikes = async () => {
      if (id) {
        try {
          const postLikes: ILike[] = await getLikes(id);
          setLikes((prevLikes) => {
            // Só atualiza se os likes forem diferentes
            if (JSON.stringify(prevLikes) !== JSON.stringify(postLikes)) {
              return postLikes;
            }
            return prevLikes;
          });
          setLiked(postLikes.some((like: ILike) => like.likeUserId === String(id)));
        } catch (error) {
          console.error('Error fetching likes:', error);
        }
      }
    };
  
    // Invocar as funções apenas uma vez, quando o post id mudar
    fetchComments();
    fetchLikes();
  }, [id, getComments, getLikes]); // Apenas 'id', 'getComments', e 'getLikes' como dependências  

  const handleLike = async () => {
    if (id) {
      try {
        await toggleLike(id, liked);
        setLiked(!liked);
        setLikes((prevLikes: ILike[]) => {
          if (liked) {
            return prevLikes.filter(like => like.likeUserId !== String(id));
          } else {
            const newLike: ILike = {
              id: Math.floor(Math.random() * 1000000),
              userName: "Você",
              likeUserId: String(id),
              postId: id
            };
            return [...prevLikes, newLike];
          }
        });
      } catch (error) {
        console.error('Error toggling like:', error);
      }
    }
  };

  const handleComment = async () => {
    if (id && commentText) {
      try {
        const newComment: IComment = {
          id: Math.floor(Math.random() * 1000000),
          commentContent: commentText,
          userName: "Você",
          userImg: "path/to/user/image",
          commentUserId: 1,
          postId: id,
          createdComment: new Date().toISOString()
        };
        
        setComments(prevComments => [...prevComments, newComment]);
        setCommentText('');
      } catch (error) {
        console.error('Error posting comment:', error);
      }
    }
  };

  const handleShare = () => {
    const postUrl = `${window.location.origin}/post/${id}`;
    navigator.clipboard.writeText(postUrl).then(() => {
      alert('Link da postagem copiado para a área de transferência!');
    }).catch((error) => {
      console.error('Erro ao copiar o link:', error);
    });
  };

  const handleReport = () => {
    alert("Postagem reportada!");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full bg-white rounded-lg p-4 shadow-md">
      <header className="flex gap-2 pb-4 border-b items-center">
        <img
          className="h-8 w-8 rounded-full"
          src={profilePicture || "https://img.freepik.com/free-icon/user_318-159711.jpg"}
          alt="Foto de perfil da ONG"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://img.freepik.com/free-icon/user_318-159711.jpg";
          }}
        />
        <div className="flex flex-col">
          <span className="font-semibold">{author || 'Unknown Author'}</span>
          <span className="text-xs">{createdPost ? moment(createdPost).fromNow() : 'Unknown date'}</span>
        </div>
        <button className="ml-auto md:hidden" onClick={() => setIsModalOpen(true)}>
          <FaEllipsisV />
        </button>
      </header>
      <main>
        {description && (
          <div className="py-4 w-full">
            <span>{description}</span>
          </div>
        )}

        {image && (
          <img
            className="mx-auto"
            src={image}
            alt="Imagem da postagem"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x300?text=Image+Not+Available";
            }}
          />
        )}
        {video && (
          <video controls className="mx-auto">
            <source src={video} type="video/mp4" />
            Seu navegador não suporta a exibição de vídeos.
          </video>
        )}
        {file && (
          <a href={file} download className="block text-blue-600 text-center mt-4">
            Baixar arquivo
          </a>
        )}
      </main>
      <footer>
        <div className="flex justify-between py-4 border-b">
          <div className="relative" onMouseEnter={() => setShowComments(true)} onMouseLeave={() => setShowComments(false)}>
            {likes.length > 0 && (
              <>
                <div className="flex gap-1 items-center">
                  <span className="bg-blue-600 w-6 h-6 text-white flex items-center justify-center rounded-full text-xs">
                    <FaThumbsUp />
                  </span>
                  <span>{likes.length}</span>
                </div>
                {showComments && (
                  <div className="absolute bg-white border flex flex-col p-2 rounded-md top-6">
                    {likes.map((like) => (
                      <span key={like.id}>{like.userName}</span>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
          <button onClick={() => setShowComments(!showComments)}>
            {comments.length > 0 && `${comments.length} comentários`}
          </button>
        </div>
        <div className="flex justify-around py-4 text-gray-600 border-b">
          <button onClick={handleLike} className={`flex items-center ${liked ? 'text-blue-600' : ''}`}>
            <FaThumbsUp /> Curtir
          </button>
          <button className="flex items-center gap-1" onClick={() => document.getElementById("comment" + id)?.focus()}>
            <FaRegComment /> Comentar
          </button>
          <button className="hidden lg:flex items-center gap-1" onClick={handleShare}>
            <FaShareAlt /> Compartilhar
          </button>
          <button className="hidden lg:flex items-center gap-1" onClick={handleReport}>
            <FaFlag /> Reportar
          </button>
        </div>
        {showComments && comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
        <div className="flex gap-4 pt-6">
          <img className="w-10 h-10 rounded-full" src="https://img.freepik.com/free-icon/user_318-159711.jpg" alt="Imagem do perfil" />
          <div className="w-full bg-zinc-100 flex items-center text-gray-600 px-3 py-1 rounded-full">
            <input
              type="text"
              name="comment"
              id={"comment" + id}
              placeholder="Comente sobre o trabalho"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="bg-zinc-100 w-full focus-visible:outline-none"
            />
            <button onClick={handleComment}><FaPaperPlane /></button>
          </div>
        </div>
      </footer>

      {/* Modal para mobile */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal} // Fechar ao clicar fora da modal
        >
          <div className="bg-white p-6 rounded-lg w-3/4 relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-gray-400" onClick={closeModal}>X</button>
            <div className="flex flex-col gap-4">
              <button onClick={handleShare} className="flex items-center gap-1 text-blue-600">
                <FaShareAlt /> Compartilhar
              </button>
              <button onClick={handleReport} className="flex items-center gap-1 text-red-600">
                <FaFlag /> Reportar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;