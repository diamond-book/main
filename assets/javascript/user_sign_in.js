let signInMail=document.getElementById("signinmail");
        let signInMailLabel=document.getElementById("signinmail-label");

         signInMail.addEventListener('focusin', (event) => { 
            signInMailLabel.style.fontSize="10px";
            
            signInMailLabel.style.top="3px";
        });
        signInMail.addEventListener('focusout', (event) => { 
            signInMailLabel.style.fontSize="14px";
            
            signInMailLabel.style.top="0px";
        });

        let signInPass=document.getElementById("signinpass");
        let signInPassLabel=document.getElementById("signinpass-label");

         signInPass.addEventListener('focusin', (event) => { 
            signInPassLabel.style.fontSize="10px";
            
            signInPassLabel.style.top="3px";
        });
        signInPass.addEventListener('focusout', (event) => { 
            signInPassLabel.style.fontSize="14px";
            
            signInPassLabel.style.top="0px";
        });

        let btn=document.getElementById("signin-submit");
        let spans=document.getElementsByClassName("signin-submit-span");
        var span;
        btn.onmouseover= function(){
            for(span of spans){
                span.classList.add("signin-anim");
            }
        }

        btn.onmouseleave= function(){
            for(span of spans){
                span.classList.remove("signin-anim");
            }
        }
       