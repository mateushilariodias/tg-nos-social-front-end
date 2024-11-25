// src/app/search/page.tsx

"use client"; // Certifique-se de que este componente é um client component

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";
import { IUser, INgo, IPost } from "@/interfaces";
import { useRouter } from "next/navigation"; // Importando de next/navigation

interface IData {
  posts: IPost[];
  users: IUser[];
  ngos: INgo[];
}

function Search() {
  const router = useRouter();
  const { searchParams } = router; // use router para pegar searchParams

  const searchTerm = searchParams.params ? searchParams.params.toString().toLowerCase() : "";

  const fetchData = async (): Promise<IData> => {
    const response = await fetch('/data.json');
    if (!response.ok) {
      throw new Error('Falha ao carregar os dados');
    }
    return response.json();
  };

  const { data, error, isLoading } = useQuery<IData>({
    queryKey: ['data', searchTerm],
    queryFn: fetchData,
    enabled: !!searchTerm, // Ativa a busca somente se searchTerm estiver presente
  });

  if (error) {
    console.error(error);
    return <div>Ocorreu um erro ao carregar os dados.</div>;
  }

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  // Filtrando posts, usuários e ONGs com base no termo de pesquisa
  const filteredPosts = data?.posts?.filter((post: IPost) => 
    (post.author && post.author.toLowerCase().includes(searchTerm)) ||
    (post.description && post.description.toLowerCase().includes(searchTerm))
  );

  const filteredUsers = data?.users?.filter((user: IUser) => 
    (user.fullName && user.fullName.toLowerCase().includes(searchTerm)) ||
    (user.userName && user.userName.toLowerCase().includes(searchTerm)) ||
    (user.emailUser && user.emailUser.toLowerCase().includes(searchTerm))
  );

  const filteredNgos = data?.ngos?.filter((ngo: INgo) => 
    (ngo.corporateReason && ngo.corporateReason.toLowerCase().includes(searchTerm)) ||
    (ngo.pageName && ngo.pageName.toLowerCase().includes(searchTerm)) ||
    (ngo.objectiveOfTheNgo && ngo.objectiveOfTheNgo.toLowerCase().includes(searchTerm))
  );

  return (
    <div className="pt-96">
      <h2>Postagens</h2>
      {filteredPosts?.length ? filteredPosts.map((post: IPost) => (
        <div key={post.id}>
          <Image src={post.profilePicture} alt={post.author || "Sem Autor"} width={50} height={50} />
          <Link href={`/post/${post.id}`}>
            <h3>{post.author || "Autor desconhecido"}</h3>
            <p>{post.description || "Sem descrição"}</p>
          </Link>
        </div>
      )) : <div>Nenhuma postagem encontrada.</div>}

      <h2>Usuários</h2>
      {filteredUsers?.length ? filteredUsers.map((user: IUser) => (
        <div key={user.id}>
          <Image src={user.userImg} alt={user.fullName || "Usuário sem nome"} width={50} height={50} />
          <Link href={`/user/${user.id}`}>
            <h3>{user.fullName || "Usuário sem nome"} (@{user.userName})</h3>
            <p>{user.emailUser}</p>
          </Link>
        </div>
      )) : <div>Nenhum usuário encontrado.</div>}

      <h2>ONGs</h2>
      {filteredNgos?.length ? filteredNgos.map((ngo: INgo) => (
        <div key={ngo.id}>
          <Image src={ngo.imageNgo} alt={ngo.pageName || "Sem Nome"} width={50} height={50} />
          <Link href={`/ngo/${ngo.id}`}>
            <h3>{ngo.pageName || "ONG sem nome"}</h3>
            <p>{ngo.objectiveOfTheNgo || "Sem objetivo definido"}</p>
          </Link>
        </div>
      )) : <div>Nenhuma ONG encontrada.</div>}
    </div>
  );
}

export default Search;