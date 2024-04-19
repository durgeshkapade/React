
// let heading =  React.createElement("h1",
// {id:"heading" , XYZ:"kese ho"},"Hello world welcome to react");

// let heading =  React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"},
//         [React.createElement("h1",{},"Hello world welcome to react"),
//         React.createElement("h2",{},"Hello world welcome to react")]
//     )
// );


let heading =  React.createElement("div",{id:"parent"},[
        React.createElement("div",{id:"child1"},
            [React.createElement("h1",{},"Hello world welcome to react"),
            React.createElement("h2",{},"Hello world welcome to react")]
        ),
        React.createElement("div",{id:"child2"},
            [React.createElement("h1",{},"Hello world welcome to react"),
            React.createElement("h2",{},"Hello world welcome to react")]
        )
    ]
);


let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
