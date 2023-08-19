const createh1=document.createElement('h1');
createh1.textContent="Hello World JS";
const createroot=document.getElementById('root')
createroot.appendChild(createh1);

const createH1React=[React.createElement('div',{id:'firstDiv'},React.createElement('div',{id:'secondDiv'},
[React.createElement('h1',{},'React H1 Element 1st element'),React.createElement('h1',{},'React H1 Element 2nd element')])),
React.createElement('div',{id:'third'},React.createElement('div',{id:'forth'},
[React.createElement('h1',{},'React H1 Element 3rd element'),React.createElement('h1',{id:'dd'},'React H1 Element 4th element')]))];
const createRootReact=ReactDOM.createRoot(document.getElementById('root'));
createRootReact.render(createH1React)

const jsxs='<h1>hello from jsxs</h1>'
createRootReact.render({jsxs})
