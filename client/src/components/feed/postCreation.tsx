'use client'

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { TbPhoto } from "react-icons/tb";
import { NgoContext } from "@/context/ngoContext";
import { makeRequest } from "../../../axios";

function PostCreation() {

    const { ngo } = useContext(NgoContext)
    const [description, setDescription] = useState("")
    const [imageUnification, setImageUnification] = useState("")
    const [image, setImage] = useState<File | null>(null)

    const queryClient = useQueryClient()

    useEffect(() => {
        if (image) {
            setImageUnification(URL.createObjectURL(image));
        }
    }, [image]);

    const mutation = useMutation({
        mutationFn: async (newPost: {}) => {
            await makeRequest.post("post/", newPost).then((res) => {
                return res.data;
            })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] })
        },
    })

    const upload = async () => {
        try {
            const formDara = new FormData
            image && formDara.append('file', image)
            const res = await makeRequest.post('upload/', formDara)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }

    const sharePost = async () => {
        let imageUrl = ''
        if (image) {
            imageUrl = await upload()
        }
        mutation.mutate({ description, image: imageUrl, ngoId: ngo?.id })
        setDescription('')
        setImage(null)
    }

    return (
        <div className="mt-2 lg:mt-8 w-full bg-white rounded-lg pb-4 px-4 lg:p-4 shadow-md flex flex-col gap-3">
            {image && <img src={imageUnification} alt="Imagem da postagem" />}
            <div className="flex gap-2 lg:gap-4 pt-6">
                <img className="w-10 h-10 rounded-full" src={ngo?.imageNgo ? ngo.imageNgo : "https://img.freepik.com/free-icon/user_318-159711.jpg"} alt="Imagem do perfil" />
                <span className="font-bold">{ngo?.pageName}</span>
                <div className="w-full bg-zinc-100 flex items-center text-gray-600 px-3 py-1 rounded-full">
                    <input type="text" name="comment" id="comment" placeholder={`Qual trabalho você deseja compartilhar?`} value={description} onChange={(e) => setDescription(e.target.value)} className="bg-zinc-100 w-full focus-visible:outline-none " />
                    <button onClick={() => sharePost()}>
                        <FaPaperPlane />
                    </button>
                </div>
            </div>
            <div className="flex justify-around py-4 text-gray-600 border-y">
                <input className="hidden" type="file" id="image" onChange={(e) => e.target.files && setImage(e.target.files[0])} />
                <label htmlFor="image" className="flex">
                    <TbPhoto className="text-2xl" /> Adicionar imagem
                </label>
            </div>
        </div>
    )
}
export default PostCreation;