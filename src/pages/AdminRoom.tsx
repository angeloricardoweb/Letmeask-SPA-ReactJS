import checkImg from '../assets/images/check.svg'
import answerImg from '../assets/images/answer.svg'

import { useHistory, useParams } from 'react-router-dom'
import deleteImg from '../assets/images/delete.svg'
import logoImg from '../assets/images/logo.svg'

import { Button } from '../components/Button'
import { Question } from '../components/Question'

import { RoomCode } from '../components/RoomCode'
// import { useAuth } from '../hooks/userAuth'
import { useRoom } from '../hooks/userRoom'
import { database } from '../services/firebase'

import '../styles/room.scss'



type RoomParams = {
    id: string;
}

export function AdminRoom() {
    // const { user } = useAuth();
    const params = useParams<RoomParams>();
    const history = useHistory();
    // os parametros da páginas serão armazenados em params
    const roomId = params.id;

    const { title, questions } = useRoom(roomId)

    async function handleEndRoom() {
        await database.ref(`rooms/${roomId}`).update({
            endedAt: new Date(),
        })
        history.push('/')
    }


    async function handleCheckQuestionAsAnswered(questionId: string) {
        await database.ref(`rooms/${roomId}/question/${questionId}`).update({
            isAnswered: true,
        });
    }

    async function handleHighlihtQuestion(questionId: string) {
        await database.ref(`rooms/${roomId}/question/${questionId}`).update({
            isHighlighted: true,
        });
    }

    async function handleDeleteQuestion(questionId: string) {
        if (window.confirm('tem certeza que deseja excluir essa pergunta?')) {
            await database.ref(`rooms/${roomId}/question/${questionId}`).remove();
        }
    }





    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="leatmeask" />
                    <div>
                        <RoomCode code={roomId} />
                        <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>

                    </div>
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    {questions.length > 0 && <span>{questions.length} Pergunta(s)</span>}
                </div>

                {/* {JSON.stringify(questions)} */}

                <div className="question-list">

                    {questions.map(question => {
                        return (

                            <Question
                                key={question.id}
                                content={question.content}
                                author={question.author}
                                isAnswered={question.isAnswered}
                                isHighlighted={question.isHighlighted}
                            >
                                {!question.isAnswered && (
                                    <>
                                        <Button
                                            type="button"
                                            onClick={() => handleCheckQuestionAsAnswered(question.id)}
                                        >
                                            <img src={checkImg} alt="marcar pergunta" />
                                        </Button>
                                        <Button
                                            type="button"
                                            onClick={() => handleHighlihtQuestion(question.id)}
                                        >
                                            <img src={answerImg} alt="dar destaque" />
                                        </Button>

                                    </>

                                )}
                                                             
                                
                                <Button
                                    type="button"
                                    onClick={() => handleDeleteQuestion(question.id)}
                                >
                                    <img src={deleteImg} alt="remover pergutna" />
                                </Button>
                            </Question>
                        )
                    })}

                </div>
            </main>

        </div>
    )
};