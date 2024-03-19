"use client"

import {FormEvent, useState} from "react";


const initialMessages = [
    {text: "Привет! Как дела?", isCurrentUser: false},
    {text: "Все хорошо, спасибо! А у тебя?", isCurrentUser: true},
];

// Стиль для сообщений текущего пользователя
const currentUserStyle = "ml-auto bg-blue-500 text-white";
// Стиль для сообщений собеседника
const otherUserStyle = "mr-auto bg-gray-300 text-black";

export default function Home() {
    const [messages, setMessages] = useState(initialMessages);
    const [messageText, setMessageText] = useState("");

    function onSendMessage(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (messageText.trim() === "") {
            return;
        }
        setMessages([...messages, {text: messageText, isCurrentUser: true}]);
        setMessageText("");
    }

    return (
        <main className="flex h-screen flex-col items-center justify-between p-12 overflow-hidden">

            <div className="p-4 flex flex-col flex-grow overflow-auto space-y-2 w-full max-w-3xl">
                {messages.map((message, index) => (
                    <div key={index}
                         className={`max-w-lg p-2 rounded-lg my-1 ${message.isCurrentUser ? currentUserStyle : otherUserStyle}`}>
                        {message.text}
                    </div>
                ))}
            </div>

            <form className={"flex flex-row w-full max-w-3xl mt-4"} onSubmit={onSendMessage}>
                <textarea rows={1} placeholder="Ваше сообщение"
                          value={messageText}
                          onChange={(event) => setMessageText(event.target.value)}
                          className={"p-4 bg-gray-100 rounded-xl w-full border resize-none " +
                              "focus:outline-none focus:ring-0 focus:border-gray-300"}>
                </textarea>

                <button type="submit"
                        className={"mx-2 p-4 bg-yellow-300 text-yandex-black rounded-full whitespace-nowrap transition ease-in-out hover:brightness-95 active:brightness-90"}>
                    Отправить сообщение
                </button>
            </form>
        </main>
    );
}
