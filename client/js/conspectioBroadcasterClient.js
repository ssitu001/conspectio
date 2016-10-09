conspectioBroadcasterClient = () => {

  setUpDomElements = () => {
    var parentElement = $('#conspectioBroadcasterContainer');
    var broadcastStream = $('<video></video>').attr(
      {
        'id': 'broadcastStream',
        'autoplay': true
      }
    );
    var videoContainer = $('<div></div>').append(broadcastStream);
    parentElement.append(videoContainer);

    var errorMsg = $('<div></div>').attr(
      {
        'id': 'errorMsg'
      }
    );

    parentElement.append(errorMsg);

    var eventTag = $('<input></input>').attr(
      {
        'id': 'eventTag',
        'type': 'text',
        'placeholder': 'tag your stream here'
      }
    );

    var startButton = $('<input></input>').attr(
      {
        'id': 'startButton',
        'type': 'submit',
        'value': 'start',
        'onclick': 'sendEventTag'
      }
    );

    var stopButton = $('<input></input>').attr(
      {
        'id': 'stopButton',
        'type': 'submit',
        'value': 'stop',
        'onclick': 'stopStream',
        'disabled': true
      }
    );

    parentElement.append(`<div>${eventTag}${startButton}${stopButton}</div>`);

  }
  setUpDomElements();
  
}

export { conspectioBroadcasterClient };