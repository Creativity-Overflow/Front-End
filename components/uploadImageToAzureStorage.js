export default async function uploadImageToAzure(imageFile) {
  const AZURE_STORAGE_ACCOUNT_NAME = 'creativeart';
  const sasToken = "sp=racwdli&st=2023-08-19T14:52:41Z&se=2024-06-19T22:52:41Z&sv=2022-11-02&sr=c&sig=ZkYI2DvEoIG3EPRVMtWrn0tURlj8OoXLGexDodSBIQM%3D"
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
