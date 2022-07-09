import SwiftUI

struct ProfileView: View {
    
    //@ObservedObject var model = SignUpViewModel(authAPI: AuthAPI as! AuthAPI, state: AppState)


    
    /*init() {
        model.getData()
    }
    */
    
    var body: some View {
        
        /*List (model.list, id: \.self) { item in
            Text(item.name)
        } */
            
        
        VStack{
            //Spacer().frame(height: -100)
            //Color.white
            //padding(-100)
            VStack{
                Image("pfpholder")
                    .resizable()
                    .frame(width: 200, height: 200)
                    .clipShape(Circle())
                    .padding(-260)
                    .offset(x: 155, y: 100)
                Text("Full Name")
                    .font(.title)
                    .bold()
                    .padding(-70)
                    .offset(x: 3, y: 70)
                   // .background(.orange)
                    .foregroundColor(.orange)
            }
            VStack(alignment: .leading, spacing: 12) {
                HStack {
                    Image(systemName: "envelope")
                        .offset(x: -10, y: 42)
                    Text("sweatuser@gmail.com")
                        .offset(x: -10, y: 42)
                }
            }
            Divider( ).offset(y: 65).frame( width: 350 )
            
            VStack {
                Text("Your Current Balance")
                    .font(.title)
                    .bold()
                    .padding()
                    .offset(y: 75)
                    .foregroundColor(.orange)
                
                Text("$12.34")
                    .bold()
                    .fixedSize(horizontal: false, vertical: true)
                    .multilineTextAlignment(.center)
                    .padding()
                    .frame(width: 310, height: 120)
                    .background(Rectangle().fill(Color.gray).shadow(radius: 3))
                    .foregroundColor(.red)
                    .offset(y: 75)
                    .font(.largeTitle)
                   
                            
                Text("You Have Made")
                    .font(.title)
                    .bold()
                    .padding()
                   // .offset(y: 100)
                    .foregroundColor(.orange)
                    .offset(y: 75)
                
                Text("$12.34")
                    .bold()
                    .fixedSize(horizontal: false, vertical: true)
                    .multilineTextAlignment(.center)
                    .padding()
                    .frame(width: 310, height: 120)
                    .background(Rectangle().fill(Color.gray).shadow(radius: 3))
                    .foregroundColor(.green)
                    .offset(y: 75)
                    .font(.largeTitle)
                    
                    
                }
                
            }
            
            
        }
        //   .navigationTitle("Profile")
         //  .navigationBarTitleDisplayMode(.inline)
    }
    
    


struct ProfileView_Previews: PreviewProvider {
    static var previews: some View {
        ProfileView()
    }
}

