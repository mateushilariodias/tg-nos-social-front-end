// Comment.tsx
import React from 'react';
import { IComment } from "@/interfaces";

interface CommentProps {
  comment: IComment;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  const { userImg, commentContent, userName, createdComment } = comment;

  return (
    <div className="flex gap-2 items-start border-b py-2">
      <img
        className="h-8 w-8 rounded-full"
        src={userImg || "https://img.freepik.com/free-icon/user_318-159711.jpg"}
        alt="Foto do usuário"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "https://img.freepik.com/free-icon/user_318-159711.jpg";
        }}
      />
      <div>
        <p>{commentContent}</p>
        <small>{userName} - {new Date(createdComment).toLocaleDateString()}</small>
      </div>
    </div>
  );
};

export default Comment;