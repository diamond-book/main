let signupMail=document.getElementById("signupmail");
        let signupMailLabel=document.getElementById("signupmail-label");

         signupMail.addEventListener('focusin', (event) => { 
            signupMailLabel.style.fontSize="10px";
            
            signupMailLabel.style.top="3px";
        });
        signupMail.addEventListener('focusout', (event) => { 
            signupMailLabel.style.fontSize="14px";
            
            signupMailLabel.style.top="0px";
        });

        let signupPass=document.getElementById("signuppass");
        let signupPassLabel=document.getElementById("signuppass-label");

         signupPass.addEventListener('focusin', (event) => { 
            signupPassLabel.style.fontSize="10px";
            
            signupPassLabel.style.top="3px";
        });
        signupPass.addEventListener('focusout', (event) => { 
            signupPassLabel.style.fontSize="14px";
            
            signupPassLabel.style.top="0px";
        });

        let btn=document.getElementById("signup-submit");
        let spans=document.getElementsByClassName("signup-submit-span");
        var span;
        btn.onmouseover= function(){
            for(span of spans){
                span.classList.add("signup-anim");
            }
        }

        btn.onmouseleave= function(){
            for(span of spans){
                span.classList.remove("signup-anim");
            }
        }