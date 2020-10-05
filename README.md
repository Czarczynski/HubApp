# HubApp
 mobilna wersja front-endowa cdv hub

# Aby rozpocząć eksplorowanie aplikacji: <br />
Najpierw nalezy zainstalować node.js -> https://nodejs.org/en/download/ <br />

 Potem instalacja zależności node_modules w głównym folderze aplikacji:
 ```
  npm install
 ```
# (Android)
 Następnie podłączenie telefonu do komputera w trybie debugowania
 <br />
 instalacja ADB -> https://www.xda-developers.com/install-adb-windows-macos-linux/ <br />
 instalacja android command line tool <br />
 - (Windows) https://dl.google.com/android/repository/commandlinetools-win-6609375_latest.zip <br />
 - (MacOS) https://dl.google.com/android/repository/commandlinetools-mac-6609375_latest.zip <br />
 - (Linux) https://dl.google.com/android/repository/commandlinetools-linux-6609375_latest.zip <br />
 
 Sprawdzenie czy urządzenie poprawnie jest odczytywane w systemie
 ```
 adb devices
 ```
 Następnie uruchomienie komendy:
 ```
 npx react-native run-android
 ```
 
 # (iOS symulator - tylko na systemie MacOS)
 
 Instalacja XCODE <br />
 
 Następnie uruchomienie aplikacji:<br />
 ```
  npx react-native run-ios
 ```

# Widoki aplikacji
<h3> Film prezentujący aplikację znajduje się <a href="https://github.com/Czarczynski/HubApp/blob/main/gitScreens/record.mov?raw=true" > tutaj </a></h3><br />
<img src="https://github.com/Czarczynski/HubApp/blob/main/gitScreens/logowanie.png" height=600 />
<img src="https://github.com/Czarczynski/HubApp/blob/main/gitScreens/rejestracja.png" height=600 />
<img src="https://github.com/Czarczynski/HubApp/blob/main/gitScreens/dashboard.png" height=600 />
<img src="https://github.com/Czarczynski/HubApp/blob/main/gitScreens/nowa%20rezerwacja.png" height=600 />
<img src="https://github.com/Czarczynski/HubApp/blob/main/gitScreens/oddawanie%20rezerwacji.png" height=600 />
<img src="https://github.com/Czarczynski/HubApp/blob/main/gitScreens/wyloguj%20popup.png" height=600 />
