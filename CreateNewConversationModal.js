import { getAuth } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
import {
  getFirestore,
  addDoc,
  collection,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";

import InputGroup from "./InputGroup.js";

const auth = getAuth();
const db = getFirestore();
const conversationsRef = collection(db, "conversations");

export default class CreateNewConversationModal {
  $modalContainer;

  _visible = false;
  $nameInput;
  $targetUser;
  $btnCreate;

  constructor() {
    this.$modalContainer = document.createElement("div");
    this.$modalContainer.setAttribute(
    this.$nameInput = new InputGroup(
      "text",
      "Conversation name",
      "Enter your conversation name"));

    this.$targetUser = new InputGroup("text", "User", "Enter your user");

    this.$btnCreate = document.createElement("button");
    this.$btnCreate.textContent = "Create new conversation";
    this.$btnCreate.setAttribute(
      "class",
      "modal fixed w-64 h-64 hidden top-1/2 left-1/2 bg-red-400",
      "bg-blue-400 text-white py-2 px-4 rounded-full"
    );

    this.$modalContainer.textContent = "Modal COntaine";
    this.$modalContainer = document.createElement("form");
    this.$modalContainer.setAttribute(
      "class",
      "modal fixed w-64 hidden top-1/2 left-1/2 bg-red-400 p-4"
    );
    this.$modalContainer.addEventListener("submit", this.onSubmit);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const newConversation = {
      name: this.$nameInput.getInputValue(),
      creator: auth.currentUser.uid,
      users: [auth.currentUser.uid, this.$targetUser.getInputValue()],
    };
    addDoc(conversationsRef, newConversation);
    alert("Succsessfull");
    this.$modalContainer.classList.add("hidden");
  };

  opentModal() {
    this._visible = !this._visible;
    if (this._visible) {
      this.$modalContainer.classList.remove("hidden");
      this.$modalContainer.classList.add("block");
    } else {
      this.$modalContainer.classList.remove("block");
      this.$modalContainer.classList.add("hidden");
    }
    this.$modalContainer.classList.toggle("hidden");
  }

  render(conversationListContainer) {
    this.$modalContainer.appendChild(this.$nameInput.render());
    this.$modalContainer.appendChild(this.$targetUser.render());
    this.$modalContainer.appendChild(this.$btnCreate);

    conversationListContainer.appendChild(this.$modalContainer);
  }
}