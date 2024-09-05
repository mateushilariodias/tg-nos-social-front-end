'use client';

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { TbPhoto } from "react-icons/tb";
import { NgoContext } from "@/context/ngoContext";
import { api } from "@/services/api";

function PostCreation() {
    const { ngo } = useContext(NgoContext);
    const [description, setDescription] = useState("");
    const [imageUnification, setImageUnification] = useState("");
    const [image, setImage] = useState<File | null>(null);

    const queryClient = useQueryClient();

    useEffect(() => {
        if (image) {
            setImageUnification(URL.createObjectURL(image));
        }
    }, [image]);

    const mutation = useMutation({
        mutationFn: async (newPost: { description: string, image: string, ngoId: string | undefined }) => {
            await api.post("post/", newPost).then((res) => {
                return res.data;
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] });
        },
    });

    const upload = async (): Promise<string> => {
        try {
            const formData = new FormData();
            if (image) formData.append('file', image);
            const res = await api.post('upload/', formData);  // Alterado de makeRequest para api
            return res.data.url; // Supondo que o backend retorna a URL da imagem como `url`
        } catch (error) {
            console.error('Erro ao fazer upload da imagem:', error);
            return '';
        }
    }

    const sharePost = async () => {
        let imageUrl = '';
        if (image) {
            imageUrl = await upload();
        }
        mutation.mutate({ description, image: imageUrl, ngoId: ngo?.id });
        setDescription('');
        setImage(null);
        setImageUnification(''); // Resetar a visualização da imagem
    }

    return (
        <div className="mt-2 lg:mt-8 w-full bg-white rounded-lg pb-4 px-4 lg:p-4 shadow-md flex flex-col gap-3">
            {image && <img src={imageUnification} alt="Imagem da postagem" />}
            <div className="flex gap-2 lg:gap-4 pt-6">
                <img className="w-10 h-10 rounded-full" src={ngo?.imageNgo ? ngo.imageNgo : "https://img.freepik.com/free-icon/user_318-159711.jpg"} alt="Imagem do perfil" />
                <span className="font-bold">{ngo?.pageName}</span>
                <div className="w-full bg-zinc-100 flex items-center text-gray-600 px-3 py-1 rounded-full">
                    <input 
                        type="text" 
                        name="comment" 
                        id="comment" 
                        placeholder={`Qual trabalho você deseja compartilhar?`} 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        className="bg-zinc-100 w-full focus-visible:outline-none" 
                    />
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
    );
}

export default PostCreation;