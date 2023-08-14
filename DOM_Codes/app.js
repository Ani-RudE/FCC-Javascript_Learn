const ul=document.querySelector('ul');
const li=document.createElement('li');
ul.append(li);
console.log();
li.innerText='X-Men';


// //Modifying Attributes and Classes
li.setAttribute('id', 'main-head');
li.removeAttribute('id');

const title=document.querySelector('#main-head');
console.log(title.getAttribute('id'));

li.classList.add('list-itmes'); //Adds the styles same as the other list-items to the newly created list-item.
li.classList.remove('list-items'); //Removes the styles.

console.log(li.classList.contains('list-items')); //Whether the element has a specific class

li.remove();