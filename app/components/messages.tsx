import {Message} from "@/app/(home)/store/types";

interface MessageProps {
    messages: Message[];

}

// Стиль для сообщений текущего пользователя
const currentUserStyle = "mr-auto text-white bg-gradient-to-tr from-red-500 to-pink-500";
// Стиль для сообщений от ИИ
const otherUserStyle = "ml-auto text-black bg-yandex-blue";

export default function Messages({messages}: MessageProps) {
    return (
        <>
            {messages.map((message, index) => (
                <div key={index}
                     className={`max-w-sm p-4 rounded-3xl my-1 ${message.isCurrentUser ? currentUserStyle : otherUserStyle}`}>
                    {message.message}
                </div>
            ))}
        </>
    );
}