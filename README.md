# AI-Enhanced Photo Captioner

This project is an AI-Enhanced Photo Captioner that uses Cloudinary's AI capabilities to generate captions for uploaded images. The application is built with Express.js for the backend and uses Cloudinary for image storage and AI captioning.

## Features

- Upload images to Cloudinary
- Generate captions for uploaded images using Cloudinary's AI
- Display the uploaded image and its caption

## Tech Stack

- Express.js
- Cloudinary
- dotenv
- cors

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Cloudinary account

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Terieyenike/caption-image-server.git
cd caption-image-server
```

2. Install dependencies

```
npm install
```

3. Create a `.env` file in the root directory and add your Cloudinary credentials:

```
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Running the Server

Start the Express server:

```
npm start
```

## API Endpoints

**Get Home**

- URL: /
- Method: GET
- Description: Returns a welcome message.

**Response**

```json
{
  "message": "Upload and generate image caption with Cloudinary AI"
}
```

## Generate Caption

- **URL**: `/api/v1/caption`
- **Method**: POST
- **Description**: Generates a caption for the provided image URL.
- **Body Parameters**:
  - `imageUrl` (string): The URL of the image to be captioned.

**Request**

```json
{
  "imageUrl": "https://example.com/image.jpg"
}
```

**Response**

```json
{
  "success": true,
  "caption": "Generated caption for the image"
}
```

**Error Response**

```json
{
  "success": false,
  "message": "Error message"
}
```

## Acknowledgments

- [Cloudinary](https://cloudinary.com/) for providing powerful image and video APIs.
- [Next.js](https://nextjs.org/) for a great React framework.
- [Express.js](https://expressjs.com/) for a robust server framework.

## Contributing

If you would like to contribute to this project, please open an issue or submit a pull request.

## Author

[Teri](https://twitter.com/terieyenike)

## [SERVER URL](https://caption-image-server.onrender.com/)
