export default async function uploadImageToAzure(imageFile, sasToken) {
  const AZURE_STORAGE_ACCOUNT_NAME = 'creativeart';
  const CONTAINER_NAME = 'media';
  const uploadUrl = `https://creativeart.blob.core.windows.net/media/${imageFile.name}?${sasToken}`;

  try {
    const response = await fetch(uploadUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': imageFile.type,
        'x-ms-blob-type': 'BlockBlob',
      },
      body: imageFile,
    });

    if (response.ok) {
      // The image has been uploaded successfully
      console.log(response)
      const imageUrl = `https://creativeart.blob.core.windows.net/media/${imageFile.name}`;
      return imageUrl;
    } else {
      // Handle error
      throw new Error('Image upload failed');
    }
  } catch (error) {
    // Handle error
    console.error('Error uploading image:', error);
    throw error;
  }
}
