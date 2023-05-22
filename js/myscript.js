const {createApp} = Vue;
createApp({
    data() {
        return {
            message: 'Hello Vue!',
            error: false,
            newText: '',
            newTask: {
                text: '',
                done: false
            },
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
            console.log(this.newTask.text);
        }

    }
}).mount("#app");
