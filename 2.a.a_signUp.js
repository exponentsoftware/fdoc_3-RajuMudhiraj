// Hypothetically dealing with mongodb via mongoose library
users.find({ email: req.body.email })
    .exec()
    .then(user => {
        if (user.length >= 1) {
            return res.status(409).json({
                message: 'email already exists'
            })
        }
        else {

            const user = new users({
                _id: new mongoose.Types.ObjectId(),
                username: 'Alex',
                email: 'alex@alex.com',
                password: '123123',
                createdAt: '17/05/2019 9:00 AM',
                isLoggedIn: false,
            })
            user.save()
                .then(result => {
                    res.status(201).json({
                        message: 'User created successfully!'
                    })
                })
                .catch(err => {
                    res.status(500).json({
                        error: err
                    })
                });


        }

    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    });