const sputnik = document.querySelector('#sputnik');
const toast = document.querySelector('#toast');
const dialog = document.querySelector('#dialog');
const completeheader = document.querySelector('#completeheader');

// open dialog
dialog.open();

// animation endHandler
sputnik.addEventListener('animationstart', (e) => {
})

// click handler
sputnik.addEventListener('click', (e) => {
  answerdialog.open();
  toast.open();
});

const sayHello = function () {
  toast.open('Hello');
  console.log('hi');
};

if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  annyang.addCommands({
    'i found you': function(button) {
      answerdialog.open();
      toast.open();
    },
    'found you': function(button) {
      answerdialog.open();
      toast.open();
    },
    'close dialog': function () {
      dialog.close();
      answerdialog.close();
    },
    'hi': function () {
      toast.show('Hello');
    },
    'hello': function () {
      toast.show('Hello');
    },
    'hi there': function () {
      toast.show('Hello');
    }
  });

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}