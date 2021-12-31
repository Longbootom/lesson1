export default class MessageItem {
    _messageValue;
    constructor(messageValue) {
        this._messageValue = messageValue;
    }
    render() {
        const msgContainer = document.createElement("div");
        const content = document.createElement("p");
        content.textContent = this._messageValue;
        msgContainer.appendChild(content);
        return msgContainer;
    }
    
}