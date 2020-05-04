const initialState= {
    hero: null,
    isLoading: false,
    error: null
}

export function reducer(state = initialState, action){
    switch(action.type){
        case "CALL_HERO_START":
            return{
                ...state,
                isLoading: true
            }
        case "CALL_HERO_SUCCESS":
            return{
                ...state,
                hero: action.payload,
                isLoading: false
            }
        case "CALL_HERO_ERROR":
            return{
                ...state,
                error: action.payload,
                isLoading: false
            }
    }
}