import { useAuth } from '../hooks/userAuth';
import { FormEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';
import { database } from '../services/firebase';

import '../styles/auth.scss'

export function NewRoom() {
    const {user}= useAuth()
    const history = useHistory();
    const [newRoom, setNewRoom] = useState('');

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();


        if (newRoom.trim() === '') return

        // registro de dado no banco de dados
        const roomRef = database.ref('rooms');


        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        })


        history.push(`/rooms/${firebaseRoom.key}`)

    }



    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="ilustração front" />
                <strong>Crie Sala de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                            type="text"
                            placeholder="Nome da sala"
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <Link to="/">clique aqui</Link> </p>
                </div>
            </main>

        </div>
    )
}