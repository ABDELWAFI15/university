simple

Open the App.js file to start writing some code. You can preview the changes directly on your phone or tablet by commnd expo start   using the simulator 
and u will get ur app
"getting information from web ser"
or open the foldr with ur tirminal and run expo
If you're having problems, you can email me to @wafi15072000@gmail.com 


if u dont instal it  ##follow
Mac:

1. Download the code for the app from the [github repository](https://github.com/ABDELWAFI15/university.git)
2. Install [Visual Studio Code](https://code.visualstudio.com/)
  * VS Code is the main IDE we use for React Native development; it's where you'll do most of your editing.
3. Install Xcode for creating iOS builds
4. Install Android Studio for creating Android builds
  * You might need these added to your `~/.bash_profile`:
    `export ANDROID_HOME=$HOME/Library/Android/sdk`
    `export PATH="$PATH:$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools"`
5. Install [homebrew](https://brew.sh/)
6. `brew install node`
  * This uses homebrew to install node
7. `brew install watchman`
  * watchman enables some fun auto-reload-on-file-change capabilities in React Native
8. `npm install -g react-native-cli`
  * This installs the React Native Command Line Interface
Windows:

1. Download the code for the app from the [github repository](https://github.com/tableau/mobile-app-bootstrap-react-native)
2. Install [Visual Studio Code](https://code.visualstudio.com/)
  * VS Code is the main IDE we use for React Native development; it's where you'll do most of your editing.
3. Follow Step 1 and Step 2 in these excellent [Windows installation instructions](https://shift.infinite.red/getting-started-with-react-native-development-on-windows-90d85a72ae65)

Note that we've run into problems running watchman on Windows, so the auto-reload functionality won't be available. Also note that iOS building/running is only possible on a Mac. We do almost all of our mobile development using Macs.

## Download Modules
From the `Mobile_App_Bootstrap` directory, run `npm install`
  * This installs the various modules needed into a `node_modules` directory.

## Starting the sample app

iOS
* `react-native run-ios` runs the iOS build in the default simulator.
  * `react-native run-ios --simulator="MySimulatorName"` will run the iOS build using the simulator you specify. 
    * More details on [specifying simulators](https://facebook.github.io/react-native/docs/running-on-simulator-ios.html)
    * List of available simulators: `xcrun simctl list`
    * Example to create your own named simulator for an iPad Air 2 running iOS 11.3: `xcrun simctl create MySimulatorName com.apple.CoreSimulator.SimDeviceType.iPad-Air-2 com.apple.CoreSimulator.SimRuntime.iOS-11-3`
* ⌘-d in the iOS simulator brings up the [React Native debug menu](https://facebook.github.io/react-native/docs/debugging.html).

Android
* Run an AVD (Android Virtual Device) emulator. This could be started via Android Studio (Tools -> AVD Manager) or [the command line](https://developer.android.com/studio/run/emulator-commandline)
* `react-native run-android` runs the Android build
* ⌘-m in the Android emulator brings up the [React Native debug menu](https://facebook.github.io/react-native/docs/debugging.html).


For running on a physical iOS/Android device, [take a look at the docs for the subtleties involved]
## Debugging

React Native has some great [debugging documentation](https://facebook.github.io/react-native/docs/debugging.html), it's well worth reading through. A common setup for us is to have the standalone [React Developer Tools](https://github.com/facebook/react-devtools/tree/master/packages/react-devtools) running and the simulator with Live Reload and Hot Reloading turned on.







//USING FATCH METHOD //
fetchData= async()=>{
    const response = await fetch('https://raw.githubusercontent.com/Hardeepcoder/fake_json/master/Users');
    const users = await response.json();
    this.setState({data: users});

  }
  
  
  //SC OF APP //
  ![Screenshot_20210605_234446](https://user-images.githubusercontent.com/84851769/120907338-6b076300-c658-11eb-86c5-d154b8db348b.jpg)

//SC of web ser//
![Capture d’écran 2021-06-05 234612](https://user-images.githubusercontent.com/84851769/120907348-84a8aa80-c658-11eb-9431-c01c11db8f9f.jpg)
