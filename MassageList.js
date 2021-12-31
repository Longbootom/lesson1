import MessageItem from "./MessageItem.js";
import{ messagesRef } from"../js/index.js";
import{
  getDocs,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";


export default class MessageList {
    $msgListContainer;
  
    constructor() {
      this.$msgListContainer = document.createElement("div");
      this.$msgListContainer.textContent = "No conversation";
    }
  
    setActiveConversation = (conversation) => {
      this.$msgListContainer = document.createElement("div");
      this.$msgListContainer.textContent = "No conversation";

    };
    setActiveConversation = (conversation) => {
      this.$msgListContainer.innerHTML = "";
      this.setupMessagesListener(conversation.conversationId);

    }
    setupMessagesListener(conversationId) {
      const q = query(messagesRef, where("conversationId", "==", conversationId));
      getDocs(q).then((docs) => {
        const 
      })
    }
  
    render(container) {
      this.$msgListContainer.setAttribute("class", "flex-1");
      container.appendChild(this.$msgListContainer);
    }
  }