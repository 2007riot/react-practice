export const menus = [
    {
        label: "Home",
        to: "/",
    },
    {
        label: "Profile",
        to: "/profile",
        children: [
            {
                label: "Details",
                to: "details",
                children: [
                    {
                        label: "Location",
                        to: "location",
                        children: [
                            {
                                label: "City",
                                to: "city",
                                children: [
                                    {
                                    label: "random value",
                                    to: "to smth random",
                                    children: [
                                        {
                                        label: "very random value",
                                        to: "to smth random"
                                        }
                                    ]
                                    }
                                ]
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        label: "Settings",
        to: "/settings",
        children: [
            {
                label: "Account",
                to: "account",
            },
            {
                label: "Security",
                to: "security",
                children: [
                    {
                        label: "Login",
                        to: "login",
                    },
                    {
                        label: "Register",
                        to: "register",
                        children: [
                            {
                                label: 'Random data',
                                to: ''
                            }
                        ]
                    },
                ],
            },
        ],
    },
];

export default menus