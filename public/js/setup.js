var hotels, restaurants, activities;

$.get('/api/days')
.then(console.log)

$.get('/api/days/1')
.then(console.log)

// $.ajax({
//   method: "DELETE", 
//   url: '/api/days/1'
// })
// .then(console.log)

$.post('/api/days')
.then(console.log)