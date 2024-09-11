'use client';

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { TbPhoto } from "react-icons/tb";
import { NgoContext } from "@/context/ngoContext";
import { api } from "@/services/api";

// Define a interface para o post
interface NewPost {
    description: string;
    image: string;
    ngoId: number;
}

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
        mutationFn: async (newPost: NewPost) => {
            const response = await api.post("post/", newPost);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] });
        },
    });

    const upload = async (): Promise<string> => {
        try {
            const formData = new FormData();
            if (image) formData.append('file', image);
            const res = await api.post('upload/', formData);
            return res.data.url;
        } catch (error) {
            console.error('Erro ao fazer upload da imagem:', error);
            return '';
        }
    }

    const sharePost = async () => {
        if (!ngo?.id) {
            console.error('NGO ID is not available');
            return;
        }

        let imageUrl = '';
        if (image) {
            imageUrl = await upload();
        }

        mutation.mutate({ 
            description, 
            image: imageUrl, 
            ngoId: ngo.id  // Now passing a number
        });

        setDescription('');
        setImage(null);
        setImageUnification('');
    }

    return (
        <div>
            {image && <img src={imageUnification} alt="Preview" />}
            <div>
                <span>{ngo?.pageName}</span>
                <textarea
                    placeholder="O que está acontecendo?"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className="bg-zinc-100 w-full focus-visible:outline-none"
                />
                <button onClick={sharePost}>
                    <FaPaperPlane />
                    Compartilhar
                </button>
            </div>
            <div>
                <input
                    type="file"
                    id="file"
                    style={{ display: "none" }}
                    onChange={(e) => e.target.files && setImage(e.target.files[0])}
                />
                <label htmlFor="file">
                    <TbPhoto />
                    <span>Adicionar imagem</span>
                </label>
            </div>
        </div>
    );
}

export default PostCreation;