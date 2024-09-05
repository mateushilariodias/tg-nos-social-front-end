'use client'
import Post from "./Post";
import { IPost } from "@/interfaces";

interface FeedProps {
    posts: IPost[];
}

function Feed({ posts }: FeedProps) {
    return (
        <section className="w-full flex min-h-screen flex-col items-center gap-5">
            <div className="w-full flex flex-col gap-5 items-center pt-12">
                {posts.map((post, index) => {
                    return <Post post={post} key={post.id || index} />
                })}
            </div>
        </section>
    );
}

export default Feed;