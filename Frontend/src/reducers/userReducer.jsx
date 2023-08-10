export function useReducer(state="welcome",action)
{
    switch (action.type)
    {
        case "LOGIN":
            return action.payload;

        default:
            return state; 
    } 
}