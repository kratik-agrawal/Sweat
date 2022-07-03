//
//  TabView.swift
//  FirebaseStarterSwiftUIApp
//
//  Created by Pranit Agrawal on 6/30/22.
//  Copyright © 2022 iOS App Templates. All rights reserved.
//

import SwiftUI

struct TabView: View {
    var body: some View {
        
            TabView
                HomeView( state: AppState)
                    .tabItem() {
                        Image(systemName: "house.fill")
                        Text("Home")
                    }
                ProfileView()
                    .tabItem() {
                        Image(systemName: "person.fill")
                        Text("Profile")
                    }
    
    }
}

struct TabView_Previews: PreviewProvider {
    static var previews: some View {
        TabView()
    }
}
