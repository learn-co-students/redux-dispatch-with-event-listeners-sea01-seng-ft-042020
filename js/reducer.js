let state;
let button = document.getElementById('button')
let button2 = document.getElementById('button2')

button.addEventListener('click', () => {
    dispatch({type: 'AUMENTAR_CONTAGEM'})
})
button2.addEventListener('click', () => {
    dispatch({type: 'DIMINUIR_CONTAGEM'})
})

function reducer(state = {count: 0}, action){
    switch (action.type) {
        case 'AUMENTAR_CONTAGEM' :
            return {count: state.count + 1}
        case 'DIMINUIR_CONTAGEM' :
            return {count: state.count - 1}
            default:
                return state
               
    }
    
}

function dispatch(action){
    state = reducer(state,action);
    render()
}

function render(){
    let container = document.getElementById('container');
    container.textContent = state.count;
}

dispatch({type: '@@INIT'})



