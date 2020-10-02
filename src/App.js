import React from 'react';
import { compose } from 'recompose';



// function withWhatToDoListNull(Component) {
//     return function (props) {
//         return !props.todoList
//             ? <div>Got NULL</div>
//             : <Component { ...props } />
//     }
// }

const withWhatToDoListLoading = (Component) => (props) =>
    props.loading
    ? <div>WAIT LIST IS LOADING...</div>
    : <Component { ...props } />

const withWhatToDoListNull = (Component) => (props) =>
    !props.todoList
    ? <div>Got NULL</div>
    : <Component { ...props } />

const withWhatToDoListEmpty = (Component) => (props) =>
    props.todoList && props.todoList.length == 0
    ? <div>Nothing to do</div>
    : <Component { ...props } />



// const DoNull = withWhatToDoListNull(WhatToDoList);

// const Do1 = withWhatToDoListLoading(WhatToDoList);
// const Do2 = withWhatToDoListNull(Do1);
// const Do3 = withWhatToDoListEmpty(Do2);

// const Do = withWhatToDoListEmpty(withWhatToDoListNull(withWhatToDoListLoading(WhatToDoList)));

const ComposeNice = compose (
    withWhatToDoListLoading,
    withWhatToDoListNull,
    withWhatToDoListEmpty
);

const DoNice = ComposeNice(WhatToDoList);

function App(props) {
    // const doList = [
    //     {id:1, action:'go sleep'},
    //     {id:2, action:'go eat'},
    //     {id:3, action:'do nothing'}
    // ];
    // const doList = []; 
    const doList = null;
    const isLoading = false;
    return (
        <DoNice todoList={doList} loading={isLoading} />
    );
}

function WhatToDoList({todoList, loading}) {

    // if (loading) {
    //     return (
    //         <div>WAIT LIST IS LOADING...</div>
    //     )
    // }

    // if (!todoList) {
    //     return (
    //         <div>Got NULL</div>
    //     )
    // }

    // if (todoList.length == 0) {
    //     return (
    //         <div>Nothing to do</div>
    //     )
    // }

    return (
        <div>{todoList.map(what =>
            <WhatToDoItem key={what.id} todo={what} />)}
        </div>
    );
}

function WhatToDoItem({todo}) {
    return (
        <div>
            <span key={todo.id}>{todo.action}</span>
        </div>
    );
}

export default App;