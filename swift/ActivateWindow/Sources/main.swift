import AppKit
import Foundation

func focus(windowName: String) {
  let workspace = NSWorkspace.shared()
  let activeApps = workspace.runningApplications
  for app in activeApps {
    if app.localizedName == windowName {
      app.activate(options: .activateIgnoringOtherApps)
      break
    }
  }
}

let windowName = String(CommandLine.arguments[1])!
focus(windowName: windowName)