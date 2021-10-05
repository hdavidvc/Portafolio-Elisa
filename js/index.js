let menu = function(evento) {
    id = evento.path[0].id;
    opcion = document.getElementById(id);
    nav = document.getElementsByClassName('nav-option');
    // console.log(nav);

    for (const iterator of nav) {
        // console.log(iterator.id);
        if (iterator.id == id) {
            iterator.classList.add('active');
            console.log(iterator);
        } else {
            iterator.classList.remove('active');
        }
    }
}