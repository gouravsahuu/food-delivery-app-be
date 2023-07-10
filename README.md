Food Delivery App Backend

API's

User

    /api/register

        (New User Register)
        method : "POST"
        body : {
                name: String,
                email: String,
                password: String,
                address: {
                        street: String,
                        city: String,
                        state: String,
                        country: String,
                        zip: String
                }
        }
        success response : "User Registered Successfully" (status : 201)
        
    /api/login

        (User Login)
        method : "POST"
        body : {
                email : String,
                password : String
        }
        success response : "Login success",token (status : 201)

    /api/user/:id/reset

        (Resets password for a specific user)
        method : "PATCH"
        body : {
            password : String
        }
        success response : "Password reset success" (status : 204)


Restaurant

    /api/restaurants

        method : "GET"
        success response : (Shows a list of all available restaurants)

    /api/restaurants/:id

        method : "GET"
        success response : (Shows details of a specific restaurant)

    /api/restaurants/:id/menu

        method : "GET"
        success response : (Shows menu list of a specific restaurant)

    /api/restaurants/:id/menu
        
        (Adds a new menu to specific restaurant)
        method : "PUT"
        body : {
                name: String,
                description: String,
                price: Number,
                image: String
        }
        success response : "Menu item added" (status : 201)

    /api/restaurants/:id/menu/:id

        (Deletes a menu item for a specific restaurant)
        method : "DELETE"
        success responst : "Menu item deleted" (status : 202)

Order

    /api/orders

        (Places a new Order)
        method : "POST"
        body : {
	            user : (provide user id),
	            restaurant : (provide restaurant id),
                items: [{
                        name: String,
                        price: Number,
                        quantity: Number
                }],
                totalPrice: Number,
                deliveryAddress: {
                        street: String,
                        city: String,
                        state: String,
                        country: String,
                        zip: String
                },
                status: String // e.g, "placed", "preparing", "on the way", "delivered"
        }
        success response : "Order placed successfully" (status : 201)

    /api/orders/:id

        method : "GET"
        success response : (shows order details for a specific order, also includes user details and restaurant details)

    /api/orders/:id

        (Allows user to update the status of the order)
        method : "PATCH"
        body : {
            status : String
        }
        success response : "Updated status" (status : 204)