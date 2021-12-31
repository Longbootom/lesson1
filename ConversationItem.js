export default class ConversationItem {
    constructor() {}
    conversation;
  
    constructor(conversationData) {
      this.conversation = conversationData;
      console.log(this.conversation, "from conversationItem");
    }
  
    render(conversationsContainer) {
      const test = document.createElement("h2");
      test.textContent = "converstaionItem";
      test.textContent = this.conversation.name;
  
      conversationsContainer.appendChild(test);
    }
  }