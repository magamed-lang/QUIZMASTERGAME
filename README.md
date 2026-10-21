# QuizMaster Game - Android project (Capacitor)

## Requirements
- Node.js 18+ (https://nodejs.org)
- Android Studio (https://developer.android.com/studio) with its default SDK
- JDK 17 (comes with Android Studio)

## Build the APK
1. Open a terminal in this folder and run:
       npm install
       npm run copy-pdfjs
       npx cap add android
       npx cap sync android
2. Open the Android project:
       npx cap open android
3. In Android Studio wait for Gradle sync, then:
       Build > Build Bundle(s) / APK(s) > Build APK(s)
   Click "locate" in the popup. The file is
       android/app/build/outputs/apk/debug/app-debug.apk
4. Copy app-debug.apk to your phone and open it (allow "install unknown apps").

## Command-line alternative (after step 1)
       cd android && ./gradlew assembleDebug      (Windows: gradlew.bat assembleDebug)

## Notes
- The app works offline; PDF.js is bundled by `npm run copy-pdfjs`.
- Mistakes and best score are saved in the phone's local storage.
- Edit www/index.html to change the app, then run `npx cap sync android` and rebuild.
- Debug APKs are for personal use. For Google Play you need a signed release build.
