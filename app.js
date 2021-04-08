
/* Toggle the sidebar */

const sidebarToggleBtn = document.querySelector('.toggle-sidebar')
const sidebar = document.querySelector('.sidebar')

sidebarToggleBtn.onclick = function () {
    sidebar.classList.toggle('sidebar--mobile-active')
}

/* Show/Hide widget content */

const widgets = document.querySelectorAll('.widget')

widgets.forEach(function (widget) {
    widget.addEventListener('click', function (e) {
        if (e.target.classList.contains('widget_title')) {
            e.target.classList.toggle('widget_title-active')
            e.target.nextElementSibling.classList.toggle('widget_body-hidden')
        }
    })
})

