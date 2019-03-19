# vue-blog
This Repo is a one test with VueJS, Github pages, mobile build and any Api to store data.

## Motivation
Study and test to create a free, open source blog (web/mobile app) with efficient technology.

## Todo

- [x] Publish on GitHub Pages
- [x] Implement Android Build
- [ ] Simplify Android Build with npm script
- [ ] Run Android Build with Dockerized Cordova
- [ ] Store posts with gists/gsheets/firebase
- [ ] Blog Layout
- [ ] Seo Analitycs 

## Build Android (in development)

```
npm run build
cp dist/* cordova/www/
sed -ic "s/\\=\\//\\=/g" cordova/www/index.html -->>> wrong sed. Need fix path
cd cordova
cordova build android --debug
cp platforms/android/app/build/outputs/apk/debug/app-debug.apk ../
```
