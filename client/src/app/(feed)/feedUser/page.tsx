'use client';
import { useEffect, useState } from 'react';
import { IPost } from "@/interfaces";
import HeaderUser from "@/components/feed/HeaderUser";
import Feed from "@/components/feed/Feed";
import { api } from "@/services/api";

function FeedUser() {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get("posts");
                console.log('API Response:', response.data);
                
                // Verifique se response.data é um array
                if (Array.isArray(response.data)) {
                    setPosts(response.data as IPost[]);
                } else {
                    console.error('Formato de dados inesperado:', response.data);
                    setIsError(true);
                }
                
                setIsLoading(false);
            } catch (error) {
                console.error('Erro ao carregar os posts:', error);
                setIsError(true);
                setIsLoading(false);
            }
        };
        fetchPosts();
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-zinc-100">
            <HeaderUser />
            <div className="w-full p-6 lg:px-0 lg:w-2/6 flex flex-col gap-5 lg:py-20">
                {isLoading && <div>Loading...</div>}
                {isError && <div>Error loading posts</div>}
                {!isLoading && !isError && posts.length > 0 ? (
                    <Feed posts={posts} />
                ) : (
                    <div>No posts available</div>
                )}
            </div>
        </main>
    );
}

export default FeedUser;