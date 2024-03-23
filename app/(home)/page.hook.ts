import {useAppDispatch, useAppSelector} from "@/app/store";
import {addMessage} from "@/app/(home)/store";
import {detoxifyThunk} from "@/app/(home)/store/async-actions";

export function PageHook() {
    const dispatch = useAppDispatch();

    const {messages, pending} = useAppSelector(state => state.detoxify);

    function onSendMessage(text: string) {
        dispatch(addMessage({message: text, isCurrentUser: true}))
        dispatch(detoxifyThunk(text));
    }

    return {messages, pending, onSendMessage}
}