'use client';

import { useState, useEffect } from 'react';
import { IPost, IComment, ILike } from "@/interfaces";
import moment from "moment";
import 'moment/locale/pt-br';
import { useComments } from '@/hooks/useComments';
import { useLikes } from '@/hooks/useLikes';
import Comment from './Comment';
import { FaPaperPlane, FaRegComment, FaThumbsUp } from "react-icons/fa";

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
  const { getComments, createComment } = useComments();
  const { getLikes, toggleLike } = useLikes();

  useEffect(() => {
    const fetchComments = async () => {
      if (id) {
        try {
          const postComments = await getComments(id);
          setComments(postComments ?? []);
        } catch (error) {
          console.error('Error fetching comments:', error);
        }
      }
    };

    const fetchLikes = async () => {
      if (id) {
        try {
          const postLikes: ILike[] = await getLikes(id);
          setLikes(postLikes ?? []);
          setLiked(postLikes?.some((like: ILike) => like.likeUserId === String(id)) || false);
        } catch (error) {
          console.error('Error fetching likes:', error);
        }
      }
    };

    fetchComments();
    fetchLikes();
  }, [id, getComments, getLikes]);

  const handleLike = async () => {
    if (id) {
      try {
        await toggleLike(id, liked);
        setLiked(!liked);
        setLikes((prevLikes) => liked 
          ? prevLikes.filter(like => like.likeUserId !== String(id))
          : [...prevLikes, { id: Date.now(), userName: "Você", likeUserId: String(id), postId: id }]
        );
      } catch (error) {
        console.error('Error toggling like:', error);
      }
    }
  };

  const handleComment = async () => {
    if (id && commentText) {
      try {
        const newComment: IComment = {
          id: Date.now(),
          commentContent: commentText,
          userName: "Você",
          userImg: "path/to/user/image",
          commentUserId: 1,
          postId: id,
          createdComment: new Date().toISOString(),
        };
        const savedComment = await createComment(newComment);
        if (savedComment) {
          setComments([...comments, savedComment]);
        } else {
          console.error('Error: savedComment is undefined');
        }
        setCommentText('');
      } catch (error) {
        console.error('Error posting comment:', error);
      }
    }
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
      </main>
      <footer>
        <div className="flex justify-between py-4 border-b">
          <div className="relative" onMouseEnter={() => setShowComments(true)} onMouseLeave={() => setShowComments(false)}>
            {likes.length > 0 && (
              <section>
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
              </section>
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
        </div>
        {showComments && comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
        <div className="flex gap-4 pt-6">
          <img className="w-10 h-10 rounded-full" src="https://img.freepik.com/free-icon/user_318-159711.jpg" alt="Imagem do perfil" />
          <div className="w-full bg-zinc-100 flex items-center text-gray-600 px-3 py-1 rounded-full">
            <input
              type="text"
              name="commentContent"
              id={"commentContent" + id}
              placeholder="Comente sobre o trabalho"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="bg-zinc-100 w-full focus-visible:outline-none"
            />
            <button onClick={handleComment}><FaPaperPlane /></button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Post;