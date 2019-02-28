# HOSTING IOS MOBILE APP IPA INSTALLER 
## DESCRIPTION
This is an example of using a node web server to host an iOS app ipa installer.
We will also use ngrok to create a tunnel from the web to our local web server and also because we need HTTPS to deliver the ipa.


Important things to know when hosting an apple iOS app ipa installer are:
1. At minimum you must sign your app with an ad-hoc provisioning certificate.
2. You must have the *.ipa* file, *manifest.plist* file, the app icon images with sizes 57x57 and 512x512 respectively.
3. Your web server must serve the file the custom mime type `application/octet-stream`
4. The Link on your web page where the user clicks to install the app must have the have a href value of `itms-services://?action=download-manifest&url=https://INSERYOURNGROKTUNEL/manifest.plist`
(The Url must point to where your plist is served as a static file)


## HOW TO USE
### SETUP NGROK (OPTIONAL)
1. Download ngrok at https://ngrok.com/
2. Run ngrok from the command line as: `./ngrok http 3000`
3. Use your browser and go to localhost:4040 and copy the ngrok tunnel url shown to which should be something like https://asdf.ngrok.io

### SETUP AND RUN WEB SERVER
1. Copy the ngrok url and replace the `url` part of the anchor tag `<a href="itms-services://?action=download-manifest&url=<YOUR NGROK TUNNEL>/manifest.plist" id="text">`
2. Paste your `57x57 app icon file`, `512x512 app icon file`, `manifest.plist` and `app.ipa` into the `public` folder.
3. Inside your `manifest.plist` file, ensure that the ipa, the app icon image files string values are updated with the ngrok url e.g. `https://asdf.ngrok.io/app.ipa` `https://asdf.ngrok.io/57.png`
4. Run `npm install`
5. Run `node index.js`
6. On your mobile device, access your web server with the generated ngrok url `https://asdf.ngrok.io`
