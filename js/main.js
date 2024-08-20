// function filterItems(category) {
//     const items = document.querySelectorAll('.grid-item');
//     items.forEach(item => {
//         if (category === 'all' || item.getAttribute('data-filter') === category) {
//             item.classList.add('active');
//         } else {
//             item.classList.remove('active');
//         }
//     });
// }

// // Initially show all items
// filterItems('all');


// =======================================================

function filterItems(category) {
    const items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.classList.remove('active'); // Remove active class first to trigger reflow

        // Delay applying the active class to allow animation effect
        setTimeout(() => {
            if (category === 'all' || item.getAttribute('data-filter') === category) {
                item.classList.add('active');
            }
        }, 350);
    });
}

// Initially show all items with effects
filterItems('all');


// https://www.youtube.com/watch?v=hEs3IL6UyvE