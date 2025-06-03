import { useEffect, useState, useMemo } from "react";

interface Geo {
    lat: string,
    lng: string
}

interface Address{
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo
}

interface Company{
    name: string,
    catchPhrase: string,
    bs: string
}

interface UsuarioType{
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company
}

interface PostType{
    userId: number,
    id: number,
    title: string,
    body: string
}

interface UsuarioPostType extends UsuarioType{
    cantidad: number
}

export default function useUsuarios() {
    const [usuarios, setUsuarios] = useState<UsuarioType[]>([])
    const [posts, setPosts] = useState<PostType[]>([])
    
    useEffect(()=>{
        try {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((res) => res.json())
                .then((json) => setUsuarios(json))

            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((res) => res.json())
                .then((json) => setPosts(json))
        } catch (error) {
            console.log(error)
        }
    }, [])

    const usuariosConPosts: UsuarioPostType[] = useMemo(() => {

         // Contar la cantidad de posts por userId
        const contador: { [userId: number]: number } = posts.reduce((acc, post) => {
            acc[post.userId] = (acc[post.userId] || 0) + 1;
            return acc;
        }, {} as { [userId: number]: number });
        
        return usuarios.map((usuario) => ({
            ...usuario,
            cantidad: contador[usuario.id] || 0
        }))
    }, [usuarios, posts])

    return {usuariosConPosts}
}