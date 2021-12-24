const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');
item.addEventListener('dragstart', onDragStart);
item.addEventListener('dragend', onDragEnd);
for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', onDragOver)
    placeholder.addEventListener('dragenter', onDragEnter)
    placeholder.addEventListener('dragleave', onDragLeave)
     placeholder.addEventListener('drop', onDragDrop)
}
function onDragStart(evt) {
    console.log(evt.target);
    evt.target.classList.add('hold')
   setTimeout(()=> evt.target.classList.add('hide'), 0) 

}
function onDragEnd(evt) {
    evt.target.classList.remove('hold', 'hide')
 
}
function onDragOver(evt) {
   evt.preventDefault()
}
function onDragEnter(evt) {
     evt.target.classList.add('hoverd')
}
function onDragLeave(evt) {
     evt.target.classList.remove('hoverd')
}
function onDragDrop(evt) {
    evt.target.append(item)
    evt.target.classList.remove('hoverd')
}