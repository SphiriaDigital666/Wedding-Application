export const compressImage = async (file: File) => {
  return new Promise<File>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = async (event) => {
      const imageDataUrl = event.target?.result?.toString() || '';
      const img = new Image();
      img.src = imageDataUrl;

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          reject(new Error('Could not create canvas context'));
          return;
        }

        const maxWidth = 800; // You can adjust this value based on your requirements
        const maxHeight = 800;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            const compressedFile = new File([blob!], file.name, {
              type: 'image/jpeg', // You can change the type based on your requirements
            });
            resolve(compressedFile);
          },
          'image/jpeg',
          0.9
        ); // Adjust the quality (0.0 - 1.0) based on your requirements
      };
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
};
