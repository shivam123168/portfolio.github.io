let tablinks = document.getElementsByClassName("tablink");
        let tabcontents = document.getElementsByClassName("tabcontent");

        function opentab(tab) {
            for (tablink of tablinks) {
                tablink.classList.remove("actlink");

            }
            for (tabcontent of tabcontents) {
                tabcontent.classList.remove("activecontent");

            }
            event.currentTarget.classList.add("actlink");
            document.getElementById(tab).classList.add("activecontent");
        }

        const toggleBtn = document.querySelector('.toggle_btn')
        const toggleBtnIcon = document.querySelector('.toggle_btn i')
        const dropDownManue = document.querySelector('.dropdown_manue')

        toggleBtn.onclick = function () {
            dropDownManue.classList.toggle('open')
            const isOpen = dropDownManue.classList.contains('open')

            toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
        }

        let pop = document.getElementById("pop")
        const scriptURL = 'https://script.google.com/macros/s/AKfycbz8VgLkwvMFRlX2u_g-JiFQiQZsyBhcgbvCaRr8Mphh4246pyDTYTBI6YpjlMrq-lwPbQ/e'
       // const scriptURL ='https://script.google.com/macros/s/AKfycbwJuGVwUUv7F1LEViWOwUuZ5otZkclutDvQPlayJ8vTjs36WfMvN_YKUhKKXhOJD7Gaxg/exec'
       const form = document.forms['submit-to-google-sheet']

       form.addEventListener('submit', e => {
           pop.innerHTML="loadiing";
           e.preventDefault()
           fetch(scriptURL, { method: 'POST', body: new FormData(form) })
               .then(response => {
                   pop.innerHTML = "Message send successfully"
                   setTimeout(function () {
                       pop.innerHTML = ""
                   }, 5000);
                   form.reset()
               if(!response.ok)
               {
                   pop.innerHTML="error"
               }
               })
            .catch(error => console.error('Error!', error.message))
               
               
       })