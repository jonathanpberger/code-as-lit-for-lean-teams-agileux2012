Feature: Add Item to Shopping cart

  As a Customer
  I want to add an item to my cart
  So that I can purchase it when I'm done shopping

  Given I'm a logged in Customer on an Item Page
  When I add the item to my cart
  Then my Cart Items should increment
  And my Sub-Total Price should increase by the cost of the item
