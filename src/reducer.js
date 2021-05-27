export const initialState = {
    arr: [
        {
            id: 1,
            value: ""
        },
        {
            id: 2,
            value: "hello 2"
        }
    ]
}

export default function reducer(state = initialState, action ) {

    //type of action

    switch(action.type) {

        case 'ADD_ITEM' :
            // some logic

            return state
        

        default :

            return state

    }
}