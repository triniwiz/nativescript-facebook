import * as applicationModule from "tns-core-modules/application";
export * from  "./login-button";
export * from "./login-manager";
export * from "./login-event-data";

declare class UIResponder { }
declare class NSDictionary { }
declare var FBSDKApplicationDelegate: any;
declare var FBSDKAppEvents: any;
declare interface UIApplicationDelegate { }

// TODO: Extend existing delegate if exists
class BaseDelegate extends UIResponder implements UIApplicationDelegate {
  public static ObjCProtocols = [UIApplicationDelegate];

  applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary): boolean {
    return FBSDKApplicationDelegate.sharedInstance().applicationDidFinishLaunchingWithOptions(application, launchOptions);
  }

  applicationOpenURLSourceApplicationAnnotation(application, url, sourceApplication, annotation) {
    return FBSDKApplicationDelegate.sharedInstance().applicationOpenURLSourceApplicationAnnotation(application, url, sourceApplication, annotation);
  }

  applicationDidBecomeActive(application: UIApplication): void {
    FBSDKAppEvents.activateApp();
  }
}

applicationModule.ios.delegate = BaseDelegate;