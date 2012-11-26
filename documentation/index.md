# keyboardViewSetter

## Description

Use a custom view instead of the keyboard.

## Accessing the keyboardViewSetter Module

To access this module from JavaScript, you would do the following:

```javascript
var keyboardViewSetter = require("com.cclafferty.keyboardViewSetter");
```

The keyboardViewSetter variable is a reference to the Module object.  

## Methods

### set

This method takes 2 arguments

1. A `TextField` or `TextArea`
2. The `View` to use instead of the keyboard or `null`

#### Example

```javascript
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

// Set the textFields input view to our custome one
keyboardViewSetter.set(textField, textFieldInputView);
```