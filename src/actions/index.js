//4. create my actions. Then go and add them to the reducer

export const ADD = 'ADD';
export const REMOVE = 'REMOVE';

export const addItem = (feature) =>{
    return {
        type: ADD,
        payload: feature
    }
}

export const removeFeature = (feature) => {
    return {
        type: REMOVE,
        payload: feature
    }
}
