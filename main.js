$(document).ready(() => {
  const form = $("#new-image-form");
  const formBox = $("#form-box");
  const btnOpenForm = $("#open-form");
  const btnCancelForm = $("#cancel-form");

  const createImage = (imageURL) => {
    const gallery = $("#gallery");

    const image = $(`
      <li style="display: none;">
        <img src="${imageURL}"/>
        <a href="${imageURL}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>
      </li>
    `)
    
    gallery.append(image);
    image.fadeIn();
  }

  btnOpenForm.on('click', () => {
    formBox.slideDown();
  })

  btnCancelForm.on('click', () => {
    formBox.slideUp();
  })

  form.on('submit', (e) => {
    e.preventDefault();
    const input = e.target[0];
    const imageURL = input.value;
    const isImage = imgValidation(imageURL);

    isImage
      .then(() => {
        createImage(imageURL);
        form[0].reset();
      })
      .catch((err) => {
        alert(err);
      })
  })

})
