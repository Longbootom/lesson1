class Register {
    $formEl;
    $displayNameEl;
    $emailEl;
    $passwordEl;
    $confirmPasswordEl;
    $submidButtonEl;
    constructor() {
        this.$formEl = document.createElement("form");
        this.$formEl.setAttribute(
            "class",
            "w-1/3 bg-yellow-400 py-16 px-4 mx-auto mt-24 rounded-xl"
          );

        this.$displayNameEl = document.createElement("input");
        this.$displayNameEl.setAttribute(
            "class",
      "bg-white py-2 px-4 rounded-md font-bold"
    );

        this.$displayNameEl.type = "text";
        this.$displayNameEl.placeholder = "Enter your fullname";
        
        this.$emailEl = document.createElement("input");
        this.$emailEl.setAttribute(
            "class",
      "bg-white py-2 px-4 rounded-md font-bold"
    );
        this.$emailEl.type = "email";
        this.$emailEl.placeholder = "Enter your email";

        this.$passwordEl = document.createElement("input");
        this.$passwordEl.setAttribute(
            "class",
      "bg-white py-2 px-4 rounded-md font-bold"
    );
        this.$passwordEl.type = "password";
        this.$passwordEl.placeholder = "Enter your password";
        
        this.$confirmPasswordEl = document.createElement("input");
        this.$confirmPasswordEl.setAttribute(
            "class",
      "bg-white py-2 px-4 rounded-md font-bold"
    );
        this.$confirmPasswordEl.type = "password";
        this.$confirmPasswordEl.placeholder = "Enter your password";

        this.$submidButtonEl = document.createElement("button")
        this.$submidButtonEl.setAttribute(
            "class",
     "bg-white py-2 px-4 rounded-md font-bold"
        )
        this.$submidButtonEl.type ="submit"
        this.$submidButtonEl.textContent ="Submit"
        
    }


        render() {
            this.$formEl.appendChild(this.$displayNameEl);
            this.$formEl.appendChild(this.$emailEl);
            this.$formEl.appendChild(this.$passwordEl);
            this.$formEl.appendChild(this.$confirmPasswordEl);
            this.$formEl.appendChild(this.$submidButtonEl);
            
            return this.$formEl
        }

    }  
        export default Register;
        
        
        
        
        

    
