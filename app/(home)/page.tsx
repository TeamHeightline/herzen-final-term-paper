"use client"

import {FormEvent, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/app/store";
import {addMessage} from "@/app/(home)/store";
import {detoxifyThunk} from "@/app/(home)/store/async-actions";
import MessageInput from "@/app/components/message-input";
import Messages from "@/app/components/messages";
import {PageHook} from "@/app/(home)/page.hook";


export default function Page() {
    const {messages, onSendMessage} = PageHook()

    return (
        <main className="flex h-screen flex-col items-center justify-between p-12 overflow-hidden">
            <div className="p-4 flex flex-col flex-grow overflow-auto space-y-2 w-full max-w-3xl">
                <Messages messages={messages}/>
            </div>
            <MessageInput onSendMessage={onSendMessage}/>
        </main>
    );
}
