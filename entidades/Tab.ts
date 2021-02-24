import { ChatMessage } from "./ChatMessage";


/** Represent Tab class */
export class Tab {
    messageHistory: ChatMessage[];
    heading: string;
    title: string;

    constructor(
        heading: string = '',
        title: string = ''
    ) {
        this.heading = heading;
        this.title = title;
        this.messageHistory = [];
    }
}  