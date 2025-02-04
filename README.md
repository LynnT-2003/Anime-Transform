# TYS - Transform Yourself: Anime

Generative AI Showcase for transforming your images into an anime-themed character directly through references.

### Running locally

Clone the project

```bash
   git clone https://github.com/LynnT-2003/Anime-Transform.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Environment Variables

To run this project, you will (of course) need to add your own following environment variables to your .env file

The entire architecture is set up to require the least minimum effort to building a similar project. However, you will need to come up with your own logic, adjustments, and implementation for your personal image generation service.

- For Firebase Login (Google Authentication)

```
    NEXT_PUBLIC_FIREBASE_API_KEY
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
    NEXT_PUBLIC_FIREBASE_PROJECT_ID
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
    NEXT_PUBLIC_FIREBASE_APP_ID
```

- For MongoDB Storage (User Image History)

```
    MONGO_URL
```

- Your own Image Generation Service

```
    NEXT_PUBLIC_IMAGE_GEN_ENDPOINT
```

- For Cloudinary Image Storage

```
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
    NEXT_PUBLIC_CLOUDINARY_API_KEY
    NEXT_PUBLIC_CLOUDINARY_API_SECRET
```

### Modifying Models (Anime References)

Go to /constants/models.ts

```
  my-project
  |-constants
    |-models.ts
```

Here modify or add in your own models that you want:

```
  {
    id: 5,
    title: "My new Model",
    image: "<YOUR_REFERENCE_IMAGE_URL>",
    description: "Description about my new Model",
  },
```

After modifying, reload the page and you should see the changes take place immediately. Feel free to play around with it and be creative !

### Contributing

Contributions are always welcome!

Please adhere to this project's `code of conduct`.

## Authors

- [LYNN THIT NYI NYI](https://github.com/LynnT-2003)
- [THANARIT KANJANAMETAWAT](https://github.com/ThanaritKanjanametawatAU)
