const {createApp} = Vue;
createApp({
    data() {
        return {
            message: 'Hello Vue!',
            error: false,
            newText: '',

            tasks: [
                {
                    text: 'esempio 1',
                    sone: false
                },
                {
                    text: 'esempio 2',
                    sone: false
                },
                {
                    text: 'esempio 3',
                    sone: true
                },
                {
                    text: 'esempio 4',
                    sone: true
                }
            ]

        }
    },
    methods: {
        addTask(){
                // controllo errore
            if (this.newText === '' || this.newText.length < 5) {
                this.error = true;
                this.newText = '';
            }else{
                // creo oggetto e push
                this.error = false;
                const objTask = {text: this.newText, done: false};
                this.tasks.unshift(objTask);
                this.newText = '';
            }
            
        }

    }
}).mount("#app");
