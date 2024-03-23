import {FormEvent, useState} from "react";

interface MessageInputProps {
    onSendMessage: (message: string) => void;

}

export default function MessageInput({onSendMessage}: MessageInputProps) {
    const [messageText, setMessageText] = useState("");

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (messageText.trim() === "") {
            return;
        }
        onSendMessage(messageText);
        setMessageText("");
    }

    return (
        <form className="flex flex-row w-full max-w-3xl mt-4" onSubmit={onSubmit}>
                <textarea rows={1}
                          placeholder="Ваше сообщение"
                          value={messageText}
                          onChange={(event) => setMessageText(event.target.value)}
                          className="p-4 bg-gray-100 rounded-2xl w-full border resize-none focus:outline-none focus:ring-0 focus:border-gray-300">
                </textarea>

            <button type="submit"
                    className="mx-4 p-4 bg-yellow-300 text-yandex-black rounded-2xl whitespace-nowrap transition ease-in-out hover:brightness-95 active:brightness-90">
                Отправить сообщение
            </button>
        </form>
    )
}