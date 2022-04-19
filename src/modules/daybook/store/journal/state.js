
export default (  ) => ({
    isLoading: true,
    entries: [
        {  
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type spec',
            picture: null
        },
        {  
            id: new Date().getTime() + 10000,
            date: new Date().toDateString(),
            text: 'and typesetting industry. not much, what makes you happy Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown started learn a lilte vue printer took a galley of type and scrambled it to make a type spec',
            picture: null
        },
        {  
            id: new Date().getTime() + 20000,
            date: new Date().toDateString(),
            text: 'so you can get anyone if you want  and typesetting industry. Lorem Ipsum has been the industrys standard dummyprinter took a galley of type and scrambled it to make a type spec',
            picture: null
        }

    ]
})