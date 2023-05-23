const {createApp} = Vue;
createApp({
    data() {
        return {
            message: 'Hello Vue!',
            error: false,
            noTask: false,
            newText: '',

            tasks: [
                {
                    text: 'campra i pomodori',
                    done: false
                },
                {
                    text: 'fai paracadutismo',
                    done: false
                },
                {
                    text: 'combatti contro King Kong',
                    done: true
                },
                {
                    text: 'scala una giraffa',
                    done: true
                }
            ]

        }
    },
    methods: {
        //aggiungo elemento
        addTask(){
                // controllo errore
            if (this.newText === '' || this.newText.length < 5) {
                this.error = true;
            }else{
                // creo oggetto e push
                this.error = false;
                const objTask = {text: this.newText, done: false};
                this.tasks.unshift(objTask);
            } 
            this.newText = '';
            //scritta noTask spenta
            this.noTask = false; 
        },
        
        //cancella elemento
        deleteTask(index){
            this.tasks.splice(index, 1);
            //scritta noTask
            if (this.tasks.length === 0) {
                this.noTask = true; 
            }
        },
        //inverti done
        modifierDone(index){
            this.tasks[index].done =!this.tasks[index].done;
        }

    }
}).mount("#app");
