# ProgressBar

A simple project that uses angular 1.4 to show how the directives can be used to create custom progress bars.
Input is retrieved from a rest call using angular service and passed to the view via controllers, there by using
DI {dependency injection} provided by Angular

The progress Bars are configured by the data received from the end point and change on the fly when the data is changed by the end point

Limit if returned by the API would determine when the background color on the progress change to red i.e value > limit else limit is set to default

A simple Http Server has been added in the package json file , so just npm install would get you a local file server

Do a npm install http-server -g to install it globally

start that by just typing http-server in your command prompt or terminal 

Test cases have been added for the controller function which is doing the heavy loading. If required test cases can be added for directive as well.
