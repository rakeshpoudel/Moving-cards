const panels = document.querySelectorAll('.panel') /* we can use get the elements by id,classname,tagname and can use only query selector for one panel
but in this case we have use more panels in the html so we have to use Query selector All */

panels.forEach(panel =>{
    panel.addEventListener('click', () =>{ 
        removeActiveClasses()
        panel.classList.add('active') /* after removing the active class it selects new click in active class*/
    })
})

function removeActiveClasses(){ /* creating a function to remove the active class */
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}