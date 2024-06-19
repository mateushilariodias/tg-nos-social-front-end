"use client";

import { useQuery } from "@tanstack/react-query";
import { IPost } from "@/interfaces";
import { makeRequest } from "../../../../axios";
import HeaderUser from "@/components/feed/HeaderUser";
import Feed from "@/components/feed/Feed";

function FeedUser() {

    const { data, error, isSuccess, isError } = useQuery({
        queryKey: ["refresh"],
        queryFn: () =>
            makeRequest.get("auth/refresh").then((res) => {
                return res.data;
            }),
        retry: false,
        refetchInterval: 60 * 60 * 1000,
    });

    if (isSuccess) {
        console.log(data.msg);
    }

    if (isError) {
        console.log(error);
    }

    const postQuery = useQuery<IPost[] | undefined>({
        queryKey: ['posts'],
        queryFn: () =>
            makeRequest.get("post/").then((res) => {
                return res.data.data
            })
    })

    if (postQuery.error) {
        [
            console.log(postQuery.error)
        ]
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-zinc-100">
            <HeaderUser />
            <div className="w-2/6 flex flex-col gap-5 py-20">
                <Feed post={postQuery.data}/>
            </div>
        </main>
    )
}
export default FeedUser;