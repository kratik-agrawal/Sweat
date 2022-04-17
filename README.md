# Sweat
<img width="992" alt="Screen Shot 2022-04-16 at 11 50 25 PM" src="https://user-images.githubusercontent.com/75349834/163705463-c41b3b7e-938d-4f1d-b848-469c0ac6ee3f.png">

## Inspiration

Keeping yourself accountable to work out is hard sometimes. We want to give you that accountability with Sweat, an app that literally pays you to work out. 

Some of us just need a little extra motivation to get in the gym a few more times a week. And a few of us already work out and wouldn’t mind some extra money or the thrill of it.

**Sweat in the gym and the money $weats for you.**

## Who We Are

For the scope of the hackathon, I competed by myself. But as we will share, our idea is going to launch very soon, and I have a cofounder Krish Shah. After the hackathon we will work together to iterate on our tech development and also business model. Together we are just 2 UCLA Sophomores studying Computer Science. We have some big dreams and high aspirations. 

About Me
I, Kratik Agrawal, love innovating. I interned at Google last summer and am returning once again this Summer working for Google Ads. I have pitched and iterated on many ideas in the past and also have founded my own 501(c)(3) organization. I am involved with Bruin Consulting, DevX, and intramural sports on Campus. I love working out myself for both the physical and mental benefits.

About my CoFounder
I, Krish Shah, am an entrepreneur. With the help of others, I have started my own international business in the jewelry industry and run the business alongside school. Additionally, I've contributed to the UCLA HCI Lab as a research assistant creating advances in the field of human-computer interaction. I am THE target audience for Sweat, I need the thrill and accountability that Sweat provides.

## How it Works - The Concept

It’s simple. 
As a user you get to choose how much money you want to hedge or bet on yourself. 
We accept amounts between **$10 and $100**. 

You choose how many days you want to commit too.
Anywhere between **3 to 7 days** a week.

Complete the goal you set yourself too and earn an average of **7%** on your hedged amount.

On the off chance that you miss a day or a few days _(things happen, people get lazy)_, we charge you a percentage of your money.
For example, commit yourself to 7 days and miss 1 day and you get 80% of your investment back. 
Or, commit yourself to 3 days and miss 1 day and you get 50% of your investment back.

The money that people win comes from the money people lose on certain weeks. We take a small percentage of the money people lose (~10%), the rest goes back to our users. 

_Sweat doesn't pay out its users out of pocket_

## How we Verify
At the moment we are building only for people who go to commercial or college gyms*. 

We ask you to verify your current location when you attend the gym - a simple tap of a button.
We then tell you a mystery item – all basic gym equipment – and ask you to upload a picture. Our ML algorithms recognize and classify the item and verify that you went to the gym. We may ask for a picture of a dumbbell, squat rack, or a 25 lb plate.

That’s it!

* We would love to support other forms of working out and are working to add functionality and support for: yoga studios, sports, runs, and more. 

## How I built it

All of our front end is powered by React Native. Using an Expo project we are able to simulate the user experience on an app. Our backend and databases are powered by Firebase. I trained and launched our ML Models on the client side, we experimented with Apple’s tool Create ML and also used some Tensorflow capabilities to power our image classification algorithms. 

I used Google Cloud’s API to verify and locate a person’s current location and verify that they are in a gym. My software development tools of choice consisted of VSCode, the terminal, and XCode.

The process was long but we are proud of what we have to show🥳

## Challenges we ran into and Accomplishments

The biggest challenges were the environment and the Machine Learning algorithms. I ran into plenty of problems related to the React Native environment, mostly because of the intricacies of what I was trying to complete. The Machine Learning Algorithm was a challenge but also my greatest accomplishment. It was something I never tried before and am excited that I was able to make it work.

We are so proud of our final product and even happier that we are super close to a beta launch state, in fact its happening **next week**

## What I learned

A whole lot. I learned that hackathons are fun. I learned that LA Hacks has a great organizing team. I learned about our competing teams and their projects. I learned what being wired on coffee feels like. And of course I learned a whole lot of tech stuff.

## What's next for Sweat

We have big goals for Sweat. We are doing a Soft Launch/Beta test next week with UCLA students. We have generated and recorded interest from **over 100 students** and members of our community within this past weekend. We can’t wait to have active users within a week!

As for our tech, we want to continue to develop and improve our user’s experience. 

We want to add functionality for friend groups to compete and wage against each other – providing an additional thrill and buzz related to Sweat. 

We also want to add more in app functionality, we want to be able to import your data from your Apple Watch and give you insight on your workouts. 

And as mentioned before, we have a big emphasis on including other types of workouts. Not all of us are gym bros. We want to add sports, runs, yoga sessions, anything that calms and helps somebody. Part of this functionality will come from us developing new ways to verify and count  your workouts. We are so excited for what is to come.

And lastly, some **merch** always is nice. Maybe we deploy this soon 👀

Here are some things we have heard from those participating in the Beta Launch!
- "Would love it if something exists like that!"  
- "Waiting"
- "I’ve been looking for something like this"

## To Build

Clone our repo. 
Run NPM Install
Run NPM start and open an IOS simulator. We hope you can enjoy Sweat as much as did making it.


<img width="562" alt="Screen Shot 2022-04-17 at 12 15 10 AM" src="https://user-images.githubusercontent.com/75349834/163705466-bef5632d-683f-4344-9285-bb8c4918e576.png">
<img width="562" alt="Screen Shot 2022-04-17 at 12 15 47 AM" src="https://user-images.githubusercontent.com/75349834/163705468-ce6e7613-2c67-4c04-a1fb-43d1c0206031.png">
<img width="562" alt="Screen Shot 2022-04-17 at 12 16 12 AM" src="https://user-images.githubusercontent.com/75349834/163705469-e58385e4-aad0-426b-8bce-1c04f155bf50.png">
<img width="562" alt="Screen Shot 2022-04-17 at 12 16 32 AM" src="https://user-images.githubusercontent.com/75349834/163705470-2b3f08d1-4422-4fb9-a5ce-9f4637b6c0e5.png">
<img width="562" alt="Screen Shot 2022-04-17 at 12 16 49 AM" src="https://user-images.githubusercontent.com/75349834/163705472-99592c48-d54b-4468-a068-e7c88400198e.png">
<img width="562" alt="Screen Shot 2022-04-17 at 12 16 56 AM" src="https://user-images.githubusercontent.com/75349834/163705473-78c6299f-2652-4393-b860-445c9aa46ac1.png">
<img width="562" alt="Screen Shot 2022-04-17 at 12 17 09 AM" src="https://user-images.githubusercontent.com/75349834/163705474-528f9914-8004-4887-b057-bf2ab9cc52ee.png">
<img width="562" alt="Screen Shot 2022-04-17 at 12 17 17 AM" src="https://user-images.githubusercontent.com/75349834/163705476-ec4d5bc9-7fbb-4232-8927-c77e4d64a6ea.png">
<img width="881" alt="Screen Shot 2022-04-17 at 12 30 34 AM" src="https://user-images.githubusercontent.com/75349834/163705478-ff9d7dd4-9247-40ff-afa5-403eddd7dae2.png">
