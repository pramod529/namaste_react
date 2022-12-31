const header = React.createElement("h1",{
    id:"title"
},"Nameste React")
const header1 = React.createElement("h2",{
    id:"title"
},"Nameste React1")
const header2 = React.createElement("h3",{
    id:"title"
},"Nameste React2")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render([header,header1,header2])