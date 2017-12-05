reditPosts

First attempt with Ionic with the use of reddit api.
Simple app that returns reddit posts depending on given category.

To run navigate in cmd to app's root folder and type

-ionic serve
It has not been compiled to run as an android/ios app.

To do that first install cordova plugin .

-npm install -g cordova.
Then add android/ios platform.

cordova platform add android/ios
To run it on an emulator,type

-ionic run android/ios
To extract the apk type

-ionic cordova build android
