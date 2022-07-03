//
//  ProfileView.swift
//  FirebaseStarterSwiftUIApp
//
//  Created by Pranit Agrawal on 6/29/22.
//  Copyright © 2022 iOS App Templates. All rights reserved.
//

import SwiftUI

struct ProfileView: View {
    
    
    
    var body: some View {
        NavigationView {
            ZStack{
                Color.orange
                    //.edgesIgnoringSafeArea(.top)
                
            }
            .navigationTitle("Profile")
            .navigationBarTitleDisplayMode(.inline)
        }
    }
    
    
}

struct ProfileView_Previews: PreviewProvider {
    static var previews: some View {
        ProfileView()
    }
}

