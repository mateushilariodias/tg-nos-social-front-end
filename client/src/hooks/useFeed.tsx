import { useState, useEffect } from 'react';
import { IPost } from "@/interfaces";
import data from '../../public/data.json'; // Importando os dados locais

export const useFeed = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Simulando a busca de dados locais para imitar um fetch
        setPosts(data.posts); // Certifique-se de que 'data.posts' corresponde à interface IPost[]
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading };
};