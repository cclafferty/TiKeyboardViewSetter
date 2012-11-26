// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var keyboardViewSetter = require('com.cclafferty.keyboardViewSetter');


// Set the textField
var textField = Ti.UI.createTextField({
  color: '#888',
  value: 'I am a textfield',
  top: 10,
  width: 290
});

var textFieldInputView = Ti.UI.createView({
	backgroundColor: 'red',
	height: 100,
	width: 300,
	bottom: 0
});

var textFieldInputViewHideButton = Ti.UI.createButton({
	title: 'Hide',
  width: 90,
  height: 50
});

textFieldInputViewHideButton.addEventListener('click', function(){
	textField.blur();
});
textFieldInputView.add(textFieldInputViewHideButton);

win.add(textField);
keyboardViewSetter.set(textField, textFieldInputView);

// Set the textArea
var textArea = Ti.UI.createTextArea({
  color: '#888',
  value: 'I am a textarea',
  top: 60,
  width: 290,
  height : 200
});

var textAreaInputView = Ti.UI.createView({
	backgroundColor: 'green',
	height: 200,
	width: 300,
	bottom: 0
});

var textAreaInputViewHideButton = Ti.UI.createButton({
	title: 'Hide',
  width: 90,
  height: 50
});
textAreaInputView.add(textAreaInputViewHideButton);

textAreaInputViewHideButton.addEventListener('click', function(){
	textArea.blur();
});

// Add some more views as an example
var cornerNW = Ti.UI.createView({
	backgroundColor: 'blue',
	top: 0,
	left: 0,
	height: 10,
	width: 10
});
textAreaInputView.add(cornerNW);

var cornerNE = Ti.UI.createView({
	backgroundColor: 'blue',
	top: 0,
	right: 0,
	height: 10,
	width: 10
});
textAreaInputView.add(cornerNE);

var cornerSW = Ti.UI.createView({
	backgroundColor: 'blue',
	bottom: 0,
	left: 0,
	height: 10,
	width: 10
});
textAreaInputView.add(cornerSW);

var cornerSE = Ti.UI.createView({
	backgroundColor: 'blue',
	bottom: 0,
	right: 0,
	height: 10,
	width: 10
});
textAreaInputView.add(cornerSE);

win.add(textArea);
keyboardViewSetter.set(textArea, textAreaInputView);


// Some buttons to test resetting the keyboard views
var setInputsButton = Titanium.UI.createButton({
  title: 'Set custom keyboard view',
  top: 150,
  width: 'auto',
  height: 50,
  visible: false
});

setInputsButton.addEventListener('click', function(e){
	textField.blur();
	textArea.blur();
  keyboardViewSetter.set(textField, textFieldInputView);
  keyboardViewSetter.set(textArea, textAreaInputView);

  setInputsButton.hide();
  clearButton.show();
});
win.add(setInputsButton);

var clearButton = Titanium.UI.createButton({
  title: 'Reset keyboard views',
  top: 150,
  width: 'auto',
  height: 50,
  visible: true
});

clearButton.addEventListener('click', function(e){
	textField.blur();
	textArea.blur();
  keyboardViewSetter.set(textField, null);
  keyboardViewSetter.set(textArea, null);

  clearButton.hide();
  setInputsButton.show();
});
win.add(clearButton);

// Open the window and show the world what we've made
win.open();

// Focus a custom textField to show the custom view
textField.focus();