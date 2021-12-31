import { addDoc } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
import { auth, messagesRef } from "../constants/index.js";

export default class MessageInput {
  $form;
  $input;
  $btn;

  _activeConversation;

  constructor() {
    this.$form = document.createElement("form");
    this.$form.addEventListener("submit", this.onSubmit);

    this.$input = document.createElement("input");
    this.$input.type = "text";
    this.$input.placeholder = "Enter your message";

    this.$btn = document.createElement("button");
    this.$btn.type = "submit";
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.$input.value) {
      const newMessage = {
        content: this.$input.value,
        sender: auth.currentUser.email,
        conversationId: this._activeConversation.conversationId,
        createdAt: new Date().valueOf(),
      };
      addDoc(messagesRef, newMessage);
      this.$input.value = "";
    } else {
      alert("Không được để trống nội dung");
    }
  };
  onChangeUpload = (e) => {
    const file = e.target.files[0];
    const imageRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(imageRef, file);
    console.log(uploadTask);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.floor(
          (snapshot.bytesTransferred / snapshot.totalBytess)*100);

        console.log("Upload is " + progress + "%done");

      },
      (error) => {
        console.log("error upload", error);
        alert("Tai file that bai");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(url) => {
          console.log(url),
          this._file = url;
        }
      }
    )
  }

  setActiveConversation = (conversation) => {
    this._activeConversation = conversation;
  };

  render(container) {
    this.$form.setAttribute("class", "py-6");
    this.$input.setAttribute("class", "w-full py-2 px-4 rounded-full border-2");
    this.$btn.setAttribute("class", "invisible");

    this.$form.appendChild(this.$input);
    this.$form.appendChild(this.$btn);

    container.appendChild(this.$form);
  }
}