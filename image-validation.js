const imgValidation = (imageURL) => {
  $('body').append(`
    <img src="${imageURL}" id="tempImage" style="display: none;"/>
  `)

  const tempImage = $("#tempImage");
  
  const removeTempImage = () => tempImage.remove();
  const isImage = new Promise((resolve, reject) => {
    tempImage.on('load', () => {
      console.log(`is image!`);
      removeTempImage();
      resolve();
    })
    tempImage.on('error', () => {
      console.log(`is't image`);
      removeTempImage();
      reject("O link fornecido não é uma imagem valida!");
    })
  })

  return isImage
}