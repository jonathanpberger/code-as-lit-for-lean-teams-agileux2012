!SLIDE
# Code Literacy for Lean Teams
## AgileUX NYC 2012
## Jonathan Berger, Pivotal Labs

!SLIDE
# Hi!

!SLIDE
# What it says on the tin
> In this talk, we'll investigate how treating Coding as Literacy can affect the way **decisions** are made, describe varying **levels of literacy** among teammates, and discuss **how to get literate** in technical topics.

!SLIDE
## I'm @jonathanpberger
- My background is in **philosophy** and then **design** and now **development**
- I read and write code every day to make stuff at **@pivotallabs**

!SLIDE
## Who are you?
Show of hands:

!SLIDE
# Who's a primary role is Product Owner?

!SLIDE
# Who's a primary role is Designer?

!SLIDE
# Who's a primary role is Developer?

!SLIDE
# How many people have "get technical" as their NYE resolution?

!SLIDE
# How's it going? Still with it?

!SLIDE
# The Plan
- 25m to Speed through a *ton* of material.
- Try to do a **rough survey** of the lay of the land.
- Plenty of material to check out later. <http://jonathanpberger.com/talks/agileux>

!SLIDE
#The Plan
- Act 1 - Coding as Literacy
- Act 2 - How Literate should each role be in a Lean Team?
- Act 3 - Becoming Technically Literate

<!-- !SLIDE
- we'll investigate how treating Coding as Literacy can affect the way decisions are made and work gets done, 
- describe what varying levels of literacy among teammates facilitate doing agile well, 
- discuss how to get literate in technical topics. -->

!SLIDE
## Act 1: Coding As Literacy

!SLIDE
## Why "Code as Literacy"?
- It's a good way to talk about coding, which is often treated as a binary.
- The success of Code Year has made me think I don't need to present this as an argument, so I'm gonna plunge ahead.

!SLIDE
## I gave a "Git for Designers" talk
- The speaker before me talked typography to a rapt audience
- ...and when Ryan said 'git', the room emptied(!)
- He also said:

!SLIDE
# "We don't hire designers who can't code."

!SLIDE
## Act 2: How literate should each role be to do Agile well?

!SLIDE
### My Thesis 
# High levels of code literacy correlate with more successful project outcomes.

!SLIDE
# Where can literacy help? 
- Designer, Product Owner: better tactical design choices (remember: every choice is a design choice)
- Principal: better strategic design choices, more realistic estimates, better analytical tools.
- Developer: uhhh...

!SLIDE
# Where can literacy hurt?
- Design, PM, Principal: time / opportunity cost, overstepping bounds, loss of innocence
- Developer: tunnel vision can skew priorities

!SLIDE
## In general, more literacy is better 
(no matter what the role)

!SLIDE
# but... 

!SLIDE
never forget 
## Sometimes design is an **ineffable value-add** and code needs to take the backseat.
Preserve the ability / reserve the right to stay innocent and come up with crazy ideas that the Technically Literate deem impossible.

!SLIDE
## Act 3: How to get literate?
- Be realistic about your goals
  - A lot of promises are made to sell this stuff. Chill out.
- 8 Ways Code Literacy Makes for Better UX
- The links slide (later).

!SLIDE
# 8 Ways Code Literacy Makes for Better UX
I'm going to tear through a handful of technical concepts in modern web design; treat this as a list of 'good to know's.

!SLIDE
### 8 Ways Code Literacy Makes for Better UX

(This is a list)

1. Cucumber: personae live
2. Version control (I like Git)
3. (Live) Style Guide Driven Design
4. JavaScript: what can you do with interaction design
5. Internet Architecture: (DNS, http, html, web servers, database, TCP/UDP, IP, etc)
6. Database Nouns
7. HTTP Verbs: what are the atoms of the web
8. REST: Using those verbs (check that this is a formal def'n of REST)

!SLIDE

each do
  What does it look like?
  what is it?
  why does it help lean teams?
  how do I learn it?
end

Bonus: 

!SLIDE
#1. Cucumber: personae live
If you're fortunate enough to be doing TDD, learn Cucumber. It's a great way to think through problems and communicate w/ developers. Given / When / Then. Also, use your personas in Cucumber stories.

What is it? BDD framework.
Why does it help lean teams? helps you create better stories
How do I learn it? Phrase everything as Given-when-then.
Difficulty: 1 of 5

!SLIDE
  Feature: Add Item to Shopping cart

    As a Customer
    I want to add an item to my cart
    So that I can purchase it when I'm done shopping

    Given I'm a logged in Customer on an Item Page
    When I add the item to my cart
    Then my Cart Items should increment
    And my Sub-Total Price should increase by the cost of the item

!SLIDE
#2. Version Control w/ Git

What is it? Disaster recover and collaboration-enabling software.
Why does it help lean teams? Its the cost of entry into development.
How do I learn it? See my FOWD talk. http:jonathanpberger.com/code_management
Difficulty: 2 of 5

!SLIDE
#3. Enough HTML and CSS for (Live) Style Guide Driven Design
Become literate enough in HTML and CSS to practice Style Guide Driven Design. This works well for larger systems, and entails keeping all design elements in a style guide. When developing features, mocks are made using very rough wireframes that reference the Style Guide (e.g., "Sign-in form" or "secondary-action button"). Any new features must either use existing design elements, or treat the development of the new element as a feature.

What is it? Test-drive designs.
Why does it help lean teams? It removes duplication and inconsistency from design.
How do I learn it? Check out the Meetup video and the article. Oh yeah, learn HTML and CSS!
Difficulty: 2 of 5

!SLIDE
#4. JavaScript and JQuery
Learn enough JS to understand what can you do cheaply with interaction design. 
The JQueryUI library is very popular, and a good place to start.
Beware the Bad Parts of JS.

What is it? Client-side interaction (and more).
Why does it help lean teams? Be more efficient in your use of interaction
How do I learn it? Code academy's a great start.
Difficulty: 4 of 5

!SLIDE
#5. Internet Architecture: 

What is it? The medium you're working in.
Why does it help lean teams? Just as print designers have a good handle on the properties of papers and ink and the process of printing, web designers should understand the web.
How do I learn it? Next slide!
Difficulty: 3 of 5

!SLIDE
# Pretty much all you need to know from @cdixon's list
- DNS: the internet's Yellow Pages
- http: HyperText Transfer Protocol
- html: HyperText Markup Language
- Web Servers: apache, nginx, 
- Database: MySQL, PostgreSQL, {NoSql: MongoDB, Redis, etc}
!["Internet architecture diagram"](images/internet-architecture.png)

!SLIDE
#6. Database are full of nouns
Persistent Storage is acted on by a small # of verbs:

What is it? Persistent storage
Why does it help lean teams? Understand how data is going to be stored
How do I learn it? Next slide! Or learn SQL. Or better, an ORM.
Difficulty: 3 of 5

!SLIDE
# Persistent Storage 
databases consist of Tables (like excel) with columns (attributes?) and rows (records).

- CREATE
- READ
- UPDATE
- DESTROY

!SLIDE
#7. HTTP Verbs: 

What is it? How data is communicated across the internet
Why does it help lean teams? Understand how data is going to be transferred
How do I learn it? Next slide! Or learn curl. Or some other weird stuff.
Difficulty: 3 of 5

!SLIDE
Understanding the basic verbs of HTTP teaches which actions are affordances of the web.

- POST
- GET
- PUT
- DELETE

!SLIDE
#8. REST: Using those verbs (check that this is a formal def'n of REST)

What is it? How data is architected across modern web apps.
Why does it help lean teams? Understand how domains will be represented in software.
How do I learn it? Next slide! And the last two slides! Or read a thesis. Or learn Rails.
Difficulty: 5 of 5

!SLIDE
#Representational State Transfer
REST is an architectural style that makes building apps cleaner. Think of it as a design constraint. If you can look at any feature or mockup you create and answer "what verbs and nouns are involved?" you'll do most of the work of the developers. Its also important to separate *state* from *resources* when modeling your domain.

| Database | HTTP Request |
| CREATE   | POST         |
| READ     | GET          |
| UPDATE   | PUT          |
| DESTROY  | DELETE       |

!SLIDE
# Part 3: Recommended resources

# What else?
Learn Rails! Or Sinatra.

## Courses
- Code Year
- Method.ac
- lynda
- railstutorial.org
- getHopscotch.com
- treehouse / carsonified
- think vitamin?

!SLIDE
## Regular Series
- ruby rogues
- ruby show

## Resources
- dribble, forrst, stackoverflow
- SO should get its own mention: "this is the first google result you should hit"
- do a little research; google, check my RSS

!SLIDE
# The Links slide

Learn Rails: <http://railstutorial.org>
<http://jonathanpberger.com/talks> for more

!SLIDE
# Thanks!
jonathanpberger.com, jonathanpberger@gmail.com, @jonathanpberger on twitter, github, forrst, flickr, etc etc etc
