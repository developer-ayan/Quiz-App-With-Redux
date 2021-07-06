const INITIAL_STATE = {
    user : [

        {
            question: "When did Pakistan become independent ?",
            answer: [
                13, 14, 15, 16
            ],
            correctAns : 14
        },

        {
            question: "Who dreamed of separating Pakistan ?",
            answer: [
                'Quid E Azam', 'Allama Iqbal','Narendra Modi', 'Dj Gaandi'
            ],
            correctAns : 'Allama Iqbal'
        }, 

        {
            question: "What was the religion of Quid E Azam ?",
            answer: [
                'Islam', 'Isai','Hindu', 'Christian'
            ],
            correctAns : 'Isai'
        }, 

    ]

}

function reducer(state = INITIAL_STATE) {
    return state
}

export default reducer;