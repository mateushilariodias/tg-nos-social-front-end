'use client';

import { IPost } from "@/interfaces";
import HeaderNgo from "@/components/feed/HeaderNgo";
import PostCreation from "@/components/feed/postCreation";
import Feed from "@/components/feed/Feed";
import { useEffect, useState } from "react";

function FeedNgo() {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Carregando dados do arquivo JSON local
                const response = await fetch('/data.json');
                const data = await response.json();

                console.log('API Response:', data);

                // Verifique se data.posts é um array
                if (Array.isArray(data.posts)) {
                    setPosts(data.posts as IPost[]);
                } else {
                    console.error('Formato de dados inesperado:', data);
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
            <HeaderNgo />
            <div className="px-6 lg:px-0 pt-20 lg:pt-28 lg:pb-10 w-full flex items-center justify-center">
                <PostCreation />
            </div>
            {/* <Search/> */}
            <div className="w-full p-6 lg:px-0 lg:w-2/6 flex flex-col gap-5 lg:pt-0">
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

export default FeedNgo;