import { useContext, useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { TbPhoto } from "react-icons/tb";
import { NgoContext } from "@/context/ngoContext";

function PostCreation() {
    const { ngo } = useContext(NgoContext);
    const [description, setDescription] = useState("");
    const [imageUnification, setImageUnification] = useState("");
    const [image, setImage] = useState<File | null>(null);

    useEffect(() => {
        if (image) {
            setImageUnification(URL.createObjectURL(image));
        }
    }, [image]);

    const sharePost = () => {
        const newPost = {
            description,
            image: imageUnification,
            ngoId: ngo?.id,
        };
        console.log("Novo post:", newPost);

        // Limpa os campos após a postagem
        setDescription("");
        setImage(null);
    };

    return (
        <div className="mt-2 w-full lg:mx-0 lg:w-1/3 bg-white rounded-lg px-2 lg:px-4 shadow-md flex flex-col gap-3">
            {/* Imagem de pré-visualização */}
            {image && (
                <img
                    src={imageUnification}
                    alt="Imagem da postagem"
                    className="w-full rounded-lg object-cover max-h-64"
                />
            )}
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 pt-4 lg:pt-6 items-center">
                <img
                    className="w-10 h-10 rounded-full"
                    src={ngo?.imageNgo ? ngo.imageNgo : "https://img.freepik.com/free-icon/user_318-159711.jpg"}
                    alt="Imagem do perfil"
                />
                <span className="font-bold text-sm lg:text-lg">{ngo?.pageName}</span>
                <div className="w-full bg-zinc-100 flex items-center text-gray-600 px-3 py-2 rounded-full">
                    <input
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Qual trabalho você deseja compartilhar?"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="bg-zinc-100 w-full focus-visible:outline-none text-sm lg:text-base"
                    />
                    <button onClick={() => sharePost()}>
                        <FaPaperPlane />
                    </button>
                </div>
            </div>
            <div className="flex justify-around py-4 text-gray-600 border-y">
                <input
                    className="hidden"
                    type="file"
                    id="image"
                    onChange={(e) => e.target.files && setImage(e.target.files[0])}
                />
                <label
                    htmlFor="image"
                    className="flex items-center gap-2 cursor-pointer text-blue-500 hover:text-blue-600 text-sm lg:text-base"
                >
                    <TbPhoto className="text-xl lg:text-2xl" /> Adicionar imagem
                </label>
            </div>
        </div>
    );
}

export default PostCreation;