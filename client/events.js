const socket = io();
socket.on('connect', () => {
  console.log('event socket connected', socket.id);
  socket.emit('getEventList');

  socket.on('sendEventList', (eventList) => {
  	console.log('EVENT LIST:', eventList);
    displayEventList(eventList);
  });
});


displayEventList = (eventList) => {
  console.log('inside displayEventList');
  $('#eventList').append('<ul>');
  eventList.forEach((event) => {
    $('#eventList').append(`<a href = 'viewer.html?tag=${event}'><span class="label label-default">${event}</span></a>`);
  });
	$('#eventList').append('</ul>');
};